import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "anniversary-candlelight-dinner-for-wife-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Anniversary Candlelight Dinner For Wife Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book anniversary candlelight dinner for your wife in Surat. Romantic private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/anniversary-candlelight-dinner-for-wife-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Anniversary Candlelight Dinner For Wife Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book anniversary candlelight dinner for your wife in Surat. Romantic private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/anniversary-candlelight-dinner-for-wife-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
