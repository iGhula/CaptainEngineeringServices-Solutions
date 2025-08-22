'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import type { Database } from '@/lib/database.types'
import { Button } from '@/components/ui/button'

type User = Database['public']['Tables']['users']['Row']

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdateTime, setLastUpdateTime] = useState<string>('')
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(10)
  const router = useRouter()

  useEffect(() => {
    // Check admin status and fetch users on component mount only
    checkAdminStatus()
    fetchUsers()
    
    // No automatic refreshes - only manual refresh via button
  }, []) // Empty dependency array - only run once on mount

  // Check if user is admin
  const checkAdminStatus = () => {
    const authenticated = isAuthenticated()
    if (!authenticated) {
      console.log('Not authenticated, redirecting to login...')
      router.push('/admin/login')
      return
    }
    console.log('Authenticated, proceeding...')
  }

  // Check Supabase client configuration
  const checkSupabaseConfig = () => {
    console.log('🔍 Checking Supabase client configuration...')
    console.log('Supabase client:', supabase)
    console.log('Supabase client type:', typeof supabase)
    console.log('Supabase client constructor:', supabase.constructor.name)
    
    // Check if we can access the auth
    try {
      const session = supabase.auth.getSession()
      console.log('Auth session check:', session)
    } catch (err) {
      console.error('❌ Auth session check failed:', err)
    }
  }

  // Add a basic database health check
  const testDatabaseHealth = async () => {
    try {
      console.log('🔍 Testing basic Supabase connection...')
      
      // Test 1: Basic connection
      const { data, error } = await supabase
        .from('users')
        .select('id')
        .limit(1)
      
      console.log('Basic connection test:', { data, error })
      
      if (error) {
        console.error('❌ Basic connection failed:', error)
        
        // Check if it's a table not found error
        if (error.code === 'PGRST116') {
          console.error('❌ Table "users" not found!')
          setError('Table "users" not found in database. Please check table name.')
          return false
        }
        
        // Check if it's a permission error
        if (error.code === '42501') {
          console.error('❌ Permission denied! RLS might be blocking access.')
          setError('Permission denied. Row Level Security (RLS) might be blocking access.')
          return false
        }
        
        setError(`Database connection failed: ${error.message} (Code: ${error.code})`)
        return false
      }
      
      console.log('✅ Basic connection successful')
      
      // Test 2: Check table structure
      console.log('🔍 Testing table structure...')
      const { data: structureData, error: structureError } = await supabase
        .from('users')
        .select('*')
        .limit(1)
      
      console.log('Table structure test:', { structureData, structureError })
      
      if (structureError) {
        console.error('❌ Table structure test failed:', structureError)
        setError(`Table structure test failed: ${structureError.message}`)
        return false
      }
      
      if (structureData && structureData.length > 0) {
        console.log('✅ Table structure test successful')
        console.log('Sample row structure:', Object.keys(structureData[0]))
        return true
      } else {
        console.log('⚠️ Table exists but no data returned')
        return true
      }
      
    } catch (err: any) {
      console.error('❌ Database health check failed:', err)
      setError(`Database health check failed: ${err.message}`)
      return false
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true)
      setError(null)
      
      console.log('=== STARTING USER FETCH ===')
      console.log('Current users state:', users)
      
      // First, let's test the database connection with a simple query
      console.log('Step 1: Testing basic database connection...')
      const { data: connectionTest, error: connectionError } = await supabase
        .from('users')
        .select('id')
        .limit(1)
      
      console.log('Connection test result:', { connectionTest, connectionError })
      
      if (connectionError) {
        console.error('❌ Database connection failed:', connectionError)
        setError(`Database connection failed: ${connectionError.message} (Code: ${connectionError.code})`)
        return
      }
      
      console.log('✅ Database connection successful')
      
      // Step 2: Try to get the total count
      console.log('Step 2: Getting total user count...')
      const { count, error: countError } = await supabase
        .from('users')
        .select('*', { count: 'exact', head: true })
      
      console.log('Count result:', { count, countError })
      
      if (countError) {
        console.error('❌ Count query failed:', countError)
        setError(`Count query failed: ${countError.message}`)
        return
      }
      
      console.log(`✅ Total users in database: ${count}`)
      
      // Step 3: Fetch all users
      console.log('Step 3: Fetching all users...')
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Final fetch result:', { 
        data, 
        error, 
        dataLength: data?.length || 0,
        hasData: !!data,
        isArray: Array.isArray(data)
      })

      if (error) {
        console.error('❌ User fetch failed:', error)
        setError(`User fetch failed: ${error.message}`)
        return
      }
      
      if (!data) {
        console.error('❌ No data returned from query')
        setError('No data returned from database query')
        return
      }
      
      if (!Array.isArray(data)) {
        console.error('❌ Data is not an array:', typeof data, data)
        setError('Invalid data format returned from database')
        return
      }
      
      console.log(`✅ Successfully fetched ${data.length} users`)
      console.log('First user sample:', data[0])
      
      setUsers(data)
      setLastUpdateTime(new Date().toLocaleTimeString('ar-LY'))
      setCurrentPage(1) // Reset to first page when new data is loaded
      
    } catch (err: any) {
      console.error('❌ Unexpected error in fetchUsers:', err)
      setError(`Unexpected error: ${err.message}`)
    } finally {
      setLoading(false)
      console.log('=== USER FETCH COMPLETED ===')
    }
  }

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage
  const indexOfFirstUser = indexOfLastUser - usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
  const totalPages = Math.ceil(users.length / usersPerPage)

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
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
                المستخدمون المسجلون
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                قائمة بجميع المستخدمين المسجلين في الموقع
              </p>
            </div>
            <div className="flex space-x-3 space-x-reverse">
              <Button
                onClick={fetchUsers}
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
                 users.length === 0 ? ' لا توجد بيانات' : 
                 ` تم تحميل ${users.length} مستخدم`}
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
          ) : users.length === 0 ? (
            <div className="text-center py-8 text-gray-500">لا يوجد مستخدمين مسجلين</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      #
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      الاسم الكامل
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      البريد الإلكتروني
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      رقم الهاتف
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      الدورة/الخدمة المطلوبة
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      نوع المؤسسة
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      الشهادة
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      ملاحظات إضافية
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider">
                      تاريخ ووقت التسجيل
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentUsers.map((user, index) => {
                    // Calculate the actual row number (considering pagination)
                    const rowNumber = (currentPage - 1) * usersPerPage + index + 1
                    
                    // Arabic mapping for service types
                    const serviceArabicMap: { [key: string]: string } = {
                      'consultation': 'الاستشارات الهندسية',
                      'design': 'التصميم المعماري',
                      'supervision': 'الإشراف على التنفيذ',
                      'training': 'الدورات التدريبية',
                      'feasibility': 'دراسات الجدوى',
                      'other': 'أخرى'
                    }

                    // Arabic mapping for organization types
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {rowNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {user.full_name || 'غير محدد'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {user.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {user.phone || 'غير محدد'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {serviceText}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {organizationText}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          {user.job_title || 'غير محدد'}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 max-w-xs" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
                          <div className="truncate" title={user.notes || ''}>
                            {user.notes && user.notes.trim() !== '' ? user.notes : 'لا توجد ملاحظات'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" style={{ fontWeight: '400 !important', fontSize: '14px' }}>
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
          
          {/* Pagination Controls */}
          {users.length > usersPerPage && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  عرض {indexOfFirstUser + 1} إلى {Math.min(indexOfLastUser, users.length)} من {users.length} مستخدم
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  {/* Previous Page Button */}
                  <Button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    variant="outline"
                    size="sm"
                    className="px-3 py-1"
                  >
                    السابق
                  </Button>
                  
                  {/* Page Numbers */}
                  <div className="flex items-center space-x-1 space-x-reverse">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
                  
                  {/* Next Page Button */}
                  <Button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
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
