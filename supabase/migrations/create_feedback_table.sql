-- Create feedback table for الشكاوى والاقتراحات page
-- This table stores feedback/complaints/suggestions from users

CREATE TABLE IF NOT EXISTS public.feedback (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    feedback_type VARCHAR(50) NOT NULL CHECK (feedback_type IN ('complaint', 'suggestion', 'compliment', 'other')),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    priority VARCHAR(20) DEFAULT 'medium' CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on feedback table
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for feedback
-- Allow public to insert (for form submissions)
CREATE POLICY "Allow public feedback submissions" ON public.feedback
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow authenticated users to read feedback
CREATE POLICY "Allow authenticated read feedback" ON public.feedback
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated users to update feedback
CREATE POLICY "Allow authenticated update feedback" ON public.feedback
    FOR UPDATE
    TO authenticated
    USING (true);

-- Allow authenticated users to delete feedback
CREATE POLICY "Allow authenticated delete feedback" ON public.feedback
    FOR DELETE
    TO authenticated
    USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_feedback_email ON public.feedback(email);
CREATE INDEX IF NOT EXISTS idx_feedback_created_at ON public.feedback(created_at);
CREATE INDEX IF NOT EXISTS idx_feedback_type ON public.feedback(feedback_type);
CREATE INDEX IF NOT EXISTS idx_feedback_status ON public.feedback(status);
CREATE INDEX IF NOT EXISTS idx_feedback_priority ON public.feedback(priority);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_feedback_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
DROP TRIGGER IF EXISTS trigger_update_feedback_updated_at ON public.feedback;
CREATE TRIGGER trigger_update_feedback_updated_at
    BEFORE UPDATE ON public.feedback
    FOR EACH ROW
    EXECUTE FUNCTION public.update_feedback_updated_at();

-- Grant necessary permissions
GRANT SELECT ON public.feedback TO public;
GRANT ALL ON public.feedback TO authenticated;

-- Test the table creation
SELECT 
    'feedback table created successfully' as status,
    COUNT(*) as record_count
FROM public.feedback;
