-- Create network_items table for managing network locations and partners
CREATE TABLE IF NOT EXISTS public.network_items (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('location', 'partner')),
    category VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_network_items_type ON public.network_items(type);
CREATE INDEX IF NOT EXISTS idx_network_items_sort_order ON public.network_items(sort_order);

-- Insert some sample data
INSERT INTO public.network_items (title, location, phone, email, type, category, sort_order) VALUES
('المقر الرئيسي', 'طرابلس, ليبيا', '+218 XX XXX XXXX', 'info@captain-engineering.com', 'location', NULL, 1),
('المكتب الإقليمي', 'بنغازي, ليبيا', '+218 XX XXX XXXX', 'benghazi@captain-engineering.com', 'location', NULL, 2),
('مكتب المشاريع', 'مصراتة, ليبيا', '+218 XX XXX XXXX', 'misurata@captain-engineering.com', 'location', NULL, 3),
('شركة الهندسة المعمارية', 'طرابلس, ليبيا', '+218 XX XXX XXXX', 'partner1@example.com', 'partner', 'شركاء التصميم', 4),
('مكتب التصميم الداخلي', 'بنغازي, ليبيا', '+218 XX XXX XXXX', 'partner2@example.com', 'partner', 'شركاء التصميم', 5),
('شركة المقاولات العامة', 'مصراتة, ليبيا', '+218 XX XXX XXXX', 'partner3@example.com', 'partner', 'شركاء التنفيذ', 6),
('مؤسسة البناء المتكاملة', 'طرابلس, ليبيا', '+218 XX XXX XXXX', 'partner4@example.com', 'partner', 'شركاء التنفيذ', 7),
('مكتب الاستشارات الهندسية', 'بنغازي, ليبيا', '+218 XX XXX XXXX', 'partner5@example.com', 'partner', 'شركاء الاستشارات', 8),
('مركز الدراسات التقنية', 'مصراتة, ليبيا', '+218 XX XXX XXXX', 'partner6@example.com', 'partner', 'شركاء الاستشارات', 9)
ON CONFLICT (id) DO NOTHING;
