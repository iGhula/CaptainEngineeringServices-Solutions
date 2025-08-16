import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '700', '800'],
})

export const metadata: Metadata = {
  title: 'الكابتن للخدمات والحلول الهندسية',
  description: 'شركة الكابتن للخدمات والحلول الهندسية - نقدم أفضل الخدمات الهندسية والاستشارات',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}
