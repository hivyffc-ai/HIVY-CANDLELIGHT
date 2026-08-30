import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "dreamy-candle-light-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Dreamy Candle Light Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a dreamy candle light dinner in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/dreamy-candle-light-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Dreamy Candle Light Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a dreamy candle light dinner in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/dreamy-candle-light-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
