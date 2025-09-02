import { useEffect, useRef, useCallback } from 'react'

export function useScrollbar() {
  const scrollbarTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollingRef = useRef(false)
  const lastScrollTimeRef = useRef(0)
  const HIDE_DELAY_MS = 1500 // 1.5 seconds

  const showScrollbar = useCallback(() => {
    document.documentElement.classList.add('scrollbar-visible')
    document.body.classList.add('scrollbar-visible')
  }, [])

  const hideScrollbar = useCallback(() => {
    document.documentElement.classList.remove('scrollbar-visible')
    document.body.classList.remove('scrollbar-visible')
  }, [])

  const handleScroll = useCallback(() => {
    const now = Date.now()
    lastScrollTimeRef.current = now
    isScrollingRef.current = true

    // Show scrollbar immediately when scrolling
    showScrollbar()

    // Clear existing timeout
    if (scrollbarTimeoutRef.current) {
      clearTimeout(scrollbarTimeoutRef.current)
    }

    // Hide scrollbar after scrolling stops
    scrollbarTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false
      hideScrollbar()
    }, HIDE_DELAY_MS)
  }, [showScrollbar, hideScrollbar])

  const handleWheel = useCallback((e: WheelEvent) => {
    // Show scrollbar when using mouse wheel
    showScrollbar()
    
    // Clear existing timeout
    if (scrollbarTimeoutRef.current) {
      clearTimeout(scrollbarTimeoutRef.current)
    }
    
    // Hide scrollbar after wheel stops
    scrollbarTimeoutRef.current = setTimeout(() => {
      hideScrollbar()
    }, HIDE_DELAY_MS)
  }, [showScrollbar, hideScrollbar])

  const handleTouchStart = useCallback(() => {
    // Show scrollbar when touch starts
    showScrollbar()
  }, [showScrollbar])

  const handleTouchMove = useCallback(() => {
    // Keep scrollbar visible during touch movement
    showScrollbar()
    
    // Clear existing timeout
    if (scrollbarTimeoutRef.current) {
      clearTimeout(scrollbarTimeoutRef.current)
    }
  }, [showScrollbar])

  const handleTouchEnd = useCallback(() => {
    // Hide scrollbar after touch ends
    if (scrollbarTimeoutRef.current) {
      clearTimeout(scrollbarTimeoutRef.current)
    }
    
    scrollbarTimeoutRef.current = setTimeout(() => {
      hideScrollbar()
    }, HIDE_DELAY_MS)
  }, [hideScrollbar])

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    // Show scrollbar for keyboard navigation (arrow keys, page up/down, home/end)
    const scrollKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ']
    if (scrollKeys.includes(e.key)) {
      showScrollbar()
      
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
      
      scrollbarTimeoutRef.current = setTimeout(() => {
        hideScrollbar()
      }, HIDE_DELAY_MS)
    }
  }, [showScrollbar, hideScrollbar])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const scrollbarWidth = 12 // Match the CSS scrollbar width
    const hoverBuffer = 40 // Slightly larger buffer for easier edge hover

    // Only consider the right edge for hover-triggered visibility
    const isNearScrollbar = e.clientX > (window.innerWidth - scrollbarWidth - hoverBuffer)

    if (isNearScrollbar) {
      showScrollbar()

      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
      // Hide even if cursor stays inside the page without scrolling
      scrollbarTimeoutRef.current = setTimeout(() => {
        hideScrollbar()
      }, HIDE_DELAY_MS)
      return
    }

    if (!isScrollingRef.current) {
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }

      scrollbarTimeoutRef.current = setTimeout(() => {
        hideScrollbar()
      }, HIDE_DELAY_MS)
    }
  }, [showScrollbar, hideScrollbar])

  const handleMouseLeave = useCallback(() => {
    // Hide scrollbar when mouse leaves the window
    if (!isScrollingRef.current) {
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
      
      scrollbarTimeoutRef.current = setTimeout(() => {
        hideScrollbar()
      }, HIDE_DELAY_MS)
    }
  }, [hideScrollbar])

  useEffect(() => {
    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', handleWheel, { passive: true })
    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })
    document.addEventListener('keydown', handleKeyDown, { passive: true })
    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', handleWheel)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
    }
  }, [handleScroll, handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd, handleKeyDown, handleMouseMove, handleMouseLeave])

  // Return functions for manual control if needed
  return {
    showScrollbar,
    hideScrollbar,
    isScrolling: isScrollingRef.current
  }
}
