-- Fix RLS policies for username-based admin system
-- This migration updates the policies to work with the new admin authentication

-- Drop existing policies
DROP POLICY IF EXISTS "Enable read access for admin" ON public.users;
DROP POLICY IF EXISTS "Enable insert for admin" ON public.users;
DROP POLICY IF EXISTS "Enable update for admin" ON public.users;
DROP POLICY IF EXISTS "Enable delete for admin" ON public.users;
DROP POLICY IF EXISTS "Allow public registration" ON public.users;

-- Create new policies that work with username-based admin
CREATE POLICY "Enable read access for admin"
    ON public.users
    FOR SELECT
    USING (
        -- Allow admin to read all users
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.email = auth.jwt() ->> 'email'
            AND auth.users.email = 'admin@captain-engineering.com'
        )
        OR
        -- Allow public to read their own data (if needed)
        auth.jwt() ->> 'email' = email
    );

CREATE POLICY "Enable insert for admin"
    ON public.users
    FOR INSERT
    WITH CHECK (
        -- Allow admin to insert any user
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.email = auth.jwt() ->> 'email'
            AND auth.users.email = 'admin@captain-engineering.com'
        )
        OR
        -- Allow public registration
        true
    );

CREATE POLICY "Enable update for admin"
    ON public.users
    FOR UPDATE
    USING (
        -- Allow admin to update any user
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.email = auth.jwt() ->> 'email'
            AND auth.users.email = 'admin@captain-engineering.com'
        )
    );

CREATE POLICY "Enable delete for admin"
    ON public.users
    FOR DELETE
    USING (
        -- Allow admin to delete any user
        EXISTS (
            SELECT 1 FROM auth.users 
            WHERE auth.users.email = auth.jwt() ->> 'email'
            AND auth.users.email = 'admin@captain-engineering.com'
        )
    );

-- Alternative: Simple policy that allows admin access
-- Uncomment this if the above complex policies don't work
/*
CREATE POLICY "Admin full access"
    ON public.users
    FOR ALL
    USING (
        auth.jwt() ->> 'email' = 'admin@captain-engineering.com'
    );

CREATE POLICY "Public registration"
    ON public.users
    FOR INSERT
    WITH CHECK (true);
*/
