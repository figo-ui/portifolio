"use client"

import { motion } from "framer-motion"
import { Monitor, Server, Brain, TerminalSquare, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["React 19", "Next.js 15", "Tailwind CSS", "TypeScript", "Framer Motion", "Three.js"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Django", "FastAPI", "RESTful APIs", "GraphQL"],
  },
  {
    title: "AI & Data",
    icon: Brain,
    skills: ["LLM Integration", "RAG Systems", "OCR", "NLP workflows", "LangChain", "Vector DBs"],
  },
  {
    title: "DevOps & Cloud",
    icon: TerminalSquare,
    skills: ["Docker", "Linux", "CI/CD", "Nginx", "AWS", "Vercel"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Pinecone"],
  },
]

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary text-glow">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and intelligent applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-medium rounded-md bg-white/5 text-muted-foreground border border-white/5 hover:bg-white/10 hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
