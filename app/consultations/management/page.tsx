'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function ManagementConsultationsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">استشارات إدارية</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="استشارات إدارية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم استشارات إدارية متخصصة في مجال إدارة المشاريع الهندسية والإنشائية، مع التركيز على تحسين الكفاءة وتحقيق النتائج.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مجالات الاستشارات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>إدارة المشاريع الهندسية</li>
                  <li>تخطيط وجدولة المشاريع</li>
                  <li>إدارة الموارد</li>
                  <li>تحسين العمليات</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدماتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تطوير نظم الإدارة</li>
                  <li>تحليل وتقييم الأداء</li>
                  <li>إعداد خطط العمل</li>
                  <li>تدريب وتطوير الكوادر</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب استشارة</h3>
              <p className="text-gray-600">
                هل تحتاج إلى تطوير أداء مشروعك؟ تواصل معنا اليوم لمناقشة احتياجاتك الإدارية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
