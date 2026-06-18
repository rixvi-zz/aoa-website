import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simplified middleware - redirects are handled by vercel.json
// This middleware only handles edge cases and adds security headers
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Security headers for all responses
  const response = NextResponse.next();
  
  response.headers.set('X-DNS-Prefetch-Control', 'on');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};