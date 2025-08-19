'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function PartnershipPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">فرص الشراكة</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="فرص الشراكة"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نرحب بالشراكات الاستراتيجية مع الشركات والمؤسسات التي تشاركنا رؤيتنا في تطوير القطاع الهندسي.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مجالات الشراكة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تنفيذ المشاريع المشتركة</li>
                  <li>تبادل الخبرات والمعرفة</li>
                  <li>التطوير التقني</li>
                  <li>البحث والتطوير</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات الشراكة</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>فرص نمو مشتركة</li>
                  <li>تبادل الموارد والخبرات</li>
                  <li>تطوير حلول مبتكرة</li>
                  <li>توسيع نطاق الأعمال</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">كيفية الشراكة معنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">1. التواصل</h4>
                  <p className="text-gray-600">تواصل معنا لمناقشة فرص الشراكة المتاحة</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">2. الاجتماع</h4>
                  <p className="text-gray-600">اجتماع لمناقشة التفاصيل والإمكانيات</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">3. الاتفاق</h4>
                  <p className="text-gray-600">توقيع اتفاقية الشراكة وبدء العمل</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">تواصل معنا</h2>
              <p className="text-gray-600 mb-6">
                إذا كنت مهتماً بالشراكة معنا، نرحب بتواصلك لمناقشة الفرص المتاحة وكيفية تحقيق أهداف مشتركة.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                طلب شراكة
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
