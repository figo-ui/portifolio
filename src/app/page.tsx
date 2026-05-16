import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "@/components";
import WorkProject from "@/components/sections/WorkProject";

export default function Home() {
  return (
    <main className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <WorkProject />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </main>
  );
}
