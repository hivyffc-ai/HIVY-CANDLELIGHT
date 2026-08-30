import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "november-birthday-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "November Birthday Candlelight Dinner Surat | Seasonal Romantic Dining",
  description: keyword?.metaDescription || "Book November birthday candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/november-birthday-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "November Birthday Candlelight Dinner Surat | Seasonal Romantic Dining",
    description: keyword?.metaDescription || "Book November birthday candlelight dinner in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/november-birthday-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
