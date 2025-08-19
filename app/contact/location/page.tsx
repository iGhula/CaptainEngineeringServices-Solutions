'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function LocationPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">موقعنا</h1>
          
          <div className="mb-8">
            <Image
              src="/engineering-construction-site.png"
              alt="موقعنا"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نتواجد في مواقع استراتيجية في مختلف أنحاء ليبيا لنكون قريبين من عملائنا.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">المقر الرئيسي - طرابلس</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p>شارع الاستقلال</p>
                      <p>مبنى الكابتن، الطابق الثالث</p>
                      <p>طرابلس، ليبيا</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p>+218 91-XXXXXXX</p>
                      <p>+218 92-XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">فرع بنغازي</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p>شارع الحرية</p>
                      <p>مجمع الأعمال، الطابق الثاني</p>
                      <p>بنغازي، ليبيا</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p>+218 93-XXXXXXX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">فرع مصراتة</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <p>شارع طرابلس</p>
                    <p>برج المستقبل، الطابق الأول</p>
                    <p>مصراتة، ليبيا</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <p>+218 94-XXXXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">كيفية الوصول إلينا</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">بالسيارة</h4>
                  <p className="text-gray-600">متوفر موقف سيارات خاص بالزوار</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">بالمواصلات العامة</h4>
                  <p className="text-gray-600">محطة حافلات قريبة من المكتب</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">خدمة التوصيل</h4>
                  <p className="text-gray-600">نوفر خدمة توصيل للعملاء عند الطلب</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">احجز موعداً لزيارتنا</h3>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
                حجز موعد
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
