import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'src/content')

export async function getFiles(type: 'blog' | 'case-studies') {
  const dir = path.join(contentDir, type)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
    return []
  }
  return fs.readdirSync(dir).filter(file => file.endsWith('.mdx'))
}

export async function getFileBySlug(type: 'blog' | 'case-studies', slug: string) {
  const filePath = path.join(contentDir, type, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const source = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(source)

  return {
    source: content,
    frontmatter: {
      slug,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type: 'blog' | 'case-studies') {
  const files = await getFiles(type)

  return files.reduce((allPosts: any[], postSlug) => {
    const source = fs.readFileSync(path.join(contentDir, type, postSlug), 'utf8')
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, []).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
}
