import Link from "next/link";
import { navLinks, profile } from "@/data/portofolio";
import ThemeToggle from "./themetoggle";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-6">
      <nav className="mx-auto flex h-[78px] max-w-[1280px] items-center justify-between rounded-2xl bg-surface px-6 shadow-sm lg:px-7">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <span className="grid h-[42px] w-[42px] place-items-center rounded-xl bg-fg font-serif text-xl italic text-bg">
            {profile.logoLetter}
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.3em]">
            {profile.name}
          </span>
        </Link>

        {/* Menu tengah */}
        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.18em] text-fg/60 transition hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Kanan */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-xl border-[1.5px] border-fg px-6 py-3 text-sm font-semibold tracking-wide transition hover:bg-fg hover:text-bg"
          >
            Hire Me
          </a>
        </div>
      </nav>
    </header>
  );
}