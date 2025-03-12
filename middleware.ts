import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const adminPath = "/admin"

  // Check if the request is for the admin path
  if (request.nextUrl.pathname.startsWith(adminPath)) {
    // Get the authentication cookie
    const authCookie = request.cookies.get("admin_auth")

    // If the cookie doesn't exist or is invalid, redirect to login
    if (!authCookie || authCookie.value !== "authenticated") {
      // Only redirect if not already on the login page
      if (!request.nextUrl.pathname.endsWith("/login")) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
      }
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}

