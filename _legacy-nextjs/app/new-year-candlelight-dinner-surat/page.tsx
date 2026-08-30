import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "new-year-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "New Year Candlelight Dinner Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan new year candlelight dinner in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/new-year-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "New Year Candlelight Dinner Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan new year candlelight dinner in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/new-year-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
