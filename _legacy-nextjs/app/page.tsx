/**
 * MAIN PAGE - HIVY - CANDLE LIGHT DINNER SURAT
 * The main home page for HIVY Candle Light Dinner in Surat
 */

import { Metadata } from "next";
import FFCHomePage from "@/components/ffc-home-page";
import { siteConfig } from "@/lib/ffc-config";

// Dynamic metadata for HIVY Candle Light Dinner
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${siteConfig.name} | Premium Romantic Candle Light Dinner Experience`,
    description: `Experience Surat's finest candle light dinner at HIVY. Private & glass house setups, gourmet dining, and romantic ambiance. Book your unforgettable candle light dinner experience. 100% private venue with 4.9★ rating.`,
    keywords: [
      'candle light dinner surat',
      'candlelight dinner surat',
      'romantic dinner surat',
      'private candle light dinner',
      'private candle light dinner surat',
      'luxury candle light dinner',
      'candle light dinner for couples',
      'candle light dinner near me',
      'candle light dinner restaurant surat',
      'best candle light dinner surat',
      'candle light dinner with decoration',
      'surprise candle light dinner',
      'candle light dinner date surat',
      'candle light dinner packages surat',
      'affordable candle light dinner surat',
      'premium candle light dinner',
      'outdoor candle light dinner surat',
      'candle light dinner for girlfriend',
      'candle light dinner for boyfriend',
      'romantic candle light dinner experience',
      'glass house candle light dinner',
      'private dining surat',
      'romantic restaurant surat',
      'couple dinner surat',
      'candle light dinner with music',
      'hivy surat',
      'hivy candle light dinner',
      'best romantic places surat',
      'private celebration venue surat',
      'romantic private cafe surat'
    ],
    alternates: {
      canonical: siteConfig.website,
    },
    openGraph: {
      title: `${siteConfig.name} | Premium Candle Light Dinner`,
      description: siteConfig.tagline,
      url: siteConfig.website,
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
    },
  };
}

export default function Home() {
  return <FFCHomePage />;
}