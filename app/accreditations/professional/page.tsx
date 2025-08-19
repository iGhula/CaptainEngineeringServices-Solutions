'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function ProfessionalCertificatesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الشهادات المهنية</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="الشهادات المهنية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نفخر بحصولنا على العديد من الشهادات المهنية المعتمدة من أبرز الهيئات والمنظمات العالمية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">شهاداتنا المهنية</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>شهادة ISO 9001 في إدارة الجودة</li>
                  <li>شهادة PMP في إدارة المشاريع</li>
                  <li>شهادات هندسية متخصصة</li>
                  <li>اعتمادات دولية</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">أهمية الشهادات</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ضمان جودة الخدمات</li>
                  <li>الاعتراف الدولي</li>
                  <li>تطوير المهارات المهنية</li>
                  <li>تعزيز ثقة العملاء</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التميز المهني</h3>
              <p className="text-gray-600">
                نلتزم بالتطوير المستمر وتحديث شهاداتنا المهنية لضمان تقديم أفضل الخدمات لعملائنا.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
