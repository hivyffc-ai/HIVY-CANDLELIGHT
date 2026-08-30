import { Metadata } from "next";
import FFCKeywordPage from "@/components/ffc-keyword-page";
import { getServiceBySlug } from "@/lib/ffc-config";

const service = getServiceBySlug("candle-light-dinner")!;
const keyword = service.keywords.find(k => k.slug === "gazebo-candlelight-dinner-for-girlfriend-surat")!;

export const metadata: Metadata = {
  title: keyword?.metaTitle || "Gazebo Candlelight Dinner For Girlfriend Surat | Private Venue",
  description: keyword?.metaDescription || "Book gazebo candlelight dinner for your girlfriend in Surat. Exclusive private venue at HIVY.",
  alternates: { canonical: "https://candlelightdinnersurat.com/gazebo-candlelight-dinner-for-girlfriend-surat" },
  openGraph: {
    title: keyword?.metaTitle || "Gazebo Candlelight Dinner For Girlfriend Surat | Private Venue",
    description: keyword?.metaDescription || "Book gazebo candlelight dinner for your girlfriend in Surat. Exclusive private venue at HIVY.",
    url: "https://candlelightdinnersurat.com/gazebo-candlelight-dinner-for-girlfriend-surat",
    type: "website",
    locale: "en_IN",
    siteName: "HIVY - Place for Celebrations",
  },
};

export default function Page() {
  return <FFCKeywordPage service={service} keyword={keyword} />;
}
