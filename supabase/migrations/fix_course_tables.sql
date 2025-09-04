-- Fix course tables - Drop and recreate if needed

-- First, drop existing tables if they exist (be careful with this in production!)
DROP TABLE IF EXISTS training_programs CASCADE;
DROP TABLE IF EXISTS airport_courses CASCADE;
DROP TABLE IF EXISTS management_courses CASCADE;
DROP TABLE IF EXISTS aviation_courses CASCADE;
DROP TABLE IF EXISTS engineering_courses CASCADE;

-- Create course tables for all course categories

-- Engineering Courses Table
CREATE TABLE engineering_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Aviation Courses Table
CREATE TABLE aviation_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Management Courses Table
CREATE TABLE management_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Training Programs Table
CREATE TABLE training_programs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Airport Courses Table
CREATE TABLE airport_courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  start_date DATE NOT NULL,
  duration TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample data for engineering courses
INSERT INTO engineering_courses (course_name, start_date, duration, price, description) VALUES
('دورة تصميم أنظمة الطيران', '2025-01-01', '3 أشهر', 2500, 'دورة متخصصة في تصميم أنظمة الطيران الحديثة'),
('دورة إلكترونيات الطيران والتحكم', '2025-01-15', '3 أشهر', 2600, 'دورة في إلكترونيات الطيران وأنظمة التحكم'),
('دورة هياكل الطائرات وتحليل الإجهادات', '2025-02-01', '4 أشهر', 3200, 'دورة متقدمة في هياكل الطائرات والتحليل الإنشائي'),
('الديناميكا الهوائية، ديناميكا الموائع الحسابية، وتحليل العناصر المحدودة', '2025-02-15', '4 أشهر', 3500, 'دورة شاملة في الديناميكا الهوائية والتحليل الحسابي');

-- Insert sample data for aviation courses
INSERT INTO aviation_courses (course_name, start_date, duration, price, description) VALUES
('الطيران المدني', '2025-03-01', '4 أشهر', 3000, 'دورة شاملة في الطيران المدني وإدارة الرحلات الجوية'),
('الملاحة الجوية', '2025-03-15', '3 أشهر', 2500, 'دورة متخصصة في الملاحة الجوية وأنظمة التحكم'),
('صيانة الطائرات', '2025-04-01', '6 أشهر', 4000, 'دورة في صيانة وإصلاح الطائرات والمعدات'),
('إدارة الطيران', '2025-04-15', '3 أشهر', 2500, 'دورة في إدارة شركات الطيران والعمليات الجوية');

-- Insert sample data for management courses
INSERT INTO management_courses (course_name, start_date, duration, price, description) VALUES
('إدارة المشاريع الاحترافية (PMP)', '2025-03-01', '2.5 شهر', 2200, 'دورة معتمدة في إدارة المشاريع الاحترافية'),
('إدارة الموارد البشرية', '2025-03-15', '2 شهر', 1800, 'دورة في إدارة وتطوير الموارد البشرية'),
('إدارة الجودة الشاملة', '2025-04-01', '2 شهر', 1700, 'دورة في أنظمة إدارة الجودة الشاملة'),
('القيادة في المشاريع الهندسية', '2025-04-15', '1.5 شهر', 1500, 'دورة في القيادة والإدارة في المشاريع الهندسية');

-- Insert sample data for training programs
INSERT INTO training_programs (course_name, start_date, duration, price, description) VALUES
('التدريب المهني', '2025-03-05', '2 شهر', 1200, 'برنامج تدريبي متخصص في المهارات المهنية المطلوبة'),
('التدريب الإداري', '2025-03-20', '3 أشهر', 1800, 'برنامج تدريبي في القيادة والإدارة الحديثة'),
('التدريب التقني', '2025-04-10', '1.5 شهر', 1000, 'برنامج تدريبي في التقنيات الحديثة والبرمجيات'),
('التدريب المتخصص', '2025-04-25', 'متغيرة', 0, 'برنامج تدريبي مخصص حسب الطلب');

-- Insert sample data for airport courses
INSERT INTO airport_courses (course_name, start_date, duration, price, description) VALUES
('إدارة المطارات', '2025-03-10', '3 أشهر', 2000, 'دورة شاملة في إدارة المطارات وتشغيلها بكفاءة عالية'),
('أمان وسلامة المطارات', '2025-03-25', '2 شهر', 1500, 'دورة متخصصة في أنظمة الأمان والسلامة في المطارات'),
('إدارة حركة الطائرات', '2025-04-10', '2.5 شهر', 1800, 'دورة في تخطيط وإدارة حركة الطائرات في المطارات'),
('صيانة البنية التحتية', '2025-04-25', '3 أشهر', 2000, 'دورة في صيانة وإدارة البنية التحتية للمطارات');

-- Create RLS policies for admin access
ALTER TABLE engineering_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE aviation_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE management_courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE training_programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE airport_courses ENABLE ROW LEVEL SECURITY;

-- Allow admin users to manage all course tables
CREATE POLICY "Admin can manage engineering_courses" ON engineering_courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admin can manage aviation_courses" ON aviation_courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admin can manage management_courses" ON management_courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admin can manage training_programs" ON training_programs
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.email = auth.jwt() ->> 'email'
    )
  );

CREATE POLICY "Admin can manage airport_courses" ON airport_courses
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE admin_users.email = auth.jwt() ->> 'email'
    )
  );

-- Allow public read access to active courses
CREATE POLICY "Public can read active engineering_courses" ON engineering_courses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can read active aviation_courses" ON aviation_courses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can read active management_courses" ON management_courses
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can read active training_programs" ON training_programs
  FOR SELECT USING (is_active = true);

CREATE POLICY "Public can read active airport_courses" ON airport_courses
  FOR SELECT USING (is_active = true);
