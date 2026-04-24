import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "dreamy-candlelight-dinner-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Dreamy Candlelight Dinner For Soulmate Surat | Private Dining",
  description: keyword?.metaDescription || "Book a dreamy candlelight dinner for your soulmate in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/dreamy-candlelight-dinner-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Dreamy Candlelight Dinner For Soulmate Surat | Private Dining",
    description: keyword?.metaDescription || "Book a dreamy candlelight dinner for your soulmate in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/dreamy-candlelight-dinner-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
