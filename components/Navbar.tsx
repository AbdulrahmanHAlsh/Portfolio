"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X, Languages } from "lucide-react";
import { useLang } from "@/lib/lang-provider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = ["home", "about", "projects", "experience", "certifications", "contact"] as const;
type NavItem = typeof NAV_ITEMS[number];

export default function Navbar() {
  const { t, lang, toggleLang, dir } = useLang();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<NavItem>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as NavItem);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: NavItem) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const navLabel = (id: NavItem) => t.nav[id];

  return (
    <header
      dir={dir}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          className="font-mono text-sm font-medium text-emerald-500 dark:text-emerald-400 tracking-tight hover:text-emerald-600 dark:hover:text-emerald-300 active:scale-95"
        >
          &lt;AAS /&gt;
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-mono transition-all duration-200 active:scale-95",
                activeSection === id
                  ? "text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              )}
            >
              {navLabel(id)}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className={cn("flex items-center gap-2", dir === "rtl" ? "flex-row-reverse" : "")}>
          {/* Lang toggle */}
          <button
            onClick={toggleLang}
            title="Toggle Language"
            className="p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
          >
            <Languages size={16} />
            <span className="sr-only">Toggle language</span>
          </button>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
            >
              {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              <span className="sr-only">Toggle theme</span>
            </button>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-md text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 active:scale-95 transition-all"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-6 pb-4 flex flex-col gap-1">
          {NAV_ITEMS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "text-start px-3 py-2 rounded-md text-sm font-mono transition-all active:scale-95",
                activeSection === id
                  ? "text-emerald-500 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
            >
              {navLabel(id)}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
