-- Temporary: Disable RLS to get admin dashboard working
-- WARNING: This is for development/testing only
-- Re-enable RLS with proper policies in production

-- Disable RLS temporarily
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- Note: This will allow anyone to read/write to the users table
-- Only use this temporarily while fixing the authentication system
-- Remember to re-enable RLS with proper policies later
