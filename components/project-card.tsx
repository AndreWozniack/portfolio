"use client"

import type { Project } from "@/data/projects"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/language-context"
import { getTranslatedProject } from "@/data/projects-translations"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { language } = useLanguage()
  const translatedProject = getTranslatedProject(project, language)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden group">
        <CardHeader>
          <CardTitle>{translatedProject.title}</CardTitle>
          <CardDescription>{translatedProject.type}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
            <Image
              src={translatedProject.imageUrl || "/placeholder.svg"}
              alt={`${translatedProject.title} Project`}
              width={400}
              height={200}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <p className="text-muted-foreground">{translatedProject.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex flex-wrap gap-2">
            {translatedProject.technologies.map((tech) => {
              // Determine the background color based on the technology
              let bgColor = "hsl(var(--primary))"
              if (tech === "Swift") bgColor = "#F97316"
              else if (tech === "SwiftUI") bgColor = "#3B82F6"
              else if (tech === "Java") bgColor = "#DC2626"
              else if (tech === "Spring") bgColor = "#16A34A"
              else if (tech === "AWS") bgColor = "#CA8A04"
              else if (tech === "Node.js") bgColor = "#15803D"

              return (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-white border-none"
                  style={{ backgroundColor: bgColor }}
                >
                  {tech}
                </Badge>
              )
            })}
          </div>
          <Link href={translatedProject.githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="sm" className="group/button">
              <Github className="h-4 w-4 mr-2 transition-transform duration-300 group-hover/button:rotate-12" />
              View
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

