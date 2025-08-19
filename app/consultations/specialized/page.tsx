'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function SpecializedConsultationsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">دراسات متخصصة</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="دراسات متخصصة"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم دراسات متخصصة في مختلف المجالات الهندسية والفنية، مع التركيز على الدقة والشمولية في التحليل والتوصيات.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مجالات الدراسات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>دراسات الجدوى الفنية</li>
                  <li>دراسات الأثر البيئي</li>
                  <li>دراسات التطوير العمراني</li>
                  <li>دراسات تقييم المشاريع</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">منهجيتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تحليل شامل للمتطلبات</li>
                  <li>جمع وتحليل البيانات</li>
                  <li>إعداد التوصيات</li>
                  <li>متابعة التنفيذ</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب دراسة</h3>
              <p className="text-gray-600">
                هل تحتاج إلى دراسة متخصصة لمشروعك؟ تواصل معنا اليوم لمناقشة متطلبات الدراسة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
