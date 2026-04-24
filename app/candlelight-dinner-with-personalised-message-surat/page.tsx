import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "candlelight-dinner-with-personalised-message-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Candlelight Dinner With Personalised Message Surat | Complete Romantic Setup",
  description: keyword?.metaDescription || "Enjoy candlelight dinner with personalised message in Surat. Complete romantic package at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/candlelight-dinner-with-personalised-message-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Candlelight Dinner With Personalised Message Surat | Complete Romantic Setup",
    description: keyword?.metaDescription || "Enjoy candlelight dinner with personalised message in Surat. Complete romantic package at HIVY.",
    url: "https://candlelightdinnersurat.com/candlelight-dinner-with-personalised-message-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
