import Image from "next/image";
import { ArrowUpRight, Coffee, Cookie, Heart, Instagram, MapPin, Sparkles, Clock, Wifi, Star } from "lucide-react";

import { Loader } from "@/components/Loader";
import { Reveal } from "@/components/Reveal";
import { SiteNav } from "@/components/SiteNav";

import cookieImg from "@/assets/cookie.jpg";
import waffleImg from "@/assets/waffle.png";
import coffeeImg from "@/assets/coffee.jpeg";
import cafe1 from "@/assets/cafe1.jpeg";
import cafe2 from "@/assets/cafe2.jpeg";
import cafe3 from "@/assets/cafe3.jpeg";
import cafe4 from "@/assets/cafe4.jpeg";
import cafe5 from "@/assets/cafe5.jpeg";
import aboutImg from "@/assets/about.png";


const categories = [
  {
    title: "Cookies",
    subtitle: "Chunky & Molten",
    desc: "Pulled fresh from the oven every single hour. Crispy golden edges with rich, gooey Belgian chocolate centres.",
    img: cookieImg,
    badge: "Fan Favorite",
  },
  {
    title: "Waffles",
    subtitle: "Hot, Crisp & Loaded",
    desc: "Crispy Belgian waffle skillets layered with molten chocolate sauce, crunchies, and creamy gelato.",
    img: waffleImg,
    badge: "Must Try",
  },
  {
    title: "Coffee",
    subtitle: "Slow Brews & Lattes",
    desc: "Single origin roasted beans pulled short, iced lattes, and cookie crumble cold brews.",
    img: coffeeImg,
    badge: "Artisan Roast",
  },
  {
    title: "Fries & More",
    subtitle: "Crispy & Savoury",
    desc: "Hot seasoned golden fries and savoury bites to satisfy your cravings alongside sweet treats.",
    img: cafe4,
    badge: "Savoury Bites",
  },
];

const menuHighlights = [
  {
    img: waffleImg,
    name: "Belgian Skillet Waffle",
    price: "₹249",
    category: "Waffles",
    note: "warm, chocolate drizzle & vanilla gelato",
  },
  {
    img: cookieImg,
    name: "Molten Stuffed Cookie",
    price: "₹179",
    category: "Cookies",
    note: "molten Belgian dark chocolate centre",
  },
  {
    img: coffeeImg,
    name: "Cookie Crumble Latte",
    price: "₹199",
    category: "Coffee",
    note: "slow cold brew, crumble & fresh cream",
  },
  {
    img: cafe4,
    name: "Loaded Seasoned Fries",
    price: "₹169",
    category: "Fries & More",
    note: "crispy golden fries with savoury seasonings",
  },
  {
    img: cafe2,
    name: "Strawberry Pookie Shake",
    price: "₹229",
    category: "Shakes",
    note: "fresh berries, thick cream & waffle bits",
  },
  {
    img: cafe1,
    name: "Cookie Affogato",
    price: "₹219",
    category: "Coffee",
    note: "hot espresso poured over cookie gelato",
  },
];

const promises = [
  "Real butter & pure Belgian chocolate — no shortcuts.",
  "Dough & batter rested 24 hours for perfect texture.",
  "Baked in small fresh batches every hour.",
  "Hot waffles made to order, crisp on the iron.",
  "Zero artificial preservatives. Ever.",
];

const stories = [
  { title: "The glowing little store that everyone is queuing for.", source: "City Food Guide" },
  { title: "Crisp waffles, gooey cookies, and the smell that stops you on the street.", source: "The Sweet List" },
  { title: "Cookie Pookie has perfected the late-night dessert craving.", source: "Brew & Bake Weekly" },
];

export default function HomePage() {
  return (
    <div id="home" className="overflow-x-clip bg-background text-foreground">
      <Loader />
      <SiteNav />

      {/* HERO SECTION (ORIGINAL LAYOUT) */}
      <section className="relative flex min-h-[100svh] items-end overflow-hidden">
        {/* Desktop Video */}
        <video
          className="absolute inset-0 hidden h-full w-full object-cover md:block"
          src="/hero-vid.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={waffleImg.src}
        />
        {/* Mobile Video */}
        <video
          className="absolute inset-0 block h-full w-full object-cover md:hidden"
          src="/mobile-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster={waffleImg.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.25_0.06_45/0.65),oklch(0.25_0.06_45/0.25)_40%,oklch(0.25_0.06_45/0.92))]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 md:px-8 md:pb-24 2xl:max-w-[1400px] 2xl:px-10 2xl:pb-28">
          <Reveal delay={100}>
            <h1 className="max-w-4xl font-display text-[12vw] leading-[0.9] text-cream sm:text-7xl md:text-[6.4rem] lg:text-[7.2rem] 2xl:text-[7.5rem]">
              COME GET
              <span className="block italic text-blush">some love!</span>
            </h1>
          </Reveal>

          <Reveal delay={360}>
            <p className="mt-5 max-w-xl text-lg text-cream/85 md:text-xl 2xl:max-w-2xl 2xl:text-2xl">
              Freshly baked cookies, crisp Belgian waffles, cold shakes, and slow coffee served warm from our counter window.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-cream px-8 py-4 font-semibold text-cocoa shadow-lift transition-transform duration-300 hover:-translate-y-1"
              >
                See the menu
              </a>
              <a
                href="#store"
                className="rounded-full border border-cream/50 px-8 py-4 font-semibold text-cream backdrop-blur-sm transition-colors duration-300 hover:bg-cream/10"
              >
                Find a store
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border/80 bg-cocoa py-2.5 md:py-3 text-cream/95">
        <div className="flex w-max marquee-track gap-8 whitespace-nowrap font-display text-base sm:text-lg md:text-xl tracking-wide">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-8">
              {[
                "COOKIES",
                "WAFFLES",
                "COFFEE",
                "FRIES & MORE",
                "COME GET SOME LOVE!",
                "BAKED HOURLY",
                "OPEN 12 PM - 12 AM",
              ].map((t) => (
                <span key={t} className="flex items-center gap-8">
                  <span className="italic font-light tracking-wider">{t}</span>
                  <Cookie className="h-4 w-4 text-caramel shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* 4 CORE CATEGORIES */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 2xl:max-w-[1400px] 2xl:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">What We Bake</p>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Four things we do with all our heart
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Cookies | Waffles | Coffee | Fries & More. Fresh ingredients, zero compromises.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-8">
          {categories.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="tilt-card zoom-media flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
                <div className="relative h-60 overflow-hidden 2xl:h-64">
                  <Image
                    src={c.img}
                    alt={c.title}
                    placeholder="blur"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 right-4 rounded-full bg-cocoa/80 px-3 py-1 text-xs font-semibold text-cream backdrop-blur-md">
                    {c.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                  <p className="text-sm font-medium text-primary">{c.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CAFE & STOREFRONT SHOWCASE */}
      <section id="store" className="bg-gradient-warm py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-8 2xl:max-w-[1400px] 2xl:px-10 2xl:gap-16">
          <Reveal>
            <div className="zoom-media relative overflow-hidden rounded-4xl border border-border/80 bg-card shadow-lift">
              <Image
                src={cafe5}
                alt="Cookie Pookie cafe experience"
                placeholder="blur"
                className="h-[520px] sm:h-[560px] lg:h-[580px] w-full object-cover object-center"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cocoa/85 p-4 text-cream backdrop-blur-md md:bottom-6 md:left-6 md:right-6">
                <p className="font-display text-lg">Cookie Pookie Café & Window</p>
                <p className="text-xs text-cream/75">Come get some love · Open 12:00 PM to 12:00 AM daily</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <MapPin className="h-3.5 w-3.5" /> Come Sit With Us
              </div>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                The warm glow that welcomes you every day.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Follow the aroma of fresh dough and caramelizing chocolate straight to our counter window.
                Whether you&apos;re stopping by for an afternoon coffee, grabbing a box of warm cookies, or having late-night dessert runs with friends.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
                  <Clock className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Monday – Sunday<br />12:00 PM – 12:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-3xl border border-border bg-card p-5">
                  <Wifi className="mt-1 h-5 w-5 text-primary shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Vibes</h4>
                    <p className="mt-1 text-sm text-muted-foreground">Free Wi-Fi · Pet Friendly<br />Takeaway & Dine-in</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RED STATS BANNER */}
        <div className="mt-20 border-y border-red-950/20 bg-[#C0262B] py-12 text-white shadow-soft">
          <div className="mx-auto max-w-7xl px-5 md:px-8 2xl:max-w-[1400px] 2xl:px-10">
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
              <Reveal delay={50}>
                <div>
                  <p className="font-display text-5xl font-light tracking-wide md:text-6xl">
                    2013
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/95 md:text-xs">
                    ESTABLISHED
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div>
                  <p className="font-display text-5xl font-light tracking-wide md:text-6xl inline-flex items-center justify-center gap-1.5">
                    4.5 <Star className="h-7 w-7 fill-white text-white md:h-8 md:w-8 -mt-1" />
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/95 md:text-xs">
                    AVERAGE RATING
                  </p>
                </div>
              </Reveal>

              <Reveal delay={190}>
                <div>
                  <p className="font-display text-5xl font-light tracking-wide md:text-6xl">
                    7+
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/95 md:text-xs">
                    OUTLETS
                  </p>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div>
                  <p className="font-display text-5xl font-light tracking-wide md:text-6xl">
                    100%
                  </p>
                  <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/95 md:text-xs">
                    VEGETARIAN
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* THE PHILOSOPHY / ABOUT SECTION */}
      <section id="philosophy" className="bg-[#F6EBE2] py-20 text-[#242424] md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8 2xl:max-w-[1400px] 2xl:px-10">
          {/* Left Text Content */}
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#3A2416] md:text-sm">
                THE PHILOSOPHY
              </p>
              <h2 className="mt-6 font-display text-4xl font-light leading-[1.05] tracking-tight text-[#1E1E1E] sm:text-5xl md:text-6xl lg:text-7xl">
                WE DON&apos;T JUST <br />
                MAKE WAFFLES.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-[#4A4A4A] md:text-lg">
                Established in 2013, Wafflesome was born from a shared passion for exceptional food. What began as recipes developed in a home kitchen evolved into a brand built on one simple principle: never compromise on quality. From day one, we have focused on using real ingredients and honest recipes. We believe you can taste the difference when quality ingredients are treated with care.
              </p>
              <div className="mt-9">
                <a
                  href="#menu"
                  className="inline-block rounded-md bg-[#43281C] px-8 py-3.5 text-sm font-semibold tracking-wide text-white shadow-soft transition-all duration-300 hover:bg-[#321D13] hover:-translate-y-0.5"
                >
                  Read Our Story
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right Image Content */}
          <Reveal delay={150}>
            <div className="zoom-media relative overflow-hidden rounded-2xl shadow-lift">
              <Image
                src={aboutImg}
                alt="Wafflesome gourmet waffles & coffee storefront"
                placeholder="blur"
                className="h-[520px] sm:h-[580px] md:h-[620px] lg:h-[640px] w-full object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 2xl:max-w-[1400px] 2xl:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Signature Bakes</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
                The stuff people drive across town for
              </h2>
            </div>
            <a href="#contact" className="underline-grow inline-flex items-center gap-2 font-semibold text-primary">
              Order at counter <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3 2xl:gap-8">
          {menuHighlights.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 120}>
              <article className="tilt-card zoom-media overflow-hidden rounded-4xl border border-border bg-card shadow-soft">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={m.img}
                    alt={m.name}
                    placeholder="blur"
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur-md">
                    {m.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shrink-0">
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
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[1fr_1.1fr] md:px-8 2xl:max-w-[1400px] 2xl:px-10 2xl:gap-16">
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-caramel">The Real Deal</p>
              <h2 className="mt-5 font-display text-4xl leading-tight md:text-6xl">
                Nothing clever. Just better ingredients.
              </h2>
              <div className="mt-10 flex items-center gap-6">
                <Image
                  src="/logo.png"
                  alt="Cookie Pookie"
                  width={150}
                  height={65}
                  className="h-14 w-auto object-contain"
                />
                <p className="max-w-xs text-cream/75">
                  If we wouldn&apos;t feed it to our own family, it doesn&apos;t go on the counter.
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
        <Image
          src={coffeeImg}
          alt="Artisan coffee at Cookie Pookie"
          placeholder="blur"
          className="h-[60vh] min-h-[460px] max-h-[680px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.24_0.05_45/0.95)_0%,oklch(0.24_0.05_45/0.75)_45%,oklch(0.24_0.05_45/0.2)_100%)]" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5 md:px-8 2xl:max-w-[1400px] 2xl:px-10">
            <Reveal>
              <div className="max-w-lg text-cream">
                <Coffee className="h-9 w-9 text-caramel" />
                <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
                  And then there&apos;s the coffee.
                </h2>
                <p className="mt-5 text-cream/85">
                  Beans roasted in small lots, ground to order, pulled short. Sweet enough on its
                  own — dangerous next to a warm chocolate waffle or cookie.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEDIA / REVIEWS */}
      <section id="media" className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 2xl:max-w-[1400px] 2xl:px-10">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl leading-tight md:text-6xl">
            People have been saying things
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3 2xl:gap-8">
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
        <div className="mx-auto max-w-7xl px-5 md:px-8 2xl:max-w-[1400px] 2xl:px-10">
          <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr_1fr]">
            <div>
              <Image
                src="/logo.png"
                alt="Cookie Pookie"
                width={170}
                height={70}
                className="h-14 w-auto object-contain"
              />
              <p className="mt-6 max-w-sm text-cream/75">
                COOKIES · WAFFLES · COFFEE · FRIES & MORE.<br />
                Come get some love! Open daily 12:00 PM to 12:00 AM.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Visit</h3>
              <p className="mt-4 text-cream/75 leading-relaxed">
                Cookie Pookie Window & Café
                <br />
                Monday – Sunday
                <br />
                12:00 PM – 12:00 AM (Midnight)
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl">Say hello</h3>
              <p className="mt-4 text-cream/75 leading-relaxed">
                hello@cookiepookie.cafe
                <br />
                +91 90000 00000
              </p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-blush hover:underline"
              >
                <Instagram className="h-5 w-5" /> @cookiepookie
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-cream/15 py-7 text-sm text-cream/60">
            <p>© {new Date().getFullYear()} Cookie Pookie. Baked with love & butter.</p>
            <p>COOKIES · WAFFLES · COFFEE · FRIES & MORE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
