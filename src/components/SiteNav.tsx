"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "@/components/SmoothScroll";

const links = [
  { label: "Home", href: "#home" },
  { label: "What We Bake", href: "#categories" },
  { label: "Our Store", href: "#store" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Menu", href: "#menu" },
  { label: "Visit & Hours", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      if (href === "#home") {
        scrollTo(0, { duration: 1.2 });
      } else {
        scrollTo(href, { offset: -70, duration: 1.2 });
      }
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/95 py-3 shadow-soft backdrop-blur-xl"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-cream"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8 2xl:px-10">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <Image
            src="/logo.png"
            alt="Cookie Pookie logo"
            width={180}
            height={60}
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium tracking-wide lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className={`underline-grow transition-colors ${
                  scrolled
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-cream/90 hover:text-cream [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#menu"
            onClick={(e) => handleNavClick(e, "#menu")}
            className="hidden items-center gap-1.5 rounded-full bg-gradient-sunset px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Explore Menu <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden ${
              scrolled ? "border-border bg-card text-foreground" : "border-cream/30 bg-black/40 text-cream"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-5 mt-3 rounded-3xl border border-border bg-card p-6 shadow-lift lg:hidden">
          <ul className="grid gap-3 text-base font-medium">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="block py-2 text-foreground/90 transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
