import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "october-birthday-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "October Birthday Candlelight Dinner Surat | Seasonal Romantic Dining",
  description: keyword?.metaDescription || "Book October birthday candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/october-birthday-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "October Birthday Candlelight Dinner Surat | Seasonal Romantic Dining",
    description: keyword?.metaDescription || "Book October birthday candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/october-birthday-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
