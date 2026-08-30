import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "private-dinner-for-fiancee-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Dinner For Fiancee Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Plan a private dinner for your fiancee in Surat. Private venue with decorations at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/private-dinner-for-fiancee-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Dinner For Fiancee Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Plan a private dinner for your fiancee in Surat. Private venue with decorations at HIVY.",
    url: "https://candlelightdinnersurat.com/private-dinner-for-fiancee-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
