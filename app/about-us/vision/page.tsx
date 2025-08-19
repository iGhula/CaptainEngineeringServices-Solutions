'use client'

import Image from 'next/image'

export default function VisionPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">رؤيتنا ورسالتنا</h1>

        <div className="mb-12">
          <Image
            src="/modern-engineering-office.png"
            alt="مكتب الشركة الحديث"
            width={800}
            height={400}
            className="rounded-2xl shadow-lg mb-6 w-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" dir="rtl">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">رؤيتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              نطمح أن نكون الشريك الهندسي الأول في ليبيا والمنطقة، من خلال تقديم حلول هندسية مبتكرة ومستدامة تساهم في تطوير المجتمع وتحقيق التنمية المستدامة.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-green-100">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">رسالتنا</h2>
            <p className="text-gray-600 leading-relaxed">
              تقديم خدمات هندسية متكاملة بأعلى معايير الجودة والاحترافية، مع التركيز على الابتكار والاستدامة في جميع مشاريعنا، وتطوير كوادرنا المهنية باستمرار.
            </p>
          </div>
        </div>

        <div className="text-right" dir="rtl">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">قيمنا الأساسية</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">الجودة</h3>
              <p className="text-gray-600">نلتزم بتقديم أعلى معايير الجودة في جميع خدماتنا ومشاريعنا</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">الابتكار</h3>
              <p className="text-gray-600">نسعى دائماً لتقديم حلول مبتكرة تلبي احتياجات عملائنا</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">المصداقية</h3>
              <p className="text-gray-600">نؤمن بالشفافية والمصداقية في جميع تعاملاتنا</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">الاحترافية</h3>
              <p className="text-gray-600">نعمل بمهنية عالية ونلتزم بالمعايير العالمية</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">التطوير المستمر</h3>
              <p className="text-gray-600">نحرص على تطوير مهاراتنا وخدماتنا باستمرار</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold mb-3 text-green-700">المسؤولية المجتمعية</h3>
              <p className="text-gray-600">نساهم في تنمية المجتمع ونحافظ على البيئة</p>
            </div>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">أهدافنا الاستراتيجية</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                توسيع نطاق خدماتنا لتشمل جميع أنحاء ليبيا
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                تطوير كوادرنا المهنية وتعزيز قدراتهم
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                تبني أحدث التقنيات في مجال الهندسة
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                بناء شراكات استراتيجية مع الشركات العالمية
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
