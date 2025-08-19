'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function MembershipsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">العضويات</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="العضويات"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نحن أعضاء في العديد من المنظمات والهيئات المهنية المرموقة محلياً ودولياً.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">عضوياتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>نقابة المهندسين الليبية</li>
                  <li>اتحاد المهندسين العرب</li>
                  <li>جمعية المهندسين المعماريين</li>
                  <li>منظمات هندسية دولية</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات العضوية</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تبادل الخبرات المهنية</li>
                  <li>المشاركة في المؤتمرات</li>
                  <li>التطوير المهني المستمر</li>
                  <li>التواصل مع الخبراء</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">التواصل المهني</h3>
              <p className="text-gray-600">
                نحرص على المشاركة الفعالة في الأنشطة والفعاليات المهنية لتبادل الخبرات وتطوير القطاع الهندسي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
