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
  generator: 'v0.app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={tajawal.className}>{children}</body>
    </html>
  )
}
