'use client'

import { useEffect, useState } from 'react'
import { getSupabaseClient } from '@/lib/supabase'
import { isAuthenticated } from '@/lib/auth'
import { useRouter } from 'next/navigation'
import type { Database } from '@/lib/database.types'

type User = Database['public']['Tables']['users']['Row']

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication first
    if (!isAuthenticated()) {
      router.push('/admin/login')
      return
    }

    fetchUsers()
  }, [router])

  async function fetchUsers() {
    try {
      setLoading(true)
      const supabase = getSupabaseClient()
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        setError(error.message)
        console.error('Error fetching users:', error)
      } else {
        setUsers(data || [])
      }
    } catch (err: any) {
      setError(err.message)
      console.error('Unexpected error fetching users:', err)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated()) {
    return null
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            المستخدمون المسجلون
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            قائمة بجميع المستخدمين المسجلين في الموقع
          </p>
        </div>
        
        <div className="border-t border-gray-200">
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
                      تاريخ التسجيل
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => {
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
                          {user.created_at ? new Date(user.created_at).toLocaleDateString('ar-LY') : 'غير محدد'}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
