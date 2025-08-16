'use client'

import Image from 'next/image'
import Link from 'next/link'

const news = [
  {
    id: 1,
    title: 'افتتاح مشروع سكني جديد',
    image: '/modern-engineering-office.png',
    description: 'تم افتتاح أحدث مشاريعنا السكنية في قلب المدينة'
  },
  {
    id: 2,
    title: 'توسيع نطاق خدماتنا الهندسية',
    image: '/engineering-construction-site.png',
    description: 'إضافة خدمات جديدة لتلبية احتياجات عملائنا'
  },
  {
    id: 3,
    title: 'شراكة استراتيجية جديدة',
    image: '/industrial-engineering-facility.png',
    description: 'توقيع اتفاقية شراكة مع شركات عالمية'
  }
]

const projects = [
  {
    id: 1,
    title: 'مشروع المجمع السكني الذكي',
    image: '/architectural-engineering-design.png',
    description: 'تصميم وتنفيذ مجمع سكني ذكي متكامل'
  },
  {
    id: 2,
    title: 'تطوير البنية التحتية',
    image: '/engineering-construction-site.png',
    description: 'مشروع تحديث وتطوير البنية التحتية للمدينة'
  },
  {
    id: 3,
    title: 'المباني الخضراء المستدامة',
    image: '/modern-engineering-office.png',
    description: 'تنفيذ مشاريع صديقة للبيئة بمعايير عالمية'
  }
]

export default function NewsAndProjects() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* News Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">آخر الأخبار</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right">{item.title}</h3>
                  <p className="text-gray-600 text-right">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-right">مشاريعنا المميزة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-right">{item.title}</h3>
                  <p className="text-gray-600 text-right">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
