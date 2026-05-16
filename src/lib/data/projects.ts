export interface Project {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    title: "WePlay",
    category: "Super App",
    description: "WePlay Ethiopia - A comprehensive Social, Work, and Learning Super App designed to integrate multiple aspects of daily digital life.",
    stack: ["TypeScript", "React Native", "Next.js", "Node.js"],
    image: "bg-gradient-to-br from-blue-900 to-slate-900",
    featured: true,
    githubUrl: "https://github.com/figo-ui/WePlay",
  },
  {
    title: "Oda Bultum University Platform",
    category: "Enterprise System",
    description: "A robust university and leave management system built for Oda Bultum University, handling staff and administrative workflows.",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma"],
    image: "bg-gradient-to-br from-indigo-900 to-slate-900",
    featured: true,
    githubUrl: "https://github.com/figo-ui/leave-s-m",
  },
  {
    title: "Healthcare-AI",
    category: "Healthcare AI",
    description: "An intelligent healthcare application utilizing Python for AI-driven analysis, diagnosis support, and automated medical workflows.",
    stack: ["Python", "Machine Learning", "FastAPI", "React"],
    image: "bg-gradient-to-br from-cyan-900 to-slate-900",
    featured: false,
    githubUrl: "https://github.com/figo-ui/Healthcare-AI",
  },
  {
    title: "Member-Based CBHI",
    category: "Mobile Application",
    description: "Community-Based Health Insurance (CBHI) management application for mobile platforms, optimizing member registration and tracking.",
    stack: ["Dart", "Flutter", "Firebase"],
    image: "bg-gradient-to-br from-violet-900 to-slate-900",
    featured: false,
    githubUrl: "https://github.com/figo-ui/member-based-CBHI-",
  },
  {
    title: "Najjashi",
    category: "Web Application",
    description: "A full-stack TypeScript application built with modern web technologies, focused on performance and scalable architecture.",
    stack: ["TypeScript", "React", "Node.js"],
    image: "bg-gradient-to-br from-emerald-900 to-slate-900",
    featured: false,
    githubUrl: "https://github.com/figo-ui/Najjashi",
  }
];
