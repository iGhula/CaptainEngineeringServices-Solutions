'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function EngineeringConsultationsPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">الاستشارات الهندسية</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="الاستشارات الهندسية"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم خدمات استشارية هندسية متكاملة تغطي جميع مراحل المشروع، من الدراسات الأولية إلى التنفيذ والإشراف.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدماتنا الاستشارية</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>دراسات الجدوى الفنية</li>
                  <li>التصميم المعماري</li>
                  <li>الإشراف على التنفيذ</li>
                  <li>إدارة المشاريع</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزاتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>فريق من الخبراء المتخصصين</li>
                  <li>حلول مبتكرة وعملية</li>
                  <li>التزام بالمواعيد</li>
                  <li>جودة عالية في التنفيذ</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">منهجية العمل</h2>
            <p className="text-gray-600 mb-6">
              نتبع منهجية علمية دقيقة في تقديم الاستشارات الهندسية، تبدأ بدراسة متطلبات العميل وتنتهي بتقديم الحلول المناسبة وتنفيذها.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب استشارة</h3>
              <p className="text-gray-600">
                نحن هنا لمساعدتك في تحقيق رؤيتك الهندسية. تواصل معنا اليوم لمناقشة مشروعك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}