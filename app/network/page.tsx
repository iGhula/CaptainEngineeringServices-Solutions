import PageTemplate from '../components/PageTemplate'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import Image from 'next/image'

export default function NetworkPage() {
  return (
    <PageTemplate>
      <div className="relative h-[600px] w-full mb-8">
        <Image
          src="/industrial-engineering-facility.png"
          alt="منشأة هندسية صناعية"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">شبكة مكاتبنا وشركائنا</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">مواقع تواجدنا</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Network Locations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">المقر الرئيسي</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>طرابلس, ليبيا</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span dir="ltr">+218 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span>info@captain-engineering.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">المكتب الإقليمي</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>بنغازي, ليبيا</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span dir="ltr">+218 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span>benghazi@captain-engineering.com</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-6 text-center">مكتب المشاريع</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <span>مصراتة, ليبيا</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-600" />
                <span dir="ltr">+218 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-600" />
                <span>misurata@captain-engineering.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partners Network */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">شبكة الشركاء</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">شركاء التصميم</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>شركة الهندسة المعمارية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>مكتب التصميم الداخلي</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">شركاء التنفيذ</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>شركة المقاولات العامة</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>مؤسسة البناء المتكاملة</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">شركاء الاستشارات</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>مكتب الاستشارات الهندسية</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-green-600" />
                  <span>مركز الدراسات التقنية</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
