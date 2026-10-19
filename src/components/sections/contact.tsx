import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { contact } from "@/data/portofolio";
import { GithubIcon, LinkedinIcon } from "@/components/UI/brandicons";

const icons = {
  email: Mail,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 pb-20 pt-36 sm:px-10"
    >
      <div className="grid w-full items-center gap-14 lg:grid-cols-2">
        {/* Kiri */}
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
            {contact.eyebrow}
          </p>

          <h2 className="mt-4 text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.88] tracking-tighter">
            {contact.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>

          <p className="mt-10 max-w-md text-2xl font-semibold leading-snug">
            {contact.tagline}
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-fg/60">
            {contact.description}
          </p>

          <a
            href={contact.resume.href}
            download
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-fg px-8 py-4 text-xs font-bold uppercase tracking-wider text-bg transition hover:opacity-80"
          >
            {contact.resume.label}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Kanan: kartu kontak */}
        <ul className="flex w-full max-w-md flex-col gap-4 lg:ml-auto">
          {contact.items.map((item, i) => {
            const Icon = icons[item.type];
            return (
              <li key={item.type}>
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group relative flex items-center gap-5 rounded-3xl border border-fg/5 bg-surface p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="absolute right-5 top-4 font-mono text-[10px] text-amber-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-bg/50">
                    <Icon className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.25em] text-fg/50">
                      {item.label}
                    </span>
                    <span className="mt-1 block break-all text-[15px] font-medium">
                      {item.value}
                    </span>
                  </span>

                  {item.external && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-fg/50 transition group-hover:text-fg" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}