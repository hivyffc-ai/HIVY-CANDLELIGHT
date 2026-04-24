import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "garden-candlelight-dinner-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Garden Candlelight Dinner For Soulmate Surat | Private Venue",
  description: keyword?.metaDescription || "Book garden candlelight dinner for your soulmate in Surat. Exclusive private venue at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/garden-candlelight-dinner-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Garden Candlelight Dinner For Soulmate Surat | Private Venue",
    description: keyword?.metaDescription || "Book garden candlelight dinner for your soulmate in Surat. Exclusive private venue at HIVY.",
    url: "https://candlelightdinnersurat.com/garden-candlelight-dinner-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
