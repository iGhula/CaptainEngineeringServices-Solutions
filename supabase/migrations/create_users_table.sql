-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    company TEXT NOT NULL,
    job_title TEXT,
    country TEXT NOT NULL,
    city TEXT,
    interests TEXT[] DEFAULT '{}'::TEXT[]
);

-- Enable Row Level Security
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Create policy to allow only authenticated admins to read users
CREATE POLICY "Allow admins to read users" ON users
    FOR SELECT
    TO authenticated
    USING (auth.jwt() ->> 'email' IN (
        'admin@captain-engineering.com'  -- Replace with your admin email
    ));

-- Create policy to allow anyone to insert users (for registration)
CREATE POLICY "Allow public to insert users" ON users
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Create index on email for faster lookups
CREATE INDEX users_email_idx ON users(email);
