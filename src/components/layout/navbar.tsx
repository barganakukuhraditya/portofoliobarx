"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portofolio";
import ThemeToggle from "./themetoggle";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Tutup menu dengan tombol Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Tandai menu aktif sesuai section yang sedang terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6 lg:top-5">
      <nav className="mx-auto max-w-[1120px] rounded-2xl bg-surface px-4 shadow-sm sm:px-6 lg:px-7">
        {/* Baris utama */}
        <div className="flex h-[68px] items-center justify-between lg:h-[78px]">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 lg:gap-4"
          >
            <span className="relative h-[42px] w-[42px] overflow-hidden rounded-xl bg-fg">
              <Image
                src={profile.logo}
                alt={`Logo ${profile.name}`}
                fill
                sizes="42px"
                className="object-cover"
              />
            </span>
          </Link>

          {/* Menu tengah (desktop) */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[13px] font-medium uppercase tracking-[0.18em] transition hover:text-fg ${active === link.href ? "text-fg" : "text-fg/60"
                    }`}
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
              className="hidden rounded-xl border-[1.5px] border-fg px-6 py-3 text-sm font-semibold tracking-wide transition hover:bg-fg hover:text-bg lg:inline-flex"
            >
              Hire Me
            </a>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-[42px] w-[42px] place-items-center rounded-xl border-[1.5px] border-fg transition lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Panel menu (mobile) */}
        <div
          id="mobile-menu"
          className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
        >
          <div className="overflow-hidden">
            <ul className="border-t border-fg/10 pt-2">
              {navLinks.map((link) => {
                const isActive = active === link.href;
                return (
                  <li key={link.href} className="border-b border-fg/10">
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`relative block py-4 text-[13px] font-medium uppercase tracking-[0.2em] transition ${isActive ? "text-fg" : "text-fg/60 hover:text-fg"
                        }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute inset-x-0 -bottom-px h-px bg-fg" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mb-4 mt-5 block rounded-2xl border-[1.5px] border-fg py-4 text-center text-sm font-semibold tracking-wide transition hover:bg-fg hover:text-bg"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}