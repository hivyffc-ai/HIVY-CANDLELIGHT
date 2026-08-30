import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "exclusive-candlelight-dinner-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Exclusive Candlelight Dinner For Fiancee Surat | Private Dining",
  description: keyword?.metaDescription || "Book a exclusive candlelight dinner for your fiancee in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/exclusive-candlelight-dinner-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Exclusive Candlelight Dinner For Fiancee Surat | Private Dining",
    description: keyword?.metaDescription || "Book a exclusive candlelight dinner for your fiancee in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/exclusive-candlelight-dinner-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
