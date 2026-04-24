import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "july-candle-light-dinner-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "July Candle Light Dinner For Partner Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan July candle light dinner for your partner in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/july-candle-light-dinner-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "July Candle Light Dinner For Partner Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan July candle light dinner for your partner in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/july-candle-light-dinner-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
