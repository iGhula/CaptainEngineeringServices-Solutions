'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAuthenticated, signOut } from '@/lib/auth'
import { Tajawal } from 'next/font/google'
import '../globals.css'

const tajawal = Tajawal({ 
  subsets: ['arabic'],
  display: 'swap',
  weight: ['400', '500', '700', '800'],
})

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuth, setIsAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  // Don't check authentication for login page
  const isLoginPage = pathname === '/admin/login'

  useEffect(() => {
    // Skip authentication check for login page
    if (isLoginPage) {
      setLoading(false)
      return
    }

    const checkAuth = () => {
      const authenticated = isAuthenticated()
      setIsAuth(authenticated)
      setLoading(false)
      
      if (!authenticated) {
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [isLoginPage])

  const handleLogout = async () => {
    await signOut()
    // Redirect to home page instead of login page
    router.push('/')
    // Removed router.refresh() - this was causing re-renders
  }

  // For login page, just render the children without any layout
  if (isLoginPage) {
    return <>{children}</>
  }

  if (loading) {
    return (
      <div className={tajawal.className}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">جاري التحميل...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuth) {
    return null
  }

  return (
    <div className={tajawal.className}>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full items-center">
                <div className="flex-shrink-0 flex items-center">
                  {/* Header is now empty, just keeping the structure */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Title and Logout Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-gray-900">لوحة التحكم</h1>
              </div>
            </div>
          </div>
        </div>

        <main>
          {children}
        </main>
      </div>
    </div>
  )
}