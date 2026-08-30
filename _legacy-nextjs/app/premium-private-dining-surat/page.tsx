import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "premium-private-dining-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Premium Private Dining Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a premium private dining in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/premium-private-dining-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Premium Private Dining Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a premium private dining in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/premium-private-dining-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
