'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function ConstructionSupervisionPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الإشراف على التنفيذ</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="الإشراف على التنفيذ"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم خدمات إشراف هندسي متكاملة لضمان تنفيذ المشاريع وفقاً للمخططات والمواصفات المعتمدة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدمات الإشراف</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>الإشراف على التنفيذ</li>
                  <li>مراقبة الجودة</li>
                  <li>متابعة الجدول الزمني</li>
                  <li>إدارة المشاريع</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات خدماتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>فريق مؤهل من المهندسين</li>
                  <li>متابعة يومية للمشاريع</li>
                  <li>تقارير دورية مفصلة</li>
                  <li>حلول فورية للتحديات</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">منهجية الإشراف</h2>
            <p className="text-gray-600 mb-6">
              نتبع منهجية إشراف صارمة تضمن تنفيذ المشاريع بأعلى معايير الجودة والسلامة، مع الالتزام بالجدول الزمني والميزانية المحددة.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب خدمة إشراف</h3>
              <p className="text-gray-600">
                هل تحتاج إلى خدمات إشراف هندسي لمشروعك؟ تواصل معنا اليوم لمناقشة احتياجاتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}