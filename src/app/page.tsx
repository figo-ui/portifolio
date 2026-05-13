"use client"

import { motion } from "framer-motion"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Twitter, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Hero3D from "@/components/Hero3D"
import { TypewriterEffect } from "@/components/TypewriterEffect"
import Skills from "@/components/Skills"

export default function Home() {
  const words = [
    { text: "I " },
    { text: "build " },
    { text: "intelligent " },
    { text: "digital " },
    { text: "systems ", className: "text-primary text-glow" },
    { text: "powered " },
    { text: "by " },
    { text: "AI", className: "text-accent text-glow" },
  ]

  return (
    <div className="flex flex-col w-full">
      <div className="relative min-h-screen flex flex-col justify-center overflow-hidden w-full">
        <Hero3D />
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px] z-0" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-foreground"
            >
              Application System <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Developer
              </span>
            </motion.h1>

            <div className="mt-4 min-h-[40px] sm:min-h-[60px] md:min-h-[80px]">
              <TypewriterEffect words={words} />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-muted-foreground max-w-2xl mt-6"
            >
              Specializing in full-stack architecture, healthcare AI, university platforms, and automation engineering. Delivering scalable, production-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-4 mt-8"
            >
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 glass">
                <Download size={18} />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-6 mt-12 text-muted-foreground"
            >
              <a href="#" className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
            </motion.div>

          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>

      <Skills />
    </div>
  )
}
