import Header from '../components/Header'
import Footer from '../components/Footer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">اتصل بنا</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">الهاتف</h3>
              <p className="text-gray-600">+966 XX XXX XXXX</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Mail className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">البريد الإلكتروني</h3>
              <p className="text-gray-600">info@captain-engineering.com</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">العنوان</h3>
              <p className="text-gray-600">الرياض، المملكة العربية السعودية</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
