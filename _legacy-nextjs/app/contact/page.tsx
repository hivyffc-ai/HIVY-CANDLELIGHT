import { Metadata } from 'next';
import FFCContactPage from '@/components/ffc-contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | HIVY - Candle Light Dinner Surat',
  description: 'Get in touch with HIVY - Candle Light Dinner Surat. Book your romantic candle light dinner, ask questions, or visit us. Call +91 9727027278.',
  keywords: 'contact HIVY surat, book candle light dinner surat, romantic venue contact, candle light dinner booking surat',
  alternates: {
    canonical: 'https://candlelightdinnersurat.com/contact',
  },
  openGraph: {
    title: 'Contact Us | HIVY - Candle Light Dinner Surat',
    description: 'Book your romantic candle light dinner at HIVY Surat. Call +91 9727027278.',
    url: 'https://candlelightdinnersurat.com/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return <FFCContactPage />;
}
