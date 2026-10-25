import Image from "next/image";
import { hero } from "@/data/portofolio";

const MOBILE_ROWS = 9;

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] overflow-hidden">
      {/* Lingkaran tipis (desktop) */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/5 md:block" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[100vh] w-[100vh] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fg/5 md:block" />

      {/* Layer 1 (desktop): satu baris besar */}
      <div className="absolute inset-x-0 top-1/2 hidden -translate-y-1/2 overflow-hidden md:block">
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

      {/* Layer 1 (mobile): banyak baris, arah bergantian */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col justify-center gap-1 overflow-hidden pt-16 md:hidden"
      >
        {Array.from({ length: MOBILE_ROWS }).map((_, row) => (
          <div key={row} className="overflow-hidden">
            <div
              className="animate-marquee flex w-max"
            >
              {[0, 1].map((i) => (
                <span
                  key={i}
                  className="outline-text shrink-0 whitespace-nowrap pr-8 text-[3.5rem] font-bold uppercase leading-[0.95]"
                >
                  {hero.marqueeText}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Layer 2: foto */}
      <Image
        src={hero.photo}
        alt={hero.photoAlt}
        width={900}
        height={1100}
        priority
        className="absolute bottom-0 left-1/2 z-10 h-[88%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom md:h-[100%]"
      />

      {/* Layer 3: Scroll Down */}
      <a
        href="#projects"
        className="absolute bottom-8 right-3 z-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-fg/60 [writing-mode:vertical-rl] md:bottom-10 md:right-6 md:gap-4 md:text-[11px]"
      >
        <span className="h-12 w-px bg-fg/60 md:h-16" />
        Scroll Down
      </a>
    </section>
  );
}