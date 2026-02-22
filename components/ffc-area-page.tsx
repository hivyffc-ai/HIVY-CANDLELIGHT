'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, Check, Phone, MessageCircle, MapPin, Heart, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { FFCGalleryCompact } from '@/components/ffc-gallery';
import { AreaConfig, getVisiblePackages, serviceCategories, suratAreas, siteConfig, formatPrice } from '@/lib/ffc-config';

interface AreaPageProps {
  area: AreaConfig;
}

export default function FFCAreaPage({ area }: AreaPageProps) {
  // Get nearby areas (excluding current)
  const nearbyAreas = suratAreas.filter(a => a.slug !== area.slug).slice(0, 8);

  // Area FAQ data for schema
  const areaFaqs = [
    { question: `How do couples from ${area.name} reach HIVY for candle light dinner?`, answer: `HIVY is conveniently located in Adajan, Surat and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Search "HIVY - Candle Light Dinner in Surat" on Google Maps for precise directions from ${area.name}.` },
    { question: "What is included in the candle light dinner package?", answer: "Our candle light dinner packages include premium decoration with candles, rose petals, fairy lights, a multi-course gourmet meal, welcome drinks, soft background music, complimentary cake, and a completely private setup exclusively for you and your partner." },
    { question: `What are the booking options for couples from ${area.name}?`, answer: `Couples from ${area.name} can book their candle light dinner via WhatsApp at ${siteConfig.phone}, phone call, or our online booking form. We recommend booking 2-3 days in advance, especially for weekends and holidays.` },
    { question: "Is the candle light dinner venue completely private?", answer: "Yes! Your candle light dinner at HIVY is 100% private. The entire venue is reserved exclusively for you and your partner during your 3-hour booking slot." },
    { question: `What is the price of candle light dinner for couples from ${area.name}?`, answer: "Our candle light dinner packages start from ₹5,100 (Swing of LOVE) and go up to ₹6,500 (Tent of Romance). Each package includes decorations, food, drinks, cake, music, and 3 hours of private time." },
    { question: `What time slots are available for candle light dinner near ${area.name}?`, answer: "We offer multiple time slots: Lunch (12-3 PM, 1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM)." },
    { question: `Can I plan a surprise birthday dinner for my partner from ${area.name}?`, answer: "Absolutely! We specialize in surprise celebrations. Share your plan with our team, and we'll coordinate every detail discreetly." },
    { question: "Do you offer proposal or anniversary setups?", answer: "Yes! Our Fairy Tale Proposals package (₹6,300) is designed specifically for proposals. For anniversaries, all packages can be customized with personalized banners, extra flowers, and special décor." },
    { question: `Is parking available for couples coming from ${area.name}?`, answer: "Yes, free parking is available at our Adajan venue for both two-wheelers and four-wheelers." },
    { question: "What is the cancellation and rescheduling policy?", answer: "Rescheduling must be informed at least one day prior. Your booking can be rescheduled within one month, subject to availability. No refund policy is applicable." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": areaFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
      {/* Breadcrumb Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://candlelightdinnersurat.com" },
              { "@type": "ListItem", "position": 2, "name": "Candle Light Dinner", "item": "https://candlelightdinnersurat.com/candle-light-dinner-in-surat" },
              { "@type": "ListItem", "position": 3, "name": area.name, "item": `https://candlelightdinnersurat.com/${area.slug}` }
            ]
          })
        }}
      />
      <FFCHeader />
      
      {/* Breadcrumb */}
      <div className="bg-amber-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-rose-900">Home</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <Link href="/areas" className="text-gray-500 hover:text-rose-900">Areas</Link>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <span className="text-rose-900 font-medium">{area.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <MapPin className="h-4 w-4 mr-2" /> {area.name}, Surat
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-serif">
                Candle Light Dinner in {area.name}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                HIVY brings premium romantic candle light dinner experiences to couples in {area.name}, Surat. Private & glass house setups with gourmet dining!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <FFCBookNowButton 
                  pageTitle={`${area.name} Area Page`} 
                  className="bg-amber-500 text-neutral-900 hover:bg-amber-400 text-lg px-8 py-6" 
                />
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4" /> 4.9★ Rating
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Check className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-sm">
                  <Heart className="h-4 w-4" /> Couples Only
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" pageTitle={`Candle Light Dinner near ${area.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form - Above the fold on mobile */}
      <section className="lg:hidden py-8 bg-amber-50">
        <div className="container mx-auto px-4">
          <FFCBookingForm pageTitle={`Candle Light Dinner near ${area.name}`} />
        </div>
      </section>

      {/* Services in This Area */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Candle Light Dinner Options in {area.name}
            </h2>
            <p className="text-gray-600">
              Premium romantic candle light dinner experiences for couples in {area.name}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all border-amber-200 group text-center">
                  <CardContent className="p-4 md:p-6">
                    <span className="text-4xl md:text-5xl mb-3 md:mb-4 block">{service.emoji}</span>
                    <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2 group-hover:text-rose-900 transition-colors line-clamp-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-1 hidden md:block">
                      in {area.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Booking */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Candle Light Dinner Near {area.name}
                </h2>
                
                <p className="text-gray-600 mb-6">
                  Looking for the perfect candle light dinner experience near {area.name}, Surat? HIVY offers premium romantic dining setups exclusively for couples seeking an intimate, unforgettable evening together.
                </p>

                <p className="text-gray-600 mb-6">
                  Our venue features stunning private setups and elegant glass houses that provide the perfect ambiance for your romantic candle light dinner. Enjoy gourmet cuisine, soft music, and premium decorations in a completely private setting.
                </p>

                <div className="bg-white rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Gift className="h-5 w-5 text-rose-900" />
                    Candle Light Dinner Experience in {area.name}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Private Candlelight Setup",
                      "Elegant Glass House Dining",
                      "Gourmet Multi-Course Meals",
                      "Premium Decoration & Ambiance",
                      "Soft Background Music",
                      "Personalized Menu Options",
                      "Rose Petals & Fairy Lights",
                      "Custom Romantic Add-ons"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-rose-900 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-4">
                  Why {area.name} Couples Choose HIVY for Candle Light Dinner
                </h3>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-rose-900 font-bold">•</span>
                    <span><strong>Convenient Location:</strong> Easy access from {area.name} – just minutes away for your perfect candle light dinner.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-900 font-bold">•</span>
                    <span><strong>100% Privacy:</strong> Your candle light dinner is completely private with exclusive booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-900 font-bold">•</span>
                    <span><strong>6 Unique Setups:</strong> Choose from private and glass house candle light dinner experiences.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-rose-900 font-bold">•</span>
                    <span><strong>All-Inclusive Packages:</strong> Gourmet food, premium decorations, music, and more included.</span>
                  </li>
                </ul>
              </article>

              {/* Packages */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 font-serif">
                  Candle Light Dinner Packages for {area.name} Couples
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {getVisiblePackages().slice(0, 4).map((pkg) => (
                    <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-amber-200 group bg-white">
                        <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-50 relative overflow-hidden">
                          <Image
                            src={pkg.thumbnail}
                            alt={`${pkg.name} - Candle Light Dinner in ${area.name} Surat`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-1 group-hover:text-rose-900 transition-colors">
                            {pkg.name}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                            {pkg.shortDescription}
                          </p>
                          <p className="text-lg font-bold text-rose-900">
                            {formatPrice(pkg.price)}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                <div className="text-center mt-6">
                  <Link href="/packages">
                    <Button className="bg-rose-900 hover:bg-rose-950">
                      View All Packages <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Form */}
                <FFCBookingForm pageTitle={`${area.name} Area`} />

                {/* Quick Contact */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <MessageCircle className="h-10 w-10 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Quick Booking</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Instant response on WhatsApp
                    </p>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full justify-center"
                    >
                      <MessageCircle className="h-5 w-5" />
                      WhatsApp Now
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              Also Serving Nearby Areas
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {nearbyAreas.map((nearbyArea) => (
              <Link 
                key={nearbyArea.slug}
                href={`/${nearbyArea.slug}`}
                className="px-4 py-2 bg-amber-50 rounded-full text-gray-700 hover:bg-rose-900 hover:text-white transition-colors border border-amber-300"
              >
                {nearbyArea.name}
              </Link>
            ))}
            <Link 
              href="/areas"
              className="px-4 py-2 bg-rose-900 rounded-full text-white hover:bg-rose-950 transition-colors"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4 font-serif">
              FAQs - Candle Light Dinner in {area.name}
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: `How do couples from ${area.name} reach HIVY for candle light dinner?`,
                answer: `HIVY is conveniently located in Adajan, Surat and easily accessible from ${area.name}. You can reach us by car, auto, or cab in a short time. Search "HIVY - Place For Celebration" on Google Maps for precise directions from ${area.name}.`
              },
              {
                question: "What is included in the candle light dinner package?",
                answer: "Our candle light dinner packages include premium decoration with candles, rose petals, fairy lights, a multi-course gourmet meal, welcome drinks, soft background music, complimentary cake, and a completely private setup exclusively for you and your partner."
              },
              {
                question: `What are the booking options for couples from ${area.name}?`,
                answer: `Couples from ${area.name} can book their candle light dinner via WhatsApp at ${siteConfig.phone}, phone call, or our online booking form. We recommend booking 2-3 days in advance, especially for weekends and holidays.`
              },
              {
                question: "Is the candle light dinner venue completely private?",
                answer: "Yes! Your candle light dinner at HIVY is 100% private. The entire venue is reserved exclusively for you and your partner during your 3-hour booking slot. No other guests will be present, ensuring a truly intimate romantic experience."
              },
              {
                question: `What is the price of candle light dinner for couples from ${area.name}?`,
                answer: "Our candle light dinner packages start from ₹5,100 (Swing of LOVE) and go up to ₹6,500 (Tent of Romance). Each package includes decorations, food, drinks, cake, music, and 3 hours of private time. The pricing is the same for all areas of Surat."
              },
              {
                question: `What time slots are available for candle light dinner near ${area.name}?`,
                answer: "We offer multiple time slots throughout the day: Lunch (12-3 PM, 1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM). Choose the slot that suits you best."
              },
              {
                question: `Can I plan a surprise birthday dinner for my partner from ${area.name}?`,
                answer: "Absolutely! We specialize in surprise celebrations. Share your plan with our team, and we'll coordinate every detail discreetly — from the setup and decorations to a personalized cake and special touches. Your partner will be completely surprised."
              },
              {
                question: "Do you offer proposal or anniversary setups?",
                answer: "Yes! Our Fairy Tale Proposals package (₹6,300) is designed specifically for proposals with a grand archway, candle aisle, and dramatic reveal setup. For anniversaries, all our packages can be customized with personalized banners, extra flowers, and special décor."
              },
              {
                question: `Is parking available for couples coming from ${area.name}?`,
                answer: "Yes, free parking is available at our Adajan venue for both two-wheelers and four-wheelers. You can easily park and walk right in to your private candle light dinner setup."
              },
              {
                question: "What is the cancellation and rescheduling policy?",
                answer: "Rescheduling must be informed at least one day prior. Your booking can be rescheduled within one month, subject to availability. Please note that no refund policy is applicable, but rescheduling is always accommodated."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-lg border border-amber-200 px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gallery Section */}
      <FFCGalleryCompact title={`Candle Light Dinner in ${area.name}`} maxItems={8} />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
