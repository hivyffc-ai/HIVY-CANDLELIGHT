'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star, Users, Award, Clock, MapPin, Phone, Mail, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCAboutPage() {
  // FAQs for About page
  const faqs = [
    {
      question: "What is HIVY and what does it offer?",
      answer: "HIVY — Candle Light Dinner in Surat is Surat's premier private candlelight dinner venue, offering romantic dining experiences, intimate date nights, anniversary candlelight dinners, proposal dinners, and more. Located in Adajan, we provide fully private, beautifully candlelit setups exclusively for couples."
    },
    {
      question: "Where is HIVY located in Surat?",
      answer: "HIVY is located in Adajan, Surat, near Pratham Circle on Sevasi-Canal Road. We are easily accessible from all major areas of Surat including Vesu, Athwa, Piplod, City Light, Pal, Varachha, and Dumas Road."
    },
    {
      question: "How long has HIVY been operating?",
      answer: "HIVY has been creating magical candlelight dinner experiences for couples in Surat since 2019. In over 5 years, we have hosted 3,000+ romantic candlelight dinners and maintained a 4.9-star Google rating with hundreds of five-star reviews."
    },
    {
      question: "Is HIVY only for couples?",
      answer: "While most of our candlelight dinner packages are designed for couples, we also offer The Elite Group Setup (₹5,400) for small group celebrations like double dates and intimate gatherings. However, every booking is private — only your group is present during your candlelight dinner."
    },
    {
      question: "What types of candlelight dinners can I book at HIVY?",
      answer: "You can book romantic candlelight dinners, surprise candlelight date nights, anniversary candlelight dinners, proposal candlelight dinners, engagement dinners, special occasion dinners, and any other romantic candlelight dining experience."
    },
    {
      question: "How many candlelight dinner packages does HIVY offer?",
      answer: "HIVY offers five unique candlelight dinner packages: Swing of LOVE (₹5,100), BoHo Chic (₹5,700), Fairy Tale Proposals (₹6,300), Tent of Romance (₹6,500), and The Elite Group Setup (₹5,400). Each has a distinct romantic theme and candlelight setup."
    },
    {
      question: "What is HIVY's Google rating?",
      answer: "HIVY has a 4.9-star rating on Google with hundreds of verified reviews from happy couples. Our consistently high rating reflects our commitment to delivering exceptional romantic candlelight dinner experiences every single time."
    },
    {
      question: "Does HIVY provide food or only candlelight decoration?",
      answer: "HIVY provides a complete candlelight dinner experience that includes both premium candlelight decorations AND a multi-course gourmet meal. Every package includes a welcome drink, a multi-course meal (starter, main course, dessert), romantic candlelight ambiance with candles, fairy lights, rose petals, and background music."
    },
    {
      question: "Can I visit HIVY before booking to see the candlelight setups?",
      answer: "Yes! You are welcome to visit our venue and see the candlelight setups before booking. Contact us on WhatsApp to schedule a quick visit. You can also check our virtual tour, Instagram page, and Google reviews for photos and videos of actual candlelight dinners."
    },
    {
      question: "How can I contact HIVY for more information?",
      answer: `You can reach HIVY by calling or WhatsApping ${siteConfig.phone}. You can also email us at ${siteConfig.email} or visit our Contact page to fill out the booking form. Our team typically responds within minutes.`
    }
  ];

  // FAQ Schema for About page
  const aboutFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutFaqJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Heart className="h-4 w-4 mr-2" /> About Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            About HIVY - Candle Light Dinner in Surat
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Surat's Premier Destination for Romantic Candlelight Dinner Experiences
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="About Page" className="text-lg px-8 py-6" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Where Romantic Candlelight Moments Unfold
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  At <strong>HIVY - Candle Light Dinner in Surat</strong>, we understand the chaos of modern life leaves little room for romance. Couples crave intimate candlelight moments to express love, but finding the right venue—a place blending privacy, beauty, and magic—remains elusive.
                </p>
                <p>
                  That's why we transformed a stunning <strong>private venue into Surat's premier destination for candlelight dinners</strong>, complete with fairy lights, floral arches, and personalized decorations. Our romantic private venue offers the perfect escape for couples seeking an intimate candlelight dining experience in Surat.
                </p>
                <p>
                  From heartfelt <strong>romantic date nights</strong> and <strong>anniversary candlelight dinners</strong> to unforgettable <strong>proposal dinners</strong>, engagement reveals, <strong>special occasion dinners</strong>, and intimate celebrations, we've hosted <strong>500+ magical candlelight evenings</strong>.
                </p>
                <p className="font-medium text-rose-900">
                  Our mission: Create the perfect candlelight dinner experience where romance blossoms naturally.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-950 hover:to-amber-800 text-white">
                    Book Your Moment - Call {siteConfig.phone}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/4.webp"
                  alt="HIVY - Candle Light Dinner in Surat - Romantic Swing of Love Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">500+ Candlelight Evenings</p>
                  <p className="text-sm opacity-90">Creating romantic memories since 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Users, number: "500+", label: "Candlelight Dinners" },
              { icon: Star, number: "4.9", label: "Google Rating" },
              { icon: Award, number: "8", label: "Romantic Setups" },
              { icon: Clock, number: "5+", label: "Years of Romance" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="h-7 w-7 md:h-8 md:w-8 text-rose-900" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-rose-900">{stat.number}</p>
                <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team - Right Content, Left Image */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/9.webp"
                  alt="HIVY - Candle Light Dinner Team - Romantic Setup Surat"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">Behind Every Romantic Evening</p>
                  <p className="text-sm opacity-90">Our passionate candlelight dinner team</p>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Crafting Perfect Candlelight Experiences
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Meet the passionate team behind the magic at <strong>HIVY - Candle Light Dinner in Surat</strong>. Committed to crafting unforgettable candlelight dinner experiences, our dedicated staff ensures every detail of your romantic evening is perfect.
                </p>
                <p>
                  From our talented chefs who bring gourmet dining dreams to life, to our attentive servers who anticipate your every need, each member of our team is dedicated to creating moments of romance and intimacy for you and your loved one.
                </p>
                <p>
                  Whether you're planning a <strong>candlelight dinner date</strong>, a <strong>romantic anniversary dinner</strong>, an <strong>intimate proposal dinner</strong>, or a <strong>special couples night out</strong>, our team handles everything from setup to service so you can focus on your partner.
                </p>
                <p className="font-medium text-rose-900">
                  Join us and let us make your candlelight dinner truly extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Left Content, Right Image */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                What Sets Us Apart in Surat
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Prime Private Candlelight Venue</h3>
                    <p className="text-gray-600">Beautiful romantic ambiance, private candlelight setups away from crowds on Sevasi-Canal Road. The best candlelight dinner restaurant in Surat for couples seeking intimacy.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Award className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Premium Candlelight Dinner Packages</h3>
                    <p className="text-gray-600">Starting ₹4700, including welcome drinks, gourmet meals, desserts, and stunning candlelight themed decor for romantic date nights, anniversaries, proposals, and special occasions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Heart className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Instagram-Worthy Candlelight Setups</h3>
                    <p className="text-gray-600">Serving Surat couples with our Instagram-famous romantic candlelight dining setups perfect for capturing your special moments.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Star className="h-5 w-5 text-rose-900" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">5-Star Candlelight Experience</h3>
                    <p className="text-gray-600">From candlelight setup to gourmet service, our team handles everything so you focus on your romantic evening. Couples-only candlelight dining with complete privacy.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl overflow-hidden relative shadow-xl">
                <Image
                  src="/hivy-images/5100/10.webp"
                  alt="Why Choose HIVY - Candle Light Dinner in Surat - Romantic Setup"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-lg font-semibold">5-Star Candlelight Experience</p>
                  <p className="text-sm opacity-90">Trusted by 500+ couples for romantic dinners</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              Our Journey
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The HIVY Story — Surat's Most Trusted Candlelight Dinner Venue
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              HIVY — Candle Light Dinner in Surat was born from a simple yet powerful idea: every couple in Surat deserves a beautiful, private space to enjoy an intimate candlelight dinner without compromise. What started in 2019 as a small private setup with fairy lights and a handful of candles has grown into Surat's most sought-after candlelight dinner destination, trusted by over 3,000 couples for their most romantic evenings.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">From a Dream to Surat's #1 Candlelight Dinner Venue</h3>
            <p>
              Our founders saw a gap in Surat's dining scene — while the city had plenty of restaurants, none offered the level of privacy, personalization, and romantic candlelight ambiance that couples truly craved. We set out to build a venue where every candlelight dinner feels like a fairy tale, where every detail is thoughtfully curated, and where couples can enjoy intimate moments freely. Today, with five unique themed setups, a 4.9-star Google rating, and hundreds of five-star reviews, HIVY has become synonymous with romantic candlelight dining in Surat.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">What We Offer — The Complete Candlelight Dinner Experience</h3>
            <p>
              At HIVY, we specialize in premium candlelight dinners: romantic date nights, surprise candlelight dinners, anniversary candlelight celebrations, marriage proposal dinners, engagement dinners, and intimate couple experiences. Each candlelight dinner is backed by our complete setup-to-service approach, which means you don't need to worry about anything — our team handles the candle arrangements, lighting, music, gourmet food, desserts, and romantic ambiance so you can focus entirely on enjoying your candlelight dinner together.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Our Commitment to Candlelight Excellence</h3>
            <p>
              Quality, privacy, and attention to detail are the three pillars of every candlelight dinner at HIVY. Each of our five packages — Swing of LOVE, BoHo Chic, Fairy Tale Proposals, Tent of Romance, and The Elite Group Setup — is designed with a distinct romantic aesthetic and mood. From bohemian chic to fairy-tale elegance, every candlelight setup features premium candle arrangements, carefully arranged rose petals, custom lighting, and comfortable seating. Our gourmet menu, crafted by experienced chefs, includes a multi-course meal with Indian and Continental options, complemented by welcome drinks and desserts.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Why 3,000+ Couples Trust HIVY for Candlelight Dinners</h3>
            <p>
              The reason thousands of couples continue to choose HIVY for their candlelight dinners is simple — we deliver on our promise every single time. When you book your candlelight dinner with HIVY, you get complete privacy (the venue is exclusively yours), a meticulously prepared candlelight setup that matches your expectations, punctual and professional service, and an evening that feels genuinely romantic. Our 4.9-star Google rating isn't just a number — it reflects the love, effort, and passion our team puts into every candlelight dinner. We invite you to read our reviews and see for yourself why couples across Surat, Gujarat, and beyond choose HIVY for their romantic candlelight dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Candlelight Philosophy Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">Our Philosophy: The Magic of Candlelight</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>There's a reason candlelight has been synonymous with romance for centuries. The soft, flickering glow creates an atmosphere that no artificial light can replicate – intimate, warm, and deeply romantic. At HIVY, we've built our entire experience around this timeless element, creating Surat's premier candlelight dining destination where couples reconnect, celebrate, and fall in love all over again.</p>
            
            <h3 className="text-2xl font-semibold text-amber-700">The Science of Romance</h3>
            <p>Candlelight isn't just aesthetically pleasing – it actually creates a physiological response that promotes relaxation and connection. The warm tones of flickering flames soften features, create intimate shadows, and naturally encourage couples to lean closer and speak more softly. At HIVY, we've perfected the art of candlelight placement, using strategic positioning to maximize both ambiance and comfort while ensuring safety throughout your dining experience.</p>
            <p>Research shows that warm, dim lighting triggers the release of oxytocin – the bonding hormone – making candlelit environments ideal for deepening emotional connections. We've applied this understanding to every aspect of our venue design, ensuring that the scientific benefits of candlelight enhance the romantic atmosphere. The result is an environment where conversation flows naturally, inhibitions fade, and couples rediscover the magic of focused attention on each other.</p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Beyond the Flame</h3>
            <p>While candlelight sets the foundation, our romantic dining experience extends far beyond. Every element at HIVY is chosen to enhance the romantic atmosphere – from the carefully curated playlist of soft melodies to the precise arrangement of our table settings. Fresh roses, premium linens, and thoughtful décor details work in harmony to create a cocoon of romance that transports couples away from daily stress and into a world designed purely for connection.</p>
            <p>The sensory experience at HIVY engages every sense. Subtle fragrances of fresh flowers complement the visual beauty; the gentle crackle of candles provides an ambient soundtrack; the texture of quality linens against your skin reinforces the luxurious atmosphere. This multi-sensory approach ensures that your candlelight dinner isn't just seen – it's experienced in a way that creates lasting memories.</p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Culinary Excellence by Candlelight</h3>
            <p>A truly memorable candlelight dinner requires exceptional food presented beautifully. Our culinary team understands that dining by candlelight is both a visual and culinary experience. Each dish is crafted not only for taste but for presentation, ensuring that your meal looks as romantic as the setting surrounding it. From appetizers to desserts, every course is designed to complement and enhance your candlelight dining experience.</p>
            <p>The interplay between light and food is a crucial consideration in our kitchen. Colors appear differently by candlelight, and we select ingredients and plating techniques that maximize visual appeal under warm lighting. The result is food that photographs beautifully for your memories while delivering exceptional flavors that make your dinner as satisfying to the palate as it is to the eye.</p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Your Private Candlelit Sanctuary</h3>
            <p>Unlike crowded restaurants where candlelit tables sit mere feet from other diners, HIVY offers complete privacy. Your candlelight dinner unfolds in a space entirely yours, where whispered conversations remain private and romantic gestures go unobserved. This privacy transforms an ordinary dinner into an intimate experience, allowing couples to be fully present with each other without the self-consciousness that comes from public dining.</p>
            <p>Privacy in our candlelit spaces means freedom – freedom to express emotions openly, to share vulnerable moments, and to celebrate your relationship authentically. Whether you're having a difficult conversation, sharing exciting news, or simply enjoying each other's company in comfortable silence, the private nature of HIVY's candlelight experience provides the perfect backdrop. This privacy has made HIVY the preferred venue for proposals, reconciliations, and every intimate milestone in between.</p>
          </div>
        </div>
      </section>

      {/* Google Reviews Slider Section */}
      <FFCReviewsSlider />

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              FAQs About HIVY - Candle Light Dinner in Surat
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-900 to-rose-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Create Your Memory?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Book your candlelight dinner package today and surprise your partner with memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-950 hover:to-amber-800 text-white w-full sm:w-auto">
                <Phone className="h-5 w-5 mr-2" />
                Call {siteConfig.phone}
              </Button>
            </a>
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">
              Visit Us
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-sm">{siteConfig.address}</p>
                </CardContent>
              </Card>
              
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <Phone className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-rose-900 hover:text-rose-950 font-medium">
                    {siteConfig.phone}
                  </a>
                </CardContent>
              </Card>
              
              <Card className="border-amber-300">
                <CardContent className="p-6 text-center">
                  <Mail className="h-8 w-8 text-rose-900 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-rose-900 hover:text-rose-950">
                    {siteConfig.email}
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
