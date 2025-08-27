import PageTemplate from '@/app/components/PageTemplate'

export default function AviationAirportsPage() {
  return (
    <PageTemplate
      title="خدمات الطيران والمطارات"
      subtitle="خدمات متخصصة في مجال الطيران وإدارة المطارات"
      description="نقدم خدمات شاملة في مجال الطيران والمطارات تشمل الاستشارات الهندسية والتدريب المتخصص وإدارة المشاريع"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Services Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right">خدماتنا في مجال الطيران والمطارات</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 text-right">خدمات المطارات</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تصميم وتطوير المطارات
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  إدارة مشاريع البنية التحتية
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  أنظمة الأمان والمراقبة
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  إدارة حركة الطائرات
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-600 text-right">خدمات الطيران</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  استشارات هندسية للطائرات
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  صيانة وتطوير المعدات
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تدريب الطواقم الفنية
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  إدارة الجودة والسلامة
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">خبرتنا في المجال</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-700 text-right">سنة خبرة</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-700 text-right">مشروع منجز</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-700 text-right">عميل راضٍ</div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">لماذا تختار خدماتنا</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">خبرة متخصصة</h3>
                <p className="text-gray-600 text-sm">فريق من المهندسين المتخصصين في مجال الطيران والمطارات</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">حلول مبتكرة</h3>
                <p className="text-gray-600 text-sm">نقدم حلولاً مبتكرة ومتطورة لجميع التحديات</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">معايير السلامة</h3>
                <p className="text-gray-600 text-sm">نلتزم بأعلى معايير السلامة والجودة العالمية</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 space-x-reverse">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-right">
                <h3 className="font-semibold text-gray-800">دعم متواصل</h3>
                <p className="text-gray-600 text-sm">نقدم دعماً متواصلاً وخدمة عملاء على مدار الساعة</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى استشارة في مجال الطيران والمطارات؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا اليوم للحصول على استشارة مجانية</p>
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
              معلومات التواصل
            </a>
          </div>
        </section>
      </div>
    </PageTemplate>
  )
}
