import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-ideas-couples-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candle Light Dinner in Surat | HIVY",
  description: keyword?.metaDescription || "Experience romantic candle light dinner in Surat at HIVY.",
  alternates: { canonical: `https://candlelightdinnersurat.com/candlelight-dinner-ideas-couples-surat` },
  openGraph: {
    title: keyword?.metaTitle || "Candle Light Dinner in Surat | HIVY",
    description: keyword?.metaDescription || "Experience romantic candle light dinner in Surat at HIVY.",
    url: `https://candlelightdinnersurat.com/candlelight-dinner-ideas-couples-surat`,
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
