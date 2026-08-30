import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-with-fireworks-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner With Fireworks For Girlfriend Surat | Romantic Setup",
  description: keyword?.metaDescription || "Book candlelight dinner with fireworks for your girlfriend in Surat. Romantic dining at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-with-fireworks-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner With Fireworks For Girlfriend Surat | Romantic Setup",
    description: keyword?.metaDescription || "Book candlelight dinner with fireworks for your girlfriend in Surat. Romantic dining at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-with-fireworks-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
