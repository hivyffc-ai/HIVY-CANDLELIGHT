import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "exclusive-engagement-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Exclusive Engagement Candlelight Dinner Surat | Premium Setup",
  description: keyword?.metaDescription || "Book a exclusive engagement candlelight dinner in Surat. Premium romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/exclusive-engagement-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Exclusive Engagement Candlelight Dinner Surat | Premium Setup",
    description: keyword?.metaDescription || "Book a exclusive engagement candlelight dinner in Surat. Premium romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/exclusive-engagement-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
