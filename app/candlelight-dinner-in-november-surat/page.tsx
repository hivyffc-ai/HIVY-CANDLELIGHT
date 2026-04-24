import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-in-november-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner November Surat | Seasonal Couple Dining",
  description: keyword?.metaDescription || "Experience candlelight dinner in November in Surat. Premium romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-in-november-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner November Surat | Seasonal Couple Dining",
    description: keyword?.metaDescription || "Experience candlelight dinner in November in Surat. Premium romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-in-november-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
