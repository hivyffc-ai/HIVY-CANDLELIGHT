import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "exclusive-date-night-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Exclusive Date Night Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a exclusive date night in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/exclusive-date-night-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Exclusive Date Night Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a exclusive date night in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/exclusive-date-night-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
