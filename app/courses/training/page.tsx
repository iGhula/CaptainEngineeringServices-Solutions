import PageTemplate from '@/app/components/PageTemplate'

export default function TrainingCoursesPage() {
  return (
    <PageTemplate
      title="التدريب"
      subtitle="برامج تدريبية متخصصة ومتقدمة"
      description="نقدم برامج تدريبية شاملة ومتخصصة في مختلف المجالات الهندسية والإدارية"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Training Programs Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-right">برامج التدريب المتاحة</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-r-4 border-green-500 pr-4">
                <h3 className="text-xl font-semibold text-green-600 text-right mb-3">التدريب المهني</h3>
                <p className="text-gray-700 text-right mb-3">برامج تدريبية متخصصة في المهارات المهنية المطلوبة</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 1-3 أشهر</p>
                  <p>المستوى: مبتدئ - متقدم</p>
                </div>
              </div>
              
              <div className="border-r-4 border-blue-500 pr-4">
                <h3 className="text-xl font-semibold text-blue-600 text-right mb-3">التدريب الإداري</h3>
                <p className="text-gray-700 text-right mb-3">برامج تدريبية في القيادة والإدارة الحديثة</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 2-4 أشهر</p>
                  <p>المستوى: متوسط - متقدم</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="border-r-4 border-purple-500 pr-4">
                <h3 className="text-xl font-semibold text-purple-600 text-right mb-3">التدريب التقني</h3>
                <p className="text-gray-700 text-right mb-3">برامج تدريبية في التقنيات الحديثة والبرمجيات</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: 1-2 شهر</p>
                  <p>المستوى: مبتدئ - متوسط</p>
                </div>
              </div>
              
              <div className="border-r-4 border-orange-500 pr-4">
                <h3 className="text-xl font-semibold text-orange-600 text-right mb-3">التدريب المتخصص</h3>
                <p className="text-gray-700 text-right mb-3">برامج تدريبية في مجالات متخصصة حسب الطلب</p>
                <div className="text-sm text-gray-600 text-right">
                  <p>المدة: متغيرة</p>
                  <p>المستوى: حسب المتطلبات</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Features */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">مميزات برامج التدريب</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 5.477 5.754 5 7.5 5c1.747 0 3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 5.477 18.246 5 16.5 5c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">محتوى مخصص</h3>
              <p className="text-gray-600 text-sm">محتوى تدريبي مخصص حسب احتياجات الشركة أو المؤسسة</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">مدربون خبراء</h3>
              <p className="text-gray-600 text-sm">مدربون ذوو خبرة عالية في مجالات تخصصهم</p>
            </div>
            
            <div className="text-center p-4 bg-white rounded-xl shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">شهادات معتمدة</h3>
              <p className="text-gray-600 text-sm">شهادات تدريب معتمدة من جهات معترف بها</p>
            </div>
          </div>
        </section>

        {/* Training Methods */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">طرق التدريب</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
              <h3 className="text-xl font-semibold text-green-600 text-right mb-4">التدريب المباشر</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تدريب وجهاً لوجه
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تفاعل مباشر مع المدرب
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  تطبيق عملي فوري
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-600 text-right mb-4">التدريب عن بعد</h3>
              <ul className="space-y-2 text-right text-gray-700">
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  منصات تعليمية متطورة
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  مرونة في الوقت والمكان
                </li>
                <li className="flex items-center justify-end">
                  <span className="ml-2">•</span>
                  محتوى تفاعلي متقدم
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training Schedule */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">جدول التدريب</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-green-50">
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">البرنامج</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">تاريخ البداية</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">المدة</th>
                  <th className="px-4 py-3 text-right font-semibold text-gray-700">السعر</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">التدريب المهني</td>
                  <td className="px-4 py-3 text-gray-600">1 يناير 2025</td>
                  <td className="px-4 py-3 text-gray-600">2 شهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">1200 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">التدريب الإداري</td>
                  <td className="px-4 py-3 text-gray-600">15 يناير 2025</td>
                  <td className="px-4 py-3 text-gray-600">3 أشهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">1800 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">التدريب التقني</td>
                  <td className="px-4 py-3 text-gray-600">1 فبراير 2025</td>
                  <td className="px-4 py-3 text-gray-600">1.5 شهر</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">1000 دينار</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-gray-800">التدريب المتخصص</td>
                  <td className="px-4 py-3 text-gray-600">حسب الطلب</td>
                  <td className="px-4 py-3 text-gray-600">متغيرة</td>
                  <td className="px-4 py-3 text-green-600 font-semibold">حسب البرنامج</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">هل تحتاج إلى برنامج تدريبي مخصص؟</h2>
          <p className="text-lg mb-6 opacity-90">تواصل معنا لتصميم برنامج تدريبي يناسب احتياجاتك</p>
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
