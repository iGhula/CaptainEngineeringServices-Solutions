'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function CareersPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">التوظيف</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="التوظيف"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نبحث دائماً عن المواهب المتميزة للانضمام إلى فريقنا. نوفر بيئة عمل محفزة وفرص تطور مهني متميزة.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">الوظائف المتاحة</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مهندس معماري</h4>
                  <p className="text-gray-600 mb-2">خبرة 5 سنوات في التصميم المعماري</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>دوام كامل</span>
                    <span>طرابلس</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مهندس مدني</h4>
                  <p className="text-gray-600 mb-2">خبرة 3 سنوات في الإشراف على التنفيذ</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>دوام كامل</span>
                    <span>بنغازي</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مدير مشاريع</h4>
                  <p className="text-gray-600 mb-2">خبرة 7 سنوات في إدارة المشاريع الهندسية</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>دوام كامل</span>
                    <span>طرابلس</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات العمل معنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>رواتب تنافسية</li>
                  <li>تأمين صحي شامل</li>
                  <li>فرص تدريب وتطوير</li>
                  <li>بيئة عمل محفزة</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">متطلبات التوظيف</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>شهادة جامعية معتمدة</li>
                  <li>خبرة في المجال</li>
                  <li>مهارات تواصل متميزة</li>
                  <li>القدرة على العمل ضمن فريق</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">خطوات التقديم</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">1. التقديم</h4>
                  <p className="text-gray-600">إرسال السيرة الذاتية</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">2. المراجعة</h4>
                  <p className="text-gray-600">مراجعة الطلب والمؤهلات</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">3. المقابلة</h4>
                  <p className="text-gray-600">إجراء المقابلة الشخصية</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">4. التعيين</h4>
                  <p className="text-gray-600">عرض العمل والتعيين</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                التقدم للوظائف
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
