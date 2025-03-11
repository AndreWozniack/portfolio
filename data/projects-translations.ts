import type { Project } from "./projects"

export const projectTranslations = {
  en: {
    "modu-lite": {
      title: "Modu.lite",
      description: "A modular iOS application that helps users organize their daily tasks and improve productivity.",
      type: "iOS Application",
    },
    "maisrole-sb": {
      title: "MaisRole-sb",
      description: "A backend service for an event discovery platform, built with Spring Boot and AWS.",
      type: "Backend Service",
    },
    "modulite-backend": {
      title: "Modulite_backend",
      description: "A serverless backend for the Modulite application, providing API endpoints and data storage.",
      type: "API Service",
    },
  },
  pt: {
    "modu-lite": {
      title: "Modu.lite",
      description:
        "Um aplicativo iOS modular que ajuda os usuários a organizar suas tarefas diárias e melhorar a produtividade.",
      type: "Aplicativo iOS",
    },
    "maisrole-sb": {
      title: "MaisRole-sb",
      description:
        "Um serviço de backend para uma plataforma de descoberta de eventos, construído com Spring Boot e AWS.",
      type: "Serviço Backend",
    },
    "modulite-backend": {
      title: "Modulite_backend",
      description:
        "Um backend serverless para o aplicativo Modulite, fornecendo endpoints de API e armazenamento de dados.",
      type: "Serviço de API",
    },
  },
}

export function getTranslatedProject(project: Project, language: string): Project {
  const translations = projectTranslations[language as keyof typeof projectTranslations]
  if (!translations) return project

  const projectTranslation = translations[project.id as keyof typeof translations]
  if (!projectTranslation) return project

  return {
    ...project,
    title: projectTranslation.title || project.title,
    description: projectTranslation.description || project.description,
    type: projectTranslation.type || project.type,
  }
}

