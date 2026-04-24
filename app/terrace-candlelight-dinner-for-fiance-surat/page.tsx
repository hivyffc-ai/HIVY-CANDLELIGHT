import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "terrace-candlelight-dinner-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Terrace Candlelight Dinner For Fiance Surat | Private Venue",
  description: keyword?.metaDescription || "Book terrace candlelight dinner for your fiance in Surat. Exclusive private venue at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/terrace-candlelight-dinner-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Terrace Candlelight Dinner For Fiance Surat | Private Venue",
    description: keyword?.metaDescription || "Book terrace candlelight dinner for your fiance in Surat. Exclusive private venue at HIVY.",
    url: "https://candlelightdinnersurat.com/terrace-candlelight-dinner-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
