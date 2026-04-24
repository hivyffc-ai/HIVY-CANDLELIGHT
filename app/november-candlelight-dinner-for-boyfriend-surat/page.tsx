import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "november-candlelight-dinner-for-boyfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Candlelight Dinner For Boyfriend Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book November candlelight dinner for your boyfriend in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/november-candlelight-dinner-for-boyfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Candlelight Dinner For Boyfriend Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book November candlelight dinner for your boyfriend in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/november-candlelight-dinner-for-boyfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
