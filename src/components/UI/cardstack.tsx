"use client";

import { useState } from "react";

const rotations = [-6, 2, 6];

export default function CardStack({ traits }: { traits: readonly string[] }) {
  const [active, setActive] = useState(0);
  const n = traits.length;

  return (
    <button
      type="button"
      onClick={() => setActive((a) => (a + 1) % n)}
      aria-label="Lihat trait berikutnya"
      className="relative h-36 w-40 shrink-0 cursor-pointer text-left"
    >
      {traits.map((trait, i) => {
        const pos = (i - active + n) % n;
        return (
          <span
            key={trait}
            className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-fg/5 bg-surface p-4 shadow-lg transition-all duration-500"
            style={{
              zIndex: 10 - pos,
              opacity: pos > 2 ? 0 : 1,
              transform: `translate(${pos * 8}px, ${pos * 8}px) rotate(${
                rotations[Math.min(pos, 2)]
              }deg)`,
            }}
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-fg/50">
              Trait
            </span>
            <span className="text-base font-bold">{trait}</span>
          </span>
        );
      })}
    </button>
  );
}