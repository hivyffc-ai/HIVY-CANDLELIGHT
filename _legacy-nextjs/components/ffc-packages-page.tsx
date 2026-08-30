'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, ChevronRight, Star, Clock, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages, formatPrice } from '@/lib/ffc-config';

export default function FFCPackagesPage() {
  const visiblePackages = getVisiblePackages();
  
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Gift className="h-4 w-4 mr-2" /> 5 Unique Setups
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Candlelight Dinner Packages
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose from 5 stunning romantic candlelight setups designed to make your dinner unforgettable
          </p>
          <div className="mt-6">
            <FFCBookNowButton pageTitle="Packages Page" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {visiblePackages.map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden border-amber-200 hover:shadow-xl transition-all group h-full">
                  {/* Image */}
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-50 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-rose-900 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 group-hover:text-rose-900 transition-colors leading-tight">
                      {pkg.name} {pkg.emoji}
                    </h2>
                    <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
                    
                    {/* Price */}
                    <p className="text-base sm:text-lg md:text-xl font-bold text-rose-900">
                      {formatPrice(pkg.price)}
                    </p>
                    {/* View Details */}
                    <div className="flex justify-end mt-2">
                      <span className="text-[10px] sm:text-xs text-amber-700 font-medium flex items-center gap-1 hover:text-amber-900">
                        View Details <ChevronRight className="h-3 w-3" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 font-serif">What's Included in Every Candlelight Dinner Package</h2>
            <p className="text-gray-600">All our candlelight dinner packages come with these essential elements</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🕐", title: "3 Hours Private Time", desc: "Exclusive private candlelight dinner" },
              { icon: "🥂", title: "Welcome Drink", desc: "Refreshing start to your evening" },
              { icon: "🍰", title: "Gourmet Dessert", desc: "Complimentary dessert included" },
              { icon: "🎶", title: "Romantic Music", desc: "Soft melodies throughout" },
              { icon: "🕯️", title: "Premium Candle Setup", desc: "Warm candlelight ambiance" },
              { icon: "🎈", title: "Romantic Decorations", desc: "Beautiful candlelight thematic decor" },
              { icon: "🛋️", title: "Comfortable Seating", desc: "Cozy seating arrangements" },
              { icon: "📸", title: "Photo-Ready Setup", desc: "Instagram-worthy candlelight backdrops" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <span className="text-4xl mb-3 block">{item.icon}</span>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif">Candlelight Dinner Package Experience Guide</h2>
          <div className="prose prose-lg prose-amber max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-amber-900 mt-6">The Magic of Candlelight Dining in Private Settings</h3>
            <p>
              There's something transformative about dining by candlelight in a completely private space. The gentle flicker of flames creates an intimate atmosphere impossible to replicate in busy restaurants. At HIVY, our candlelight dinner packages harness this magic through carefully orchestrated lighting that highlights romantic moments while softening the environment into a cocoon of warmth. Unlike public restaurants where fluorescent lights or harsh overheads break the spell, our private candlelight dinners immerse you in genuine romantic ambiance from the moment you walk in until your celebration concludes. The dancing shadows, the warm glow on your partner's face, and the complete absence of distractions create conditions where connection deepens naturally.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">How Candlelight Ambiance Enhances Each Package</h3>
            <p>
              Every HIVY package incorporates candlelight as a central design element, though each interpretation differs beautifully. Tent of Romance features candles at multiple heights within the canopy, creating layered lighting that feels luxuriously dramatic. Fairy Tale Proposals uses candle aisles and pathways that guide your partner toward the proposal moment with increasing anticipation. BoHo Chic scatters candles among natural textures and macramé for earthy romantic warmth. Swing of LOVE positions candles to illuminate the decorated swing centerpiece while casting romantic shadows throughout the space. Elite Group Setup distributes candlelight across expanded seating areas so every guest experiences the warm ambiance. Each approach demonstrates how versatile candlelight becomes when thoughtfully designed.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Perfect Candlelight Package for Date Nights</h3>
            <p>
              Regular date nights often default to restaurant reservations—pleasant but predictable. HIVY candlelight packages transform date night into an event worth anticipating. Swing of LOVE at ₹5,100 offers excellent value for couples seeking memorable date night experiences without special occasions. The playful swing setting surrounded by candlelight creates unique photo opportunities while the private venue ensures your conversations remain intimate. BoHo Chic at ₹5,700 elevates date night into an Instagram-worthy experience with its bohemian-chic aesthetic bathed in warm candlelight. Couples frequently book these packages for monthly anniversaries, "just because" celebrations, or whenever routine dinner dates feel insufficient for expressing love.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">The Multi-Course Dining Experience Explained</h3>
            <p>
              Candlelight dining at HIVY isn't merely about atmosphere—the culinary journey matters equally. Each package includes a thoughtfully composed multi-course meal designed to complement the romantic setting. Your evening begins with welcome drinks served as you absorb the decorated space's beauty. Appetizers follow, ranging from Indian favorites to Continental selections based on your preferences indicated during booking. Main courses arrive when you're ready, not on restaurant schedules, allowing natural conversation flow. The meal concludes with dessert alongside your celebration cake if included. Throughout, servers appear discreetly when needed and disappear when privacy matters more. This attentive yet unobtrusive service style ensures dining enhances rather than interrupts your candlelight experience.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Romantic Atmosphere Elements Beyond Candles</h3>
            <p>
              While candlelight anchors the atmosphere, numerous supporting elements complete the romantic experience. Rose petals scatter across tables and pathways, their subtle fragrance adding sensory depth. Fairy lights twinkle alongside candle flames, creating dimensioned lighting that feels magical rather than simply dim. Soft romantic music plays throughout your three-hour celebration without overwhelming conversation. Comfortable seating arrangements encourage couples to sit close, whether on decorated swings, plush floor cushions, or elegantly dressed dining chairs. Each package combines these elements differently, but all achieve the same goal: transporting you from ordinary Surat evenings into genuinely romantic experiences.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Why Candlelight Dinners Outshine Restaurant Dates</h3>
            <p>
              Restaurant candlelight dinners, however pleasant, suffer unavoidable limitations. The table next to yours might host a noisy family celebration. Your waiter might interrupt meaningful conversation moments. The decorations weren't arranged for you—they're permanent fixtures seen by hundreds before. Background noise from kitchens, other diners, and staff creates ambient stress you might not consciously notice but certainly feel. HIVY candlelight dinners eliminate every limitation. Your decorations were set up fresh today, specifically for your celebration. No other guests exist in your space. Staff appears only when summoned. Background music plays at your preferred volume. The entire venue exists for your three hours, creating genuine exclusivity that restaurants cannot replicate regardless of pricing.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Creating Memorable Candlelight Experiences Together</h3>
            <p>
              The most memorable candlelight dinners become meaningful through personalization. Beyond choosing your preferred package, consider additions that reference your relationship's unique story. Request playlists featuring songs meaningful to your journey together. Add photo displays showcasing relationship highlights. Include items with sentimental value incorporated into the decoration scheme. Write letters to each other, read aloud by candlelight during your celebration. Plan small surprises—a piece of jewelry revealed with dessert, a meaningful gift unwrapped in the romantic setting. HIVY provides the candlelight stage; you write the memorable performance that unfolds upon it.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Special Touches That Make Candlelight Dinners Romantic</h3>
            <p>
              Small details accumulate into unforgettable romantic experiences. The path of rose petals leading to your table. The champagne (non-alcoholic) toast as you arrive. The background music shifting to "your song" at the perfect moment. The waiter addressing your partner by name. The unexpected dessert presentation. The photographer capturing genuine expressions before you notice. HIVY team members understand that romance lives in details, and our candlelight dinner packages include countless thoughtful touches while remaining open to your custom requests. Many couples share their partner's preferences before arrival, allowing us to incorporate surprise elements that demonstrate how well you know and care for each other.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Popular Occasions for Candlelight Dinner Packages</h3>
            <p>
              While every occasion benefits from candlelight ambiance, certain celebrations particularly suit our dinner packages. Proposals find their perfect setting in Fairy Tale or Tent of Romance packages—the dramatic lighting creates ideal conditions for life-changing questions. Anniversaries transform from routine to remarkable when celebrated privately by candlelight. Valentine's Day bookings start filling months in advance as couples recognize that restaurants cannot match private candlelight experiences. Monthly anniversaries, relationship milestones, promotions, reconciliations, and "just because I love you" moments all warrant candlelight celebration. Many couples book quarterly candlelight dinners as relationship maintenance—dedicated time away from daily routines to reconnect in romantic settings.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">How to Choose Between Candlelight Packages</h3>
            <p>
              Selecting the right candlelight package depends on several factors. Budget naturally influences decisions—Swing of LOVE at ₹5,100 offers excellent candlelight experience at accessible pricing, while Tent of Romance at ₹6,500 delivers premium luxury worth the investment for special occasions. Aesthetic preferences matter significantly: bohemian souls gravitate toward BoHo Chic, whimsical romantics love Swing of LOVE, and those wanting maximum elegance choose Tent of Romance. Occasion significance guides decisions—routine date nights suit entry-level packages while proposals and significant anniversaries deserve premium setups. Group composition determines whether Elite Group Setup (for friends or family inclusion) or couple-focused packages fit best. Our team happily shares photos and videos via WhatsApp to help you visualize each candlelight setting before deciding.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Package FAQs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions About Our Packages
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "What is included in all candle light dinner packages?",
                answer: "Every package at HIVY includes 3 hours of private celebration time, a welcome drink, multi-course gourmet meal (starter, main course, dessert), romantic candle & fairy light decorations, rose petal arrangements, soft background music, and exclusive venue access."
              },
              {
                question: "Which package is best for a proposal?",
                answer: "The Fairy Tale Proposals package (₹6,300) is specifically designed for proposals with a grand archway, cascading flowers, candle aisle, and dramatic reveal setup. Our team coordinates everything discreetly to ensure a perfect surprise."
              },
              {
                question: "Do all packages include cake?",
                answer: "Yes! All our currently visible packages — Swing of LOVE, BoHo Chic, Fairy Tale Proposals, Tent of Romance, and The Elite Group Setup — include a complimentary celebration cake. Non-alcoholic champagne is available as an add-on for ₹500."
              },
              {
                question: "Can I upgrade or customize my chosen package?",
                answer: "Absolutely! You can add extra roses, balloon decorations, personalized banners, photo frames, name plates, and other customizations to any package. Share your ideas with our team and we'll provide a custom quote."
              },
              {
                question: "What is the difference between Swing of LOVE and BoHo Chic?",
                answer: "Swing of LOVE (₹5,100) features a dreamy swing seating area with fairy lights and rose petals — perfect for whimsical date nights. BoHo Chic (₹5,700) offers a rustic bohemian aesthetic with macramé accents, warm tones, and natural textures — ideal for Instagram-worthy celebrations."
              },
              {
                question: "Is the Elite Group Setup suitable for couples?",
                answer: "While the Elite Group Setup (₹5,400) is designed for small groups (double dates, engagement parties, friend gatherings), couples can also book it if they prefer the group-style seating arrangement. For couples, we typically recommend our other four packages."
              },
              {
                question: "How long is each candle light dinner session?",
                answer: "Each booking gives you exactly 3 hours of private time at the venue. This includes the full dining experience — from welcome drinks to dessert — plus time for photos, music, and enjoying the ambiance."
              },
              {
                question: "What food options are available with the packages?",
                answer: "Our gourmet menu includes Indian and Continental cuisine options. Each package includes a multi-course meal with starters, main course, and dessert. You can share your dietary preferences or food allergies when booking, and our chefs will accommodate your needs."
              },
              {
                question: "Can I book a package for a weekday vs weekend?",
                answer: "Yes, all packages are available every day of the week. Weekday bookings often have more slot availability. Weekend and holiday slots fill up quickly, so we recommend booking 2-3 days in advance for weekends."
              },
              {
                question: "Is photography included in the packages?",
                answer: "Our setups are designed to be photo-ready and Instagram-worthy. While basic photography coordination is available on request, professional photography can be arranged as an add-on service. Many couples bring their own photographer too."
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

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
