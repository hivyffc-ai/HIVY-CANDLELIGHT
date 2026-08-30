import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-for-first-date-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner First Date Surat | Special Occasion",
  description: keyword?.metaDescription || "Book a candlelight dinner for first date in Surat. Romantic private setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-for-first-date-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner First Date Surat | Special Occasion",
    description: keyword?.metaDescription || "Book a candlelight dinner for first date in Surat. Romantic private setup at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-for-first-date-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
