-- First, enable the auth schema if not already enabled
CREATE SCHEMA IF NOT EXISTS auth;

-- Create the users table if it doesn't exist
CREATE TABLE IF NOT EXISTS auth.users (
    id uuid NOT NULL PRIMARY KEY,
    email character varying NOT NULL UNIQUE,
    encrypted_password character varying NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    email_confirmed_at timestamp with time zone DEFAULT now()
);

-- Insert the admin user with a secure password
INSERT INTO auth.users (
    id,
    email,
    encrypted_password,
    email_confirmed_at
)
VALUES (
    gen_random_uuid(),
    'ibrahim.ghula@gmail.com',
    crypt('Ibra.1670', gen_salt('bf')),
    now()
)
ON CONFLICT (email) 
DO UPDATE SET
    encrypted_password = crypt('Ibra.1670', gen_salt('bf')),
    updated_at = now();

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
