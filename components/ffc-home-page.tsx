'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, MessageCircle, MapPin, Clock, Star, Check, ChevronRight, ChevronLeft,
  Heart, Users, Shield, Award, Calendar, Gift, Sparkles, 
  ArrowRight, Camera, Music, Utensils, Wine, Play, ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig, getVisiblePackages, serviceCategories, suratAreas, formatPrice, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

// Experience features
const experienceFeatures = [
  {
    icon: Clock,
    title: "3-Hour Private Booking",
    description: "Enjoy three exclusive hours at our private venue for your candle light dinner experience"
  },
  {
    icon: Gift,
    title: "Gourmet Multi-Course Meal",
    description: "Delicious curated menu with welcome drinks, starters, mains & desserts included"
  },
  {
    icon: Camera,
    title: "Instagram-Worthy Setup",
    description: "Professional candle arrangements, fairy lights & romantic photo-ready ambiance"
  },
  {
    icon: Music,
    title: "Romantic Ambiance",
    description: "Soft romantic music, candlelight setting & complete privacy for couples"
  }
];

// FAQ items
const faqs = [
  {
    question: "What is HIVY and where is it located in Surat?",
    answer: "HIVY is Surat's premier candle light dinner venue—the perfect spot for romantic private dining, private candlelight experiences, and intimate dinner dates in Surat, Gujarat."
  },
  {
    question: "How do I book a candle light dinner at HIVY?",
    answer: `Simply WhatsApp ${siteConfig.phone} or call directly. Share your preferred date and number of guests (couples only). We'll confirm your candle light dinner booking instantly with a custom quote for your romantic experience.`
  },
  {
    question: "What are the prices for candle light dinner packages in Surat?",
    answer: "Our candle light dinner packages start from affordable rates and include premium private setup, welcome drinks, gourmet meal, decorations, and romantic ambiance. Contact us for current pricing on various candle light dinner packages."
  },
  {
    question: "What is included in a candle light dinner package at HIVY?",
    answer: "Our candle light dinner packages include: 3-hour private booking, romantic candle & fairy light decorations, rose petal setup, multi-course gourmet meal, welcome drinks, soft background music, and exclusive venue access for couples."
  },
  {
    question: "What makes HIVY the best candle light dinner venue in Surat?",
    answer: "HIVY offers stunning private setups and elegant glass houses with 100% privacy. Our venue features premium candle arrangements, fairy lights, rose petals, gourmet dining, and romantic music—all exclusively for couples. We've hosted 3000+ romantic dinners."
  },
  {
    question: "What are the time slots available for candle light dinner booking?",
    answer: "Our candle light dinner time slots are from 6 PM to 11 PM. Weekend slots book fast—we recommend advance booking to secure your preferred date at Surat's best candle light dinner restaurant."
  },
  {
    question: "Can I customize my candle light dinner setup?",
    answer: "Yes! All our candle light dinner packages are fully customizable. Choose from different decoration themes, flower arrangements, personalized messages, special menu requests, and romantic add-ons for your perfect evening."
  },
  {
    question: "Is HIVY a private venue for couples only?",
    answer: "Yes, HIVY is 100% private and exclusively for couples. You'll have complete privacy during your candle light dinner slot—no other guests. It's the most romantic and couple-friendly dining venue in Surat with a 4.9★ rating."
  },
  {
    question: "What areas in Surat does HIVY serve for candle light dinner?",
    answer: "We welcome couples from all Surat areas including Vesu, Adajan, Athwa, Piplod, City Light, Althan, Varachha, Pal, Dumas Road, and more. HIVY is centrally located as the best candle light dinner restaurant serving all of Surat."
  },
  {
    question: "What is the cancellation and rescheduling policy?",
    answer: "Rescheduling must be informed at least one day prior. Your candle light dinner booking can be rescheduled within one month, subject to availability. Please note: No Refund Policy Applicable."
  }
];

// Gallery items data - Optimized for faster loading (reduced to 16 items)
const galleryItems = [
  // Featured Images from packages
  { type: 'image', src: '/hivy-images/5100/2.webp', alt: 'Swing of Love Setup Surat', title: 'Swing of LOVE', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/hivy-images/5700/2.webp', alt: 'BoHo Chic Setup Surat', title: 'BoHo Chic', featured: false },
  { type: 'image', src: '/hivy-images/6300/2.webp', alt: 'Fairy Tale Proposals Surat', title: 'Fairy Tale Proposals', featured: false },
  { type: 'video', src: '/videos/birthday-celebration-video-surat-1.mp4', alt: 'Romantic celebration video Surat', title: 'Celebration Moments', featured: false },
  { type: 'image', src: '/hivy-images/6500/2.webp', alt: 'Tent of Romance Setup Surat', title: 'Tent of Romance', featured: false },
  { type: 'image', src: '/hivy-images/5100/3.webp', alt: 'Swing setup Surat', title: 'Swing Décor', featured: false },
  { type: 'video', src: '/videos/anniversary-celebration-video-surat-1.mp4', alt: 'Anniversary celebration video Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/hivy-images/5700/3.webp', alt: 'Bohemian ambiance cafe Surat', title: 'Boho Ambiance', featured: false },
  { type: 'image', src: '/hivy-images/6300/3.webp', alt: 'Fairy tale setup decoration Surat', title: 'Magical Setup', featured: false },
  { type: 'image', src: '/hivy-images/6500/3.webp', alt: 'Romantic tent decoration Surat', title: 'Romantic Décor', featured: false },
  { type: 'video', src: '/videos/private-celebration-reel-surat-1.mp4', alt: 'Private celebration reel Surat', title: 'Private Vibes', featured: false },
  { type: 'image', src: '/hivy-images/5100/4.webp', alt: 'Romantic swing setup Surat', title: 'Love Swing', featured: false },
  { type: 'image', src: '/hivy-images/5700/4.webp', alt: 'Night romantic setup Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/hivy-images/6300/4.webp', alt: 'Evening romantic celebration Surat', title: 'Evening Magic', featured: false },
  { type: 'video', src: '/videos/birthday-celebration-video-surat-1.mp4', alt: 'Birthday reel Surat', title: 'Birthday Reel', featured: false },
  { type: 'image', src: '/hivy-images/6500/4.webp', alt: 'Proposal setup Surat', title: 'Proposal Setup', featured: false },
];

// Gallery Section Component
function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems.filter(item => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'photos') return item.type === 'image';
    if (activeFilter === 'videos') return item.type === 'video';
    return true;
  });

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className="py-20 bg-gradient-to-br from-stone-100 via-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-stone-200 text-rose-950 border-stone-300">
            <ImageIcon className="h-4 w-4 mr-2" /> Candle Light Dinner Gallery
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Candle Light Dinner Experience at HIVY Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real moments from romantic candle light dinners and intimate date nights at Surat's best couples-only dining venue.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <Button
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('all')}
            className={activeFilter === 'all' 
              ? 'bg-rose-900 hover:bg-rose-800 text-white' 
              : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            All ({galleryItems.length})
          </Button>
          <Button
            variant={activeFilter === 'photos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('photos')}
            className={activeFilter === 'photos' 
              ? 'bg-rose-900 hover:bg-rose-800 text-white' 
              : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Photos ({photoCount})
          </Button>
          <Button
            variant={activeFilter === 'videos' ? 'default' : 'outline'}
            onClick={() => setActiveFilter('videos')}
            className={activeFilter === 'videos' 
              ? 'bg-rose-900 hover:bg-rose-800 text-white' 
              : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
          >
            <Play className="h-4 w-4 mr-2" />
            Videos ({videoCount})
          </Button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-2xl ${
                item.featured && activeFilter === 'all' ? 'col-span-2 row-span-2' : 'aspect-square'
              }`}
            >
              {item.type === 'image' ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.featured ? 600 : 300}
                    height={item.featured ? 600 : 300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`absolute ${item.featured ? 'bottom-4 left-4' : 'bottom-3 left-3'} text-white`}>
                      <p className={`font-${item.featured ? 'semibold' : 'medium'} ${item.featured ? '' : 'text-sm'}`}>{item.title}</p>
                      {item.subtitle && <p className="text-sm text-white/80">{item.subtitle}</p>}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover bg-stone-200"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onClick={(e) => { const v = e.currentTarget; v.paused ? v.play().catch(() => {}) : v.pause(); }}
                    onLoadedData={(e) => { e.currentTarget.currentTime = 0.5; }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-rose-900 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{item.title}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <Link href="/virtual-tour">
            <Button className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-800 hover:to-amber-600 text-white px-8 py-6 text-lg">
              <Camera className="h-5 w-5 mr-2" />
              View Virtual Tour
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Blog Section Component
function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 6); // Show latest 6 posts

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
            Candle Light Dinner Blog
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Candle Light Dinner Ideas & Tips in Surat
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and romantic date ideas to help you plan the perfect candle light dinner experience in Surat
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 group border-amber-200">
                <div className="relative h-48">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-rose-900 text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rose-800 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-800 hover:to-amber-600 text-white px-8 py-6 text-lg">
              View More Articles
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function FFCHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hero slider images
  const heroSlides = [
    { src: '/images/hero/slider2.png', alt: 'Private Celebration Setup with Fairy Lights Surat' },
    { src: '/images/hero/slider1.png', alt: 'Romantic Candlelight Dinner Setup at HIVY - Candle Light Dinner in Surat' },
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // FAQ Schema (FAQPage structured data)
  const homeFaqJsonLd = {
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

  // Speakable schema for voice assistants (Google Assistant, Siri, Alexa)
  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HIVY - Candle Light Dinner in Surat | Best Candlelight Dining Venue",
    "url": "https://candlelightdinnersurat.com",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-description", ".faq-section", ".services-heading"]
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://candlelightdinnersurat.com/#business"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      {/* Speakable Schema for Voice Assistants & AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
      />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-white/20 text-white border-white/30 text-sm px-4 py-1">
                <Sparkles className="h-4 w-4 mr-2" /> Couples Only Experience in Surat
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-serif">
                HIVY - Candle Light Dinner in Surat
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-2xl">
                {siteConfig.tagline}
              </p>
              <p className="text-lg mb-8 text-white/80 max-w-xl">
                Surat's premier private venue for romantic candle light dinners. Experience stunning glass house & private setups with gourmet dining. 100% private, couples-only experience.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/packages">
                  <Button size="lg" className="bg-amber-500 text-neutral-900 hover:bg-amber-400 text-lg px-8 py-6 w-full sm:w-auto font-semibold">
                    <Gift className="h-5 w-5 mr-2" />
                    View Packages
                  </Button>
                </Link>
                <a href={`tel:${siteConfig.phone}`}>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6 w-full sm:w-auto">
                    <Phone className="h-5 w-5 mr-2" />
                    {siteConfig.phone}
                  </Button>
                </a>
              </div>
              
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4 text-sm md:text-base">
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Shield className="h-4 w-4" /> 100% Private
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Star className="h-4 w-4" /> 4.9★ Rated
                </span>
                <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                  <Users className="h-4 w-4" /> 3000+ Couples
                </span>
              </div>
            </div>
            
            {/* Hero Booking Form */}
            <div className="hidden lg:block">
              <FFCBookingForm variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Booking Form */}
      <section className="lg:hidden bg-amber-50 py-8">
        <div className="container mx-auto px-4">
          <FFCBookingForm />
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              Candle Light Dinner Packages
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-serif">
              Candle Light Dinner Packages in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              5 unique private setups for candle light dinners with gourmet dining in Surat
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-6">
            {getVisiblePackages().map((pkg, index) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="h-full hover:shadow-xl transition-all hover:-translate-y-1 border-amber-200 group overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-amber-100 to-neutral-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-rose-900 text-white text-xs">
                      Setup {index + 1}
                    </Badge>
                  </div>
                  <CardContent className="p-2.5 sm:p-3 md:p-4">
                    <h3 className="font-semibold text-xs sm:text-sm md:text-lg mb-1 group-hover:text-rose-800 transition-colors leading-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-sm line-clamp-2 mb-2 hidden md:block">
                      {pkg.shortDescription}
                    </p>
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
          
          <div className="text-center mt-6 md:mt-10">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-800 hover:to-amber-600 text-white">
                View All Packages <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              Candle Light Dinner Options in Surat
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Explore Our Candle Light Dinner Experiences
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From private setups to elegant glass house dining—we create magical candle light dinner experiences for couples at our exclusive venue in Surat.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {serviceCategories.map((service) => (
              <Card key={service.slug} className="h-full border-amber-200 group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{service.emoji}</div>
                  <h3 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3 hidden md:block">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              Why Couples Choose HIVY for Candle Light Dinner
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              The Complete Candle Light Dinner Experience
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every couple deserves a private, romantic candle light dinner. Our packages include everything for an unforgettable evening.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experienceFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-rose-900" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20 bg-gradient-to-br from-neutral-900 to-rose-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
                Candle Light Dinner Menu
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                Gourmet Cuisine for Candle Light Dinners
              </h2>
              <p className="text-gray-300 mb-8">
                Curated café-style delicacies crafted for romantic candle light dinners & special date nights in Surat
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Wine className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Welcome Drink</h4>
                    <p className="text-gray-400 text-sm">A refreshing welcome to begin your romantic experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Utensils className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cheese Fondue</h4>
                    <p className="text-gray-400 text-sm">Rich, velvety cheese fondue with cheese balls, wedges & nachos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Gift className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dessert with Chocolate Bite</h4>
                    <p className="text-gray-400 text-sm">A sweet ending with rich chocolate indulgence</p>
                  </div>
                </div>
              </div>
              
              <Link href="/menu" className="inline-block mt-8">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-neutral-900 font-semibold">
                  View Full Menu <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image 
                  src="/images/Food hivy.webp" 
                  alt="HIVY - Candle Light Dinner Menu - Romantic Dining Experience" 
                  width={600} 
                  height={600} 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <MapPin className="h-4 w-4 mr-2" /> Candle Light Dinner Near You
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Best Candle Light Dinner Restaurant Serving All Areas in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you're looking for a candle light dinner near Vesu, romantic dinner in Adajan, or private dining in Athwa—we serve couples from all areas of Surat
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {suratAreas.map((area) => (
              <Link 
                key={area.slug}
                href={`/${area.slug}`}
                className="px-4 py-2 bg-white rounded-full text-gray-700 hover:bg-rose-900 hover:text-white transition-colors border border-amber-300"
              >
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Slider */}
      <FFCReviewsSlider />

      {/* About Our Candle Light Dinner Experience - SEO Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              About Our Venue
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Why HIVY is Surat's Best Candle Light Dinner Destination
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              HIVY has become Surat's most beloved candle light dinner venue, offering couples an unparalleled romantic dining experience since 2019. Situated in the heart of Adajan, our private venue overlooks the vibrant cityscape of Surat, creating the perfect backdrop for intimate celebrations, proposals, anniversaries, and unforgettable date nights.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">A Complete Candle Light Dinner Experience in Surat</h3>
            <p>
              Every candle light dinner at HIVY is a meticulously crafted experience. From the moment you step onto our private, you are greeted by the warm glow of hundreds of candles, lush rose petal arrangements, twinkling fairy lights, and soft romantic music that sets the mood for an evening you will cherish forever. Our dedicated team ensures that every detail—from the table setting and the flower arrangements to the curated multi-course gourmet menu—is designed to make your evening absolutely magical. We believe that a candle light dinner is more than just a meal; it is an expression of love, a celebration of togetherness, and a memory that lasts a lifetime.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Private & Exclusive — Just for You</h3>
            <p>
              What truly sets HIVY apart from every other candle light dinner restaurant in Surat is our commitment to complete privacy. When you book a candle light dinner at HIVY, the entire venue is reserved exclusively for you and your partner. There are no other guests, no interruptions, and no distractions—just the two of you, surrounded by romance. This level of exclusivity is what has earned us a 4.9-star rating and the trust of over 3,000 couples who have celebrated their most cherished moments with us.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Packages Designed for Every Celebration</h3>
            <p>
              Whether you are celebrating your first anniversary, planning a surprise birthday dinner for your partner, or looking for the perfect proposal venue in Surat, HIVY offers five distinct candle light dinner packages to suit every occasion and budget. Our setups range from the dreamy Swing of LOVE at ₹5,100 to the luxurious Tent of Romance at ₹6,500—each featuring unique décor themes, rose petal arrangements, candle-lit ambiance, gourmet dining, and three hours of private celebration time. Every package includes a welcome drink, multi-course meal, complimentary cake (in select packages), and romantic background music.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Serving All Areas of Surat</h3>
            <p>
              Conveniently located in Adajan near Pratham Circle, HIVY is easily accessible from all major areas of Surat including Vesu, Athwa, Piplod, City Light, Pal, Dumas Road, Ghod Dod Road, Varachha, Althan, Ring Road, VIP Road, and more. Whether you live in Katargam or Udhna, a romantic candle light dinner at HIVY is just a short drive away. We have proudly served couples from every corner of Surat, making us the city's most trusted name in romantic private dining.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Book Your Candle Light Dinner Today</h3>
            <p>
              Ready to create unforgettable memories? Booking your candle light dinner at HIVY is simple and instant. Reach out to us on WhatsApp at {siteConfig.phone}, share your preferred date and celebration type, and our team will take care of the rest. Weekend and holiday slots book quickly, so we recommend reserving your date in advance. Experience why thousands of couples in Surat choose HIVY for their most special moments—because every love story deserves a beautiful setting.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Blog Section */}
      <BlogSection />

      {/* Extended SEO Content Section */}
      <section className="py-16 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-amber-800">
            Why HIVY is Surat's Premier Candlelight Dinner Venue
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="hero-description">
              For couples seeking the most romantic candlelight dinner experience in Surat, HIVY offers an unparalleled dining experience that transcends ordinary restaurants. Since our establishment in 2019, we have dedicated ourselves to creating the most enchanting candlelight dinner atmosphere in Gujarat, where every flickering flame tells a story of love and every detail is perfected to create lasting memories. Our private candlelight dinner venue has become synonymous with romance in Surat, hosting thousands of couples who sought something truly extraordinary for their special occasions. At HIVY, candlelight dinner is not merely a meal—it is an immersive journey into romance, intimacy, and culinary excellence that couples remember for a lifetime.
            </p>
            
            <h3 className="text-2xl font-semibold text-amber-700">The Perfect Candlelight Dinner Ambiance</h3>
            <p className="hero-description">
              What distinguishes HIVY from every other candlelight dinner restaurant in Surat is our meticulous attention to creating the perfect romantic atmosphere. Our venue is transformed into a sanctuary of romance with hundreds of carefully positioned candles that cast a warm, golden glow across elegant table settings. The candlelight dinner table setup at HIVY features premium hurricane lanterns, floating candles in crystal bowls, and strategically placed tea lights that create layers of ambient illumination without overwhelming brightness. Complementing our signature candle arrangements are cascading fairy lights that twinkle like distant stars, creating a magical twilight effect throughout your private dining space. Fresh rose petals are artfully scattered across the floor and table, their delicate fragrance mingling with the subtle scent of our aromatic candles. Soft, curated romantic music plays gently in the background—just loud enough to enhance the mood while allowing for intimate conversation. The result is a candlelight dinner ambiance that photographs beautifully while feeling genuinely romantic, not staged or artificial. Every element, from the premium linen napkins to the crystal glassware catching candlelight, contributes to an atmosphere that couples describe as "stepping into a romantic dream."
            </p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Gourmet Dining Experience</h3>
            <p className="hero-description">
              A truly memorable candlelight dinner experience requires exceptional cuisine, and HIVY delivers a gourmet dining experience that satisfies the most discerning palates. Our candlelight dinner menu is thoughtfully curated to offer a perfect balance of flavors across multiple courses, each dish prepared with premium ingredients and presented with artistic flair. Your romantic evening begins with welcome drinks—choose from our selection of mocktails, fresh juices, or sparkling beverages that set the tone for the feast ahead. The starter course features creative appetizers that awaken your taste buds, from crispy vegetable delicacies to fusion bites that blend Indian flavors with international techniques. Our main course offerings range from rich, aromatic Indian curries to continental pasta dishes, grilled specialties, and Asian-inspired entrées—all accompanied by freshly baked breads, fragrant rice preparations, and chef-selected accompaniments. The culinary journey concludes with indulgent desserts that provide the perfect sweet ending to your candlelight dinner date. What makes dining at HIVY unique is our commitment to customization—couples with dietary preferences, allergies, or special requests receive thoughtfully modified menus that never compromise on taste or presentation. Our kitchen team takes pride in preparing each meal fresh for your specific booking, ensuring that your gourmet dinner experience is hot, flavorful, and perfectly timed to your evening's pace.
            </p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Private Candlelight Dinner Packages</h3>
            <p className="hero-description">
              Understanding that every couple's vision of romance differs, HIVY offers diverse private candlelight dinner packages designed to match various preferences and budgets. Our "Swing of LOVE" package features an enchanting swing setup adorned with flowers and fairy lights, creating a whimsical backdrop for couples who appreciate playful romance alongside their candlelight dinner. The "BoHo Chic" package appeals to couples drawn to bohemian aesthetics, featuring macramé accents, earthy textures, and dreamer-style décor that creates an Instagram-worthy candlelight dinner setting. For those planning proposals or milestone celebrations, our "Fairy Tale Proposals" package transforms the venue into a storybook scene complete with elaborate floral arrangements, enhanced lighting effects, and special touches that make the moment truly unforgettable. The "Tent of Romance" package offers our most intimate candlelight dinner setup—a beautifully decorated private cabana that cocoons couples in warmth and privacy, ideal for those who desire the most exclusive dining experience. Each package includes three hours of private venue access, complete candlelight table setup, rose petal decorations, romantic background music, and our signature multi-course gourmet meal. Additional customizations available include premium flower upgrades, personalized messages on cakes, photographer arrangements, and special request decorations. Whether you are celebrating a first date, monthly anniversary, engagement, or simply expressing love without occasion, our candlelight dinner packages provide the perfect framework for your romantic vision.
            </p>
            
            <h3 className="text-2xl font-semibold text-amber-700">Romantic Evenings to Remember</h3>
            <p className="hero-description">
              At HIVY, we understand that a candlelight dinner is about creating memories that couples carry in their hearts forever. Every romantic evening at our venue is orchestrated to provide moments worth remembering—the way candlelight dances in your partner's eyes, the first bite of a perfectly prepared dish shared together, the private laughter and whispered promises that intimate dining allows. Our couples candlelight dinner experience removes all distractions of everyday life, providing three uninterrupted hours where the world shrinks to just two people and the magic surrounding them. Many couples choose HIVY for milestone moments—marriage proposals where diamond rings catch candlelight, anniversary celebrations that remind partners why they fell in love, birthday celebrations that make the guest of honor feel truly special, and "just because" dates that strengthen relationship bonds. The privacy of our venue encourages genuine connection; without other diners or loud restaurant noise, couples can truly focus on each other. Our staff is trained to be present when needed but invisible otherwise, appearing to refresh courses or drinks, then retreating to preserve your intimate atmosphere. After your candlelight dinner, couples leave with full hearts, beautiful photographs captured during their evening, and a shared experience that becomes part of their love story. This is why couples return to HIVY for consecutive anniversaries, recommend us to newly engaged friends, and share their HIVY candlelight dinner memories on social media. We do not simply serve candlelight dinners in Surat—we create the romantic dinner atmosphere that couples dream about, delivering experiences that inspire, connect, and celebrate love in its most beautiful forms.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              FAQ - Candle Light Dinner
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Common Questions About Candle Light Dinner in Surat
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about booking your candle light dinner experience at HIVY
            </p>
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
      <section className="py-20 bg-gradient-to-r from-rose-900 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Book Your Candle Light Dinner Experience Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Create unforgettable romantic memories at Surat's best private candle light dinner venue. Perfect for date nights, special occasions & romantic surprises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
