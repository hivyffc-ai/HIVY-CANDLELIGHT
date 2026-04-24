import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "may-candlelight-dinner-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "May Candlelight Dinner For Better Half Surat | Seasonal Romance",
  description: keyword?.metaDescription || "Book May candlelight dinner for your better half in Surat. Seasonal romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/may-candlelight-dinner-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "May Candlelight Dinner For Better Half Surat | Seasonal Romance",
    description: keyword?.metaDescription || "Book May candlelight dinner for your better half in Surat. Seasonal romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/may-candlelight-dinner-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
