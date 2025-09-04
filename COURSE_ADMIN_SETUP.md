# Course Admin Management System

## Overview
This system allows administrators to manage courses directly on each course page. Admins can add, edit, and delete courses for all five course categories:
- Engineering Courses (الدورات الهندسية)
- Aviation Courses (دورات الطيران)
- Management Courses (الدورات الإدارية)
- Training Programs (برامج التدريب)
- Airport Courses (دورات المطار)

## Database Setup

### 1. Run the SQL Migration
Execute the SQL code in `supabase/migrations/create_course_tables.sql` in your Supabase SQL editor:

```sql
-- This will create all necessary tables and sample data
-- See the full SQL file for complete migration
```

### 2. Tables Created
- `engineering_courses`
- `aviation_courses`
- `management_courses`
- `training_programs`
- `airport_courses`

Each table includes:
- `id` (UUID, Primary Key)
- `course_name` (TEXT)
- `start_date` (DATE)
- `duration` (TEXT)
- `price` (INTEGER)
- `description` (TEXT, Optional)
- `is_active` (BOOLEAN)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

## Features

### Admin Interface
- **Add New Course**: Click "إضافة دورة جديدة" button
- **Edit Course**: Click the edit icon (pencil) next to any course
- **Delete Course**: Click the delete icon (trash) next to any course
- **Toggle Active Status**: Check/uncheck the "نشط" checkbox when adding/editing

### Admin Access Control
- Only users with admin privileges can see the admin interface
- Admin status is checked against the `admin_users` table
- Regular users only see the public course listings

### Real-time Updates
- Changes are immediately reflected in the course tables
- No page refresh required
- Loading states during operations

## Usage Instructions

### For Administrators

1. **Login as Admin**
   - Navigate to `/admin/login`
   - Use admin credentials

2. **Navigate to Course Pages**
   - Go to any course page (e.g., `/courses/engineering`)
   - The admin interface will appear at the top if you're logged in as admin

3. **Add New Course**
   - Click "إضافة دورة جديدة"
   - Fill in the form:
     - Course Name (اسم الدورة)
     - Start Date (تاريخ البداية)
     - Duration (المدة)
     - Price (السعر)
     - Description (الوصف) - Optional
     - Active Status (نشط) - Checkbox
   - Click "حفظ" to save

4. **Edit Existing Course**
   - Click the edit icon next to any course
   - Modify the fields as needed
   - Click "حفظ" to save changes

5. **Delete Course**
   - Click the delete icon next to any course
   - Confirm deletion in the dialog
   - Course will be permanently removed

### For Regular Users
- Regular users see only the public course listings
- No admin interface is visible
- Can view active courses and register

## Technical Implementation

### Components
- `CourseAdmin.tsx`: Reusable admin component for all course types
- Individual course pages: Updated to include admin interface and dynamic data

### Database Operations
- **Create**: `INSERT` into respective course table
- **Read**: `SELECT` active courses for public display, all courses for admin
- **Update**: `UPDATE` course details
- **Delete**: `DELETE` course from table

### Security
- Row Level Security (RLS) enabled on all tables
- Admin-only access for management operations
- Public read access for active courses only

## Sample Data
The migration includes sample data for all course categories:

### Engineering Courses
- دورة تصميم أنظمة الطيران
- دورة إلكترونيات الطيران والتحكم
- دورة هياكل الطائرات وتحليل الإجهادات
- الديناميكا الهوائية، ديناميكا الموائع الحسابية، وتحليل العناصر المحدودة

### Other Categories
- Aviation, Management, Training, and Airport courses with relevant sample data

## Troubleshooting

### Common Issues
1. **Admin interface not showing**
   - Ensure user is logged in as admin
   - Check admin_users table has correct email

2. **Courses not loading**
   - Check Supabase connection
   - Verify RLS policies are correct
   - Check browser console for errors

3. **Cannot save changes**
   - Verify admin permissions
   - Check form validation
   - Ensure all required fields are filled

### Error Handling
- All operations include error logging
- User-friendly error messages
- Graceful fallbacks for failed operations

## Future Enhancements
- Bulk import/export functionality
- Course categories and tags
- Advanced filtering and search
- Course scheduling and availability
- Student enrollment tracking
- Course completion certificates

## Support
For technical support or questions about the course management system, contact the development team.
