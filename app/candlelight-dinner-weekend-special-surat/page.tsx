import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-weekend-special-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner Weekend Special Surat | Weekend Offer",
  description: keyword?.metaDescription || "Book candlelight dinner weekend special in Surat. Romantic couple dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-weekend-special-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner Weekend Special Surat | Weekend Offer",
    description: keyword?.metaDescription || "Book candlelight dinner weekend special in Surat. Romantic couple dining at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-weekend-special-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
