import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "karwa-chauth-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Karwa Chauth Candlelight Dinner Surat | Romantic Celebration",
  description: keyword?.metaDescription || "Plan karwa chauth candlelight dinner in Surat. Exclusive couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/karwa-chauth-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Karwa Chauth Candlelight Dinner Surat | Romantic Celebration",
    description: keyword?.metaDescription || "Plan karwa chauth candlelight dinner in Surat. Exclusive couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/karwa-chauth-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
