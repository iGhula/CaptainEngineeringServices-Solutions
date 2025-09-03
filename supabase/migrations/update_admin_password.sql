-- Update admin password from admin123 to Admin@1357
-- This migration updates the admin user password

-- Update the admin user password
UPDATE public.admin_users 
SET 
    password_hash = 'Admin@1357',
    updated_at = NOW()
WHERE username = 'admin';

-- Verify the password was updated
SELECT 
    'Admin password updated successfully' as status,
    username,
    password_hash,
    updated_at
FROM public.admin_users 
WHERE username = 'admin';
