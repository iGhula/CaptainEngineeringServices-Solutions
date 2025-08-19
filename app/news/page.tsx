import PageTemplate from '../components/PageTemplate'
import Image from 'next/image'

export default function NewsPage() {
  return (
    <PageTemplate>
      <div className="relative h-[600px] w-full mb-8">
        <Image
          src="/engineering-construction-site.png"
          alt="موقع بناء هندسي"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">آخر الأخبار</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">أحدث التطورات والمستجدات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News items */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/engineering-construction-site.png"
                alt="مشروع جديد"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">إطلاق مشروع جديد</h3>
              <p className="text-gray-600 mb-4">تم إطلاق مشروع تطوير البنية التحتية في المنطقة الصناعية</p>
              <span className="text-sm text-gray-500">15 يناير 2024</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/architectural-engineering-design.png"
                alt="شراكة جديدة"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">شراكة استراتيجية جديدة</h3>
              <p className="text-gray-600 mb-4">توقيع اتفاقية تعاون مع شركات هندسية عالمية</p>
              <span className="text-sm text-gray-500">10 يناير 2024</span>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/modern-engineering-office.png"
                alt="دورات تدريبية"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">دورات تدريبية جديدة</h3>
              <p className="text-gray-600 mb-4">إطلاق سلسلة من الدورات التدريبية في مجال الهندسة</p>
              <span className="text-sm text-gray-500">5 يناير 2024</span>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
