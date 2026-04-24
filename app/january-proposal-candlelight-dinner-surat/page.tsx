import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "january-proposal-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "January Proposal Candlelight Dinner Surat | Seasonal Romantic Dining",
  description: keyword?.metaDescription || "Book January proposal candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/january-proposal-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "January Proposal Candlelight Dinner Surat | Seasonal Romantic Dining",
    description: keyword?.metaDescription || "Book January proposal candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/january-proposal-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
