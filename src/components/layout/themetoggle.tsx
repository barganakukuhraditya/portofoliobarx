"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Ganti tema"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-fg/10 bg-bg/40 transition hover:bg-bg"
    >
      <Sun className="h-[18px] w-[18px] dark:hidden" />
      <Moon className="hidden h-[18px] w-[18px] dark:block" />
    </button>
  );
}