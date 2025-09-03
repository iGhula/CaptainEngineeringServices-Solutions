-- Fix all RLS security issues identified by Supabase Security Advisor
-- This migration enables RLS on all tables and creates proper policies

-- 1. Enable RLS on public.users table (was disabled by temp_disable_rls.sql)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- 2. Enable RLS on public.network_items table (was never enabled)
ALTER TABLE public.network_items ENABLE ROW LEVEL SECURITY;

-- 3. Enable RLS on public.admin_users table (if it exists)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'admin_users') THEN
        ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
    END IF;
END $$;

-- Drop any existing policies to start fresh
DROP POLICY IF EXISTS "Allow admins to read users" ON public.users;
DROP POLICY IF EXISTS "Allow public to insert users" ON public.users;
DROP POLICY IF EXISTS "Enable read access for admin" ON public.users;
DROP POLICY IF EXISTS "Enable insert for admin" ON public.users;
DROP POLICY IF EXISTS "Enable update for admin" ON public.users;
DROP POLICY IF EXISTS "Enable delete for admin" ON public.users;
DROP POLICY IF EXISTS "Admin full access" ON public.users;
DROP POLICY IF EXISTS "Public registration" ON public.users;

-- Create comprehensive RLS policies for public.users table
-- Policy 1: Allow public registration (INSERT)
CREATE POLICY "Allow public registration" ON public.users
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Policy 2: Allow admin to read all users
CREATE POLICY "Admin read all users" ON public.users
    FOR SELECT
    TO authenticated
    USING (
        auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
    );

-- Policy 3: Allow admin to update all users
CREATE POLICY "Admin update all users" ON public.users
    FOR UPDATE
    TO authenticated
    USING (
        auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
    );

-- Policy 4: Allow admin to delete all users
CREATE POLICY "Admin delete all users" ON public.users
    FOR DELETE
    TO authenticated
    USING (
        auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
    );

-- Create RLS policies for public.network_items table
-- Policy 1: Allow public to read network items (for displaying on website)
CREATE POLICY "Allow public read network items" ON public.network_items
    FOR SELECT
    TO public
    USING (true);

-- Policy 2: Allow admin to manage network items
CREATE POLICY "Admin manage network items" ON public.network_items
    FOR ALL
    TO authenticated
    USING (
        auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
    );

-- Create RLS policies for public.admin_users table (if it exists)
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'admin_users') THEN
        -- Drop existing policies if any
        DROP POLICY IF EXISTS "Admin access admin_users" ON public.admin_users;
        
        -- Create policy for admin access
        CREATE POLICY "Admin access admin_users" ON public.admin_users
            FOR ALL
            TO authenticated
            USING (
                auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
            );
    END IF;
END $$;

-- Create RLS policies for any other tables that might exist
-- Check for news table and enable RLS if it exists
DO $$
BEGIN
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'news') THEN
        ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
        
        -- Drop existing policies if any
        DROP POLICY IF EXISTS "Public read news" ON public.news;
        DROP POLICY IF EXISTS "Admin manage news" ON public.news;
        
        -- Allow public to read published news
        CREATE POLICY "Public read news" ON public.news
            FOR SELECT
            TO public
            USING (is_published = true);
        
        -- Allow admin to manage all news
        CREATE POLICY "Admin manage news" ON public.news
            FOR ALL
            TO authenticated
            USING (
                auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
            );
    END IF;
END $$;

-- Verify RLS is enabled on all tables
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('users', 'network_items', 'admin_users', 'news')
ORDER BY tablename;
