// Define color mappings for technologies
export const techColors: Record<string, string> = {
  // Backend & Cloud
  Java: "bg-red-600",
  Spring: "bg-green-600",
  Rust: "bg-orange-600",
  "Node.js": "bg-green-700",
  PHP: "bg-indigo-600",
  Laravel: "bg-red-500",
  AWS: "bg-yellow-600",
  Docker: "bg-blue-600",

  // iOS
  Swift: "bg-orange-500",
  SwiftUI: "bg-blue-500",
  UIKit: "bg-purple-600",
  Firebase: "bg-yellow-500",

  // Data & Others
  Python: "bg-blue-700",
  TensorFlow: "bg-yellow-700",
  MySQL: "bg-blue-800",
  C: "bg-gray-700",
  JavaScript: "bg-yellow-400",

  // Tools
  GitHub: "bg-gray-800",
  "IntelliJ IDEA": "bg-pink-600",
  Postman: "bg-orange-400",
  Notion: "bg-gray-900",
  Figma: "bg-purple-500",

  // Default color for unlisted technologies
  default: "bg-primary",
}

export const getTechColor = (tech: string): string => {
  return techColors[tech] || techColors.default
}

