import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "october-candlelight-dinner-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Candlelight Dinner For Partner Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book October candlelight dinner for your partner in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/october-candlelight-dinner-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Candlelight Dinner For Partner Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book October candlelight dinner for your partner in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/october-candlelight-dinner-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
