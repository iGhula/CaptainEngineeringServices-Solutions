-- Create public users table
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

-- Insert admin into public users
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
DO NOTHING;

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
