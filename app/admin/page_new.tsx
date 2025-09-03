'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type User = {
  id: string
  created_at: string
  email: string
  full_name: string
  phone: string
  company: string
  job_title: string
  interests: string[]
  notes: string
}

type ConsultationRequest = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  consultation_type: string
  department: string
  project_details: string
  budget_range: string
  preferred_time: string
}

type Feedback = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string
  feedback_type: string
  subject: string
  message: string
  priority: string
  status: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('users')
  const [users, setUsers] = useState<User[]>([])
  const [consultationRequests, setConsultationRequests] = useState<ConsultationRequest[]>([])
  const [feedback, setFeedback] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdateTime, setLastUpdateTime] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  const router = useRouter()

  useEffect(() => {
    checkAdminStatus()
    fetchAllData()
  }, [])

  const checkAdminStatus = () => {
    const authenticated = isAuthenticated()
    if (!authenticated) {
      console.log('Not authenticated, redirecting to login...')
      router.push('/admin/login')
      return
    }
    console.log('Authenticated, proceeding...')
  }

  const fetchAllData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Create admin session
      const { data: sessionData, error: sessionError } = await supabase.auth.signInWithPassword({
        email: 'ibrahim.ghula@gmail.com',
        password: 'Ibra.1670'
      })
      
      if (sessionError) {
        console.error('❌ Admin session creation failed:', sessionError)
      } else {
        console.log('✅ Admin session created successfully')
      }

      // Fetch users
      const { data: usersData, error: usersError } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: true })

      if (usersError) {
        console.error('Users fetch error:', usersError)
      } else {
        setUsers(usersData || [])
      }

      // Fetch consultation requests
      const { data: consultationData, error: consultationError } = await supabase
        .from('consultation_requests')
        .select('*')
        .order('created_at', { ascending: true })

      if (consultationError) {
        console.error('Consultation requests fetch error:', consultationError)
      } else {
        setConsultationRequests(consultationData || [])
      }

      // Fetch feedback
      const { data: feedbackData, error: feedbackError } = await supabase
        .from('feedback')
        .select('*')
        .order('created_at', { ascending: true })

      if (feedbackError) {
        console.error('Feedback fetch error:', feedbackError)
      } else {
        setFeedback(feedbackData || [])
      }

      setLastUpdateTime(new Date().toLocaleTimeString('ar-LY'))
      setCurrentPage(1)
      
    } catch (err: any) {
      console.error('❌ Unexpected error in fetchAllData:', err)
      setError(`Unexpected error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 50)
  }

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    scrollToTop()
  }

  const goToNextPage = () => {
    const totalPages = Math.ceil(getCurrentData().length / usersPerPage)
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      scrollToTop()
    }
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      scrollToTop()
    }
  }

  const getCurrentData = () => {
    switch (activeTab) {
      case 'users':
        return users
      case 'consultations':
        return consultationRequests
      case 'feedback':
        return feedback
      default:
        return users
    }
  }

  const getCurrentDataLength = () => {
    return getCurrentData().length
  }

  const getCurrentPageData = () => {
    const data = getCurrentData()
    const indexOfLastItem = currentPage * usersPerPage
    const indexOfFirstItem = indexOfLastItem - usersPerPage
    return data.slice(indexOfFirstItem, indexOfLastItem)
  }

  const getTotalPages = () => {
    return Math.ceil(getCurrentDataLength() / usersPerPage)
  }

  if (!isAuthenticated()) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                لوحة التحكم
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                إدارة جميع البيانات والطلبات
              </p>
            </div>
            <div className="flex space-x-3 space-x-reverse">
              <Button
                onClick={fetchAllData}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                تحديث البيانات
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200">
          {/* Status Information */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium">الحالة:</span> 
                {loading ? ' جاري التحميل...' : 
                 error ? ' خطأ في التحميل' : 
                 ` تم تحميل ${getCurrentDataLength()} عنصر`}
              </div>
              <div className="text-xs text-gray-500">
                آخر تحديث: {loading ? 'جاري التحميل...' : lastUpdateTime}
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">جاري التحميل...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                خطأ في تحميل البيانات: {error}
              </div>
            </div>
          ) : (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="users">سجل معنا ({users.length})</TabsTrigger>
                <TabsTrigger value="consultations">طلب استشارة ({consultationRequests.length})</TabsTrigger>
                <TabsTrigger value="feedback">الشكاوى والاقتراحات ({feedback.length})</TabsTrigger>
              </TabsList>

              <TabsContent value="users" className="mt-6">
                {users.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">لا يوجد مستخدمين مسجلين</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الاسم الكامل</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">البريد الإلكتروني</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">رقم الهاتف</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الدورة/الخدمة المطلوبة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">نوع المؤسسة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الشهادة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">ملاحظات إضافية</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">تاريخ ووقت التسجيل</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getCurrentPageData().map((user: User, index: number) => {
                          const rowNumber = (currentPage - 1) * usersPerPage + index + 1
                          
                          const serviceArabicMap: { [key: string]: string } = {
                            'consultation': 'الاستشارات الهندسية',
                            'supervision': 'اشراف والتطوير والتصميم',
                            'training': 'الدورات',
                            'feasibility': 'دراسات الجدوى',
                            'partnership': 'الشراكة',
                            'other': 'اخر'
                          }

                          const organizationArabicMap: { [key: string]: string } = {
                            'company': 'شركة',
                            'university': 'جامعة',
                            'institute': 'معهد',
                            'government': 'جهة حكومية',
                            'individual': 'فرد'
                          }

                          const serviceText = user.interests && user.interests.length > 0 
                            ? serviceArabicMap[user.interests[0]] || user.interests[0]
                            : 'غير محدد'

                          const organizationText = user.company 
                            ? organizationArabicMap[user.company] || user.company
                            : 'غير محدد'

                          return (
                            <tr key={user.id} className="font-normal">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rowNumber}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.full_name || 'غير محدد'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone || 'غير محدد'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{serviceText}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{organizationText}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.job_title || 'غير محدد'}</td>
                              <td className="px-6 py-4 text-sm text-gray-500 max-w-xs">
                                <div className="truncate" title={user.notes || ''}>
                                  {user.notes && user.notes.trim() !== '' ? user.notes : 'لا توجد ملاحظات'}
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {user.created_at ? (
                                  <div className="text-center">
                                    <div className="font-medium text-gray-900">
                                      {new Date(user.created_at).toLocaleDateString('ar-LY', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                      {new Date(user.created_at).toLocaleTimeString('ar-LY', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                      })}
                                    </div>
                                  </div>
                                ) : 'غير محدد'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="consultations" className="mt-6">
                {consultationRequests.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">لا توجد طلبات استشارة</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الاسم الكامل</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">البريد الإلكتروني</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">رقم الهاتف</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">نوع الاستشارة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">القسم المعني</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الميزانية</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الوقت المفضل</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">تاريخ الطلب</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getCurrentPageData().map((request: ConsultationRequest, index: number) => {
                          const rowNumber = (currentPage - 1) * usersPerPage + index + 1
                          
                          const consultationTypeMap: { [key: string]: string } = {
                            'consultations': 'استشارات',
                            'supervision': 'إشراف',
                            'development-design': 'تطوير او تصميم',
                            'partnership': 'شراكة',
                            'training': 'تدريب',
                            'employment': 'توظيف',
                            'courses': 'دورات',
                            'management': 'إدارة',
                            'airport-services': 'خدمات المطار',
                            'aviation-services': 'خدمات طيران',
                            'other': 'أخرى'
                          }

                          const departmentMap: { [key: string]: string } = {
                            'engineering': 'قسم الهندسة',
                            'airport': 'قسم المطار',
                            'management': 'قسم الادارة',
                            'training': 'قسم التدريب',
                            'customer-service': 'خدمة العملاء',
                            'other': 'أخرى'
                          }

                          const budgetMap: { [key: string]: string } = {
                            'small': 'أقل من 50,000 دينار',
                            'medium': '50,000 - 200,000 دينار',
                            'large': '200,000 - 500,000 دينار',
                            'xlarge': 'أكثر من 500,000 دينار'
                          }

                          const timeMap: { [key: string]: string } = {
                            'morning': 'صباحاً (9:00 - 12:00)',
                            'afternoon': 'ظهراً (12:00 - 3:00)',
                            'evening': 'مساءً (3:00 - 5:00)'
                          }

                          return (
                            <tr key={request.id} className="font-normal">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rowNumber}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.full_name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{request.phone}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{consultationTypeMap[request.consultation_type] || request.consultation_type}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{departmentMap[request.department] || request.department}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{budgetMap[request.budget_range] || request.budget_range || 'غير محدد'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{timeMap[request.preferred_time] || request.preferred_time || 'غير محدد'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {request.created_at ? (
                                  <div className="text-center">
                                    <div className="font-medium text-gray-900">
                                      {new Date(request.created_at).toLocaleDateString('ar-LY', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                      {new Date(request.created_at).toLocaleTimeString('ar-LY', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                      })}
                                    </div>
                                  </div>
                                ) : 'غير محدد'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </TabsContent>

              <TabsContent value="feedback" className="mt-6">
                {feedback.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">لا توجد رسائل شكاوى أو اقتراحات</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">#</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الاسم الكامل</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">البريد الإلكتروني</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">نوع الرسالة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الموضوع</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الأولوية</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">الحالة</th>
                          <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">تاريخ الرسالة</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {getCurrentPageData().map((item: Feedback, index: number) => {
                          const rowNumber = (currentPage - 1) * usersPerPage + index + 1
                          
                          const feedbackTypeMap: { [key: string]: string } = {
                            'complaint': 'شكوى',
                            'suggestion': 'اقتراح',
                            'compliment': 'إشادة',
                            'other': 'أخرى'
                          }

                          const priorityMap: { [key: string]: string } = {
                            'low': 'منخفضة',
                            'medium': 'متوسطة',
                            'high': 'عالية',
                            'urgent': 'عاجلة'
                          }

                          const statusMap: { [key: string]: string } = {
                            'new': 'جديدة',
                            'in_progress': 'قيد المراجعة',
                            'resolved': 'تم الحل',
                            'closed': 'مغلقة'
                          }

                          return (
                            <tr key={item.id} className="font-normal">
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rowNumber}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.full_name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{feedbackTypeMap[item.feedback_type] || item.feedback_type}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.subject}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{priorityMap[item.priority] || item.priority}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{statusMap[item.status] || item.status}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {item.created_at ? (
                                  <div className="text-center">
                                    <div className="font-medium text-gray-900">
                                      {new Date(item.created_at).toLocaleDateString('ar-LY', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                      })}
                                    </div>
                                    <div className="text-xs text-gray-400 mt-1">
                                      {new Date(item.created_at).toLocaleTimeString('ar-LY', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit'
                                      })}
                                    </div>
                                  </div>
                                ) : 'غير محدد'}
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          )}
          
          {/* Pagination Controls */}
          {getCurrentDataLength() > usersPerPage && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  عرض {((currentPage - 1) * usersPerPage) + 1} إلى {Math.min(currentPage * usersPerPage, getCurrentDataLength())} من {getCurrentDataLength()} عنصر
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                    className="px-3 py-1"
                  >
                    السابق
                  </Button>
                  
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {Array.from({ length: getTotalPages() }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => goToPage(page)}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        className="px-3 py-1 min-w-[40px]"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  
                  <Button
                    onClick={goToNextPage}
                    disabled={currentPage === getTotalPages()}
                    variant="outline"
                    size="sm"
                    className="px-3 py-1"
                  >
                    التالي
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
