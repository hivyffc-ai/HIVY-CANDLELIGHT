import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "private-dinner-for-better-half-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Dinner For Better Half Surat | Romantic Private Dining",
  description: keyword?.metaDescription || "Plan a private dinner for your better-half in Surat. Private venue with decorations at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/private-dinner-for-better-half-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Dinner For Better Half Surat | Romantic Private Dining",
    description: keyword?.metaDescription || "Plan a private dinner for your better-half in Surat. Private venue with decorations at HIVY.",
    url: "https://candlelightdinnersurat.com/private-dinner-for-better-half-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
