import { Metadata, Viewport } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from '@/components/ui/toaster'

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '700', '800'],
})

export const metadata: Metadata = {
  title: 'الكابتن للخدمات والحلول الهندسية',
  description: 'شركة الكابتن للخدمات والحلول الهندسية - نقدم أفضل الخدمات الهندسية والاستشارات',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  )
}