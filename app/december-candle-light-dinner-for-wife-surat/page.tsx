import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "december-candle-light-dinner-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Candle Light Dinner For Wife Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan December candle light dinner for your wife in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/december-candle-light-dinner-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Candle Light Dinner For Wife Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan December candle light dinner for your wife in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/december-candle-light-dinner-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
