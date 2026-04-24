import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "june-candlelight-dinner-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "June Candlelight Dinner For Lover Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book June candlelight dinner for your lover in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/june-candlelight-dinner-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "June Candlelight Dinner For Lover Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book June candlelight dinner for your lover in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/june-candlelight-dinner-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
