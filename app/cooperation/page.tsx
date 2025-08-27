import PageTemplate from '@/app/components/PageTemplate'
import Link from 'next/link'

export default function CooperationPage() {
  return (
    <PageTemplate
      title="التعاون والشراكة"
      subtitle="فرص التعاون والشراكة في مختلف المجالات"
      description="نسعى لبناء شراكات قوية مع المؤسسات والشركات في مختلف القطاعات لتحقيق التميز والابتكار"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Cooperation Overview */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">مجالات التعاون</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Partnership Opportunities */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">فرص الشراكة</h3>
                <p className="text-gray-600 text-sm mb-4">شراكات استراتيجية في المشاريع والخدمات</p>
              </div>
              <Link 
                href="/cooperation/partnership"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض الفرص
              </Link>
            </div>

            {/* Careers */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">التوظيف</h3>
                <p className="text-gray-600 text-sm mb-4">فرص عمل للكفاءات المتميزة</p>
              </div>
              <Link 
                href="/cooperation/careers"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض الوظائف
              </Link>
            </div>

            {/* Initiatives */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">المبادرات</h3>
                <p className="text-gray-600 text-sm mb-4">مبادرات مجتمعية وتنموية</p>
              </div>
              <Link 
                href="/cooperation/initiatives"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض المبادرات
              </Link>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">لماذا تختار التعاون معنا</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">خبرة موثقة</h3>
              <p className="text-gray-600 text-sm">خبرة 15+ سنة في مجال الخدمات الهندسية</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">حلول مبتكرة</h3>
              <p className="text-gray-600 text-sm">حلول مبتكرة ومتطورة لجميع التحديات</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">فريق متخصص</h3>
              <p className="text-gray-600 text-sm">فريق من المهندسين والخبراء المتخصصين</p>
            </div>
          </div>
        </section>

        {/* Cooperation Benefits */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">مزايا التعاون معنا</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-green-600 text-right mb-4">مزايا الشراكة</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تقاسم المخاطر والأرباح
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  الوصول لأسواق جديدة
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تبادل الخبرات والمعرفة
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-600 text-right mb-4">مزايا التوظيف</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  بيئة عمل محفزة
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  فرص تطوير مهني
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  رواتب ومزايا تنافسية
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تريد التعاون معنا؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا لمناقشة فرص التعاون والشراكة</p>
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
