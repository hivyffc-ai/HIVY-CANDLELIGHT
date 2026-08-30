import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "romantic-dinner-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Dinner For Husband Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Plan a romantic dinner for your husband in Surat. Private venue with decorations at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/romantic-dinner-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Dinner For Husband Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Plan a romantic dinner for your husband in Surat. Private venue with decorations at HIVY.",
    url: "https://candlelightdinnersurat.com/romantic-dinner-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
