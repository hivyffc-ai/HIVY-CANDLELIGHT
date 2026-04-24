import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "outdoor-candlelight-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Outdoor Candlelight Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a outdoor candlelight dinner in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/outdoor-candlelight-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Outdoor Candlelight Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a outdoor candlelight dinner in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/outdoor-candlelight-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
