import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "honeymoon-candlelight-dinner-for-fiance-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Honeymoon Candlelight Dinner For Fiance Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book honeymoon candlelight dinner for your fiance in Surat. Romantic private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/honeymoon-candlelight-dinner-for-fiance-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Honeymoon Candlelight Dinner For Fiance Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book honeymoon candlelight dinner for your fiance in Surat. Romantic private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/honeymoon-candlelight-dinner-for-fiance-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
