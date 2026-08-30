import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-in-garden-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner In Garden Surat | Exclusive Couple Dining",
  description: keyword?.metaDescription || "Book candlelight dinner in garden in Surat. Exclusive private experience at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-in-garden-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner In Garden Surat | Exclusive Couple Dining",
    description: keyword?.metaDescription || "Book candlelight dinner in garden in Surat. Exclusive private experience at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-in-garden-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
