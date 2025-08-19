'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function ArchitecturalDesignPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">التصميم المعماري</h1>
          
          <div className="mb-8">
            <Image
              src="/architectural-engineering-design.png"
              alt="التصميم المعماري"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نقدم خدمات تصميم معماري متكاملة تجمع بين الإبداع والوظيفة، مع التركيز على الاستدامة وكفاءة استخدام الطاقة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">خدمات التصميم</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تصميم المباني السكنية</li>
                  <li>تصميم المجمعات التجارية</li>
                  <li>تصميم المباني الإدارية</li>
                  <li>تصميم المرافق العامة</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">مميزات تصاميمنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>تصاميم عصرية ومبتكرة</li>
                  <li>مراعاة الاستدامة البيئية</li>
                  <li>كفاءة في استخدام المساحات</li>
                  <li>تكامل مع المحيط العمراني</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">منهجية التصميم</h2>
            <p className="text-gray-600 mb-6">
              نتبع منهجية تصميم شاملة تبدأ من فهم احتياجات العميل وتنتهي بتقديم تصاميم مفصلة وقابلة للتنفيذ.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">طلب خدمة تصميم</h3>
              <p className="text-gray-600">
                هل لديك مشروع تريد تصميمه؟ تواصل معنا اليوم لمناقشة أفكارك ورؤيتك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}