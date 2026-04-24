import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "affordable-romantic-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Affordable Romantic Dinner Surat | Budget Couple Dining",
  description: keyword?.metaDescription || "Book an affordable romantic dinner in Surat. Budget-friendly private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/affordable-romantic-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Affordable Romantic Dinner Surat | Budget Couple Dining",
    description: keyword?.metaDescription || "Book an affordable romantic dinner in Surat. Budget-friendly private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/affordable-romantic-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
