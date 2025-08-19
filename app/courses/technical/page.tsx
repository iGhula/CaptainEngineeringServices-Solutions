'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function TechnicalCoursesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الدورات التقنية</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="الدورات التقنية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم دورات تقنية متخصصة في أحدث التقنيات والبرامج المستخدمة في مجال الهندسة والتصميم.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الدورات المتوفرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>AutoCAD المتقدم</li>
                  <li>Revit للتصميم المعماري</li>
                  <li>3D Max للتصميم</li>
                  <li>برامج إدارة المشاريع</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات الدورات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>مدربون معتمدون</li>
                  <li>تطبيق عملي مكثف</li>
                  <li>مشاريع تطبيقية</li>
                  <li>شهادات معتمدة</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التسجيل في الدورات</h3>
              <p className="text-gray-600">
                تعلم أحدث البرامج والتقنيات الهندسية. سجل الآن في دوراتنا التقنية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
