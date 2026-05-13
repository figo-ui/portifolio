"use client"

import { motion } from "framer-motion"
import { Terminal, Database, Cloud, Code2 } from "lucide-react"

const timeline = [
  {
    year: "2024 - Present",
    role: "Senior AI Systems Engineer",
    company: "TechNova Solutions",
    description: "Leading the development of AI-powered healthcare platforms and enterprise RAG systems.",
  },
  {
    year: "2022 - 2024",
    role: "Full-Stack Developer",
    company: "University Systems Inc",
    description: "Architected and built comprehensive university management systems handling 50k+ students.",
  },
  {
    year: "2020 - 2022",
    role: "Backend Engineer",
    company: "DataFlow",
    description: "Developed high-performance OCR and document verification pipelines using Python and FastAPI.",
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering <span className="text-primary text-glow">Intelligence</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            I am an Application System Developer with a passion for building scalable, high-performance systems. My expertise lies at the intersection of full-stack engineering and artificial intelligence. I don't just write code; I architect solutions that solve complex real-world problems in healthcare, education, and enterprise automation.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { label: "Years Experience", value: "5+", icon: Terminal },
            { label: "Projects Delivered", value: "40+", icon: Code2 },
            { label: "Data Processed", value: "10TB+", icon: Database },
            { label: "Cloud Deployments", value: "100+", icon: Cloud },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:-translate-y-1 transition-transform"
            >
              <stat.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12">Professional Journey</h2>
          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8 items-start relative">
                  {/* Timeline Line */}
                  <div className="hidden md:block absolute left-[20%] top-0 bottom-[-3rem] w-[1px] bg-white/10" />
                  
                  {/* Year */}
                  <div className="md:col-span-1 text-primary font-mono text-sm pt-1 mb-2 md:mb-0 relative">
                    <div className="absolute left-[-2rem] md:left-auto md:right-[-1.3rem] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10" />
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="md:col-span-4 glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                    <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                    <h4 className="text-md text-muted-foreground mb-4">{item.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
