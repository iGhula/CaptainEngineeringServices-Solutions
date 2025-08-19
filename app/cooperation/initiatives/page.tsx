'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function InitiativesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">المبادرات</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="المبادرات"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نطلق مبادرات مجتمعية وتطويرية تهدف إلى المساهمة في تنمية القطاع الهندسي والمجتمع.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مبادراتنا الحالية</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تدريب المهندسين الشباب</li>
                  <li>دعم المشاريع الناشئة</li>
                  <li>التوعية البيئية</li>
                  <li>التطوير المهني</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">أهدافنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تطوير القطاع الهندسي</li>
                  <li>دعم المواهب المحلية</li>
                  <li>نشر المعرفة الهندسية</li>
                  <li>خدمة المجتمع</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">مبادراتنا الرئيسية</h3>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مبادرة المهندس الشاب</h4>
                  <p className="text-gray-600 mb-2">برنامج لدعم وتطوير المهندسين حديثي التخرج</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>مستمر</span>
                    <span>جميع المدن</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مبادرة البناء المستدام</h4>
                  <p className="text-gray-600 mb-2">نشر الوعي حول تقنيات البناء المستدام</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>فصلي</span>
                    <span>ورش عمل وندوات</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">مبادرة التطوير المهني</h4>
                  <p className="text-gray-600 mb-2">برامج تطوير مهني للمهندسين</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>شهري</span>
                    <span>دورات وورش عمل</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">المشاركة في المبادرات</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">كمشارك</h4>
                  <p className="text-gray-600">المشاركة في البرامج والفعاليات</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">كمتطوع</h4>
                  <p className="text-gray-600">المساهمة في تنظيم المبادرات</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">كداعم</h4>
                  <p className="text-gray-600">دعم المبادرات مادياً أو معنوياً</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                المشاركة في المبادرات
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
