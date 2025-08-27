import PageTemplate from '@/app/components/PageTemplate'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <PageTemplate
      title="المشاريع"
      subtitle="مشاريعنا المنجزة والقيد التنفيذ والمستقبلية"
      description="نفخر بسجلنا الحافل في تنفيذ المشاريع الهندسية المتنوعة في مختلف القطاعات"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Projects Overview */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">أنواع المشاريع</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Completed Projects */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">مشاريع منجزة</h3>
                <p className="text-gray-600 text-sm mb-4">مشاريع تم إنجازها بنجاح في مختلف القطاعات</p>
              </div>
              <Link 
                href="/projects/completed"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض المشاريع
              </Link>
            </div>

            {/* Ongoing Projects */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">مشاريع قيد التنفيذ</h3>
                <p className="text-gray-600 text-sm mb-4">مشاريع حالية قيد التنفيذ والتطوير</p>
              </div>
              <Link 
                href="/projects/ongoing"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض المشاريع
              </Link>
            </div>

            {/* Future Projects */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">مشاريع مستقبلية</h3>
                <p className="text-gray-600 text-sm mb-4">مشاريع مخطط لها في المستقبل القريب</p>
              </div>
              <Link 
                href="/projects/future"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض المشاريع
              </Link>
            </div>
          </div>
        </section>

        {/* Project Statistics */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">إحصائيات المشاريع</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-700 text-right">مشروع منجز</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700 text-right">مشروع قيد التنفيذ</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 text-right">مشروع مستقبلي</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700 text-right">معدل رضا العملاء</div>
            </div>
          </div>
        </section>

        {/* Project Categories */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">مجالات المشاريع</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-green-600 text-right mb-4">المشاريع الهندسية</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  مشاريع البنية التحتية
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  مشاريع المباني والمنشآت
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  مشاريع الطرق والجسور
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-600 text-right mb-4">مشاريع الطيران</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تطوير المطارات
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  أنظمة الطيران
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  البنية التحتية للطيران
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تريد التعرف على مشاريعنا؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا لمعرفة المزيد عن مشاريعنا وخبراتنا</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/consultation"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              طلب استشارة
            </a>
            <a
              href="/contact/info"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              معلومات أكثر
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}
