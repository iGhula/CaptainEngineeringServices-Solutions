'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { isAuthenticated, getSession } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Plus, Edit, Trash2, Save, X } from 'lucide-react'
import { useToast, ToastContainer } from '@/app/components/Toast'

type Course = {
  id: string
  course_name: string
  start_date: string
  duration: string
  price: number
  description?: string
  is_active: boolean
}

type CourseAdminProps = {
  tableName: string
  title: string
}

export default function CourseAdmin({ tableName, title }: CourseAdminProps) {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    course_name: '',
    start_date: '',
    duration: '',
    price: '',
    description: '',
    is_active: true
  })
  
  const { toasts, removeToast, showSuccess, showError } = useToast()

  useEffect(() => {
    checkAdminStatus()
  }, [])

  const checkAdminStatus = async () => {
    try {
      // Use the project's existing localStorage-based auth
      if (isAuthenticated()) {
        const session = await getSession()
        const adminStatus = !!session?.user?.is_admin
        setIsAdmin(adminStatus)
        // Fetch courses with the correct admin status
        fetchCourses(adminStatus)
        return
      }
      setIsAdmin(false)
      // Fetch courses for non-admin user
      fetchCourses(false)
    } catch (error) {
      console.error('Error checking admin status:', error)
      setIsAdmin(false)
      fetchCourses(false)
    }
  }

  const fetchCourses = async (adminStatus?: boolean) => {
    try {
      setLoading(true)
      
      // Use passed adminStatus or current isAdmin state
      const isAdminUser = adminStatus !== undefined ? adminStatus : isAdmin
      
      // If admin, show all courses. If not admin, only show active courses
      const query = supabase
        .from(tableName)
        .select('*')
        .order('start_date', { ascending: true })
      
      // Only filter by is_active for non-admin users
      if (!isAdminUser) {
        query.eq('is_active', true)
      }
      
      const { data, error } = await query

      if (error) {
        console.error('Error fetching courses:', error)
      } else {
        setCourses(data || [])
      }
    } catch (err) {
      console.error('Error fetching courses:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddCourse = () => {
    setEditingCourse(null)
    setFormData({
      course_name: '',
      start_date: '',
      duration: '',
      price: '',
      description: '',
      is_active: true
    })
    setIsDialogOpen(true)
  }

  const handleEditCourse = (course: Course) => {
    setEditingCourse(course)
    setFormData({
      course_name: course.course_name,
      start_date: course.start_date,
      duration: course.duration,
      price: course.price.toString(),
      description: course.description || '',
      is_active: course.is_active
    })
    setIsDialogOpen(true)
  }

  const handleSaveCourse = async () => {
    try {
      setSaving(true)
      
      // Validate form data
      if (!formData.course_name.trim()) {
        showError('خطأ في التحقق', 'يرجى إدخال اسم الدورة')
        return
      }
      if (!formData.start_date) {
        showError('خطأ في التحقق', 'يرجى إدخال تاريخ البداية')
        return
      }
      if (!formData.duration.trim()) {
        showError('خطأ في التحقق', 'يرجى إدخال المدة')
        return
      }
      if (!formData.price || isNaN(parseInt(formData.price))) {
        showError('خطأ في التحقق', 'يرجى إدخال سعر صحيح')
        return
      }

      const courseData = {
        course_name: formData.course_name.trim(),
        start_date: formData.start_date,
        duration: formData.duration.trim(),
        price: parseInt(formData.price),
        description: formData.description.trim(),
        is_active: formData.is_active
      }

      let result
      if (editingCourse) {
        // Update existing course
        result = await supabase
          .from(tableName)
          .update(courseData)
          .eq('id', editingCourse.id)
      } else {
        // Add new course
        result = await supabase
          .from(tableName)
          .insert([courseData])
      }

      if (result.error) {
        console.error('Database error:', result.error)
        console.error('Error details:', JSON.stringify(result.error, null, 2))
        
        let errorMessage = 'خطأ في قاعدة البيانات'
        if (result.error.message) {
          errorMessage += `: ${result.error.message}`
        } else if (result.error.details) {
          errorMessage += `: ${result.error.details}`
        } else if (result.error.hint) {
          errorMessage += `: ${result.error.hint}`
        }
        
        showError('خطأ في قاعدة البيانات', errorMessage)
        return
      }

      showSuccess(
        editingCourse ? 'تم تحديث الدورة بنجاح' : 'تم إضافة الدورة بنجاح',
        `تم ${editingCourse ? 'تحديث' : 'إضافة'} "${formData.course_name}" بنجاح`
      )
      setIsDialogOpen(false)
      setEditingCourse(null)
      fetchCourses()
    } catch (err) {
      console.error('Error saving course:', err)
      showError('خطأ غير متوقع', 'حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.')
    } finally {
      setSaving(false)
    }
  }

  const handleDeleteCourse = async (courseId: string) => {
    try {
      setDeleting(courseId)
      
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', courseId)

      if (error) {
        console.error('Error deleting course:', error)
        console.error('Delete error details:', JSON.stringify(error, null, 2))
        
        let errorMessage = 'خطأ في حذف الدورة'
        if (error.message) {
          errorMessage += `: ${error.message}`
        } else if (error.details) {
          errorMessage += `: ${error.details}`
        } else if (error.hint) {
          errorMessage += `: ${error.hint}`
        }
        
        showError('خطأ في حذف الدورة', errorMessage)
        return
      }

      showSuccess('تم حذف الدورة بنجاح', 'تم حذف الدورة من النظام بنجاح')
      fetchCourses()
    } catch (err) {
      console.error('Error deleting course:', err)
      showError('خطأ غير متوقع', 'حدث خطأ غير متوقع أثناء حذف الدورة')
    } finally {
      setDeleting(null)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-LY')
  }

  // Show public view if not admin, admin view if admin

  return (
    <div className="mb-8">
      <ToastContainer toasts={toasts} onRemove={removeToast} />
      
      {isAdmin && (
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">إدارة {title}</h3>
          <Button onClick={handleAddCourse} className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 ml-2" />
            إضافة دورة جديدة
          </Button>
        </div>
      )}

      {loading ? (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">جاري التحميل...</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
                              <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">الدورة</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">تاريخ البداية</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">المدة</th>
                    <th className="px-4 py-3 text-right font-semibold text-gray-700">السعر</th>
                    {isAdmin && (
                      <>
                        <th className="px-4 py-3 text-right font-semibold text-gray-700">الحالة</th>
                        <th className="px-4 py-3 text-right font-semibold text-gray-700">الإجراءات</th>
                      </>
                    )}
                  </tr>
                </thead>
                              <tbody className="divide-y divide-gray-200">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-gray-800">{course.course_name}</td>
                      <td className="px-4 py-3 text-gray-600">{formatDate(course.start_date)}</td>
                      <td className="px-4 py-3 text-gray-600">{course.duration}</td>
                      <td className="px-4 py-3 text-green-600 font-semibold">{course.price} دينار</td>
                      {isAdmin && (
                        <>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              course.is_active 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {course.is_active ? 'نشط' : 'غير نشط'}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleEditCourse(course)}
                                disabled={saving || deleting === course.id}
                                className="disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    variant="outline" 
                                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-300"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="max-w-sm bg-white border border-gray-300 shadow-lg rounded-lg">
                                  <AlertDialogHeader className="p-4">
                                    <AlertDialogTitle className="text-lg font-semibold text-gray-800 text-center">
                                      هل أنت متأكد من حذف هذه الدورة؟
                                    </AlertDialogTitle>
                                  </AlertDialogHeader>
                                  
                                  <AlertDialogFooter className="flex justify-center space-x-3 space-x-reverse p-4 pt-0">
                                    <AlertDialogCancel className="px-4 py-2 text-sm border border-gray-300 hover:bg-gray-50 rounded">
                                      إلغاء
                                    </AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDeleteCourse(course.id)}
                                      disabled={deleting === course.id}
                                      className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                      {deleting === course.id ? 'جاري الحذف...' : 'حذف'}
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add/Edit Course Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl bg-white border-4 border-green-300 shadow-2xl">
          <DialogHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-t-lg">
            <DialogTitle className="text-2xl font-bold text-center">
              {editingCourse ? 'تعديل الدورة' : 'إضافة دورة جديدة'}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 space-y-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="course_name" className="text-lg font-semibold text-gray-700 mb-2 block">
                  اسم الدورة
                </Label>
                <Input
                  id="course_name"
                  value={formData.course_name}
                  onChange={(e) => setFormData({ ...formData, course_name: e.target.value })}
                  placeholder="أدخل اسم الدورة"
                  className="text-lg p-3 border-2 border-gray-300 focus:border-green-500 rounded-lg bg-white"
                />
              </div>
              <div>
                <Label htmlFor="start_date" className="text-lg font-semibold text-gray-700 mb-2 block">
                  تاريخ البداية
                </Label>
                <Input
                  id="start_date"
                  type="date"
                  value={formData.start_date}
                  onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                  className="text-lg p-3 border-2 border-gray-300 focus:border-green-500 rounded-lg bg-white"
                />
              </div>
              <div>
                <Label htmlFor="duration" className="text-lg font-semibold text-gray-700 mb-2 block">
                  المدة
                </Label>
                <Input
                  id="duration"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="مثال: 3 أشهر"
                  className="text-lg p-3 border-2 border-gray-300 focus:border-green-500 rounded-lg bg-white"
                />
              </div>
              <div>
                <Label htmlFor="price" className="text-lg font-semibold text-gray-700 mb-2 block">
                  السعر (دينار)
                </Label>
                <Input
                  id="price"
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="أدخل السعر"
                  className="text-lg p-3 border-2 border-gray-300 focus:border-green-500 rounded-lg bg-white"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse bg-white p-4 rounded-lg border-2 border-gray-200">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-5 h-5 text-green-600 rounded focus:ring-green-500"
              />
              <Label htmlFor="is_active" className="text-lg font-semibold text-gray-700">
                نشط
              </Label>
            </div>
            <div className="flex justify-end space-x-4 space-x-reverse pt-4">
              <Button 
                variant="outline" 
                onClick={() => setIsDialogOpen(false)}
                className="px-8 py-3 text-lg font-semibold border-2 border-gray-400 hover:border-gray-600 bg-white"
              >
                إلغاء
              </Button>
              <Button 
                onClick={handleSaveCourse} 
                disabled={saving}
                className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                    جاري الحفظ...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 ml-2" />
                    حفظ
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
