import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "february-candlelight-dinner-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Candlelight Dinner For Fiance Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book February candlelight dinner for your fiance in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/february-candlelight-dinner-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Candlelight Dinner For Fiance Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book February candlelight dinner for your fiance in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/february-candlelight-dinner-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
