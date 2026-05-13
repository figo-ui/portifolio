"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "AI Healthcare Assistant",
    category: "Healthcare AI",
    description: "Intelligent medical triage system featuring symptom analysis, OCR for medical records, and safe AI workflows. Processed over 10k patient queries securely.",
    stack: ["Next.js", "Python", "FastAPI", "LLM", "PostgreSQL"],
    image: "bg-gradient-to-br from-blue-900 to-slate-900", // Placeholder for actual image
    featured: true,
  },
  {
    title: "University Management Platform",
    category: "Enterprise System",
    description: "Comprehensive LMS and student portal handling registration, notifications, and administrative workflows for 50k+ active users.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    image: "bg-gradient-to-br from-indigo-900 to-slate-900",
    featured: false,
  },
  {
    title: "CBHI Automation System",
    category: "Automation Engineering",
    description: "Automated document processing system with ID verification, OCR, and payment integrations. Reduced manual entry by 85%.",
    stack: ["Django", "React", "Tesseract", "Celery", "PostgreSQL"],
    image: "bg-gradient-to-br from-violet-900 to-slate-900",
    featured: false,
  },
  {
    title: "Islamic AI Assistant",
    category: "Intelligent Assistant",
    description: "Multilingual AI tutor with storytelling, translation, and comprehensive Quran/Hadith support built on RAG architecture.",
    stack: ["Next.js", "TypeScript", "LangChain", "Pinecone"],
    image: "bg-gradient-to-br from-cyan-900 to-slate-900",
    featured: false,
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Featured <span className="text-primary text-glow">Work</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A selection of production-ready systems I've architected and built. From healthcare AI to enterprise automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-primary/50 transition-colors duration-500 ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Image Container */}
              <div className={`w-full ${project.featured ? "h-80 md:h-96" : "h-64"} relative overflow-hidden ${project.image}`}>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                
                {/* Abstract shape representing project (Placeholder for image) */}
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/20 rounded-full rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full -rotate-45 group-hover:-rotate-90 transition-transform duration-1000" />
                </div>
              </div>

              {/* Content */}
              <div className={`relative z-20 p-8 ${project.featured ? "md:-mt-32" : "-mt-20"} flex flex-col h-full justify-end`}>
                <div className="glass-card p-6 md:p-8 rounded-2xl w-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-xs font-mono text-primary mb-2 block tracking-wider uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors">
                        <Github size={20} />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-foreground transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.stack.map(tech => (
                      <span key={tech} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Button variant="ghost" className="group/btn gap-2 pl-0 hover:bg-transparent hover:text-primary">
                    View Case Study
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
