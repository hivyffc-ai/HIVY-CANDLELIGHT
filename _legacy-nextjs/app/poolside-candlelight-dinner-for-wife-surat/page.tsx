import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "poolside-candlelight-dinner-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Poolside Candlelight Dinner For Wife Surat | Private Venue",
  description: keyword?.metaDescription || "Book poolside candlelight dinner for your wife in Surat. Exclusive private venue at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/poolside-candlelight-dinner-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Poolside Candlelight Dinner For Wife Surat | Private Venue",
    description: keyword?.metaDescription || "Book poolside candlelight dinner for your wife in Surat. Exclusive private venue at HIVY.",
    url: "https://candlelightdinnersurat.com/poolside-candlelight-dinner-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
