import Image from "next/image";
import { BadgeCheck, Code, FlaskConical, Rocket } from "lucide-react";
import { about, contact } from "@/data/portofolio";
import CardStack from "@/components/UI/cardstack";

const currentlyIcons = {
  code: Code,
  flask: FlaskConical,
  rocket: Rocket,
};

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 pb-20 pt-36 sm:px-10"
    >
      <div className="w-full">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
          {about.eyebrow}
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
          {about.heading}
        </h2>

        {/* Profil */}
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-8">
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-full border border-fg/10 bg-surface">
            <Image
              src={about.photo}
              alt={about.name}
              width={224}
              height={224}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="max-w-3xl">
            <h3 className="flex items-center gap-2 text-lg font-bold uppercase tracking-wide">
              {about.name}
              <BadgeCheck className="h-5 w-5 fill-blue-500 text-white" />
            </h3>

            <dl className="mt-3 flex gap-8">
              {about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/50">
                    {s.label}
                  </dt>
                  <dd className="mt-0.5 text-base font-bold">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-fg/60">
              {about.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p>
                Want to know more about my experience?{" "}
                <a
                  href={contact.resume.href}
                  download
                  className="font-semibold text-fg underline underline-offset-2"
                >
                  Download my resume
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Currently + kartu trait */}
        <div className="mt-8 flex flex-col items-start gap-8 md:mt-10 md:flex-row md:items-center md:gap-40">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-fg/50">
              Currently
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {about.currently.map((item) => {
                const Icon = currentlyIcons[item.icon];
                return (
                  <li key={item.title} className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-surface shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">{item.title}</span>
                      <span className="block text-xs text-fg/60">{item.text}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="self-center pb-6 md:self-auto md:pb-0">
            <CardStack traits={about.traits} />
          </div>
        </div>
      </div>
    </section>
  );
}