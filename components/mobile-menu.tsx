"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export function MobileMenu() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 mt-10">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#about"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("nav.about")}
            </Link>
            <Link
              href="#skills"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("nav.skills")}
            </Link>
            <Link
              href="#experience"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("nav.experience")}
            </Link>
            <Link
              href="#projects"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("nav.projects")}
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={handleLinkClick}
            >
              {t("nav.contact")}
            </Link>
          </nav>
          <div className="flex flex-col gap-4 mt-auto">
            <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} André Wozniack</div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

