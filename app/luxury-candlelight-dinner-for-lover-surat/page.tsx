import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "luxury-candlelight-dinner-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Candlelight Dinner For Lover Surat | Private Dining",
  description: keyword?.metaDescription || "Book a luxury candlelight dinner for your lover in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/luxury-candlelight-dinner-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Candlelight Dinner For Lover Surat | Private Dining",
    description: keyword?.metaDescription || "Book a luxury candlelight dinner for your lover in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/luxury-candlelight-dinner-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
