'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function CompletedProjectsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">مشاريع منجزة</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="مشاريع منجزة"
              width={1200}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نفخر بسجل حافل من المشاريع المنجزة بنجاح في مختلف المجالات الهندسية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع سكني"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المجمع السكني الحديث</h3>
                  <p className="text-gray-600 mb-4">مجمع سكني متكامل يضم 100 وحدة سكنية</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: طرابلس</p>
                    <p>المساحة: 10,000 متر مربع</p>
                    <p>مدة التنفيذ: 24 شهر</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع تجاري"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المركز التجاري الرئيسي</h3>
                  <p className="text-gray-600 mb-4">مركز تجاري حديث متعدد الاستخدامات</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: بنغازي</p>
                    <p>المساحة: 15,000 متر مربع</p>
                    <p>مدة التنفيذ: 36 شهر</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع صناعي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المجمع الصناعي</h3>
                  <p className="text-gray-600 mb-4">مجمع صناعي متكامل</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: مصراتة</p>
                    <p>المساحة: 20,000 متر مربع</p>
                    <p>مدة التنفيذ: 30 شهر</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">إنجازاتنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+500</div>
                  <div className="text-gray-600">مشروع منجز</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+1M</div>
                  <div className="text-gray-600">متر مربع</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">10</div>
                  <div className="text-gray-600">مدن</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
