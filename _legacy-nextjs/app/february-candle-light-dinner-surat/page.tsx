import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "february-candle-light-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Candle Light Dinner Surat | Seasonal Romantic Dining",
  description: keyword?.metaDescription || "Plan February candle light dinner in Surat. Seasonal exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/february-candle-light-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Candle Light Dinner Surat | Seasonal Romantic Dining",
    description: keyword?.metaDescription || "Plan February candle light dinner in Surat. Seasonal exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/february-candle-light-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
