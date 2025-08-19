-- Enable the HTTP extension if not already enabled
CREATE EXTENSION IF NOT EXISTS http;

-- Create a function to sign up a user through Supabase's auth API
CREATE OR REPLACE FUNCTION create_admin_user()
RETURNS void AS $$
BEGIN
  -- Insert into public.users table instead
  INSERT INTO public.users (
    id,
    email,
    full_name,
    phone,
    company,
    job_title,
    country,
    city,
    interests,
    created_at
  ) VALUES (
    gen_random_uuid(),
    'admin@captain-engineering.com',
    'Admin User',
    '+218000000000',
    'Captain Engineering',
    'Administrator',
    'Libya',
    'Tripoli',
    ARRAY['admin']::text[],
    now()
  );
END;
$$ LANGUAGE plpgsql;

-- Execute the function
SELECT create_admin_user();

-- Grant necessary permissions
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Create policy for admin access
CREATE POLICY "Admin users can view all records"
  ON public.users
  FOR SELECT
  USING (auth.jwt() ->> 'email' = 'admin@captain-engineering.com');

CREATE POLICY "Admin users can insert records"
  ON public.users
  FOR INSERT
  WITH CHECK (auth.jwt() ->> 'email' = 'admin@captain-engineering.com');

CREATE POLICY "Admin users can update all records"
  ON public.users
  FOR UPDATE
  USING (auth.jwt() ->> 'email' = 'admin@captain-engineering.com');

-- Allow public to insert during registration
CREATE POLICY "Allow public to register"
  ON public.users
  FOR INSERT
  WITH CHECK (true);