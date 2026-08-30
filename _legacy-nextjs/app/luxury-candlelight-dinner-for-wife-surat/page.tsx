import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "luxury-candlelight-dinner-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Candlelight Dinner For Wife Surat | Private Dining",
  description: keyword?.metaDescription || "Book a luxury candlelight dinner for your wife in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/luxury-candlelight-dinner-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Candlelight Dinner For Wife Surat | Private Dining",
    description: keyword?.metaDescription || "Book a luxury candlelight dinner for your wife in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/luxury-candlelight-dinner-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
