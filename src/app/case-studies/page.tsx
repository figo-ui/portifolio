import Link from "next/link"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { ArrowRight, Box } from "lucide-react"

export default async function CaseStudies() {
  const caseStudies = await getAllFilesFrontMatter("case-studies")

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering <span className="text-secondary text-glow">Case Studies</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            In-depth breakdowns of system architecture, problem-solving methodologies, and technical implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`}>
              <article className="h-full glass-card p-8 rounded-3xl border border-white/5 hover:border-secondary/50 transition-colors group flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                    <Box size={24} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-secondary tracking-wider uppercase block">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {study.tech && study.tech.map((techItem: string) => (
                    <span key={techItem} className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-muted-foreground border border-white/5">
                      {techItem}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center text-secondary font-medium group-hover:underline underline-offset-4 gap-1">
                  Read Case Study
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
