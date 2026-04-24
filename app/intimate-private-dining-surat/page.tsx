import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "intimate-private-dining-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Intimate Private Dining Surat | Couples Only",
  description: keyword?.metaDescription || "Experience a intimate private dining in Surat at HIVY. Exclusive private dining for couples.",
  alternates: { canonical: "https://candlelightdinnersurat.com/intimate-private-dining-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Intimate Private Dining Surat | Couples Only",
    description: keyword?.metaDescription || "Experience a intimate private dining in Surat at HIVY. Exclusive private dining for couples.",
    url: "https://candlelightdinnersurat.com/intimate-private-dining-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
