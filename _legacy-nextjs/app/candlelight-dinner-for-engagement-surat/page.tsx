import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-for-engagement-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner Engagement Surat | Special Occasion",
  description: keyword?.metaDescription || "Book a candlelight dinner for engagement in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-for-engagement-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner Engagement Surat | Special Occasion",
    description: keyword?.metaDescription || "Book a candlelight dinner for engagement in Surat. Romantic private setup at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-for-engagement-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
