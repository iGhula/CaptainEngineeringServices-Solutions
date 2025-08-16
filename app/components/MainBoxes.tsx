import Link from 'next/link'
import { UserPlus, HelpCircle, Newspaper, Network } from 'lucide-react'

const boxes = [
  {
    title: 'سجل معنا',
    icon: UserPlus,
    href: '/register',
    description: 'انضم إلى شبكة عملائنا واحصل على أفضل الخدمات'
  },
  {
    title: 'الشائعة',
    icon: HelpCircle,
    href: '/faq',
    description: 'الأسئلة الأكثر شيوعاً وإجاباتها'
  },
  {
    title: 'آخر الأخبار',
    icon: Newspaper,
    href: '/news',
    description: 'تابع آخر أخبار الشركة والمشاريع الجديدة'
  },
  {
    title: 'الشبكة',
    icon: Network,
    href: '/network',
    description: 'شبكة شركائنا وعملائنا حول العالم'
  }
]

export default function MainBoxes() {
  return (
    <section className="relative -mt-32 z-20 mb-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boxes.map((box, index) => {
            const IconComponent = box.icon
            return (
              <Link
                key={index}
                href={box.href}
                className="group bg-green-600 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {box.title}
                  </h3>
                  <p className="text-white text-sm opacity-90">
                    {box.description}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
