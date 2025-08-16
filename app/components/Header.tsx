"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, ChevronLeft } from "lucide-react"
import Image from "next/image"

const menuItems = [
  {
    title: "الخدمات",
    items: ["الاستشارات الهندسية", "التصميم المعماري", "الإشراف على التنفيذ", "دراسات الجدوى"],
  },
  {
    title: "الدورات",
    items: ["دورات هندسية", "دورات إدارية", "دورات تقنية", "دورات متخصصة"],
  },
  {
    title: "المشاريع",
    items: ["مشاريع سكنية", "مشاريع تجارية", "مشاريع صناعية", "مشاريع حكومية"],
  },
  {
    title: "من نحن",
    items: ["تاريخ الشركة", "فريق العمل", "رؤيتنا ورسالتنا", "شهاداتنا"],
  },
]

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
      <header className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-green-600 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo and Title - Right side */}
            <Link href="/" className="group flex items-center gap-4 hover:opacity-90 transition-all duration-300 hover:scale-105">
              <div className="relative w-16 h-16 flex-shrink-0">
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isScrolled ? 'bg-white rounded-full' : ''
                }`}>
                  <div className="relative w-11 h-11 group-hover:rotate-12 transition-transform duration-300">
                    <Image
                      src="/new logo.png"
                      alt="الكابتن للخدمات والحلول الهندسية"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              <div className={`hidden md:block transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-lg font-bold text-white group-hover:text-green-100 transition-colors duration-300">
                  الكابتن للخدمات والحلول الهندسية
                </h1>
                <h2 className="text-lg text-gray-100 group-hover:text-green-200 transition-colors duration-300">
                  Captain Engineering Services & Solutions
                </h2>
              </div>
            </Link>

            {/* Desktop Navigation Menu - Left side */}
            <nav className="hidden md:flex items-center space-x-reverse space-x-8">
              {menuItems.map((menu, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`relative flex items-center text-lg font-bold transition-all duration-300 hover:scale-105 ${
                    isScrolled ? 'text-white hover:text-green-100' : 'text-green-600 hover:text-green-700'
                  }`}>
                    <span className="relative">
                      {menu.title}
                      {/* Animated underline on hover */}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full ${
                        isScrolled ? 'bg-green-100' : 'bg-green-700'
                      }`}></span>
                    </span>
                    <ChevronDown className={`mr-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      activeDropdown === index ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {activeDropdown === index && (
                    <div 
                      className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transform origin-top scale-95 animate-in slide-in-from-top-2 duration-200"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2">
                        {menu.items.map((item, itemIndex) => (
                          <Link
                            key={itemIndex}
                            href="#"
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
                  isScrolled ? 'text-white hover:text-green-100' : 'text-green-600 hover:text-green-700'
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
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Link
              href="/"
              onClick={toggleMobileMenu}
              className="group flex items-center hover:opacity-80 transition-all duration-300 hover:scale-105"
            >
              <Image
                src="/new logo.png"
                alt="الكابتن للخدمات والحلول الهندسية"
                width={40}
                height={40}
                className="object-contain group-hover:rotate-12 transition-transform duration-300"
              />
            </Link>
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
                          href="#"
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
