import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Amanuel Daniel — 3D Portfolio",
  description: "Personal Developer Portfolio",
  keywords: ["AI Engineer", "Full-stack Developer", "Next.js", "React", "TypeScript", "Python", "Machine Learning", "Portfolio"],
  authors: [{ name: "Amanuel Daniel" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-domain.com",
    title: "Amanuel Daniel — 3D Portfolio",
    description: "Showcasing intelligent digital systems, AI integrations, and full-stack solutions.",
    siteName: "Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amanuel Daniel — 3D Portfolio",
    description: "Showcasing intelligent digital systems, AI integrations, and full-stack solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
