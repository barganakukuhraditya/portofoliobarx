"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/portofolio";

// Index 0 = kartu tengah, 1 = kartu di sebelahnya, 2 = kartu paling pinggir
const SHIFT = [0, 53, 88]; // geser horizontal (% dari lebar kartu)
const SCALE = [1, 0.72, 0.54]; // ukuran
const DIM = [0, 0.4, 0.6]; // kegelapan

export default function CoverflowCarousel({ items }: { items: ProjectItem[] }) {
  const [active, setActive] = useState(0);
  const n = items.length;
  const half = Math.floor(n / 2);
  const current = items[active];

  return (
    <div>
      {/* Panggung */}
      <div className="relative mt-10 h-[150px] select-none sm:h-[200px] lg:h-[250px]">
        {items.map((item, i) => {
          // posisi relatif terhadap kartu aktif (melingkar)
          const offset = ((i - active + n + half) % n) - half;
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          const sign = offset < 0 ? -1 : 1;
          const x = visible ? sign * SHIFT[abs] : sign * SHIFT[2];
          const scale = visible ? SCALE[abs] : SCALE[2];

          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Lihat ${item.title}`}
              aria-current={offset === 0}
              className={`absolute left-1/2 top-1/2 aspect-video w-[220px] overflow-hidden rounded-2xl border border-fg/10 bg-surface text-left shadow-2xl transition-all duration-700 ease-out sm:w-[320px] lg:w-[400px] ${
                offset === 0 ? "cursor-default" : "cursor-pointer"
              }`}
              style={{
                transform: `translate(${-50 + x}%, -50%) scale(${scale})`,
                zIndex: 20 - abs,
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? "auto" : "none",
              }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 220px"
                  draggable={false}
                  priority={i === 0}
                  className="object-cover"
                />
              ) : (
                <span className="grid h-full w-full place-items-center bg-gradient-to-br from-fg/10 to-fg/0 text-6xl font-black text-fg/20">
                  {item.title.charAt(0)}
                </span>
              )}

              {/* Lapisan gelap untuk kartu samping */}
              <span
                className="pointer-events-none absolute inset-0 bg-black transition-opacity duration-700"
                style={{ opacity: visible ? DIM[abs] : DIM[2] }}
              />
            </button>
          );
        })}
      </div>

      {/* Info proyek */}
      <div key={active} className="fade-up mx-auto mt-8 max-w-2xl text-center">
        <h3 className="text-2xl font-bold sm:text-3xl">{current.title}</h3>
        <p className="mt-4 text-[15px] leading-relaxed text-fg/60">
          {current.description}
        </p>

        <ul className="mt-5 flex flex-wrap justify-center gap-2">
          {current.tags.map((tag) => (
            <li
              key={tag}
              className="cursor-default rounded border border-fg/10 bg-fg/5 px-2.5 py-1 font-mono text-[11px] text-fg/70 transition hover:border-fg hover:text-fg"
            >
              {tag}
            </li>
          ))}
        </ul>

        {current.href && (
          <a
            href={current.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-1.5 border-b-2 border-fg pb-0.5 text-sm font-semibold transition hover:opacity-60"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}