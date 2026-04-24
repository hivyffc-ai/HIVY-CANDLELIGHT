import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-candlelight-dinner-for-lover-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Candlelight Dinner For Lover Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book anniversary candlelight dinner for your lover in Surat. Romantic private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/anniversary-candlelight-dinner-for-lover-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Candlelight Dinner For Lover Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book anniversary candlelight dinner for your lover in Surat. Romantic private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/anniversary-candlelight-dinner-for-lover-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
