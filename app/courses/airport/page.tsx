import PageTemplate from '@/app/components/PageTemplate'

export default function AirportCoursesPage() {
  return (
    <PageTemplate
      title="دورات المطار"
      subtitle="دورات متخصصة في إدارة وتشغيل المطارات"
      description="نقدم دورات شاملة في مجال إدارة المطارات وتشغيلها تشمل الأمان والسلامة وإدارة العمليات"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Courses Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right">دورات المطار المتاحة</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-xl font-semibold text-green-600 text-right mb-3">إدارة المطارات</h3>
                <p className="text-gray-700 text-right mb-3">دورة شاملة في إدارة المطارات وتشغيلها بكفاءة عالية</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 3 أشهر</p>
                  <p>المستوى: متقدم</p>
                </div>
              </div>
              
              <div className="border-r-4 border-blue-500 pr-4">
                <h3 className="text-xl font-semibold text-blue-600 text-right mb-3">أمان وسلامة المطارات</h3>
                <p className="text-gray-700 text-right mb-3">دورة متخصصة في أنظمة الأمان والسلامة في المطارات</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 2 شهر</p>
                  <p>المستوى: متوسط</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-xl font-semibold text-green-600 text-right mb-3">إدارة حركة الطائرات</h3>
                <p className="text-gray-700 text-right mb-3">دورة في تخطيط وإدارة حركة الطائرات في المطارات</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 2.5 شهر</p>
                  <p>المستوى: متقدم</p>
                </div>
              </div>
              
              <div className="border-r-4 border-blue-500 pr-4">
                <h3 className="text-xl font-semibold text-blue-600 text-right mb-3">صيانة البنية التحتية</h3>
                <p className="text-gray-700 text-right mb-3">دورة في صيانة وإدارة البنية التحتية للمطارات</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 3 أشهر</p>
                  <p>المستوى: متوسط</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">مميزات الدورات</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 5.477 18.246 5 16.5 5c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">محتوى عملي</h3>
              <p className="text-gray-600 text-sm">تدريب عملي على أحدث المعدات والتقنيات</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">مدربون خبراء</h3>
              <p className="text-gray-600 text-sm">مدربون ذوو خبرة عالية في مجال الطيران والمطارات</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">شهادات معتمدة</h3>
              <p className="text-gray-600 text-sm">شهادات معتمدة دولياً في مجال إدارة المطارات</p>
            </div>
          </div>
        </section>

        {/* Course Schedule */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">جدول الدورات</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">الدورة</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">تاريخ البداية</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">المدة</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">السعر</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">إدارة المطارات</td>
                  <td className="px-4 py-3 text-gray-600">15 يناير 2025</td>
                  <td className="px-4 py-3 text-gray-600">3 أشهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">2000 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">أمان وسلامة المطارات</td>
                  <td className="px-4 py-3 text-gray-600">1 فبراير 2025</td>
                  <td className="px-4 py-3 text-gray-600">2 شهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">1500 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">إدارة حركة الطائرات</td>
                  <td className="px-4 py-3 text-gray-600">15 فبراير 2025</td>
                  <td className="px-4 py-3 text-gray-600">2.5 شهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">1800 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">صيانة البنية التحتية</td>
                  <td className="px-4 py-3 text-gray-600">1 مارس 2025</td>
                  <td className="px-4 py-3 text-gray-600">3 أشهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">2000 دينار</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Registration CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">سجل الآن في دورات المطار</h2>
          <p className="text-lg mb-6 opacity-90">احجز مكانك في أقرب دورة متاحة</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/register"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              التسجيل الآن
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
