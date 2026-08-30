import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "romantic-dinner-date-night-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Dinner Date Night Surat | Couple Evening",
  description: keyword?.metaDescription || "Plan a romantic dinner date night in Surat. Candlelight private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/romantic-dinner-date-night-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Dinner Date Night Surat | Couple Evening",
    description: keyword?.metaDescription || "Plan a romantic dinner date night in Surat. Candlelight private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/romantic-dinner-date-night-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
