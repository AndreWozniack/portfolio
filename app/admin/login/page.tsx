"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"
import { motion } from "framer-motion"

export default function AdminLogin() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // This is a simple example - in a real app, you'd want to use a more secure method
    // and store the password in an environment variable
    if (password === "admin123") {
      // Set a cookie to authenticate the admin with proper path and domain settings
      document.cookie = "admin_auth=authenticated; path=/; max-age=3600; SameSite=Strict"
      router.push("/admin/dashboard")
    } else {
      setError("Invalid password")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Admin Login
            </CardTitle>
            <CardDescription>Enter your password to access the admin dashboard</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}

