import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "engagement-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Engagement Candlelight Dinner Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan engagement candlelight dinner in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/engagement-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Engagement Candlelight Dinner Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan engagement candlelight dinner in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/engagement-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
