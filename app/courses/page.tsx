import PageTemplate from '@/app/components/PageTemplate'
import Link from 'next/link'

export default function CoursesPage() {
  return (
    <PageTemplate
      title="الدورات والتدريب"
      subtitle="دورات متخصصة في مختلف المجالات الهندسية والإدارية"
      description="نقدم مجموعة شاملة من الدورات والبرامج التدريبية في مجالات متعددة تشمل الهندسة والطيران والإدارة"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Main Courses Overview */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">مجالات الدورات المتاحة</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engineering Courses */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.21 12a8.5 8.5 0 01-6.5 6.5m0 0a8.5 8.5 0 01-6.5-6.5m6.5 6.5v-3.5m0 3.5v3.5m0-3.5h3.5m-3.5 0h-3.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">دورات هندسية</h3>
                <p className="text-gray-600 text-sm mb-4">دورات متخصصة في مختلف التخصصات الهندسية</p>
              </div>
              <Link 
                href="/courses/engineering"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض الدورات
              </Link>
            </div>

            {/* Airport Courses */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">دورات المطار</h3>
                <p className="text-gray-600 text-sm mb-4">دورات في إدارة وتشغيل المطارات</p>
              </div>
              <Link 
                href="/courses/airport"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض الدورات
              </Link>
            </div>

            {/* Management Courses */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">دورات إدارية</h3>
                <p className="text-gray-600 text-sm mb-4">دورات في القيادة والإدارة الحديثة</p>
              </div>
              <Link 
                href="/courses/management"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض الدورات
              </Link>
            </div>

            {/* Aviation Courses */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">دورات الطيران</h3>
                <p className="text-gray-600 text-sm mb-4">دورات متخصصة في مجال الطيران</p>
              </div>
              <Link 
                href="/courses/aviation"
                className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                عرض الدورات
              </Link>
            </div>

            {/* Training Programs */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 5.477 18.246 5 16.5 5c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">برامج التدريب</h3>
                <p className="text-gray-600 text-sm mb-4">برامج تدريبية متخصصة ومتقدمة</p>
              </div>
              <Link 
                href="/courses/training"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                عرض البرامج
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">لماذا تختار دوراتنا</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">مدربون خبراء</h3>
              <p className="text-gray-600 text-sm">مدربون ذوو خبرة عالية في مجالات تخصصهم</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">شهادات معتمدة</h3>
              <p className="text-gray-600 text-sm">شهادات معتمدة من جهات معترف بها دولياً</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">محتوى عملي</h3>
              <p className="text-gray-600 text-sm">تدريب عملي على أحدث المعدات والتقنيات</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى استشارة حول الدورات؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا للحصول على معلومات أكثر تفصيلاً</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact/consultation"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              طلب استشارة
            </a>
            <a
              href="/register"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              التسجيل الآن
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}
