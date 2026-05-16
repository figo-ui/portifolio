"use client"

import { motion } from "framer-motion"
import { Download, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resume() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 rounded-3xl border border-white/10 max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-8 animate-pulse">
            <FileText size={40} />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Professional <span className="text-primary text-glow">Resume</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-md">
            Download my full professional resume to see my complete work history, education, and technical certifications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="gap-2 group text-lg px-8 py-6">
              <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
              Download PDF
            </Button>
            
            <Button size="lg" variant="outline" className="gap-2 glass text-lg px-8 py-6 group">
              View on LinkedIn
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
