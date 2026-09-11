import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Legacy", href: "#legacy" },
  { label: "Media", href: "#media" },
  { label: "Stores", href: "#stores" },
  { label: "Franchise", href: "#franchise" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 py-2 backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo.url}
            alt="Cookie Pookie logo"
            className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
            width={56}
            height={56}
          />
          <span className="font-display text-xl leading-none tracking-tight md:text-2xl">
            Cookie&nbsp;Pookie
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="underline-grow text-foreground/80 hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-sunset px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 hover:-translate-y-0.5 sm:inline-block"
          >
            Order Online
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-5 mt-3 rounded-3xl border border-border bg-card p-5 shadow-soft lg:hidden">
          <ul className="grid gap-3 text-base">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-foreground/85"
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
