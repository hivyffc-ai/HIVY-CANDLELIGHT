import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "first-date-candle-light-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword.metaTitle,
  description: keyword.metaDescription,
  keywords: ["first date candle light dinner surat", "first date dinner surat", "romantic first date surat", "HIVY surat"],
  alternates: { canonical: `https://candlelightdinnersurat.com/${keyword.slug}` },
  openGraph: {
    title: keyword.metaTitle,
    description: keyword.metaDescription,
    url: `https://candlelightdinnersurat.com/${keyword.slug}`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
