import Link from "next/link"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { Calendar, ArrowRight } from "lucide-react"

export default async function Blog() {
  const posts = await getAllFilesFrontMatter("blog")

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Engineering <span className="text-primary text-glow">Notes</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, tutorials, and insights on building AI systems, scalable architecture, and modern full-stack development.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="glass p-8 rounded-3xl border border-white/5 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                  {post.tags && (
                    <div className="flex gap-2">
                      {post.tags.map((tag: string) => (
                        <span key={tag} className="text-primary bg-primary/10 px-2 py-0.5 rounded-full text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.description}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:underline underline-offset-4 gap-1">
                  Read Article
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
