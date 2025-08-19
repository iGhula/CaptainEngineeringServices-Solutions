'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function TrainingPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">التدريب</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="التدريب"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم برامج تدريبية متخصصة للطلاب والخريجين في مختلف المجالات الهندسية، مع التركيز على الجانب العملي والتطبيقي.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">برامج التدريب</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>التدريب الصيفي للطلاب</li>
                  <li>برنامج تدريب الخريجين</li>
                  <li>التدريب العملي المتخصص</li>
                  <li>ورش عمل تطبيقية</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات التدريب</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>خبرة عملية مباشرة</li>
                  <li>إشراف مهندسين متخصصين</li>
                  <li>شهادات معتمدة</li>
                  <li>فرص توظيف محتملة</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">البرامج المتاحة</h3>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">التدريب الصيفي</h4>
                  <p className="text-gray-600 mb-2">برنامج تدريبي لمدة شهرين للطلاب</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>يونيو - أغسطس</span>
                    <span>طرابلس</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">تدريب الخريجين</h4>
                  <p className="text-gray-600 mb-2">برنامج تدريبي لمدة 6 أشهر</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>على مدار العام</span>
                    <span>جميع الفروع</span>
                  </div>
                </div>
                <div className="border-b pb-4">
                  <h4 className="font-bold text-gray-800 mb-2">ورش عمل متخصصة</h4>
                  <p className="text-gray-600 mb-2">ورش عمل في مجالات هندسية محددة</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>شهرياً</span>
                    <span>جميع الفروع</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">خطوات التقديم</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">1. التسجيل</h4>
                  <p className="text-gray-600">تقديم طلب الالتحاق</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">2. المقابلة</h4>
                  <p className="text-gray-600">مقابلة شخصية قصيرة</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">3. القبول</h4>
                  <p className="text-gray-600">إشعار القبول في البرنامج</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">4. البدء</h4>
                  <p className="text-gray-600">بدء برنامج التدريب</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                التقدم للتدريب
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
