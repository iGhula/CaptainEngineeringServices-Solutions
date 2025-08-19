'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function FeasibilityStudiesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">دراسات الجدوى</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="دراسات الجدوى"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم دراسات جدوى شاملة ومتكاملة للمشاريع الهندسية والصناعية، تساعد في اتخاذ القرارات الاستثمارية السليمة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">أنواع الدراسات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>دراسات الجدوى الفنية</li>
                  <li>دراسات الجدوى الاقتصادية</li>
                  <li>دراسات السوق</li>
                  <li>دراسات الأثر البيئي</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات دراساتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تحليل شامل ودقيق</li>
                  <li>منهجية علمية معتمدة</li>
                  <li>توصيات عملية وواقعية</li>
                  <li>دعم في اتخاذ القرار</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">منهجية الدراسة</h2>
            <p className="text-gray-600 mb-6">
              نتبع منهجية علمية دقيقة في إعداد دراسات الجدوى، تشمل جمع البيانات وتحليلها وتقديم التوصيات المناسبة.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب دراسة جدوى</h3>
              <p className="text-gray-600">
                هل تحتاج إلى دراسة جدوى لمشروعك؟ تواصل معنا اليوم لمناقشة متطلبات مشروعك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}