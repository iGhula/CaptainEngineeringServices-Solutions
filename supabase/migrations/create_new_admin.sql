-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    company TEXT,
    job_title TEXT,
    country TEXT,
    city TEXT,
    interests TEXT[]
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Insert the admin user into public.users
INSERT INTO public.users (
    email,
    full_name,
    phone,
    company,
    job_title,
    country,
    city,
    interests
) VALUES (
    'ibrahim.ghula@gmail.com',
    'Ibrahim Ghula',
    '+218000000000',
    'Captain Engineering',
    'Administrator',
    'Libya',
    'Tripoli',
    ARRAY['admin']::text[]
);

-- Create policies
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

-- Allow public registration
CREATE POLICY "Allow public registration"
    ON public.users
    FOR INSERT
    WITH CHECK (true);
