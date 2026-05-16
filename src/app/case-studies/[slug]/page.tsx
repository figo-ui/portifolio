import { getFileBySlug, getFiles } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { MDXComponents } from "@/components/MDXComponents"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  const studies = await getFiles("case-studies")
  return studies.map((study) => ({
    slug: study.replace(/\.mdx$/, ""),
  }))
}

export default async function CaseStudy({ params }: { params: { slug: string } }) {
  const study = await getFileBySlug("case-studies", params.slug)

  if (!study) {
    return notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-16">
          <Link href="/case-studies" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Link>
          
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm font-mono text-secondary tracking-wider uppercase block bg-secondary/10 px-3 py-1 rounded-full">
              {study.frontmatter.category}
            </span>
            <div className="flex gap-4">
               <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                 <Github size={18} />
                 Code
               </a>
               <a href="#" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                 <ExternalLink size={18} />
                 Live Demo
               </a>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            {study.frontmatter.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-12">
             {study.frontmatter.tech && study.frontmatter.tech.map((techItem: string) => (
                <span key={techItem} className="px-4 py-1.5 text-sm font-medium rounded-md bg-white/5 text-foreground border border-white/10">
                  {techItem}
                </span>
              ))}
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed p-6 glass-card rounded-2xl border-l-4 border-l-secondary">
            {study.frontmatter.description}
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-secondary hover:prose-a:text-secondary/80">
          <MDXRemote source={study.source} components={MDXComponents} />
        </article>
      </div>
    </div>
  )
}
