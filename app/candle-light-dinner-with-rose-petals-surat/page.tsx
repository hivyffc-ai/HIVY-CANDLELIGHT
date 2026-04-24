import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candle-light-dinner-with-rose-petals-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candle Light Dinner With Rose Petals Surat | Romantic Package",
  description: keyword?.metaDescription || "Book candle light dinner with rose petals in Surat. Premium couple experience at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candle-light-dinner-with-rose-petals-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candle Light Dinner With Rose Petals Surat | Romantic Package",
    description: keyword?.metaDescription || "Book candle light dinner with rose petals in Surat. Premium couple experience at HIVY.",
    url: "https://candlelightdinnersurat.com/candle-light-dinner-with-rose-petals-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
