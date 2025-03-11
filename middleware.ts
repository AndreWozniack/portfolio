import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const isAuthenticated = request.cookies.has('admin_auth')

  if (isAdminPage) {
    // Se não estiver autenticado e não estiver na página de login
    if (!isAuthenticated && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Se estiver autenticado e estiver tentando acessar a página de login
    if (isAuthenticated && isLoginPage) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

