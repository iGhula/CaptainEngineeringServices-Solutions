'use client'

import { useScrollbar } from '@/hooks/use-scrollbar'

export default function ScrollbarProvider() {
  // Initialize the scrollbar hook
  useScrollbar()
  
  // This component doesn't render anything, it just initializes the hook
  return null
}

