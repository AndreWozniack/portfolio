import { NextResponse } from "next/server"
import { projects as initialProjects } from "@/data/projects"

// This would be replaced with a database in a production app
let projects = [...initialProjects]

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  try {
    const newProject = await request.json()

    // Validate the project data
    if (!newProject.title || !newProject.description || !newProject.githubUrl) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Add an ID if not provided
    if (!newProject.id) {
      newProject.id = newProject.title.toLowerCase().replace(/\s+/g, "-")
    }

    // Add the new project
    projects = [...projects, newProject]

    // In a real app, you would save this to a database
    // For this example, we're just updating the in-memory array

    return NextResponse.json(newProject, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add project" }, { status: 500 })
  }
}

