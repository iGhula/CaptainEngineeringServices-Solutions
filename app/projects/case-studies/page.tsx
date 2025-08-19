'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function CaseStudiesPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">دراسات حالة</h1>
          
          <div className="mb-8">
            <Image
              src="/industrial-engineering-facility.png"
              alt="دراسات حالة"
              width={1200}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم مجموعة من دراسات الحالة لمشاريعنا المنجزة، موضحين التحديات والحلول والنتائج التي حققناها.
            </p>

            <div className="space-y-12 my-8">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.jpg"
                    alt="دراسة حالة 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">مجمع سكني متكامل</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">التحدي</h4>
                      <p className="text-gray-600">تصميم وتنفيذ مجمع سكني يجمع بين الحداثة والاستدامة مع مراعاة الميزانية المحددة.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">الحل</h4>
                      <p className="text-gray-600">تطوير تصميم مبتكر يستخدم مواد محلية وتقنيات حديثة لتحقيق التوازن بين التكلفة والجودة.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">النتائج</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>توفير 30% في تكاليف البناء</li>
                        <li>تحقيق معايير الاستدامة</li>
                        <li>إنجاز المشروع قبل الموعد المحدد</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/placeholder.jpg"
                    alt="دراسة حالة 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">مركز تجاري حديث</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">التحدي</h4>
                      <p className="text-gray-600">تحويل مبنى قديم إلى مركز تجاري عصري مع الحفاظ على الطابع المعماري الأصلي.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">الحل</h4>
                      <p className="text-gray-600">دمج التصميم الحديث مع العناصر التراثية وتطبيق تقنيات ترميم متطورة.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">النتائج</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        <li>زيادة المساحة القابلة للاستخدام بنسبة 40%</li>
                        <li>الحفاظ على الهوية المعمارية</li>
                        <li>تحسين كفاءة استهلاك الطاقة</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">منهجيتنا في دراسات الحالة</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التحليل</h4>
                  <p className="text-gray-600">دراسة شاملة للمشروع وتحدياته</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التخطيط</h4>
                  <p className="text-gray-600">وضع استراتيجيات الحل المناسبة</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التنفيذ</h4>
                  <p className="text-gray-600">تطبيق الحلول بكفاءة عالية</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">التقييم</h4>
                  <p className="text-gray-600">قياس النتائج وتوثيق النجاحات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
