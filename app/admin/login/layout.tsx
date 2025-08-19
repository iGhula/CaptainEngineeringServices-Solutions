import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'تسجيل دخول المسؤول - الكابتن للخدمات والحلول الهندسية',
  description: 'صفحة تسجيل دخول المسؤول لشركة الكابتن للخدمات والحلول الهندسية'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
}

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
