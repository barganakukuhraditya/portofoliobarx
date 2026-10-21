import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import About from "@/components/layout/about";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Publications from "@/components/sections/publications";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Experience />
        <Publications />
        <Contact />
      </main>
    </>
  );
}