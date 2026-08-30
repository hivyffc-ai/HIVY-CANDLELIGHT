import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "romantic-candlelight-dinner-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Romantic Candlelight Dinner For Boyfriend Surat | Private Dining",
  description: keyword?.metaDescription || "Book a romantic candlelight dinner for your boyfriend in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/romantic-candlelight-dinner-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Romantic Candlelight Dinner For Boyfriend Surat | Private Dining",
    description: keyword?.metaDescription || "Book a romantic candlelight dinner for your boyfriend in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/romantic-candlelight-dinner-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
