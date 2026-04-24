import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "monthly-anniversary-candlelight-dinner-for-partner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Monthly Anniversary Candlelight Dinner For Partner Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book monthly anniversary candlelight dinner for your partner in Surat. Romantic private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/monthly-anniversary-candlelight-dinner-for-partner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Monthly Anniversary Candlelight Dinner For Partner Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book monthly anniversary candlelight dinner for your partner in Surat. Romantic private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/monthly-anniversary-candlelight-dinner-for-partner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
