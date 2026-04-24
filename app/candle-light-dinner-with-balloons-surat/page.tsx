import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candle-light-dinner-with-balloons-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candle Light Dinner With Balloons Surat | Romantic Package",
  description: keyword?.metaDescription || "Book candle light dinner with balloons in Surat. Premium couple experience at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candle-light-dinner-with-balloons-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candle Light Dinner With Balloons Surat | Romantic Package",
    description: keyword?.metaDescription || "Book candle light dinner with balloons in Surat. Premium couple experience at HIVY.",
    url: "https://candlelightdinnersurat.com/candle-light-dinner-with-balloons-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
