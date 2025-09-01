import { useEffect, useRef, useCallback } from 'react'

export function useScrollbar() {
  const scrollbarTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isScrollingRef = useRef(false)
  const lastScrollTimeRef = useRef(0)

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
    }, 800) // 0.8 seconds delay after scrolling stops
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
    }, 800)
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
    }, 800)
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
      }, 800)
    }
  }, [showScrollbar, hideScrollbar])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const windowWidth = window.innerWidth
    const scrollbarWidth = 12 // Match the CSS scrollbar width
    
    // For RTL layout, scrollbar is on the left side
    // Check if cursor is near the left edge (scrollbar area for RTL)
    const isNearScrollbar = e.clientX < scrollbarWidth + 20 // 20px buffer
    
    if (isNearScrollbar) {
      showScrollbar()
      
      // Clear existing timeout
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
      
      // Don't hide scrollbar while cursor is near it
      return
    }
    
    // If cursor is not near scrollbar and not scrolling, hide after delay
    if (!isScrollingRef.current) {
      if (scrollbarTimeoutRef.current) {
        clearTimeout(scrollbarTimeoutRef.current)
      }
      
      scrollbarTimeoutRef.current = setTimeout(() => {
        hideScrollbar()
      }, 600) // 0.6 seconds delay after cursor moves away
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
      }, 300)
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
