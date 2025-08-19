'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function EngineeringConsultationsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">استشارات هندسية</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="استشارات هندسية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم استشارات هندسية متكاملة في مختلف المجالات الهندسية، بدعم من فريق من الخبراء المتخصصين.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مجالات الاستشارات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>الهندسة المعمارية</li>
                  <li>الهندسة المدنية</li>
                  <li>الهندسة الإنشائية</li>
                  <li>هندسة التخطيط العمراني</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدماتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>دراسات الجدوى الفنية</li>
                  <li>التصميم الهندسي</li>
                  <li>الإشراف على التنفيذ</li>
                  <li>حلول هندسية مبتكرة</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب استشارة</h3>
              <p className="text-gray-600">
                نحن هنا لمساعدتك في تحقيق رؤيتك الهندسية. تواصل معنا اليوم لمناقشة مشروعك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
