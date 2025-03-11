"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Backend & iOS Developer",
    "hero.description":
      "Passionate about serverless architecture and high-performance applications. WWDC Swift Student Challenge winner (2023, 2024).",
    "hero.badge1": "Backend Developer",
    "hero.badge2": "iOS Developer",
    "hero.badge3": "Computer Engineering",
    "hero.badge4": "Apple Developer Academy",
    "hero.btn.contact": "Contact Me",
    "hero.btn.projects": "View Projects",

    // About
    "about.title": "About Me",
    "about.description":
      "Backend and iOS developer with a passion for serverless architecture and high-performance applications. Computer engineering student at PUCPR and proud member of the Apple Developer Academy.",
    "about.backend.title": "Backend Development",
    "about.backend.description":
      "Experienced in developing APIs, cloud computing, and serverless infrastructure with AWS Lambda, microservices, and RESTful APIs.",
    "about.ios.title": "iOS Development",
    "about.ios.description":
      "Creating native iOS applications using Swift, SwiftUI, and UIKit with a focus on performance and user experience.",
    "about.software.title": "Software Engineering",
    "about.software.description":
      "Strong foundation in software engineering principles, test-driven development, and agile methodologies.",
    "about.currently": "Currently",
    "about.current1": "Working on serverless solutions with AWS Lambda",
    "about.current2": "Learning Rust and advanced cloud architecture patterns",
    "about.current3": "Backend Developer at Ninja Parts",
    "about.current4": "Computer Engineering student at PUCPR",
    "about.achievements": "Achievements",
    "about.achievement1": "WWDC Swift Student Challenge Winner (2023, 2024)",
    "about.achievement2": "Apple Developer Academy Member (2023)",

    // Skills
    "skills.title": "Tech Stack",
    "skills.description": "The technologies and tools I use to build robust and scalable applications.",
    "skills.backend": "Backend & Cloud",
    "skills.ios": "iOS Development",
    "skills.data": "Data & Other Languages",
    "skills.tools": "Tools & Platforms",

    // Experience
    "experience.title": "Experience",
    "experience.description": "My professional journey and educational background.",
    "experience.current": "Current",
    "exp.title1": "Backend Development Intern",
    "exp.company1": "Ninja Parts – Curitiba, PR (2025 – Present)",
    "exp.detail1.1": "Developing and maintaining serverless functions using AWS Lambda",
    "exp.detail1.2": "Automating processes, performing data queries, and managing operational databases",
    "exp.detail1.3": "Creating internal tools to optimize team efficiency",
    "exp.title2": "Web Development and Data Science Intern",
    "exp.company2": "Manusis 4.0 (2021 – 2022, 8 months)",
    "exp.detail2.1": "Developed web applications and conducted data analysis",
    "exp.detail2.2": "Collaborated on the implementation of data science solutions",
    "exp.title3": "Swift Student Challenge - WWDC",
    "exp.company3": "Global Participant (2023 and 2024)",
    "exp.detail3.1": "iOS apps selected among the top 350 worldwide in the Swift Student Challenge",
    "exp.detail3.2": "Focused on innovation, performance, and usability of the apps",
    "exp.title4": "Bachelor's Degree in Computer Engineering",
    "exp.company4": "Pontifical Catholic University of Paraná (PUCPR) – Curitiba, PR (January 2021 – Present)",
    "exp.title5": "Apple Developer Academy",
    "exp.company5": "PUCPR – Curitiba, PR (January 2023)",
    "exp.detail5.1":
      "Educational project in partnership with Apple, focusing on developing solutions for the Apple ecosystem",

    // Projects
    "projects.title": "Featured Projects",
    "projects.description": "A selection of my recent work and personal projects.",
    "projects.viewMore": "View More on GitHub",

    // Achievements
    "achievements.title": "Achievements",
    "achievements.description": "Recognition and accomplishments throughout my career.",
    "achievements.wwdc.title": "WWDC Swift Student Challenge Winner",
    "achievements.wwdc.date": "2023 & 2024",
    "achievements.wwdc.description":
      "Selected among the top 350 developers worldwide in Apple's annual Swift Student Challenge. Created innovative iOS applications showcasing technical skills and creativity.",
    "achievements.academy.title": "Apple Developer Academy Member",
    "achievements.academy.date": "2023",
    "achievements.academy.description":
      "Selected to participate in Apple's educational program at PUCPR, focusing on developing innovative solutions for the Apple ecosystem and learning industry best practices.",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "Interested in working together? Feel free to reach out.",
    "contact.info": "Contact Information",
    "contact.send": "Send a Message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "Your email",
    "contact.messagePlaceholder": "Your message",

    // Footer
    "footer.rights": "All rights reserved.",

    // Language
    language: "Language",
    "language.en": "English",
    "language.pt": "Portuguese",
  },
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.title": "Desenvolvedor Backend & iOS",
    "hero.description":
      "Apaixonado por arquitetura serverless e aplicações de alta performance. Vencedor do Swift Student Challenge da WWDC (2023, 2024).",
    "hero.badge1": "Desenvolvedor Backend",
    "hero.badge2": "Desenvolvedor iOS",
    "hero.badge3": "Engenharia da Computação",
    "hero.badge4": "Apple Developer Academy",
    "hero.btn.contact": "Entre em Contato",
    "hero.btn.projects": "Ver Projetos",

    // About
    "about.title": "Sobre Mim",
    "about.description":
      "Desenvolvedor Backend e iOS com paixão por arquitetura serverless e aplicações de alta performance. Estudante de Engenharia da Computação na PUCPR e membro da Apple Developer Academy.",
    "about.backend.title": "Desenvolvimento Backend",
    "about.backend.description":
      "Experiência no desenvolvimento de APIs, computação em nuvem e infraestrutura serverless com AWS Lambda, microserviços e APIs RESTful.",
    "about.ios.title": "Desenvolvimento iOS",
    "about.ios.description":
      "Criação de aplicativos nativos para iOS usando Swift, SwiftUI e UIKit com foco em performance e experiência do usuário.",
    "about.software.title": "Engenharia de Software",
    "about.software.description":
      "Base sólida em princípios de engenharia de software, desenvolvimento orientado a testes e metodologias ágeis.",
    "about.currently": "Atualmente",
    "about.current1": "Trabalhando em soluções serverless com AWS Lambda",
    "about.current2": "Aprendendo Rust e padrões avançados de arquitetura em nuvem",
    "about.current3": "Desenvolvedor Backend na Ninja Parts",
    "about.current4": "Estudante de Engenharia da Computação na PUCPR",
    "about.achievements": "Conquistas",
    "about.achievement1": "Vencedor do Swift Student Challenge da WWDC (2023, 2024)",
    "about.achievement2": "Membro da Apple Developer Academy (2023)",

    // Skills
    "skills.title": "Stack Tecnológico",
    "skills.description": "As tecnologias e ferramentas que utilizo para construir aplicações robustas e escaláveis.",
    "skills.backend": "Backend & Cloud",
    "skills.ios": "Desenvolvimento iOS",
    "skills.data": "Dados & Outras Linguagens",
    "skills.tools": "Ferramentas & Plataformas",

    // Experience
    "experience.title": "Experiência",
    "experience.description": "Minha jornada profissional e formação acadêmica.",
    "experience.current": "Atual",
    "exp.title1": "Estágio em Desenvolvimento Backend",
    "exp.company1": "Ninja Parts – Curitiba, PR (2025 – Presente)",
    "exp.detail1.1": "Desenvolvimento e manutenção de funções serverless usando AWS Lambda",
    "exp.detail1.2": "Automatização de processos, consultas de dados e gerenciamento de bancos de dados operacionais",
    "exp.detail1.3": "Criação de ferramentas internas para otimizar a eficiência da equipe",
    "exp.title2": "Estágio em Desenvolvimento Web e Ciência de Dados",
    "exp.company2": "Manusis 4.0 (2021 – 2022, 8 meses)",
    "exp.detail2.1": "Desenvolvimento de aplicações web e análise de dados",
    "exp.detail2.2": "Colaboração na implementação de soluções de ciência de dados",
    "exp.title3": "Swift Student Challenge - WWDC",
    "exp.company3": "Participante Global (2023 e 2024)",
    "exp.detail3.1": "Aplicativos iOS selecionados entre os 350 melhores mundialmente no Swift Student Challenge",
    "exp.detail3.2": "Foco em inovação, performance e usabilidade dos aplicativos",
    "exp.title4": "Bacharelado em Engenharia da Computação",
    "exp.company4": "Pontifícia Universidade Católica do Paraná (PUCPR) – Curitiba, PR (Janeiro 2021 – Presente)",
    "exp.title5": "Apple Developer Academy",
    "exp.company5": "PUCPR – Curitiba, PR (Janeiro 2023)",
    "exp.detail5.1":
      "Projeto educacional em parceria com a Apple, com foco no desenvolvimento de soluções para o ecossistema Apple",

    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.description": "Uma seleção dos meus trabalhos recentes e projetos pessoais.",
    "projects.viewMore": "Ver Mais no GitHub",

    // Achievements
    "achievements.title": "Conquistas",
    "achievements.description": "Reconhecimentos e realizações ao longo da minha carreira.",
    "achievements.wwdc.title": "Vencedor do Swift Student Challenge da WWDC",
    "achievements.wwdc.date": "2023 & 2024",
    "achievements.wwdc.description":
      "Selecionado entre os 350 melhores desenvolvedores mundiais no Swift Student Challenge anual da Apple. Criei aplicativos iOS inovadores demonstrando habilidades técnicas e criatividade.",
    "achievements.academy.title": "Membro da Apple Developer Academy",
    "achievements.academy.date": "2023",
    "achievements.academy.description":
      "Selecionado para participar do programa educacional da Apple na PUCPR, com foco no desenvolvimento de soluções inovadoras para o ecossistema Apple e aprendizado das melhores práticas da indústria.",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.description": "Interessado em trabalharmos juntos? Fique à vontade para me contatar.",
    "contact.info": "Informações de Contato",
    "contact.send": "Envie uma Mensagem",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.submit": "Enviar Mensagem",
    "contact.namePlaceholder": "Seu nome",
    "contact.emailPlaceholder": "Seu email",
    "contact.messagePlaceholder": "Sua mensagem",

    // Footer
    "footer.rights": "Todos os direitos reservados.",

    // Language
    language: "Idioma",
    "language.en": "Inglês",
    "language.pt": "Português",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguageState(savedLanguage)
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "pt") {
        setLanguageState("pt")
      }
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  // Translation function
  const t = (key: string): string => {
    const currentTranslations = translations[language]
    return currentTranslations[key as keyof typeof currentTranslations] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

