'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function AwardsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الجوائز</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="الجوائز"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              حصلنا على العديد من الجوائز والتكريمات تقديراً لتميزنا في مجال الخدمات الهندسية والاستشارية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">جوائزنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>جائزة التميز في الخدمات الهندسية</li>
                  <li>جائزة أفضل مشروع معماري</li>
                  <li>جائزة الابتكار الهندسي</li>
                  <li>جائزة الجودة والتميز</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">إنجازاتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>مشاريع متميزة</li>
                  <li>ابتكارات هندسية</li>
                  <li>خدمة عملاء متميزة</li>
                  <li>تطوير مستمر</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التميز المستمر</h3>
              <p className="text-gray-600">
                نسعى دائماً للتميز والابتكار في جميع خدماتنا ومشاريعنا لتحقيق رضا عملائنا وتجاوز توقعاتهم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
