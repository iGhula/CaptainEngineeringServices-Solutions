"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { isAuthenticated, signOut } from '@/lib/auth'

const getPageUrl = (menuTitle: string, item: string): string => {
  const urlMap: { [key: string]: { [key: string]: string } } = {
    "من نحن": {
      "نبذة عن الشركة": "/about-us/company",
      "رؤيتنا ورسالتنا": "/about-us/vision"
    },
    "الخدمات": {
      "الاستشارات": "/services/engineering-consultations",
      "الدورات والتدريب": "/courses",
      "خدمات الطيران والمطارات": "/services/aviation-airports",
      "الإشراف والتطوير والتصميم": "/services/construction-supervision",
      "دراسات الجدوى": "/services/feasibility-studies"
    },
    "الدورات": {
      "دورات هندسية": "/courses/engineering",
      "دورات المطار": "/courses/airport",
      "دورات إدارية": "/courses/management",
      "دورات الطيران": "/courses/aviation",
      "التدريب": "/courses/training"
    },
    "الاعتمادات": {
      "الشهادات المهنية": "/accreditations/professional",
      "التراخيص": "/accreditations/licenses",
      "العضويات": "/accreditations/memberships",
      "الجوائز": "/accreditations/awards"
    },
    "المشاريع": {
      "مشاريع منجزة": "/projects/completed",
      "مشاريع قيد التنفيذ": "/projects/ongoing",
      "مشاريع مستقبلية": "/projects/future"
    },
    "التعاون": {
      "فرص الشراكة": "/cooperation/partnership",
      "التوظيف": "/cooperation/careers",
      "المبادرات": "/cooperation/initiatives"
    },
    "اتصل بنا": {
      "معلومات التواصل": "/contact/info",
      "موقعنا": "/contact/location",
      "طلب استشارة": "/contact/consultation",
      "الشكاوي والاقتراحات": "/contact/feedback"
    }
  }

  return urlMap[menuTitle]?.[item] || "/"
}
import Link from "next/link"
import { ChevronDown, Menu, X, ChevronLeft } from "lucide-react"
import Image from "next/image"

const menuItems = [
  {
    title: "من نحن",
    items: ["نبذة عن الشركة", "رؤيتنا ورسالتنا"],
  },
  {
    title: "الخدمات",
    items: ["الاستشارات", "الدورات والتدريب", "خدمات الطيران والمطارات", "الإشراف والتطوير والتصميم", "دراسات الجدوى"],
  },
  {
    title: "الدورات",
    items: ["دورات هندسية", "دورات المطار", "دورات إدارية", "دورات الطيران", "التدريب"],
  },
  {
    title: "الاعتمادات",
    items: ["الشهادات المهنية", "التراخيص", "العضويات", "الجوائز"],
  },
  {
    title: "المشاريع",
    items: ["مشاريع منجزة", "مشاريع قيد التنفيذ", "مشاريع مستقبلية"],
  },
  {
    title: "التعاون",
    items: ["فرص الشراكة", "التوظيف", "المبادرات"],
  },
  {
    title: "اتصل بنا",
    items: ["معلومات التواصل", "موقعنا", "طلب استشارة", "الشكاوي والاقتراحات"],
  },
]

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const router = useRouter()
  const pathname = usePathname()
  
  // Check if we're on the home page
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    // Check if user is admin - only run on client side
    const checkAdminStatus = () => {
      try {
        const authenticated = isAuthenticated()
        setIsAdmin(authenticated)
      } catch (error) {
        console.error('Header: Authentication check error:', error)
        setIsAdmin(false)
      }
    }

    // Only run on client side
    if (typeof window !== 'undefined') {
      // Check immediately
      checkAdminStatus()
      
      // Also check periodically to catch any changes
      const interval = setInterval(checkAdminStatus, 2000)
      
      window.addEventListener('scroll', handleScroll)
      return () => {
        window.removeEventListener('scroll', handleScroll)
        clearInterval(interval)
      }
    }
  }, [])

  const handleMouseEnter = (index: number) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(index)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 300) // 300ms delay before hiding dropdown
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setActiveMobileDropdown(null)
  }

  const toggleMobileDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
  }

  const handleAdminLogout = async () => {
    await signOut()
    setIsAdmin(false)
    router.push('/')
    router.refresh()
  }

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {isAdmin && (
        <header className="fixed top-0 w-full z-[100] bg-white shadow-lg border-b-2 border-green-500">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-3 space-x-reverse">
                <button
                  onClick={() => router.push('/admin')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  لوحة الإدارة
                </button>
                <button
                  onClick={() => router.push('/')}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
                >
                  الصفحة الرئيسية
                </button>
                <button
                  onClick={handleAdminLogout}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                >
                  تسجيل الخروج
                </button>
              </div>
            </div>
          </div>
        </header>
      )}

      {/* Spacer for admin bar */}
      {isAdmin && <div className="h-16"></div>}

      <header className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      } ${isAdmin ? 'top-20' : 'top-0'} ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo and Title - Right side */}
            <Link href="/" className="group flex items-center gap-4 hover:opacity-90 transition-all duration-300 hover:scale-105">
              <div className="relative w-20 h-20 flex-shrink-0">
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300">
                  <div className="relative w-14 h-14 group-hover:rotate-12 transition-transform duration-300">
                    <Image
                      src="/new logo.png"
                      alt="الكابتن للخدمات والحلول الهندسية"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className={`hidden md:block transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
                <h1 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-black group-hover:text-gray-700' 
                    : isHomePage 
                      ? 'text-white group-hover:text-gray-200'
                      : 'text-black group-hover:text-gray-700'
                }`}>
                  الكابتن للخدمات والحلول الهندسية
                </h1>
                <h2 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-black group-hover:text-gray-700' 
                    : isHomePage 
                      ? 'text-white group-hover:text-gray-200'
                      : 'text-black group-hover:text-gray-700'
                }`}>
                  Captain Engineering Services & Solutions
                </h2>
              </div>
            </Link>

            {/* Desktop Navigation Menu - Left side */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-2">
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`relative flex items-center text-lg font-bold transition-all duration-300 hover:scale-105 whitespace-nowrap px-1.5 ${
                    isScrolled 
                      ? 'text-black hover:text-gray-700' 
                      : isHomePage 
                        ? 'text-white hover:text-gray-200'
                        : 'text-black hover:text-gray-700'
                  }`}>
                    <span className="relative">
                      {menu.title}
                      {/* Animated underline on hover */}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                        isScrolled 
                          ? 'bg-gray-700' 
                          : isHomePage 
                            ? 'bg-white'
                            : 'bg-gray-700'
                      }`}></span>
                    </span>
                    <ChevronDown className={`mr-0.5 h-3 w-3 transition-transform duration-300 group-hover:rotate-180 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === index && (
                    <div 
                      className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform origin-top scale-95 animate-in slide-in-from-top-2 duration-200 z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        right: 'auto',
                        left: '0',
                        minWidth: '14rem'
                      }}
                    >
                      <div className="p-2">
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href={getPageUrl(menu.title, item)}
                            className="group/item block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 rounded-lg transition-all duration-300 hover:translate-x-1 hover:shadow-md relative overflow-hidden"
                          >
                            <span className="relative z-10">{item}</span>
                            {/* Background highlight effect */}
                            <div className="absolute inset-0 bg-green-100 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 -z-10"></div>
                            {/* Left border accent */}
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-green-500 transform scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className={`p-2 transition-all duration-300 hover:scale-110 hover:rotate-12 ${
                  isScrolled 
                    ? 'text-black hover:text-green-600' 
                    : isHomePage 
                      ? 'text-white hover:text-gray-200'
                      : 'text-black hover:text-gray-700'
                }`}
                aria-label="فتح القائمة"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden animate-in fade-in duration-200" onClick={toggleMobileMenu} />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Sidebar Header */}
          <div className="flex items-center justify-end p-4 border-b border-gray-200">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-green-600 p-2 transition-all duration-300 hover:scale-110 hover:rotate-90"
              aria-label="إغلاق القائمة"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <nav className="flex-1 overflow-y-auto">
            <div className="py-4">
              {menuItems.map((menu, index) => (
                <div key={index} className="border-b border-gray-100">
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-right text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700 font-medium transition-all duration-300 hover:translate-x-1 group"
                  >
                    <ChevronLeft
                      className={`h-5 w-5 transform transition-all duration-300 ${
                        activeMobileDropdown === index ? "rotate-90 scale-110" : ""
                      } group-hover:scale-110`}
                    />
                    <span className="relative">
                      {menu.title}
                      {/* Mobile underline effect */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>

                  {activeMobileDropdown === index && (
                    <div className="bg-gradient-to-b from-green-50 to-white animate-in slide-in-from-top-2 duration-200">
                      {menu.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={getPageUrl(menu.title, item)}
                          onClick={toggleMobileMenu}
                          className="group/item block px-8 py-3 text-sm text-gray-600 hover:bg-green-100 hover:text-green-700 border-r-2 border-transparent hover:border-green-500 transition-all duration-300 hover:translate-x-2 relative overflow-hidden"
                        >
                          <span className="relative z-10">{item}</span>
                          {/* Mobile background effect */}
                          <div className="absolute inset-0 bg-green-200 opacity-0 group-hover/item:opacity-20 transition-opacity duration-300 -z-10"></div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Mobile Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href="/register"
              onClick={toggleMobileMenu}
              className="group block w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-center py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden"
            >
              <span className="relative z-10">سجل معنا</span>
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
