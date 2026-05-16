import Image from "next/image"

export const MDXComponents = {
  h1: (props: any) => <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 tracking-tight text-foreground" {...props} />,
  h2: (props: any) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-4 tracking-tight text-foreground" {...props} />,
  h3: (props: any) => <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-4 text-foreground" {...props} />,
  p: (props: any) => <p className="text-lg text-muted-foreground leading-relaxed mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-muted-foreground text-lg" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-muted-foreground text-lg" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  a: (props: any) => <a className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-6 italic my-8 text-xl text-foreground/90 bg-white/5 py-4 pr-4 rounded-r-lg" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-black/30 border border-white/10 rounded-md px-1.5 py-0.5 text-sm font-mono text-primary" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-black/40 border border-white/10 rounded-xl p-6 my-8 overflow-x-auto text-sm" {...props} />
  ),
  Image: (props: any) => (
    <div className="my-8 overflow-hidden rounded-xl border border-white/10 relative">
      <Image {...props} className="w-full h-auto object-cover" />
    </div>
  ),
}
