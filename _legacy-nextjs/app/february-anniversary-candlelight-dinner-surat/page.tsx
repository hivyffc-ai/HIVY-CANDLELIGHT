import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "february-anniversary-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "February Anniversary Candlelight Dinner Surat | Seasonal Romantic Dining",
  description: keyword?.metaDescription || "Book February anniversary candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/february-anniversary-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "February Anniversary Candlelight Dinner Surat | Seasonal Romantic Dining",
    description: keyword?.metaDescription || "Book February anniversary candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/february-anniversary-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
