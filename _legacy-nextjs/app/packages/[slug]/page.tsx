import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FFCPackageDetailPage from '@/components/ffc-package-detail-page';
import { getVisiblePackages, getPackageBySlug } from '@/lib/ffc-config';

interface PackagePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getVisiblePackages().map((pkg) => ({
    slug: pkg.slug,
  }));
}

export async function generateMetadata({ params }: PackagePageProps): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  
  if (!pkg) {
    return {
      title: 'Package Not Found',
    };
  }

  return {
    title: `${pkg.name} ${pkg.emoji} | HIVY - Place for Celebrations Surat`,
    description: `${pkg.shortDescription} Book ${pkg.name} at HIVY - Place for Celebrations Surat for ₹${pkg.price.toLocaleString()}. Perfect for ${pkg.perfectFor.join(', ')}.`,
    keywords: `${pkg.name}, ${pkg.perfectFor.join(', ')}, candle light dinner surat, hivy surat, romantic dinner package`,
    alternates: {
      canonical: `https://candlelightdinnersurat.com/packages/${slug}`,
    },
    openGraph: {
      title: `${pkg.name} | HIVY - Candle Light Dinner Surat`,
      description: pkg.shortDescription,
      url: `https://candlelightdinnersurat.com/packages/${slug}`,
      type: 'website',
    },
  };
}

export default async function PackagePage({ params }: PackagePageProps) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return <FFCPackageDetailPage package={pkg} />;
}
