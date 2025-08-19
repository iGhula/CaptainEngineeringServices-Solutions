'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function LicensesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">التراخيص</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="التراخيص"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نمتلك جميع التراخيص اللازمة لمزاولة أنشطتنا الهندسية والاستشارية من الجهات المختصة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">تراخيصنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ترخيص مزاولة الاستشارات الهندسية</li>
                  <li>ترخيص التصميم المعماري</li>
                  <li>ترخيص الإشراف على التنفيذ</li>
                  <li>تراخيص التدريب المهني</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">الجهات المانحة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>نقابة المهندسين</li>
                  <li>وزارة الإسكان</li>
                  <li>هيئة التدريب المهني</li>
                  <li>الجهات الرقابية المختصة</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">الالتزام القانوني</h3>
              <p className="text-gray-600">
                نحرص على تجديد تراخيصنا بشكل دوري والالتزام بكافة المتطلبات القانونية والمهنية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
