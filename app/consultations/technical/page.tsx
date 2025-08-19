'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function TechnicalConsultationsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">استشارات فنية</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="استشارات فنية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم استشارات فنية متخصصة في مختلف المجالات التقنية والهندسية، مع التركيز على الحلول العملية والمبتكرة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مجالات الاستشارات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>التقنيات الحديثة في البناء</li>
                  <li>أنظمة التحكم والأتمتة</li>
                  <li>كفاءة الطاقة</li>
                  <li>المواد والمعدات الفنية</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدماتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تقييم الأنظمة الفنية</li>
                  <li>حلول تقنية متكاملة</li>
                  <li>دراسات فنية متخصصة</li>
                  <li>تطوير الأنظمة القائمة</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب استشارة</h3>
              <p className="text-gray-600">
                هل تحتاج إلى استشارة فنية متخصصة؟ تواصل معنا اليوم لمناقشة احتياجاتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
