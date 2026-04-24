import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "premium-candlelight-dinner-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Premium Candlelight Dinner For Partner Surat | Private Dining",
  description: keyword?.metaDescription || "Book a premium candlelight dinner for your partner in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/premium-candlelight-dinner-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Premium Candlelight Dinner For Partner Surat | Private Dining",
    description: keyword?.metaDescription || "Book a premium candlelight dinner for your partner in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/premium-candlelight-dinner-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
