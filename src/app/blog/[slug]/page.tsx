import { getFileBySlug, getFiles } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { MDXComponents } from "@/components/MDXComponents"
import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = await getFiles("blog")
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getFileBySlug("blog", params.slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-12">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors group">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {post.frontmatter.title}
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.frontmatter.description}
          </p>
        </div>

        <div className="w-full h-px bg-white/10 mb-12" />

        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.source} components={MDXComponents} />
        </article>
      </div>
    </div>
  )
}
