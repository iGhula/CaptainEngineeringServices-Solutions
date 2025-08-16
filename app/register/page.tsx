import Header from '../components/Header'
import Footer from '../components/Footer'
import RegistrationForm from './components/RegistrationForm'

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">سجل معنا</h1>
              <p className="text-gray-600">
                انضم إلى شبكة عملائنا واحصل على أفضل الخدمات الهندسية والاستشارات المتخصصة
              </p>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
