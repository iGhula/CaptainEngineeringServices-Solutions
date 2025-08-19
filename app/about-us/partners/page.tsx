'use client'

import Image from 'next/image'

const partners = [
  {
    name: "شركة الإعمار الهندسية",
    logo: "/placeholder-logo.png",
    description: "شريك استراتيجي في مجال التطوير العقاري والإنشاءات",
    type: "شريك استراتيجي"
  },
  {
    name: "مجموعة التقنية المتقدمة",
    logo: "/placeholder-logo.png",
    description: "شريك تقني في مجال الحلول الهندسية الذكية",
    type: "شريك تقني"
  },
  {
    name: "شركة المستقبل للمقاولات",
    logo: "/placeholder-logo.png",
    description: "شريك تنفيذي في مشاريع البناء والتشييد",
    type: "شريك تنفيذي"
  },
  {
    name: "مؤسسة الابتكار الهندسي",
    logo: "/placeholder-logo.png",
    description: "شريك في مجال البحث والتطوير الهندسي",
    type: "شريك بحثي"
  },
  {
    name: "شركة الخليج للاستشارات",
    logo: "/placeholder-logo.png",
    description: "شريك في مجال الاستشارات الهندسية",
    type: "شريك استشاري"
  },
  {
    name: "مجموعة الأفق للتطوير",
    logo: "/placeholder-logo.png",
    description: "شريك في مجال التطوير العمراني",
    type: "شريك تطويري"
  }
]

export default function PartnersPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">شركاؤنا</h1>

        <div className="text-right mb-12" dir="rtl">
          <p className="text-gray-600 text-lg mb-6">
            نفخر بشراكاتنا الاستراتيجية مع كبرى الشركات والمؤسسات في مجال الهندسة والبناء. هذه الشراكات تمكننا من تقديم خدمات متكاملة وحلول مبتكرة لعملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 flex flex-col items-center">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                  <p className="text-green-600 font-semibold mb-3">{partner.type}</p>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-right" dir="rtl">
          <div className="bg-green-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">مميزات الشراكة معنا</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">فرص تعاون في مشاريع كبرى</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">تبادل الخبرات والمعرفة</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">دعم فني ولوجستي متكامل</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">فرص تطوير مشتركة</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">كن شريكاً معنا</h2>
            <p className="text-gray-600 mb-6">
              نرحب بالشراكات الجديدة التي تضيف قيمة لخدماتنا وتساهم في تحقيق رؤيتنا المشتركة للتطوير والابتكار في مجال الهندسة.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
              تواصل معنا للشراكة
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 p-8 rounded-2xl text-right" dir="rtl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">شهادات شركائنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "شراكتنا مع الكابتن للخدمات الهندسية كانت مثمرة وناجحة. نقدر مهنيتهم العالية والتزامهم بالجودة."
              </p>
              <p className="text-gray-800 font-semibold">- المدير التنفيذي، شركة الإعمار الهندسية</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-600 italic mb-4">
                "تجربة متميزة في العمل المشترك. فريق محترف يقدم حلولاً مبتكرة ويلتزم بالمعايير العالمية."
              </p>
              <p className="text-gray-800 font-semibold">- رئيس مجلس الإدارة، مجموعة التقنية المتقدمة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
