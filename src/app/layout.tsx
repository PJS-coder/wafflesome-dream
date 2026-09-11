import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cookie Pookie — Cookies Worth Talking About",
  description:
    "Cookie Pookie bakes warm, gooey cookies, waffles, shakes and slow-brewed coffee fresh every hour. Visit our cafés or bring the brand home with a franchise.",
  authors: [{ name: "Cookie Pookie" }],
  openGraph: {
    title: "Cookie Pookie — Cookies Worth Talking About",
    description:
      "Freshly baked cookies, crispy chocolate waffles, shakes and slow-brewed coffee in a café that feels like a hug. Come sit with us.",
    type: "website",
    siteName: "Cookie Pookie",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Pookie — Cookies Worth Talking About",
    description: "Freshly baked cookies, shakes, chocolate waffles and slow coffee.",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#5C3A21",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {children}
      </body>
    </html>
  );
}
