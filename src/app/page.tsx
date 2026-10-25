import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import About from "@/components/layout/about";
import Experience from "@/components/sections/experience";
import { experience, organization } from "@/data/portofolio";
import Contact from "@/components/sections/contact";
import Publications from "@/components/sections/publications";
import BackToTop from "@/components/UI/backtotop";
import Reveal from "@/components/UI/reveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reveal><Projects /></Reveal>
        <Reveal><Skills/></Reveal>
        <Reveal><About/></Reveal>
        <Reveal><Experience data={experience} id="experience"/></Reveal>
        <Reveal><Experience data={organization} id="organization"/></Reveal>
        <Reveal><Publications/></Reveal>
        <Reveal><Contact/></Reveal>
      </main>
      <BackToTop />
    </>
  );
}