import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "best-couple-dining-experience-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Best Couple Dining Experience Surat | Premium Private",
  description: keyword?.metaDescription || "Find the best couple dining experience in Surat. Exclusive private dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/best-couple-dining-experience-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Best Couple Dining Experience Surat | Premium Private",
    description: keyword?.metaDescription || "Find the best couple dining experience in Surat. Exclusive private dining at HIVY.",
    url: "https://candlelightdinnersurat.com/best-couple-dining-experience-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
