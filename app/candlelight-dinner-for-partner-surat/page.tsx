import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner For Partner Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Plan a candlelight dinner for your partner in Surat. Private venue with decorations at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner For Partner Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Plan a candlelight dinner for your partner in Surat. Private venue with decorations at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
