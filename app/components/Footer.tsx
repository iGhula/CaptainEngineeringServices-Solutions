import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube } from 'lucide-react'

const footerLinks = [
  { title: 'من نحن', href: '/about-us/company' },
  { title: 'الخدمات', href: '/services' },
  { title: 'الدورات', href: '/courses' },
  { title: 'الاعتمادات', href: '/accreditations' },
  { title: 'المشاريع', href: '/projects' },
  { title: 'التعاون', href: '/cooperation' },
  { title: 'اتصل بنا', href: '/contact' }
]

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="flex flex-col items-start gap-4 mb-4">
              <div className="flex items-center gap-4 w-full">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="/new logo.png"
                    alt="Captain Engineering Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    الكابتن للخدمات والحلول الهندسية
                  </h3>
                  <h4 className="text-lg font-bold text-white">
                    Captain Engineering Services & Solutions
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex space-x-reverse space-x-4">
              <Link href="https://www.facebook.com/share/1AQXXo8HoB/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/c_eng_services?s=21&t=6chb9-jcaQqrElfQ9fs8qw" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://youtube.com/@captain_eng_company?si=xNsIU4j8ARYWgZps" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="https://www.tiktok.com/@Captainengservices_" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-4 text-white">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us/company" className="text-gray-300 hover:text-green-400 transition-colors">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-green-400 transition-colors">
                  الخدمات
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-gray-300 hover:text-green-400 transition-colors">
                  الدورات
                </Link>
              </li>
              <li>
                <Link href="/accreditations" className="text-gray-300 hover:text-green-400 transition-colors">
                  الاعتمادات
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-semibold mb-4 text-white">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-green-400 transition-colors">
                  المشاريع
                </Link>
              </li>
              <li>
                <Link href="/cooperation" className="text-gray-300 hover:text-green-400 transition-colors">
                  التعاون
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">
                  اتصل بنا
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-green-400 transition-colors">
                  سجل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xl font-semibold mb-4 text-white">العنوان</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-white ml-2" />
                <span className="text-gray-300">طرابلس, ليبيا</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-white ml-2" />
                <span className="text-gray-300" dir="ltr">+218 9X XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-white ml-2" />
                <span className="text-gray-300">info@captain-engineering.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} الكابتن للخدمات والحلول الهندسية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}
