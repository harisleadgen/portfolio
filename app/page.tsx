import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingNav from "./components/FloatingNav";
import ScrollProgress from "./components/ui/ScrollProgress";
import { StarsCanvas } from "@/components/ui/star-background";
import GlobalLightbox from "./components/GlobalLightbox";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      <StarsCanvas />
      <ScrollProgress />
      <FloatingNav />
      <GlobalLightbox />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about" className="relative z-10">
        <About />
      </div>

      <div id="projects" className="relative z-10">
        <Projects />
      </div>
      
      <div id="experience" className="relative z-10">
        <Experience />
      </div>
      
      <div id="skills" className="relative z-10">
        <Skills />
      </div>

      <div className="relative z-10">
        <Testimonials />
      </div>
      
      <div className="relative z-10">
        <Education />
      </div>

      <div id="contact" className="relative z-10">
        <Contact />
      </div>
      
      <Footer />
    </main>
  );
}
