import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "indoor-candlelight-dinner-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Indoor Candlelight Dinner For Girlfriend Surat | Private Venue",
  description: keyword?.metaDescription || "Book indoor candlelight dinner for your girlfriend in Surat. Exclusive private venue at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/indoor-candlelight-dinner-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Indoor Candlelight Dinner For Girlfriend Surat | Private Venue",
    description: keyword?.metaDescription || "Book indoor candlelight dinner for your girlfriend in Surat. Exclusive private venue at HIVY.",
    url: "https://candlelightdinnersurat.com/indoor-candlelight-dinner-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
