import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "luxury-private-dining-couple-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Luxury Private Dining Couples Surat | Premium Experience",
  description: keyword?.metaDescription || "Experience luxury private dining for couples in Surat. Premium exclusive setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/luxury-private-dining-couple-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Luxury Private Dining Couples Surat | Premium Experience",
    description: keyword?.metaDescription || "Experience luxury private dining for couples in Surat. Premium exclusive setup at HIVY.",
    url: "https://candlelightdinnersurat.com/luxury-private-dining-couple-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
