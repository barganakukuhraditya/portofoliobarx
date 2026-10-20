import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";
import About from "@/components/layout/about";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="projects" className="min-h-screen" />
        <Skills />
        <About />
        <section id="experience" className="min-h-screen" />
        <section id="publications" className="min-h-screen" />
        <Contact />
      </main>
    </>
  );
}