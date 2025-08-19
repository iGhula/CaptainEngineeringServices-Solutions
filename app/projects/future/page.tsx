'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function FutureProjectsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">مشاريع مستقبلية</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="مشاريع مستقبلية"
              width={1200}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نخطط لتنفيذ مجموعة من المشاريع المستقبلية الطموحة التي تساهم في تطوير البنية التحتية والعمرانية في ليبيا.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع مدينة ذكية"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المدينة الذكية</h3>
                  <p className="text-gray-600 mb-4">مشروع مدينة ذكية متكاملة</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: طرابلس</p>
                    <p>المساحة المتوقعة: 100,000 متر مربع</p>
                    <p>تاريخ البدء المتوقع: 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع مستشفى"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المجمع الطبي الحديث</h3>
                  <p className="text-gray-600 mb-4">مستشفى ومركز طبي متكامل</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: بنغازي</p>
                    <p>السعة: 500 سرير</p>
                    <p>تاريخ البدء المتوقع: 2024</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع سياحي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المنتجع السياحي</h3>
                  <p className="text-gray-600 mb-4">منتجع سياحي على الشاطئ</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: سرت</p>
                    <p>المساحة المتوقعة: 50,000 متر مربع</p>
                    <p>تاريخ البدء المتوقع: 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">رؤيتنا المستقبلية</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">الاستدامة</h4>
                  <p className="text-gray-600">تصميم وتنفيذ مشاريع مستدامة صديقة للبيئة</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التقنية</h4>
                  <p className="text-gray-600">استخدام أحدث التقنيات في التصميم والتنفيذ</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التطوير</h4>
                  <p className="text-gray-600">المساهمة في تطوير البنية التحتية الوطنية</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
