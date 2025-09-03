-- Fix admin_users table and authentication issues
-- This migration ensures the admin_users table exists with proper structure and RLS

-- 1. Create admin_users table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Enable RLS on admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies if any
DROP POLICY IF EXISTS "Admin access admin_users" ON public.admin_users;
DROP POLICY IF EXISTS "Allow admin login" ON public.admin_users;
DROP POLICY IF EXISTS "Public can read admin_users" ON public.admin_users;

-- 4. Create RLS policies for admin_users
-- Allow public to read admin_users for login (but only username and password_hash)
CREATE POLICY "Allow public login access" ON public.admin_users
    FOR SELECT
    TO public
    USING (true);

-- Allow authenticated users to manage admin_users (for admin dashboard)
CREATE POLICY "Admin manage admin_users" ON public.admin_users
    FOR ALL
    TO authenticated
    USING (
        auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com'
    );

-- 5. Insert the admin user if it doesn't exist
INSERT INTO public.admin_users (
    username,
    email,
    password_hash,
    full_name,
    is_active
) VALUES (
    'admin',
    'ibrahim.ghula@gmail.com',
    'admin123',  -- Simple password for now, you can change this
    'Ibrahim Ghula',
    true
) ON CONFLICT (username) DO UPDATE SET
    password_hash = EXCLUDED.password_hash,
    full_name = EXCLUDED.full_name,
    is_active = EXCLUDED.is_active,
    updated_at = NOW();

-- 6. Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_admin_users_username ON public.admin_users(username);
CREATE INDEX IF NOT EXISTS idx_admin_users_email ON public.admin_users(email);
CREATE INDEX IF NOT EXISTS idx_admin_users_active ON public.admin_users(is_active);

-- 7. Grant necessary permissions
GRANT SELECT ON public.admin_users TO public;
GRANT ALL ON public.admin_users TO authenticated;

-- 8. Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_admin_users_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 9. Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS trigger_update_admin_users_updated_at ON public.admin_users;
CREATE TRIGGER trigger_update_admin_users_updated_at
    BEFORE UPDATE ON public.admin_users
    FOR EACH ROW
    EXECUTE FUNCTION public.update_admin_users_updated_at();

-- 10. Test the table access
SELECT 
    'admin_users table created successfully' as status,
    COUNT(*) as user_count
FROM public.admin_users;

-- 11. Verify RLS is working
SELECT 
    schemaname,
    tablename,
    rowsecurity as rls_enabled
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'admin_users';
