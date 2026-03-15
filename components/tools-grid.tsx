"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "Python",
    emoji: "🐍",
    category: "Programming"
  },
  {
    name: "Django",
    emoji: "🌐",
    category: "Backend Framework"
  },
  {
    name: "Django REST Framework",
    emoji: "⚡",
    category: "Backend Framework"
  },
  {
    name: "Flask",
    emoji: "🥤",
    category: "Backend Framework"
  },
  {
    name: "API Development",
    emoji: "🔗",
    category: "Backend"
  },
  {
    name: "HTML",
    emoji: "💻",
    category: "Frontend"
  },
  {
    name: "CSS",
    emoji: "🎨",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    emoji: "📜",
    category: "Frontend"
  },
  {
    name: "Bootstrap",
    emoji: "📦",
    category: "Frontend"
  },
  {
    name: "Tailwind",
    emoji: "🌟",
    category: "Frontend"
  },
  {
    name: "MySQL",
    emoji: "🗄️",
    category: "Database"
  },
  {
    name: "PostgreSQL",
    emoji: "🐘",
    category: "Database"
  },
  {
    name: "SQLite",
    emoji: "📝",
    category: "Database"
  },
  {
    name: "SQL & Optimization",
    emoji: "🔍",
    category: "Database"
  },
  {
    name: "Power BI",
    emoji: "📊",
    category: "Data & BI"
  },
  {
    name: "Excel",
    emoji: "📈",
    category: "Data & BI"
  },
  {
    name: "Pandas",
    emoji: "🐼",
    category: "Data & BI"
  },
  {
    name: "NumPy",
    emoji: "🔢",
    category: "Data & BI"
  },
  {
    name: "Matplotlib",
    emoji: "📉",
    category: "Data & BI"
  },
  {
    name: "Seaborn",
    emoji: "📊",
    category: "Data & BI"
  },
  {
    name: "Docker",
    emoji: "🐳",
    category: "DevOps"
  },
  {
    name: "CI/CD",
    emoji: "🔁",
    category: "DevOps"
  },
  {
    name: "AWS Basics",
    emoji: "☁️",
    category: "DevOps"
  },
  {
    name: "Git & GitHub",
    emoji: "🔗",
    category: "Tools & Platforms"
  },
  {
    name: "Jira",
    emoji: "📋",
    category: "Tools & Platforms"
  },
  {
    name: "VS Code",
    emoji: "💻",
    category: "Tools & Platforms"
  },
]

export function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Card className="group overflow-hidden border-none bg-background/50 transition-colors hover:bg-accent">
            <CardContent className="flex flex-col items-center justify-center p-4 text-center">
              <span className="text-4xl mb-2" role="img" aria-label={tool.name}>
                {tool.emoji}
              </span>
              <h3 className="text-sm font-medium">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{tool.category}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}