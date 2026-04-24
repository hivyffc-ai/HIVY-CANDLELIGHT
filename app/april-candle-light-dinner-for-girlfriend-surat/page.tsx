import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "april-candle-light-dinner-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "April Candle Light Dinner For Girlfriend Surat | Seasonal Private Dining",
  description: keyword?.metaDescription || "Plan April candle light dinner for your girlfriend in Surat. Exclusive seasonal dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/april-candle-light-dinner-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "April Candle Light Dinner For Girlfriend Surat | Seasonal Private Dining",
    description: keyword?.metaDescription || "Plan April candle light dinner for your girlfriend in Surat. Exclusive seasonal dining at HIVY.",
    url: "https://candlelightdinnersurat.com/april-candle-light-dinner-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
