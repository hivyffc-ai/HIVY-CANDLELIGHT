import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "may-candle-light-dinner-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "May Candle Light Dinner For Husband Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan May candle light dinner for your husband in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/may-candle-light-dinner-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "May Candle Light Dinner For Husband Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan May candle light dinner for your husband in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/may-candle-light-dinner-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
