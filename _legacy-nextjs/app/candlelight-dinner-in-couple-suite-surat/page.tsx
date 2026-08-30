import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-in-couple-suite-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner In Couple Suite Surat | Exclusive Couple Dining",
  description: keyword?.metaDescription || "Book candlelight dinner in couple suite in Surat. Exclusive private experience at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-in-couple-suite-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner In Couple Suite Surat | Exclusive Couple Dining",
    description: keyword?.metaDescription || "Book candlelight dinner in couple suite in Surat. Exclusive private experience at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-in-couple-suite-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
