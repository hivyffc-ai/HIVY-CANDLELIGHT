import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "private-dining-proposal-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Private Dining for Proposal Surat | Surprise Setup",
  description: keyword?.metaDescription || "Book private dining for your proposal in Surat. Stunning romantic setup at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/private-dining-proposal-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Private Dining for Proposal Surat | Surprise Setup",
    description: keyword?.metaDescription || "Book private dining for your proposal in Surat. Stunning romantic setup at HIVY.",
    url: "https://candlelightdinnersurat.com/private-dining-proposal-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
