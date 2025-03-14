export interface Project {
  id: string
  title: string
  description: string
  type: string
  imageUrl: string
  technologies: string[]
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: "modu-lite",
    title: "Modu.lite",
    description: "An application that changes the interface of your iPhone to help you make better use of your time",
    type: "iOS Application",
    imageUrl: "/placeholder.svg?height=200&width=400",
    technologies: ["Swift", "SwiftUI"],
    githubUrl: "https://github.com/AndreWozniack/Modu.lite",
  },
  {
    id: "maisrole-sb",
    title: "MaisRole-sb",
    description: "A backend service for an event discovery platform, built with Spring Boot and AWS.",
    type: "Backend Service",
    imageUrl: "/placeholder.svg?height=200&width=400",
    technologies: ["Java", "Spring", "AWS"],
    githubUrl: "https://github.com/AndreWozniack/MaisRole-sb",
  },
  {
    id: "modulite-backend",
    title: "Modulite_backend",
    description: "A serverless backend for the Modulite application, providing API endpoints and data storage.",
    type: "API Service",
    imageUrl: "/placeholder.svg?height=200&width=400",
    technologies: ["Node.js", "AWS Lambda"],
    githubUrl: "https://github.com/AndreWozniack/Modulite_backend",
  },
]

