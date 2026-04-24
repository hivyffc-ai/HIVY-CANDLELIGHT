import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candle-light-dinner-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candle Light Dinner For Fiance Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Plan a candle light dinner for your fiance in Surat. Private venue with decorations at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candle-light-dinner-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candle Light Dinner For Fiance Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Plan a candle light dinner for your fiance in Surat. Private venue with decorations at HIVY.",
    url: "https://candlelightdinnersurat.com/candle-light-dinner-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
