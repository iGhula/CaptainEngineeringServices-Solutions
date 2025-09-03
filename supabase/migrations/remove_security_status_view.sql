-- Completely remove the security_status view to fix Security Definer View error
-- Replace with a simple function that doesn't trigger security warnings

-- Drop the view completely
DROP VIEW IF EXISTS public.security_status CASCADE;

-- Create a simple function instead of a view
CREATE OR REPLACE FUNCTION public.get_security_status()
RETURNS TABLE(
    check_type text,
    count bigint,
    status text
)
LANGUAGE sql
SECURITY INVOKER  -- This ensures it runs with the caller's permissions, not definer
AS $$
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
    AND (p.proconfig IS NULL OR NOT ('search_path=' = ANY(p.proconfig)))

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
    AND e.extname != 'plpgsql'

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
$$;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION public.get_security_status() TO authenticated;

-- Add comment
COMMENT ON FUNCTION public.get_security_status() IS 'Get security status information without security definer issues';

-- Test the function
SELECT * FROM public.get_security_status();
