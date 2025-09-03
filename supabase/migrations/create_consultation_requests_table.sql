-- Create consultation_requests table for طلب استشارة page
-- This table stores consultation requests from the contact/consultation page

CREATE TABLE IF NOT EXISTS public.consultation_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    consultation_type VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    project_details TEXT NOT NULL,
    budget_range VARCHAR(100),
    preferred_time VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on consultation_requests table
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for consultation_requests
-- Allow public to insert (for form submissions)
CREATE POLICY "Allow public consultation requests" ON public.consultation_requests
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow authenticated users to read consultation requests
CREATE POLICY "Allow authenticated read consultation requests" ON public.consultation_requests
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update consultation requests
CREATE POLICY "Allow authenticated update consultation requests" ON public.consultation_requests
    FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete consultation requests
CREATE POLICY "Allow authenticated delete consultation requests" ON public.consultation_requests
    FOR DELETE
    TO authenticated
    USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_consultation_requests_email ON public.consultation_requests(email);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at ON public.consultation_requests(created_at);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_type ON public.consultation_requests(consultation_type);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_consultation_requests_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS trigger_update_consultation_requests_updated_at ON public.consultation_requests;
CREATE TRIGGER trigger_update_consultation_requests_updated_at
    BEFORE UPDATE ON public.consultation_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.update_consultation_requests_updated_at();

-- Grant necessary permissions
GRANT SELECT ON public.consultation_requests TO public;
GRANT ALL ON public.consultation_requests TO authenticated;

-- Test the table creation
SELECT 
    'consultation_requests table created successfully' as status,
    COUNT(*) as record_count
FROM public.consultation_requests;
