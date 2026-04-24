import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "december-candlelight-dinner-for-soulmate-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "December Candlelight Dinner For Soulmate Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book December candlelight dinner for your soulmate in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/december-candlelight-dinner-for-soulmate-surat" },
  openGraph: {
    title: keyword?.metaTitle || "December Candlelight Dinner For Soulmate Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book December candlelight dinner for your soulmate in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/december-candlelight-dinner-for-soulmate-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
