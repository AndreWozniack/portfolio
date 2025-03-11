"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      const cookies = document.cookie.split(';')
      const hasAuthCookie = cookies.some(cookie => 
        cookie.trim().startsWith('admin_auth=')
      )

      if (!hasAuthCookie) {
        router.push('/admin/login')
      }
    }

    checkAuth()
  }, [router])

  return <>{children}</>
} 