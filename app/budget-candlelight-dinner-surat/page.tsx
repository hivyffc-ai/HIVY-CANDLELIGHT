import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "budget-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Budget Candlelight Dinner Surat | Couple Dining",
  description: keyword?.metaDescription || "Find the budget candlelight dinner in Surat at HIVY. Private romantic venue for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/budget-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Budget Candlelight Dinner Surat | Couple Dining",
    description: keyword?.metaDescription || "Find the budget candlelight dinner in Surat at HIVY. Private romantic venue for couples.",
    url: "https://candlelightdinnersurat.com/budget-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
