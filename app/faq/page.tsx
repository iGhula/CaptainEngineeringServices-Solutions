import PageTemplate from '../components/PageTemplate'
import Image from 'next/image'

export default function FAQPage() {
  return (
    <PageTemplate>
      <div className="relative h-[600px] w-full mb-8">
        <Image
          src="/modern-engineering-office.png"
          alt="مكتب هندسي حديث"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">الأسئلة الشائعة</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">استكشف إجابات أسئلتك</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* FAQ Categories */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">خدماتنا</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">ما هي الخدمات التي تقدمونها؟</h4>
                <p className="text-gray-600">نقدم مجموعة واسعة من الخدمات الهندسية تشمل التصميم المعماري، الاستشارات الهندسية، الإشراف على البناء، ودراسات الجدوى.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">كيف يمكنني طلب استشارة؟</h4>
                <p className="text-gray-600">يمكنك طلب استشارة من خلال صفحة الاتصال بنا أو زيارة أحد مكاتبنا مباشرة.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">الدورات التدريبية</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">كيف يمكنني التسجيل في الدورات؟</h4>
                <p className="text-gray-600">يمكنك التسجيل في دوراتنا من خلال صفحة التسجيل أو التواصل مع قسم التدريب مباشرة.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">هل تقدمون شهادات معتمدة؟</h4>
                <p className="text-gray-600">نعم، جميع دوراتنا معتمدة ونقدم شهادات معترف بها محلياً ودولياً.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4">المشاريع</h3>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">كيف يمكنني متابعة تقدم مشروعي؟</h4>
                <p className="text-gray-600">نوفر نظام متابعة خاص لعملائنا يمكنهم من خلاله الاطلاع على تقدم مشاريعهم بشكل مستمر.</p>
              </div>
              <div className="border-b pb-4">
                <h4 className="font-medium text-green-600 mb-2">ما هي مدة تنفيذ المشاريع؟</h4>
                <p className="text-gray-600">تختلف مدة التنفيذ حسب حجم وطبيعة المشروع، ويتم تحديد ذلك بدقة في العقد المبرم.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
