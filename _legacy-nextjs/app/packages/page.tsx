import { Metadata } from 'next';
import FFCPackagesPage from '@/components/ffc-packages-page';

export const metadata: Metadata = {
  title: 'Candle Light Dinner Packages | HIVY - Surat',
  description: 'Explore 5 unique romantic candle light dinner packages at HIVY Surat. From tent setups to bohemian experiences. Starting from ₹4,700. Book now!',
  keywords: 'candle light dinner packages surat, romantic packages surat, candlelight dinner packages, hivy packages surat, dinner setup packages',
  alternates: {
    canonical: 'https://candlelightdinnersurat.com/packages',
  },
  openGraph: {
    title: 'Candle Light Dinner Packages | HIVY Surat',
    description: 'Explore 5 unique romantic candle light dinner packages at HIVY Surat. Starting from ₹4,700.',
    url: 'https://candlelightdinnersurat.com/packages',
    type: 'website',
  },
};

export default function PackagesPage() {
  return <FFCPackagesPage />;
}
