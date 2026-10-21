import type { IconType } from "react-icons";
import Image from "next/image";
import {
    //   SiCss,
    SiDart,
    SiFlutter,
    SiGit,
    SiGo,
    SiHtml5,
    SiJsonwebtokens,
    SiMongodb,
    SiMysql,
    SiPhp,
    SiPostman,
    SiNotion,
    SiTrello,
} from "react-icons/si";
import { Database, Server, Workflow } from "lucide-react";
import { capabilities } from "@/data/portofolio";

type TechIcon =
    | { label: string; Icon: IconType; color?: string }
    | { label: string; src: string; invert?: boolean };

const techIconMap: Record<string, TechIcon> = {
    go: { Icon: SiGo, color: "#00ADD8", label: "Go" },
    mongodb: { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
    flutter: { Icon: SiFlutter, color: "#02569B", label: "Flutter" },
    dart: { Icon: SiDart, color: "#0175C2", label: "Dart" },
    git: { Icon: SiGit, color: "#F05032", label: "Git" },
    postman: { Icon: SiPostman, color: "#FF6C37", label: "Postman" },
    jwt: { Icon: SiJsonwebtokens, label: "JWT" },
    html: { Icon: SiHtml5, color: "#E34F26", label: "HTML" },
    php: { Icon: SiPhp, color: "#777BB4", label: "PHP" },
    mysql: { Icon: SiMysql, color: "#4479A1", label: "MySQL" }, css: { src: "/icons/css3.svg", label: "CSS" },
    python: { src: "/icons/python.svg", label: "Python" },
    notion: { Icon: SiNotion, label: "Notion" },
    trello: { Icon: SiTrello, color: "#0052CC", label: "Trello" },
    canva: { src: "/icons/canva.svg", label: "Canva" },
    capcut: { src: "/icons/capcut.svg", label: "CapCut" },
    figma: { src: "/icons/figma.svg", label: "Figma" },
    google: { src: "/icons/google.svg", label: "Google" },
};

const cardIconMap = {
    server: Server,
    database: Database,
    workflow: Workflow,
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="mx-auto flex min-h-screen max-w-[1280px] items-center px-6 pb-20 pt-36 sm:px-10"
        >
            <div className="grid w-full gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]">
                {/* Kiri */}
                <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-fg/50">
                        {capabilities.eyebrow}
                    </p>
                    <h2 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
                        {capabilities.heading}
                    </h2>
                    <p className="mt-6 max-w-md text-[15px] leading-relaxed text-fg/60">
                        {capabilities.description}
                    </p>

                    <div className="mt-10 flex flex gap-10">
                        {capabilities.techGroups.map((group, groupIndex) => (
                            <ul key={groupIndex} className="grid grid-cols-2 content-start gap-4">
                                {group.map((key) => {
                                    const item = techIconMap[key];
                                    return (
                                        <li
                                            key={key}
                                            className="group relative grid h-12 w-12 place-items-center rounded-xl border border-transparent bg-surface shadow-sm transition hover:z-20 hover:-translate-y-0.5 hover:border-fg hover:shadow-md"
                                        >
                                            {"src" in item ? (
                                                <Image
                                                    src={item.src}
                                                    alt={item.label}
                                                    width={24}
                                                    height={24}
                                                    className={`h-6 w-6 ${item.invert ? "dark:invert" : ""}`}
                                                />
                                            ) : (
                                                <item.Icon
                                                    className="h-6 w-6"
                                                    style={item.color ? { color: item.color } : undefined}
                                                    aria-label={item.label}
                                                />
                                            )}

                                            {/* Label saat hover */}
                                            <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider opacity-0 shadow-md transition group-hover:opacity-100">
                                                {item.label}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ul>
                        ))}
                    </div>
                </div>

                {/* Kanan: 2 kartu */}
                <div className="grid gap-5 sm:grid-cols-2">
                    {capabilities.cards.map((card) => {
                        const CardIcon = cardIconMap[card.icon];
                        return (
                            <article
                                key={card.number}
                                className="flex flex-col rounded-2xl border border-fg/5 bg-surface p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="text-5xl font-light leading-none">
                                        {card.number}
                                    </span>
                                    <span className="max-w-[9rem] text-right font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-fg/50">
                                        {card.category}
                                    </span>
                                </div>

                                <div className="my-8 grid place-items-center">
                                    <CardIcon className="h-14 w-14 text-fg/70" strokeWidth={1.2} />
                                </div>

                                <p className="text-sm leading-relaxed text-fg/70">
                                    {card.description}
                                </p>

                                <ul className="mt-6 flex flex-wrap gap-2">
                                    {card.tags.map((tag) => (
                                        <li
                                            key={tag}
                                            className="rcursor-default rounded border border-fg/10 bg-fg/5 px-2.5 py-1 font-mono text-[11px] text-fg/70 transition hover:border-fg hover:text-fg"
                                        >
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}