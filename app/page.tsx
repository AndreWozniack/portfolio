"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Award, Code, Server, Apple, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "@/context/language-context"
import { LanguageToggle } from "@/components/language-toggle"
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <MobileMenu />
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <motion.span
                className="font-bold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                André Wozniack
              </motion.span>
            </Link>
          </div>
          <motion.nav
            className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.about")}
            </Link>
            <Link href="#skills" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.skills")}
            </Link>
            <Link href="#experience" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.experience")}
            </Link>
            <Link href="#projects" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.projects")}
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.contact")}
            </Link>
          </motion.nav>
          <motion.div
            className="ml-auto flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <LanguageToggle />
            <Link
              href="https://github.com/AndreWozniack"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/andre-wozniack/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button variant="ghost" size="icon" className="transition-transform hover:scale-110">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("hero.title")}
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("hero.description")}</p>
                </motion.div>
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge variant="outline" className="text-sm py-1">
                    {t("hero.badge1")}
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1">
                    {t("hero.badge2")}
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1">
                    {t("hero.badge3")}
                  </Badge>
                  <Badge variant="outline" className="text-sm py-1">
                    {t("hero.badge4")}
                  </Badge>
                </motion.div>
                <motion.div
                  className="flex flex-col gap-2 sm:flex-row"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Link href="#contact" className="w-full sm:w-auto">
                    <Button className="transition-transform hover:scale-105 w-full sm:w-auto">
                      {t("hero.btn.contact")}
                    </Button>
                  </Link>
                  <Link href="#projects" className="w-full sm:w-auto">
                    <Button variant="outline" className="transition-transform hover:scale-105 w-full sm:w-auto">
                      {t("hero.btn.projects")}
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src="/andre.png?height=300&width=300"
                    alt="André Wozniack"
                    width={300}
                    height={300}
                    className="object-cover"
                    priority
                    style={{
                      transform: `translateY(${scrollY * 0.1}px)`,
                      transition: "transform 0.1s ease-out",
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          >
            <Link href="#about">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ChevronDown className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* About Section */}
        <AnimatedSection id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("about.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("about.description")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <ul className="grid gap-6">
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Server className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{t("about.backend.title")}</h3>
                      </div>
                      <p className="text-muted-foreground">{t("about.backend.description")}</p>
                    </div>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Apple className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{t("about.ios.title")}</h3>
                      </div>
                      <p className="text-muted-foreground">{t("about.ios.description")}</p>
                    </div>
                  </motion.li>
                  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">{t("about.software.title")}</h3>
                      </div>
                      <p className="text-muted-foreground">{t("about.software.description")}</p>
                    </div>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">{t("about.currently")}</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t("about.current1")}</li>
                    <li>{t("about.current2")}</li>
                    <li>{t("about.current3")}</li>
                    <li>{t("about.current4")}</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">{t("about.achievements")}</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>{t("about.achievement1")}</li>
                    <li>{t("about.achievement2")}</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("skills.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("skills.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">{t("skills.backend")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring", "Rust", "Node.js", "PHP", "Laravel", "AWS", "Docker"].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <Badge
                        className="px-3 py-1 text-sm text-white"
                        style={{
                          backgroundColor:
                            tech === "Java"
                              ? "#DC2626"
                              : tech === "Spring"
                                ? "#16A34A"
                                : tech === "Rust"
                                  ? "#EA580C"
                                  : tech === "Node.js"
                                    ? "#15803D"
                                    : tech === "PHP"
                                      ? "#4F46E5"
                                      : tech === "Laravel"
                                        ? "#EF4444"
                                        : tech === "AWS"
                                          ? "#CA8A04"
                                          : tech === "Docker"
                                            ? "#2563EB"
                                            : "hsl(var(--primary))",
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-2xl font-bold">{t("skills.ios")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["Swift", "SwiftUI", "UIKit", "Firebase"].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <Badge
                        className="px-3 py-1 text-sm text-white"
                        style={{
                          backgroundColor:
                            tech === "Swift"
                              ? "#F97316"
                              : tech === "SwiftUI"
                                ? "#3B82F6"
                                : tech === "UIKit"
                                  ? "#9333EA"
                                  : tech === "Firebase"
                                    ? "#EAB308"
                                    : "hsl(var(--primary))",
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold">{t("skills.data")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "MySQL", "C", "JavaScript"].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <Badge
                        className="px-3 py-1 text-sm text-white"
                        style={{
                          backgroundColor:
                            tech === "Python"
                              ? "#1D4ED8"
                              : tech === "TensorFlow"
                                ? "#A16207"
                                : tech === "MySQL"
                                  ? "#1E40AF"
                                  : tech === "C"
                                    ? "#374151"
                                    : tech === "JavaScript"
                                      ? "#FACC15"
                                      : "hsl(var(--primary))",
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl font-bold">{t("skills.tools")}</h3>
                <div className="flex flex-wrap gap-2">
                  {["GitHub", "IntelliJ IDEA", "Postman", "Notion", "Figma"].map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                    >
                      <Badge
                        className="px-3 py-1 text-sm text-white"
                        style={{
                          backgroundColor:
                            tech === "GitHub"
                              ? "#1F2937"
                              : tech === "IntelliJ IDEA"
                                ? "#DB2777"
                                : tech === "Postman"
                                  ? "#FB923C"
                                  : tech === "Notion"
                                    ? "#111827"
                                    : tech === "Figma"
                                      ? "#A855F7"
                                      : "hsl(var(--primary))",
                        }}
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("experience.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("experience.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              {[
                {
                  title: t("exp.title1"),
                  company: t("exp.company1"),
                  current: true,
                  details: [t("exp.detail1.1"), t("exp.detail1.2"), t("exp.detail1.3")],
                },
                {
                  title: t("exp.title2"),
                  company: t("exp.company2"),
                  details: [t("exp.detail2.1"), t("exp.detail2.2")],
                },
                {
                  title: t("exp.title3"),
                  company: t("exp.company3"),
                  details: [t("exp.detail3.1"), t("exp.detail3.2")],
                },
                {
                  title: t("exp.title4"),
                  company: t("exp.company4"),
                },
                {
                  title: t("exp.title5"),
                  company: t("exp.company5"),
                  details: [t("exp.detail5.1")],
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l border-muted-foreground/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-primary -translate-x-3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-background"></div>
                  </motion.div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold">{experience.title}</h3>
                      {experience.current && <Badge variant="outline">{t("experience.current")}</Badge>}
                    </div>
                    <p className="text-muted-foreground">{experience.company}</p>
                    {experience.details && (
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {experience.details.map((detail, i) => (
                          <li key={i} className="text-sm sm:text-base">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("projects.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("projects.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            <div className="flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://github.com/AndreWozniack" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    {t("projects.viewMore")}
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Achievements Section */}
        <AnimatedSection className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("achievements.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("achievements.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="flex flex-col h-full overflow-hidden group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>{t("achievements.wwdc.title")}</CardTitle>
                      <CardDescription>{t("achievements.wwdc.date")}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{t("achievements.wwdc.description")}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="flex flex-col h-full overflow-hidden group">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Apple className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle>{t("achievements.academy.title")}</CardTitle>
                      <CardDescription>{t("achievements.academy.date")}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">{t("achievements.academy.description")}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("contact.title")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("contact.description")}
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contact.info")}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <a
                        href="mailto:andre_fabriciow@hotmail.com"
                        className="text-muted-foreground hover:text-primary text-sm sm:text-base break-all"
                      >
                        andre_fabriciow@hotmail.com
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://www.linkedin.com/in/andre-wozniack/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-sm sm:text-base break-all"
                      >
                        linkedin.com/in/andre-wozniack
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com/AndreWozniack"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary text-sm sm:text-base break-all"
                      >
                        github.com/AndreWozniack
                      </a>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{t("contact.send")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <motion.div
                        className="grid gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                      >
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {t("contact.name")}
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={t("contact.namePlaceholder")}
                        />
                      </motion.div>

                      <motion.div
                        className="grid gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {t("contact.email")}
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={t("contact.emailPlaceholder")}
                        />
                      </motion.div>

                      <motion.div
                        className="grid gap-2"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {t("contact.message")}
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder={t("contact.messagePlaceholder")}
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <Button type="submit" className="w-full">
                          {t("contact.submit")}
                        </Button>
                      </motion.div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} André Wozniack. {t("footer.rights")}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
              <Link href="https://github.com/AndreWozniack" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ rotate: -12, scale: 1.1 }}>
              <Link href="https://www.linkedin.com/in/andre-wozniack/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ rotate: 12, scale: 1.1 }}>
              <Link href="mailto:andre_fabriciow@hotmail.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}

