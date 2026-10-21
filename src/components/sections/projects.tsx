import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portofolio";
import CoverflowCarousel from "@/components/UI/coverflowcarousel";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1280px] overflow-x-clip px-6 pb-20 pt-36 sm:px-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
            {projects.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
            {projects.heading}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg/60">
            {projects.description}
          </p>
        </div>

        <a
          href={projects.moreLink.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-surface px-6 py-3.5 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {projects.moreLink.label}
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <CoverflowCarousel items={projects.items} />
    </section>
  );
}