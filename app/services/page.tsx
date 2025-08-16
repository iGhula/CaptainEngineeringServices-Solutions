import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ServicesPage() {
  const services = [
    {
      title: 'الاستشارات الهندسية',
      description: 'نقدم استشارات هندسية متخصصة في جميع المجالات'
    },
    {
      title: 'التصميم المعماري',
      description: 'تصميم معماري مبتكر يلبي احتياجاتكم'
    },
    {
      title: 'الإشراف على التنفيذ',
      description: 'إشراف فني متخصص لضمان جودة التنفيذ'
    },
    {
      title: 'دراسات الجدوى',
      description: 'دراسات جدوى شاملة لمشاريعكم'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">خدماتنا</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-600 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
