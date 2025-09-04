'use client'

import { useState, useEffect } from 'react'
import PageTemplate from '@/app/components/PageTemplate'
import CourseAdmin from '@/app/components/CourseAdmin'
import { supabase } from '@/lib/supabase'

type Course = {
  id: string
  course_name: string
  start_date: string
  duration: string
  price: number
  description?: string
  is_active: boolean
}

export default function AirportCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCourses()
  }, [])

  const fetchCourses = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('airport_courses')
        .select('*')
        .eq('is_active', true)
        .order('start_date', { ascending: true })

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ar-LY')
  }

  return (
    <PageTemplate title="دورات المطار" subtitle="برنامج الدورة" description="برنامج دورات المطار">
      <div className="max-w-4xl mx-auto space-y-8" dir="rtl">
        {/* Course Management Interface */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-right">برنامج الدورة</h2>
          <p className="text-gray-700 text-right mb-6">برنامج متخصص في إدارة وتشغيل المطارات والأمان والسلامة وحركة الطائرات.</p>

          <CourseAdmin tableName="airport_courses" title="دورات المطار" />
        </section>

        <div className="text-center">
          <a href="/register" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">التسجيل في الدورات</a>
        </div>
      </div>
    </PageTemplate>
  )
}
