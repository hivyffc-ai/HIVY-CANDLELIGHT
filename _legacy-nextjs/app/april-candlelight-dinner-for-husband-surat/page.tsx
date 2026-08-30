import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "april-candlelight-dinner-for-husband-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "April Candlelight Dinner For Husband Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book April candlelight dinner for your husband in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/april-candlelight-dinner-for-husband-surat" },
  openGraph: {
    title: keyword?.metaTitle || "April Candlelight Dinner For Husband Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book April candlelight dinner for your husband in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/april-candlelight-dinner-for-husband-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
