import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "august-candlelight-dinner-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "August Candlelight Dinner For Husband Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book August candlelight dinner for your husband in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/august-candlelight-dinner-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "August Candlelight Dinner For Husband Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book August candlelight dinner for your husband in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/august-candlelight-dinner-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
