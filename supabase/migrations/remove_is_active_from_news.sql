-- Remove is_active column from news_items table since it's no longer needed
-- First drop the dependent policy
DROP POLICY IF EXISTS "Public can view active news items" ON public.news_items;

-- Now remove the column
ALTER TABLE public.news_items DROP COLUMN IF EXISTS is_active;
