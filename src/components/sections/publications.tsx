import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/portofolio";

export default function Publications() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-[1280px] px-6 pb-20 pt-36 sm:px-10"
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
        {publications.eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
        {publications.heading}
      </h2>
      <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-fg/60">
        {publications.description}
      </p>

      <ul className="mt-10 flex flex-col gap-5">
        {publications.items.map((item, i) => (
          <li key={item.title}>
            <article className="rounded-3xl border border-fg/5 bg-surface p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9">
              {/* Nomor dan tahun */}
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-fg/50">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{item.year}</span>
              </div>

              {/* Judul */}
              <h3 className="mt-6 max-w-3xl text-2xl font-bold leading-snug sm:text-3xl">
                {item.title}
              </h3>

              {/* Jurnal + badge */}
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-[15px] font-medium text-fg/70">{item.venue}</p>
                {item.indexing && (
                  <span className="rounded-full bg-fg px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-bg">
                    {item.indexing}
                  </span>
                )}
              </div>

              {item.authors && (
                <p className="mt-2 text-sm text-fg/50">{item.authors}</p>
              )}

              {item.summary && (
                <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-fg/60">
                  {item.summary}
                </p>
              )}

              {/* Tag */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="cursor-default rounded border border-fg/10 bg-fg/5 px-2.5 py-1 font-mono text-[11px] text-fg/70 transition hover:border-fg hover:text-fg"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* Link */}
              {item.links && item.links.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
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
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}