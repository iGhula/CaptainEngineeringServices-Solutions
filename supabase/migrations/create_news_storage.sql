-- Create storage bucket for news images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'news_images',
  'news_images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp']
)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Public read access for news images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload news images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update news images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete news images" ON storage.objects;

-- Create storage policy to allow public read access
CREATE POLICY "Public read access for news images"
ON storage.objects FOR SELECT
USING (bucket_id = 'news_images');

-- Create storage policy to allow anyone to upload (since we're using custom admin auth)
CREATE POLICY "Anyone can upload news images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'news_images');

-- Create storage policy to allow anyone to update (since we're using custom admin auth)
CREATE POLICY "Anyone can update news images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'news_images');

-- Create storage policy to allow anyone to delete (since we're using custom admin auth)
CREATE POLICY "Anyone can delete news images"
ON storage.objects FOR DELETE
USING (bucket_id = 'news_images');
