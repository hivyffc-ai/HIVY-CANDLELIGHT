import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "best-candlelight-dinner-planner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Candlelight Dinner Planner Surat | Top Rated",
  description: keyword?.metaDescription || "Find the best candlelight dinner planner in Surat at HIVY. Professional romantic dining setup.",
  alternates: { canonical: "https://candlelightdinnersurat.com/best-candlelight-dinner-planner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Candlelight Dinner Planner Surat | Top Rated",
    description: keyword?.metaDescription || "Find the best candlelight dinner planner in Surat at HIVY. Professional romantic dining setup.",
    url: "https://candlelightdinnersurat.com/best-candlelight-dinner-planner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
