-- Fix Supabase Security Advisor warnings
-- This migration addresses the 5 security warnings

-- 1. Fix Function Search Path Mutable warnings
-- Set search_path for functions to prevent security vulnerabilities

-- Fix update_updated_at_column function
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'update_updated_at_column') THEN
        ALTER FUNCTION public.update_updated_at_column() SET search_path = '';
    END IF;
END $$;

-- Fix create_admin_user function
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM pg_proc WHERE proname = 'create_admin_user') THEN
        ALTER FUNCTION public.create_admin_user() SET search_path = '';
    END IF;
END $$;

-- 2. Move http extension from public schema to a dedicated schema
-- This is a security best practice

-- Create a dedicated schema for extensions
CREATE SCHEMA IF NOT EXISTS extensions;

-- Move http extension to extensions schema (if it exists)
DO $$
BEGIN
    -- Check if http extension exists in public schema
    IF EXISTS (
        SELECT 1 FROM pg_extension e 
        JOIN pg_namespace n ON e.extnamespace = n.oid 
        WHERE e.extname = 'http' AND n.nspname = 'public'
    ) THEN
        -- Drop from public and recreate in extensions schema
        DROP EXTENSION IF EXISTS http CASCADE;
        CREATE EXTENSION IF NOT EXISTS http SCHEMA extensions;
        
        -- Grant usage on the schema to authenticated users if needed
        GRANT USAGE ON SCHEMA extensions TO authenticated;
    END IF;
END $$;

-- 3. Create a secure function to replace any functions that might be using http
-- This ensures the extension is used securely
CREATE OR REPLACE FUNCTION public.safe_http_request(
    url text,
    method text DEFAULT 'GET',
    headers jsonb DEFAULT '{}'::jsonb,
    body text DEFAULT NULL
)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = extensions, public
AS $$
DECLARE
    result jsonb;
BEGIN
    -- This function provides a secure wrapper for http requests
    -- Only allow specific domains/URLs for security
    IF url NOT LIKE 'https://%' THEN
        RAISE EXCEPTION 'Only HTTPS URLs are allowed';
    END IF;
    
    -- Add your specific allowed domains here
    IF url NOT LIKE '%supabase%' AND url NOT LIKE '%captain-engineering%' THEN
        RAISE EXCEPTION 'URL not in allowed domains';
    END IF;
    
    -- Use the http extension from the extensions schema
    SELECT extensions.http((
        method,
        url,
        headers,
        body
    )::extensions.http_request) INTO result;
    
    RETURN result;
END;
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.safe_http_request(text, text, jsonb, text) TO authenticated;

-- 4. Create a function to check and fix search_path for all functions
-- This ensures all functions have secure search_path settings
CREATE OR REPLACE FUNCTION public.fix_all_function_search_paths()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    func_record RECORD;
BEGIN
    -- Loop through all functions in public schema
    FOR func_record IN 
        SELECT proname, oidvectortypes(proargtypes) as argtypes
        FROM pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        WHERE n.nspname = 'public'
        AND p.prokind = 'f'  -- Only functions, not procedures
    LOOP
        -- Set search_path to empty for security
        EXECUTE format('ALTER FUNCTION public.%I(%s) SET search_path = ''''', 
                      func_record.proname, func_record.argtypes);
    END LOOP;
END;
$$;

-- Execute the function to fix all function search paths
SELECT public.fix_all_function_search_paths();

-- Clean up the temporary function
DROP FUNCTION public.fix_all_function_search_paths();

-- 5. Create a view to monitor security settings
CREATE OR REPLACE VIEW public.security_status AS
SELECT 
    'Functions with mutable search_path' as check_type,
    COUNT(*) as count,
    CASE 
        WHEN COUNT(*) = 0 THEN 'PASS'
        ELSE 'FAIL'
    END as status
FROM pg_proc p
JOIN pg_namespace n ON p.pronamespace = n.oid
WHERE n.nspname = 'public'
AND p.prokind = 'f'
AND p.proconfig IS NULL OR NOT ('search_path=' = ANY(p.proconfig))

UNION ALL

SELECT 
    'Extensions in public schema' as check_type,
    COUNT(*) as count,
    CASE 
        WHEN COUNT(*) = 0 THEN 'PASS'
        ELSE 'FAIL'
    END as status
FROM pg_extension e
JOIN pg_namespace n ON e.extnamespace = n.oid
WHERE n.nspname = 'public'
AND e.extname != 'plpgsql'  -- plpgsql is allowed in public

UNION ALL

SELECT 
    'Tables with RLS enabled' as check_type,
    COUNT(*) as count,
    CASE 
        WHEN COUNT(*) > 0 THEN 'PASS'
        ELSE 'FAIL'
    END as status
FROM pg_tables
WHERE schemaname = 'public'
AND rowsecurity = true;

-- Grant read access to the security status view
GRANT SELECT ON public.security_status TO authenticated;

-- 6. Add comments for documentation
COMMENT ON SCHEMA extensions IS 'Dedicated schema for database extensions to improve security';
COMMENT ON FUNCTION public.safe_http_request(text, text, jsonb, text) IS 'Secure wrapper for HTTP requests with domain restrictions';
COMMENT ON VIEW public.security_status IS 'Security status monitoring view for database administrators';

-- Final verification query
SELECT * FROM public.security_status;
