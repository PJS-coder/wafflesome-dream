import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Coffee, Cookie, Heart, Instagram, MapPin, Star } from "lucide-react";

import { Loader } from "@/components/Loader";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";

import heroVideo from "@/assets/hero.mp4.asset.json";
import logo from "@/assets/logo.png.asset.json";
import interior from "@/assets/interior.png.asset.json";
import food from "@/assets/food.png.asset.json";
import coffeeImg from "@/assets/coffee.png.asset.json";
import crowd from "@/assets/crowd.png.asset.json";
import counter from "@/assets/counter.png.asset.json";

import menu1 from "@/assets/menu-1.jpg";
import menu2 from "@/assets/menu-2.jpg";
import menu3 from "@/assets/menu-3.jpg";
import menu4 from "@/assets/menu-4.jpg";
import menu5 from "@/assets/menu-5.jpg";
import menu6 from "@/assets/menu-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cookie Pookie — Cookies Worth Talking About" },
      {
        name: "description",
        content:
          "Cookie Pookie bakes warm, gooey cookies, cookie shakes and slow-brewed coffee fresh every hour. Visit our cafés or bring the brand home with a franchise.",
      },
      { property: "og:title", content: "Cookie Pookie — Cookies Worth Talking About" },
      {
        property: "og:description",
        content:
          "Freshly baked cookies, cookie shakes and slow-brewed coffee in a café that feels like a hug. Come sit with us.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "2005", label: "Established" },
  { value: "4.8★", label: "Average Rating" },
  { value: "9+", label: "Outlets" },
  { value: "100%", label: "Baked Fresh Daily" },
];

const menuItems = [
  { img: menu1, name: "Skillet Cookie", price: "₹249", note: "warm, gooey, ice cream on top" },
  { img: menu2, name: "Cookie Crumble Latte", price: "₹199", note: "cold brew, crumble, cream" },
  { img: menu3, name: "Stuffed Cookie", price: "₹179", note: "molten chocolate centre" },
  { img: menu4, name: "Strawberry Pookie Shake", price: "₹229", note: "berries + cookie crumbs" },
  { img: menu5, name: "Salted Brownie Cookie", price: "₹159", note: "sea salt, dark cocoa" },
  { img: menu6, name: "Cookie Affogato", price: "₹219", note: "espresso over cookie gelato" },
];

const promises = [
  "Real butter. Never margarine.",
  "Belgian chocolate, no compound.",
  "Dough rested 24 hours.",
  "Baked in small batches, every hour.",
  "Zero preservatives. Ever.",
];

const stories = [
  { title: "The little bakery that everyone whispers about", source: "City Food Weekly" },
  { title: "Cookie Pookie is redefining the after-dinner dessert run", source: "The Sweet List" },
  { title: "Nine stores, one cookie recipe, zero shortcuts", source: "Brew & Bake" },
];

function Home() {
  return (
    <div id="home" className="overflow-x-clip">
      <Loader />
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          poster={coffeeImg.url}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.28_0.06_45/0.55),oklch(0.28_0.06_45/0.15)_40%,oklch(0.28_0.06_45/0.85))]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24">
          <Reveal delay={100}>
            <p className="text-sm uppercase tracking-[0.45em] text-cream/80">
              Bakery · Café · Coffee
            </p>
          </Reveal>
          <Reveal delay={220}>
            <h1 className="mt-5 max-w-4xl font-display text-[13vw] leading-[0.88] text-cream md:text-[6.4rem]">
              COOKIES WORTH
              <span className="block italic text-blush">talking about</span>
            </h1>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-cream px-8 py-4 font-semibold text-cocoa shadow-lift transition-transform duration-300 hover:-translate-y-1"
              >
                See the menu
              </a>
              <a
                href="#stores"
                className="rounded-full border border-cream/50 px-8 py-4 font-semibold text-cream transition-colors duration-300 hover:bg-cream/10"
              >
                Find a store
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-cocoa py-4 text-cream">
        <div className="flex w-max marquee-track gap-10 whitespace-nowrap font-display text-2xl md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              {["Warm cookies", "Cold shakes", "Slow coffee", "Immaculate vibes", "Baked hourly"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-10">
                    <span className="italic">{t}</span>
                    <Cookie className="h-6 w-6 text-caramel" />
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* FEATURE TRIO */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: interior.url, title: "The vibe? Immaculate.", copy: "Warm wood, soft pink, and a wall full of notes from people who came back." },
            { img: food.url, title: "The food is kinda addictive.", copy: "Cookies pulled from the oven every hour, still soft in the middle." },
            { img: coffeeImg.url, title: "Just one coffee.", copy: "Single origin, poured slow, made to sit beside something sweet." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 140}>
              <article className="tilt-card zoom-media h-full overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
                <div className="h-64 overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.copy}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEGACY */}
      <section id="legacy" className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div className="zoom-media overflow-hidden rounded-4xl shadow-lift">
              <img
                src={counter.url}
                alt="Guests at the Cookie Pookie counter"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary">Our legacy</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                It started with one recipe and a very small oven.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Two decades later, the recipe hasn't changed — only the number of people queuing for
                it. We still weigh the butter by hand, still rest the dough overnight, still bake in
                batches small enough to care about.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-3xl border border-border bg-card p-6">
                    <p className="font-display text-4xl text-primary">{s.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-6xl">
              The stuff people drive across town for
            </h2>
            <a href="#contact" className="underline-grow inline-flex items-center gap-2 font-semibold text-primary">
              Full menu <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 120}>
              <article className="tilt-card zoom-media overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                    {m.price}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROMISES */}
      <section className="bg-cocoa py-20 text-cream md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1fr_1.1fr] md:px-8">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-caramel">The real thing</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Nothing clever. Just better ingredients.
              </h2>
              <div className="mt-10 flex items-center gap-4">
                <img
                  src={logo.url}
                  alt="Cookie Pookie"
                  loading="lazy"
                  className="spin-slow h-20 w-20 rounded-full"
                  width={80}
                  height={80}
                />
                <p className="max-w-xs text-cream/75">
                  If we wouldn't feed it to our own family, it doesn't go in the dough.
                </p>
              </div>
            </div>
          </Reveal>
          <ul className="grid gap-4">
            {promises.map((p, i) => (
              <Reveal key={p} delay={i * 110}>
                <li className="flex items-center gap-4 rounded-3xl border border-cream/15 bg-cream/5 px-6 py-5">
                  <Heart className="h-5 w-5 shrink-0 text-blush" />
                  <span className="text-lg">{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COFFEE */}
      <section className="relative overflow-hidden">
        <img
          src={coffeeImg.url}
          alt="Milk poured into iced coffee"
          loading="lazy"
          className="h-[70vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.24_0.05_45/0.94)_0%,oklch(0.24_0.05_45/0.72)_45%,oklch(0.24_0.05_45/0.15)_100%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="max-w-lg text-cream">
                <Coffee className="h-9 w-9 text-caramel" />
                <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                  And then there's the coffee.
                </h2>
                <p className="mt-5 text-cream/85">
                  Beans roasted in small lots, ground to order, pulled short. Sweet enough on its
                  own — dangerous next to a warm cookie.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FRANCHISE */}
      <section id="franchise" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-gradient-sunset px-8 py-16 text-center text-primary-foreground shadow-lift md:px-16 md:py-24">
            <p className="text-sm uppercase tracking-[0.4em] opacity-85">Franchise</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
              Bring Cookie Pookie to your city
            </h2>
            <p className="mx-auto mt-6 max-w-xl opacity-90">
              We hand over the recipes, the training, the fit-out playbook and the smell that pulls
              people in from the street.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-block rounded-full bg-cream px-9 py-4 font-semibold text-cocoa transition-transform duration-300 hover:-translate-y-1"
            >
              Start a conversation
            </a>
          </div>
        </Reveal>
      </section>

      {/* STORES */}
      <section id="stores" className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <div>
              <p className="text-sm uppercase tracking-[0.4em] text-primary">Stores</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Come sit with us. Right here.
              </h2>
              <ul className="mt-10 grid gap-4">
                {["Koramangala, Bengaluru", "Bandra West, Mumbai", "Hauz Khas, New Delhi", "Alwarpet, Chennai"].map(
                  (s) => (
                    <li
                      key={s}
                      className="flex items-center gap-4 rounded-3xl border border-border bg-card px-6 py-5"
                    >
                      <MapPin className="h-5 w-5 text-primary" />
                      <span className="font-medium">{s}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="zoom-media overflow-hidden rounded-4xl shadow-lift">
              <img
                src={crowd.url}
                alt="A full house at Cookie Pookie"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MEDIA */}
      <section id="media" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-6xl">
            People have been saying things
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 130}>
              <article className="tilt-card flex h-full flex-col justify-between rounded-4xl border border-border bg-card p-8 shadow-soft">
                <Star className="h-6 w-6 text-caramel" />
                <h3 className="mt-8 font-display text-2xl leading-snug">{s.title}</h3>
                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                  {s.source}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-cocoa pt-20 text-cream">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <img
                src={logo.url}
                alt="Cookie Pookie"
                loading="lazy"
                className="h-24 w-24 rounded-full"
                width={96}
                height={96}
              />
              <p className="mt-6 max-w-sm text-cream/75">
                Cookies, shakes and coffee, made fresh every single hour. Open late, because
                cravings don't keep office timings.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Visit</h3>
              <p className="mt-4 text-cream/75">
                12 Baker's Lane, Koramangala
                <br />
                Bengaluru 560034
                <br />
                11:00 am – 11:30 pm, daily
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Say hello</h3>
              <p className="mt-4 text-cream/75">
                hello@cookiepookie.cafe
                <br />
                +91 90000 00000
              </p>
              <a
                href="https://instagram.com"
                className="mt-5 inline-flex items-center gap-2 text-blush"
              >
                <Instagram className="h-5 w-5" /> @cookiepookie
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 py-7 text-sm text-cream/60">
            <p>© {new Date().getFullYear()} Cookie Pookie. Baked with butter.</p>
            <p>Address, hours and phone number are placeholders — send me the real ones.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
