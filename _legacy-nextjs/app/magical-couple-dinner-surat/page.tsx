import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "magical-couple-dinner-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Magical Couple Dinner Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a magical couple dinner in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/magical-couple-dinner-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Magical Couple Dinner Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a magical couple dinner in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/magical-couple-dinner-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
