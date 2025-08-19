'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function OngoingProjectsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">مشاريع قيد التنفيذ</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="مشاريع قيد التنفيذ"
              width={1200}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نعمل حالياً على تنفيذ مجموعة من المشاريع الهندسية المتميزة في مختلف أنحاء ليبيا.
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
                  <h3 className="text-xl font-bold mb-2">مجمع الواحة السكني</h3>
                  <p className="text-gray-600 mb-4">مجمع سكني فاخر قيد الإنشاء</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: طرابلس</p>
                    <p>نسبة الإنجاز: 60%</p>
                    <p>التاريخ المتوقع للإنجاز: 2024</p>
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
                  <h3 className="text-xl font-bold mb-2">برج المستقبل</h3>
                  <p className="text-gray-600 mb-4">برج مكاتب وتجاري متعدد الطوابق</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: بنغازي</p>
                    <p>نسبة الإنجاز: 40%</p>
                    <p>التاريخ المتوقع للإنجاز: 2025</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.jpg"
                    alt="مشروع تعليمي"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">المجمع التعليمي</h3>
                  <p className="text-gray-600 mb-4">مجمع تعليمي متكامل</p>
                  <div className="text-sm text-gray-500">
                    <p>الموقع: مصراتة</p>
                    <p>نسبة الإنجاز: 75%</p>
                    <p>التاريخ المتوقع للإنجاز: 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التزامنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">الجودة</h4>
                  <p className="text-gray-600">نلتزم بأعلى معايير الجودة في التنفيذ</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">الوقت</h4>
                  <p className="text-gray-600">نحرص على الالتزام بالجدول الزمني المحدد</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التكلفة</h4>
                  <p className="text-gray-600">نضمن الالتزام بالميزانية المعتمدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
