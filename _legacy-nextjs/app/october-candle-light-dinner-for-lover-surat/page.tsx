import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "october-candle-light-dinner-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Candle Light Dinner For Lover Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan October candle light dinner for your lover in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/october-candle-light-dinner-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Candle Light Dinner For Lover Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan October candle light dinner for your lover in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/october-candle-light-dinner-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
