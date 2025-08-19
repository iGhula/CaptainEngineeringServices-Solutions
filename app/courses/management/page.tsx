'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function ManagementCoursesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الدورات الإدارية</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="الدورات الإدارية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم دورات إدارية متخصصة تركز على تطوير المهارات الإدارية والقيادية في مجال الهندسة والمقاولات.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الدورات المتوفرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>إدارة المشاريع الاحترافية</li>
                  <li>إدارة الموارد البشرية</li>
                  <li>إدارة الجودة الشاملة</li>
                  <li>القيادة في المشاريع الهندسية</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات الدورات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>خبراء في الإدارة الهندسية</li>
                  <li>حالات دراسية واقعية</li>
                  <li>شهادات معتمدة</li>
                  <li>تطبيقات عملية</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التسجيل في الدورات</h3>
              <p className="text-gray-600">
                طور مهاراتك الإدارية مع دوراتنا المتخصصة. سجل الآن واحجز مقعدك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
