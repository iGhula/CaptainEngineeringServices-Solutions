import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const footerLinks = [
  { title: 'من نحن', href: '/about' },
  { title: 'الخدمات', href: '/services' },
  { title: 'الدورات', href: '/courses' },
  { title: 'الاعتمادات', href: '/certifications' },
  { title: 'الاستشارات', href: '/consultations' },
  { title: 'المشاريع', href: '/projects' },
  { title: 'التعاون', href: '/partnerships' },
  { title: 'اتصل بنا', href: '/contact' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
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
                  <h3 className="text-lg font-bold text-green-400">
                    الكابتن للخدمات والحلول الهندسية
                  </h3>
                  <h4 className="text-lg text-gray-300">
                    Captain Engineering Services & Solutions
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex space-x-reverse space-x-4">
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-green-400">روابط سريعة</h4>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-green-400">خدماتنا</h4>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-green-400 transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address and Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-green-400">العنوان</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-green-400 ml-2" />
                <span className="text-gray-300">طرابلس, ليبيا</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-400 ml-2" />
                <span className="text-gray-300" dir="ltr">+218 XX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-400 ml-2" />
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
