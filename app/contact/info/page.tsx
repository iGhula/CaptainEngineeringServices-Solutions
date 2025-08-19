'use client'

import Image from 'next/image'
import PageTemplate from '@/app/components/PageTemplate'
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'

export default function ContactInfoPage() {
  return (
    <PageTemplate>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-right mb-8 text-gray-800">معلومات التواصل</h1>
          
          <div className="mb-8">
            <Image
              src="/modern-engineering-office.png"
              alt="معلومات التواصل"
              width={800}
              height={400}
              className="rounded-2xl shadow-lg mb-6 w-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-right" dir="rtl">
            <p className="text-gray-600 mb-6">
              نحن هنا لخدمتكم ونرحب بتواصلكم معنا عبر مختلف قنوات الاتصال المتاحة.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">معلومات الاتصال</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold">الهاتف</p>
                      <p>+218 91-XXXXXXX</p>
                      <p>+218 92-XXXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold">البريد الإلكتروني</p>
                      <p>info@captain-engineering.com</p>
                      <p>support@captain-engineering.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold">العنوان</p>
                      <p>طرابلس، ليبيا</p>
                      <p>شارع الاستقلال، مبنى الكابتن</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">ساعات العمل</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold">أيام العمل</p>
                      <p>السبت - الخميس</p>
                      <p>9:00 صباحاً - 5:00 مساءً</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Globe className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-bold">الدعم الإلكتروني</p>
                      <p>متوفر على مدار الساعة</p>
                      <p>عبر البريد الإلكتروني</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">فروعنا</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">طرابلس</h4>
                  <p className="text-gray-600">المقر الرئيسي</p>
                  <p className="text-gray-600">شارع الاستقلال</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">بنغازي</h4>
                  <p className="text-gray-600">الفرع الشرقي</p>
                  <p className="text-gray-600">شارع الحرية</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">مصراتة</h4>
                  <p className="text-gray-600">الفرع الغربي</p>
                  <p className="text-gray-600">شارع طرابلس</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">تواصل معنا</h3>
              <div className="flex gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  اتصل بنا
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  راسلنا
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
