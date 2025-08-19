-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable read access for admin" ON public.users;
DROP POLICY IF EXISTS "Enable insert for admin" ON public.users;
DROP POLICY IF EXISTS "Enable update for admin" ON public.users;
DROP POLICY IF EXISTS "Enable delete for admin" ON public.users;
DROP POLICY IF EXISTS "Allow public registration" ON public.users;

-- Create or update the users table
CREATE TABLE IF NOT EXISTS public.users (
    id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
    email character varying NOT NULL UNIQUE,
    full_name character varying,
    phone character varying,
    company character varying,
    job_title character varying,
    country character varying,
    city character varying,
    interests text[],
    created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Insert or update admin user
INSERT INTO public.users (
    email,
    full_name,
    phone,
    company,
    job_title,
    country,
    city,
    interests
)
VALUES (
    'ibrahim.ghula@gmail.com',
    'Ibrahim Ghula',
    '+218000000000',
    'Captain Engineering',
    'Administrator',
    'Libya',
    'Tripoli',
    ARRAY['admin']
)
ON CONFLICT (email) 
DO UPDATE SET
    full_name = 'Ibrahim Ghula',
    phone = '+218000000000',
    company = 'Captain Engineering',
    job_title = 'Administrator',
    country = 'Libya',
    city = 'Tripoli',
    interests = ARRAY['admin'];

-- Recreate policies
CREATE POLICY "Enable read access for admin"
    ON public.users
    FOR SELECT
    USING (auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com');

CREATE POLICY "Enable insert for admin"
    ON public.users
    FOR INSERT
    WITH CHECK (auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com');

CREATE POLICY "Enable update for admin"
    ON public.users
    FOR UPDATE
    USING (auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com');

CREATE POLICY "Enable delete for admin"
    ON public.users
    FOR DELETE
    USING (auth.jwt() ->> 'email' = 'ibrahim.ghula@gmail.com');

CREATE POLICY "Allow public registration"
    ON public.users
    FOR INSERT
    WITH CHECK (true);
