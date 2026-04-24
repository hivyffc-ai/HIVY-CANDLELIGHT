import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "how-to-plan-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "How to Plan Candlelight Dinner Surat | Expert Guide",
  description: keyword?.metaDescription || "Learn how to plan a candlelight dinner in Surat. Expert romantic setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/how-to-plan-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "How to Plan Candlelight Dinner Surat | Expert Guide",
    description: keyword?.metaDescription || "Learn how to plan a candlelight dinner in Surat. Expert romantic setup at HIVY.",
    url: "https://candlelightdinnersurat.com/how-to-plan-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
