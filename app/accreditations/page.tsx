import PageTemplate from '@/app/components/PageTemplate'
import Link from 'next/link'

export default function AccreditationsPage() {
  return (
    <PageTemplate
      title="الاعتمادات والشهادات"
      subtitle="شهادات معتمدة وتراخيص مهنية معترف بها دولياً"
      description="نفخر بحصولنا على العديد من الاعتمادات والشهادات المهنية والتراخيص من جهات معترف بها دولياً"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Accreditations Overview */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">أنواع الاعتمادات المتاحة</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Professional Certificates */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الشهادات المهنية</h3>
                <p className="text-gray-600 text-sm mb-4">شهادات مهنية معتمدة في مختلف التخصصات الهندسية</p>
              </div>
              <Link 
                href="/accreditations/professional"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض الشهادات
              </Link>
            </div>

            {/* Licenses */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">التراخيص</h3>
                <p className="text-gray-600 text-sm mb-4">تراخيص رسمية لممارسة الأنشطة الهندسية</p>
              </div>
              <Link 
                href="/accreditations/licenses"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض التراخيص
              </Link>
            </div>

            {/* Memberships */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">العضويات</h3>
                <p className="text-gray-600 text-sm mb-4">عضوية في منظمات وهيئات مهنية معترف بها</p>
              </div>
              <Link 
                href="/accreditations/memberships"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض العضويات
              </Link>
            </div>

            {/* Awards */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الجوائز</h3>
                <p className="text-gray-600 text-sm mb-4">جوائز وتقديرات في مجال الخدمات الهندسية</p>
              </div>
              <Link 
                href="/accreditations/awards"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض الجوائز
              </Link>
            </div>
          </div>
        </section>

        {/* Why Our Accreditations Matter */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">لماذا تعتبر اعتماداتنا مهمة</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">جودة معتمدة</h3>
              <p className="text-gray-600 text-sm">ضمان جودة الخدمات وفقاً للمعايير الدولية</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">ثقة العملاء</h3>
              <p className="text-gray-600 text-sm">بناء ثقة العملاء من خلال الاعتمادات المعترف بها</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">خبرة معترف بها</h3>
              <p className="text-gray-600 text-sm">اعتراف دولي بخبرتنا وكفاءتنا في المجال</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى معلومات حول اعتماداتنا؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا للحصول على تفاصيل أكثر حول شهاداتنا واعتماداتنا</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/info"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              معلومات أكثر
            </a>
            <a
              href="/contact/consultation"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              طلب استشارة
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}
