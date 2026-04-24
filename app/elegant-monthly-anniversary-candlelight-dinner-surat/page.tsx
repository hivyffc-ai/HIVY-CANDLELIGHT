import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "elegant-monthly-anniversary-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Elegant Monthly Anniversary Candlelight Dinner Surat | Premium Setup",
  description: keyword?.metaDescription || "Book a elegant monthly anniversary candlelight dinner in Surat. Premium romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/elegant-monthly-anniversary-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Elegant Monthly Anniversary Candlelight Dinner Surat | Premium Setup",
    description: keyword?.metaDescription || "Book a elegant monthly anniversary candlelight dinner in Surat. Premium romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/elegant-monthly-anniversary-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
