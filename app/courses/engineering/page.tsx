'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function EngineeringCoursesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الدورات الهندسية</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="الدورات الهندسية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم مجموعة متنوعة من الدورات الهندسية المتخصصة التي تغطي مختلف مجالات الهندسة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الدورات المتوفرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>التصميم المعماري</li>
                  <li>إدارة المشاريع الهندسية</li>
                  <li>الإشراف على التنفيذ</li>
                  <li>تخطيط المدن</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات الدورات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>مدربون متخصصون</li>
                  <li>تطبيقات عملية</li>
                  <li>شهادات معتمدة</li>
                  <li>مواد تدريبية متكاملة</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التسجيل في الدورات</h3>
              <p className="text-gray-600">
                سجل الآن في دوراتنا الهندسية وطور مهاراتك المهنية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
