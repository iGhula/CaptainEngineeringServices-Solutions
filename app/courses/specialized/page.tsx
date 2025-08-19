'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function SpecializedCoursesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الدورات المتخصصة</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="الدورات المتخصصة"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم دورات متخصصة في مجالات هندسية محددة لتلبية احتياجات السوق والمتطلبات المهنية المتخصصة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الدورات المتوفرة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>هندسة السلامة المهنية</li>
                  <li>إدارة المخاطر في المشاريع</li>
                  <li>التصميم المستدام</li>
                  <li>تقنيات البناء الحديثة</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات الدورات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>محتوى متخصص ومتعمق</li>
                  <li>خبراء في المجال</li>
                  <li>تدريب عملي مكثف</li>
                  <li>شهادات احترافية</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التسجيل في الدورات</h3>
              <p className="text-gray-600">
                طور تخصصك وارتقِ بمهاراتك المهنية مع دوراتنا المتخصصة. سجل الآن.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
