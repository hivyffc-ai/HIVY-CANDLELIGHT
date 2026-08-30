import type React from "react";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#78716C", // Warm Stone for HIVY
};

export const metadata: Metadata = {
  metadataBase: new URL("https://candlelightdinnersurat.com"),
  title: {
    default: "HIVY - Candle Light Dinner in Surat | Premium Romantic Dining Experience",
    template: "%s | HIVY - Candle Light Dinner Surat",
  },
  description:
    "Best candle light dinner in Surat, Gujarat. Private & glass house setups with gourmet dining. Premium romantic experiences for couples. Book now.",
  keywords: [
    "hivy surat",
    "candle light dinner surat",
    "candlelight dinner surat",
    "romantic dinner surat",
    "private candle light dinner",
    "private candle light dinner surat",
    "luxury candle light dinner",
    "candle light dinner for couples",
    "candle light dinner near me",
    "candle light dinner restaurant surat",
    "best candle light dinner surat",
    "candle light dinner with decoration",
    "surprise candle light dinner",
    "candle light dinner date surat",
    "candle light dinner packages surat",
    "affordable candle light dinner surat",
    "premium candle light dinner",
    "outdoor candle light dinner surat",
    "glass house candle light dinner",
    "private dining surat",
    "romantic restaurant surat"
  ],
  authors: [{ name: "HIVY - Candle Light Dinner Surat", url: "https://candlelightdinnersurat.com" }],
  creator: "HIVY - Place for Celebrations",
  publisher: "HIVY - Place for Celebrations",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://candlelightdinnersurat.com",
  },
  category: "Restaurant",
  classification: "Romantic Celebration Venue",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://candlelightdinnersurat.com",
    siteName: "HIVY - Place for Celebrations",
    title: "HIVY - Place for Celebrations Surat | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Surat. Birthday surprises, candlelight dinners, anniversaries, proposals. Premium private experiences.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HIVY - Place for Celebrations - Best Romantic Celebrations in Surat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIVY - Place for Celebrations Surat | Best Romantic Celebration Venue",
    description: "Best romantic celebration venue in Surat. Birthday surprises, candlelight dinners, proposals & more!",
    images: ["/images/twitter-image.jpg"],
    creator: "@hivysurat",
    site: "@hivysurat",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "c1b155cb6acd07f9", // From googlec1b155cb6acd07f9.html
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Surat",
    "geo.position": "21.1702;72.8311",
    "ICBM": "21.1702, 72.8311",
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://candlelightdinnersurat.com/#business",
      "name": "HIVY - Place for Celebrations",
      "alternateName": "HIVY Surat",
      "description": "Best romantic celebration venue in Surat, Gujarat. Birthday surprises, candlelight dinners, anniversary celebrations, proposals, pre-wedding shoots. Premium private experiences.",
      "url": "https://candlelightdinnersurat.com",
      "telephone": "+91 9727027278",
      "email": "hello@hivy.co.in",
      "priceRange": "₹₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, UPI, GPay, PhonePe",
      "image": [
        "https://candlelightdinnersurat.com/images/og-image.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road",
        "addressLocality": "Adajan, Pal Gam, Surat",
        "addressRegion": "Gujarat",
        "postalCode": "394510",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.1702",
        "longitude": "72.8311"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "11:00",
          "closes": "23:00"
        }
      ],
      "sameAs": [
        "https://www.instagram.com/hivy_placeforcelebration/",
        "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/"
      ],
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Priya S."
          },
          "reviewBody": "Amazing experience! The romantic setup was perfect for our anniversary celebration. Highly recommend HIVY for couples."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Rahul M."
          },
          "reviewBody": "Best place in Surat for birthday surprises. The team went above and beyond to make my wife's birthday special."
        },
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Neha P."
          },
          "reviewBody": "Perfect candlelight dinner experience. The ambiance, food, and service were all top-notch."
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Romantic Celebration Packages",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Birthday Surprise Package",
              "description": "Private birthday celebration with decorations, cake, and romantic setup"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Candlelight Dinner",
              "description": "Romantic candlelight dinner for couples with private setting"
            },
            "priceCurrency": "INR"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Anniversary Celebration",
              "description": "Special anniversary celebration with decorations and intimate dining"
            },
            "priceCurrency": "INR"
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://candlelightdinnersurat.com/#website",
      "url": "https://candlelightdinnersurat.com",
      "name": "HIVY - Place for Celebrations",
      "description": "Best romantic celebration venue in Surat",
      "publisher": {
        "@id": "https://candlelightdinnersurat.com/#business"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://candlelightdinnersurat.com/services?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://candlelightdinnersurat.com/#organization",
      "name": "HIVY - Place for Celebrations",
      "url": "https://candlelightdinnersurat.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://candlelightdinnersurat.com/icon.svg",
        "width": "512",
        "height": "512"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 9727027278",
        "contactType": "reservations",
        "areaServed": "Surat",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://candlelightdinnersurat.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://candlelightdinnersurat.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://candlelightdinnersurat.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Packages",
          "item": "https://candlelightdinnersurat.com/packages"
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PSXMHLQF');
          `}
        </Script>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-PHWHQV4L"
          strategy="afterInteractive"
        />
        <Script id="google-tags" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GT-PHWHQV4L');
            gtag('config', 'AW-11390931743');
            gtag('event', 'conversion', {
              'send_to': 'AW-11390931743/O21FCL-_9-0bEJ-mz7cq',
              'value': 1.0,
              'currency': 'INR'
            });
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PSXMHLQF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
