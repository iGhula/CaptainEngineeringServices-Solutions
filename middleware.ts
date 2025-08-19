import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    // Create a response object
    const res = NextResponse.next()

    // Check if the request is for admin routes
    if (request.nextUrl.pathname.startsWith('/admin')) {
      // For admin routes, we'll let the client-side handle authentication
      // since we're using localStorage for session management
      // The middleware will just ensure proper routing
      
      // If trying to access admin dashboard without being on login page
      if (request.nextUrl.pathname === '/admin' && !request.nextUrl.pathname.startsWith('/admin/login')) {
        // Let the client-side handle the redirect if not authenticated
        return res
      }
      
      // If trying to access login page, allow it
      if (request.nextUrl.pathname.startsWith('/admin/login')) {
        return res
      }
    }

    return res
  } catch (error) {
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: ['/admin/:path*']
}