'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronRight, ChevronLeft } from 'lucide-react'

const heroImages = [
  '/engineering-construction-site.png',
  '/modern-engineering-office.png',
  '/industrial-engineering-facility.png',
  '/modern-engineering-office.png',
  '/architectural-engineering-design.png'
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  const goToNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
    // Reset the automatic slideshow timer
    resetTimer()
  }

  const goToPreviousImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
    // Reset the automatic slideshow timer
    resetTimer()
  }

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(goToNextImage, 4000)
  }

  // Use a ref to store the interval ID so we can clear it when needed
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(goToNextImage, 4000)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-screen overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Engineering scene ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/40 pointer-events-none" />
        </div>
      ))}
      
      {/* Hero Content */}
      <div className="relative z-10 h-full"></div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={() => {
          goToPreviousImage();
          console.log('Previous clicked, current index:', currentImage);
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 group-hover:text-green-400 transition-colors duration-300" />
      </button>
      <button
        type="button"
        onClick={() => {
          goToNextImage();
          console.log('Next clicked, current index:', currentImage);
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-80 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 group-hover:text-green-400 transition-colors duration-300" />
      </button>


    </div>
  )
}
