-- Fix Security Definer View error for public.security_status
-- Replace the problematic view with a simpler version

-- Drop the existing view
DROP VIEW IF EXISTS public.security_status;

-- Create a simpler view without security definer properties
CREATE VIEW public.security_status AS
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

-- Grant read access to authenticated users
GRANT SELECT ON public.security_status TO authenticated;

-- Add comment
COMMENT ON VIEW public.security_status IS 'Security status monitoring view for database administrators';

-- Test the view
SELECT * FROM public.security_status;
