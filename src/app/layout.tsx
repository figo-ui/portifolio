import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import FloatingAI from "@/components/FloatingAI";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AI Engineer Portfolio | Application System Developer",
  description: "Premium personal portfolio for an Application System Developer specializing in AI-powered systems, Full-stack development, and Healthcare AI.",
  keywords: ["AI Engineer", "Full-stack Developer", "Next.js", "React", "Machine Learning", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground`}
      >
        <SmoothScroll>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <FloatingAI />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
