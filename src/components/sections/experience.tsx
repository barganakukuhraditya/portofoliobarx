"use client";

import PhotoSlider from "@/components/UI/photoslider";
import { useState } from "react";
// import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { experience } from "@/data/portofolio";

export default function Experience() {
    const [index, setIndex] = useState(0);
    const items = experience.items;
    const item = items[index];
    console.log(item);
    const many = items.length > 1;

    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const next = () => setIndex((i) => (i + 1) % items.length);

    return (
        <section
            id="experience"
            className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 pb-20 pt-36 sm:px-10"
        >
            <div className="w-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
                    {experience.eyebrow}
                </p>
                <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
                    {experience.heading}
                </h2>
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg/60">
                    {experience.description}
                </p>

                <div
                    key={index}
                    className="fade-up mt-6 grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
                >
                    {/* Kiri: teks */}
                    <div>
                        <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl font-bold">{item.title}</h3>
                            <span className="shrink-0 pt-1 text-right font-mono text-xs text-fg/50">
                                {item.period}
                            </span>
                        </div>

                        <p className="mt-5 font-semibold">
                            {item.organization}
                            <span className="ml-2 rounded border border-fg/10 px-1.5 py-0.5 font-mono text-[10px] font-normal uppercase tracking-wider text-fg/50">
                                {item.type}
                            </span>
                        </p>

                        <p className="mt-4 text-[15px] leading-relaxed text-fg/60">
                            {item.description}
                        </p>

                        {item.links && item.links.length > 0 && (
                            <ul className="mt-8 flex flex-col gap-4">
                                {item.links.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-[0.15em] transition hover:opacity-60"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}

                        {many && (
                            <div className="mt-10 flex items-center gap-4">
                                <button
                                    type="button"
                                    onClick={prev}
                                    aria-label="Sebelumnya"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-fg/15 bg-surface transition hover:border-fg"
                                >
                                    <ArrowLeft className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={next}
                                    aria-label="Berikutnya"
                                    className="grid h-10 w-10 place-items-center rounded-full border border-fg/15 bg-surface transition hover:border-fg"
                                >
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                                <span className="font-mono text-xs text-fg/50">
                                    {String(index + 1).padStart(2, "0")} /{" "}
                                    {String(items.length).padStart(2, "0")}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Kanan: foto dengan kartu miring di belakang */}
                    <div className="relative mr-auto w-full max-w-md">
                        <div className="absolute inset-0 -rotate-3 rounded-2xl bg-fg/10" />
                        <div className="absolute inset-0 translate-y-3 rotate-2 rounded-2xl bg-blue-600/60" />

                        <div className="relative">
                            <PhotoSlider
                                images={item.images ?? []}
                                alt={`${item.title} di ${item.organization}`}
                                fallback={item.organization.charAt(0)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}