import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "july-candle-light-dinner-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Candle Light Dinner For Soulmate Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan July candle light dinner for your soulmate in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/july-candle-light-dinner-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Candle Light Dinner For Soulmate Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan July candle light dinner for your soulmate in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/july-candle-light-dinner-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
