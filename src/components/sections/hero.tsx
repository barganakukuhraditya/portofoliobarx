import Image from "next/image";
import { hero } from "@/data/portofolio";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Lingkaran tipis di belakang (opsional) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[100vh] w-[100vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/5" />

      {/* Layer 1: teks outline yang bergerak ke kiri */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((i) => (
            <span
              key={i}
              aria-hidden={i === 1}
              className="outline-text shrink-0 whitespace-nowrap pr-20 text-[clamp(7rem,20vw,18rem)] font-bold uppercase leading-none"
            >
              {hero.marqueeText}
            </span>
          ))}
        </div>
      </div>

      {/* Layer 2: foto di depan teks */}
      <Image
        src={hero.photo}
        alt={hero.photoAlt}
        width={900}
        height={1100}
        priority
        className="absolute bottom-0 left-1/2 z-10 h-[110%] w-auto -translate-x-1/2 object-contain object-bottom"
      />

      {/* Layer 3: Scroll Down */}
      <a
        href="#projects"
        className="absolute bottom-10 right-6 z-20 hidden items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-fg/60 [writing-mode:vertical-rl] md:flex"
      >
        <span className="h-16 w-px bg-fg/60" />
        Scroll Down
      </a>
    </section>
  );
}