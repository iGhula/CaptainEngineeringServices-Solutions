'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'

export default function CompanyPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">نبذة عن الشركة</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="مقر الشركة"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              تأسست شركة الكابتن للخدمات والحلول الهندسية في عام 2010، وقد نجحت منذ ذلك الحين في ترسيخ مكانتها كواحدة من الشركات الرائدة في مجال الخدمات الهندسية في ليبيا.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">خبرتنا</h2>
            <p className="text-gray-600 mb-6">
              نمتلك خبرة تمتد لأكثر من 13 عاماً في مجال الاستشارات الهندسية والتصميم المعماري والإشراف على التنفيذ. قمنا بتنفيذ أكثر من 500 مشروع ناجح في مختلف أنحاء ليبيا.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">قيمنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>الجودة والتميز في كل مشاريعنا</li>
                  <li>الالتزام بالمواعيد والمعايير</li>
                  <li>الابتكار في الحلول الهندسية</li>
                  <li>الشفافية والمصداقية في التعامل</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-800">إنجازاتنا</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>أكثر من 500 مشروع منجز</li>
                  <li>فريق من 50 مهندس وخبير</li>
                  <li>حضور في 10 مدن ليبية</li>
                  <li>شراكات مع كبرى الشركات العالمية</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">التزامنا</h2>
            <p className="text-gray-600 mb-6">
              نلتزم بتقديم أفضل الخدمات الهندسية وفقاً للمعايير العالمية، مع التركيز على الابتكار والاستدامة في جميع مشاريعنا. نسعى دائماً لتجاوز توقعات عملائنا وتحقيق أعلى مستويات الرضا.
            </p>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">تواصل معنا</h3>
              <p className="text-gray-600">
                نحن هنا لمساعدتك في تحقيق رؤيتك الهندسية. تواصل معنا اليوم لمناقشة مشروعك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}