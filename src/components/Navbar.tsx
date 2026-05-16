"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Menu, X, Terminal } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Resume", href: "/resume" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500",
            isScrolled
              ? "glass shadow-lg border border-white/10"
              : "bg-transparent border border-transparent"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Terminal size={20} className="font-bold" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">SYS.DEV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                Let's Talk
              </span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-foreground p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-[calc(100%+1rem)] left-4 right-4 glass rounded-2xl border border-white/10 p-4 shadow-xl flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground font-medium px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-center font-medium bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors mt-2"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  )
}
