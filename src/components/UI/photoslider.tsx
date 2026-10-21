"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  alt: string;
  fallback: string;
};

export default function PhotoSlider({ images, alt, fallback }: Props) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  if (total === 0) {
    return (
      <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl bg-surface text-6xl font-black text-fg/20 shadow-xl">
        {fallback}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setCurrent((c) => (c + 1) % total)}
      disabled={total === 1}
      aria-label="Lihat foto berikutnya"
      className={`relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface shadow-xl ${
        total > 1 ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} (${i + 1} dari ${total})`}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          priority={i === 0}
          className={`object-cover transition-opacity duration-500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {total > 1 && (
        <span className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full bg-white shadow transition-all duration-300 ${
                i === current ? "w-5 opacity-100" : "w-1.5 opacity-60"
              }`}
            />
          ))}
        </span>
      )}
    </button>
  );
}