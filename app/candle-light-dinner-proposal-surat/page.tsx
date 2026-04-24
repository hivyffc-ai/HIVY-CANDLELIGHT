import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candle-light-dinner-proposal-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candle Light Dinner Proposal Surat | Romantic Ring Setup",
  description: keyword?.metaDescription || "Plan a candle light dinner proposal in Surat. Magical romantic setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candle-light-dinner-proposal-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candle Light Dinner Proposal Surat | Romantic Ring Setup",
    description: keyword?.metaDescription || "Plan a candle light dinner proposal in Surat. Magical romantic setup at HIVY.",
    url: "https://candlelightdinnersurat.com/candle-light-dinner-proposal-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
