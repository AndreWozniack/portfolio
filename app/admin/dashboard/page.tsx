"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { type Project, projects } from "@/data/projects"
import { ProjectCard } from "@/components/project-card"
import { motion } from "framer-motion"
import { v4 as uuidv4 } from "uuid"

export default function AdminDashboard() {
  const router = useRouter()
  const [newProject, setNewProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    type: "",
    imageUrl: "/placeholder.svg?height=200&width=400",
    technologies: [],
    githubUrl: "",
  })
  const [techInput, setTechInput] = useState("")
  const [localProjects, setLocalProjects] = useState<Project[]>(projects)
  const [successMessage, setSuccessMessage] = useState("")

  const handleAddTech = () => {
    if (techInput.trim() && !newProject.technologies.includes(techInput.trim())) {
      setNewProject({
        ...newProject,
        technologies: [...newProject.technologies, techInput.trim()],
      })
      setTechInput("")
    }
  }

  const handleRemoveTech = (tech: string) => {
    setNewProject({
      ...newProject,
      technologies: newProject.technologies.filter((t) => t !== tech),
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewProject({ ...newProject, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a new project with a unique ID
    const projectWithId: Project = {
      ...newProject,
      id: uuidv4(),
    }

    // Add to local state
    setLocalProjects([...localProjects, projectWithId])

    // In a real app, you would save this to a database or API
    // For this example, we're just updating the local state

    // Reset the form
    setNewProject({
      title: "",
      description: "",
      type: "",
      imageUrl: "/placeholder.svg?height=200&width=400",
      technologies: [],
      githubUrl: "",
    })

    // Show success message
    setSuccessMessage("Project added successfully!")
    setTimeout(() => setSuccessMessage(""), 3000)
  }

  const handleLogout = () => {
    // Clear the auth cookie
    document.cookie = "admin_auth=; path=/; max-age=0"
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <Button variant="ghost" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Add New Project Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Add New Project</CardTitle>
                <CardDescription>Fill in the details to add a new featured project</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  {successMessage && <div className="bg-green-100 text-green-700 p-3 rounded-md">{successMessage}</div>}

                  <div className="grid gap-2">
                    <Label htmlFor="title">Project Title</Label>
                    <Input id="title" name="title" value={newProject.title} onChange={handleInputChange} required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="type">Project Type</Label>
                    <Input
                      id="type"
                      name="type"
                      value={newProject.type}
                      onChange={handleInputChange}
                      placeholder="e.g., iOS Application, Backend Service"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newProject.description}
                      onChange={handleInputChange}
                      rows={3}
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="imageUrl">Image URL</Label>
                    <Input
                      id="imageUrl"
                      name="imageUrl"
                      value={newProject.imageUrl}
                      onChange={handleInputChange}
                      placeholder="/placeholder.svg?height=200&width=400"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="githubUrl">GitHub URL</Label>
                    <Input
                      id="githubUrl"
                      name="githubUrl"
                      value={newProject.githubUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/username/repo"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Technologies</Label>
                    <div className="flex gap-2">
                      <Input
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        placeholder="Add a technology"
                      />
                      <Button type="button" onClick={handleAddTech}>
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {newProject.technologies.map((tech) => (
                        <div key={tech} className="flex items-center gap-1 bg-muted rounded-full px-3 py-1">
                          <span>{tech}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveTech(tech)}
                            className="text-muted-foreground hover:text-destructive"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Add Project</Button>
                </CardFooter>
              </form>
            </Card>
          </motion.div>

          {/* Preview */}
          <div>
            <h2 className="text-xl font-bold mb-4">Preview</h2>
            {newProject.title ? (
              <ProjectCard
                project={{
                  ...newProject,
                  id: "preview",
                }}
                index={0}
              />
            ) : (
              <div className="text-muted-foreground">Fill in the form to see a preview of your project</div>
            )}

            <h2 className="text-xl font-bold mt-8 mb-4">Current Projects</h2>
            <div className="grid gap-4">
              {localProjects.map((project, index) => (
                <div key={project.id} className="text-sm">
                  {index + 1}. {project.title} - {project.type}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

