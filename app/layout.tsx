import type { Metadata } from "next";
import { Instrument_Serif, Josefin_Sans, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import AnimationInit from "@/components/providers/AnimationInit";
import Navbar from "@/components/layout/Navbar";
import { brand } from "@/lib/brand";

// Instrument Serif ships a single weight (400) in normal + italic. We keep the
// CSS variable name `--font-cormorant` so all downstream --font-display wiring in
// figma-tokens.css / claude-design.css stays untouched. Italic accents now read
// via slant rather than the old Cormorant 300-weight contrast (intended look).
const cormorant = Instrument_Serif({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-var",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const LOCALE_OG_MAP: Record<typeof brand.identity.locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  es: "es_ES",
  it: "it_IT",
};

export const metadata: Metadata = {
  title: brand.identity.tagline
    ? `${brand.identity.name} · ${brand.identity.tagline}`
    : brand.identity.name,
  description: brand.identity.description,
  openGraph: {
    title: brand.identity.name,
    description: brand.identity.tagline,
    locale: LOCALE_OG_MAP[brand.identity.locale],
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={brand.identity.locale}
      data-theme="light"
      className={`${cormorant.variable} ${josefinSans.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        {/* Global SVG noise filter — referenced by all .noise elements */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="noise" x="0" y="0" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
            </filter>
          </defs>
        </svg>

        {/* Cursor marquee (Osmo Supply) */}
        <div data-cursor-marquee-status="" className="cursor-marquee">
          <div className="cursor-marquee__card">
            <span data-cursor-marquee-text-target="" className="cursor-marquee__text-span">View gallery</span>
            <span data-cursor-marquee-text-target="" className="cursor-marquee__text-span is--duplicate">View gallery</span>
          </div>
        </div>

        {/* Progressive blur bottom edge (Osmo Supply) */}
        <div className="progressive-blur" aria-hidden="true">
          <div className="progressive-blur__layer is--1"></div>
          <div className="progressive-blur__layer is--2"></div>
          <div className="progressive-blur__layer is--3"></div>
          <div className="progressive-blur__layer is--4"></div>
          <div className="progressive-blur__layer is--5"></div>
        </div>

        <LenisProvider>
          <Navbar />
          <AnimationInit />
          <div data-main style={{ position: "relative", zIndex: 2 }}>
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
