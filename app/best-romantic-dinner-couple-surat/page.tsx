import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "best-romantic-dinner-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Romantic Dinner Couples Surat | Top Couple Dining",
  description: keyword?.metaDescription || "Find the best romantic dinner for couples in Surat. Private candlelight setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/best-romantic-dinner-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Romantic Dinner Couples Surat | Top Couple Dining",
    description: keyword?.metaDescription || "Find the best romantic dinner for couples in Surat. Private candlelight setup at HIVY.",
    url: "https://candlelightdinnersurat.com/best-romantic-dinner-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
