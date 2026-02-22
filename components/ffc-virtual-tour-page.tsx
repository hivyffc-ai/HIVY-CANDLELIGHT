'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Camera, Play, Pause, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { getVisiblePackages } from '@/lib/ffc-config';

const virtualTourFaqs = [
  { question: "What can I see in HIVY's virtual tour?", answer: "Our 360-degree virtual tour showcases the romantic candlelight dinner venue. Explore the intimate spaces, elegant decor, and ambiance that makes our candlelight dinners special." },
  { question: "How does the virtual tour work?", answer: "Click to start the tour, then use your mouse or touch to navigate 360 degrees around the venue. Explore every corner to visualize your candlelight dinner experience." },
  { question: "Will the actual candlelight dinner look like the virtual tour?", answer: "Yes, the virtual tour accurately represents our venue. During your visit, personalized romantic decorations, candles, and your chosen package setup make it even more magical." },
  { question: "Can I see the candlelight setup in the tour?", answer: "The tour shows our venue spaces. For specific candlelight package setups with candles, flowers, and romantic decorations, contact us for photos and videos." },
  { question: "How does the venue look during evening candlelight dinners?", answer: "The evening ambiance is enchanting with soft lighting, candles, and fairy lights. The virtual tour gives you a sense of the space that transforms beautifully at night." },
  { question: "Can I schedule an in-person visit after viewing the tour?", answer: "Yes! Contact us to arrange a venue visit. Seeing the space in person helps you fully appreciate the romantic atmosphere for your candlelight dinner." },
  { question: "What should I focus on in the virtual tour?", answer: "Look at the intimate seating arrangements, potential decoration areas, and overall ambiance. Imagine your partner's reaction experiencing this romantic candlelight setting." },
  { question: "Is the venue private during candlelight dinners?", answer: "Yes, you get exclusive private access. The intimate spaces you see in the virtual tour are reserved just for you during your candlelight dinner." },
  { question: "Can I share this virtual tour with my partner?", answer: "Share it to give them a preview, or keep it secret if you're planning a surprise candlelight dinner! The virtual tour helps plan without revealing everything." },
  { question: "How do I book after viewing the virtual tour?", answer: "Contact us on WhatsApp (9727027278) or submit a booking inquiry. Share your preferred date, time slot, and package choice. We'll confirm and guide you through booking." }
];

const virtualTourFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": virtualTourFaqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export default function FFCVirtualTourPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(virtualTourFaqJsonLd) }} />
      <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Camera className="h-4 w-4 mr-2" /> Explore Our Spaces
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Virtual Tour
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Take a sneak peek into our romantic candlelight dinner spaces before you book
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-xs mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold font-serif mb-4">Watch Our Space</h2>
              <p className="text-gray-600">Experience the magic of HIVY - Candle Light Dinner in Surat</p>
            </div>
            
            {/* Vertical Video */}
            <div 
              className="aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl relative group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(isPlaying ? false : true)}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/videos/virtual-tour.mp4" type="video/mp4" />
                <source src="/videos/birthday-celebration-video-surat-1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Controls Overlay */}
              <div 
                className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-rose-900" fill="currentColor" />
                  ) : (
                    <Play className="w-10 h-10 text-rose-900 ml-1" fill="currentColor" />
                  )}
                </button>
                
                {!isPlaying && (
                  <p className="text-white text-sm mt-4 font-medium drop-shadow-lg">Tap to play</p>
                )}
              </div>

              {/* Mute Button - Bottom Right */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all z-20"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-white" />
                ) : (
                  <Volume2 className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Setups Gallery</h2>
            <p className="text-gray-600">Explore our 5 unique candlelight dinner spaces</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
            {getVisiblePackages().map((pkg) => (
              <Link key={pkg.id} href={`/packages/${pkg.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
                  <div className="aspect-square bg-gradient-to-br from-stone-200 to-stone-100 relative overflow-hidden">
                    <Image
                      src={pkg.thumbnail}
                      alt={pkg.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white font-semibold">View Details</span>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-rose-900 transition-colors">
                      {pkg.name}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiance Features */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">The Ambiance</h2>
            <p className="text-gray-400">Every detail crafted for romance</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: "🕯️", title: "Candles" },
              { emoji: "💡", title: "Fairy Lights" },
              { emoji: "🌹", title: "Flowers" },
              { emoji: "🎈", title: "Balloons" },
              { emoji: "🎶", title: "Music" },
              { emoji: "✨", title: "Décor" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <span className="text-5xl mb-3 block">{item.emoji}</span>
                <p className="font-medium">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Ready to Experience It In Person?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The real magic is best experienced in person. Book your celebration today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages">
              <Button size="lg" className="bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-800 hover:to-amber-600 text-white">
                View All Packages <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <FFCBookNowButton pageTitle="Virtual Tour" className="text-lg px-8 py-6" />
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-center mb-8 font-serif text-amber-800">Explore Our Candlelight Dinner Venue</h2>
            
            <p className="text-gray-700 leading-relaxed">
              Discovering the perfect candlelight dinner venue in Surat has never been easier. HIVY's immersive 360-degree virtual tour invites you to explore our romantic setting from anywhere in the world. Before committing to a booking, couples can navigate through our elegantly designed spaces, understanding exactly the intimate atmosphere that awaits them during their special candlelight dinner experience.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Benefits of Virtual Tour Before Booking</h3>
            <p className="text-gray-700 leading-relaxed">
              Our virtual tour transforms how couples plan their romantic experiences. Instead of relying solely on photographs, you can actively explore every corner of our candlelight dinner venue. This immersive preview helps you understand spatial layouts, appreciate ambient lighting possibilities, and visualize how your romantic evening will unfold. Partners planning surprise candlelight dinners especially benefit from secretly exploring the venue without their significant other's knowledge.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">What to Explore in the 360-Degree Tour</h3>
            <p className="text-gray-700 leading-relaxed">
              Navigate through our venue to discover intimate seating arrangements designed for couples, beautiful decoration elements that enhance romantic atmospheres, and versatile spaces that transform magically under candlelight. Observe how tables are positioned for privacy, notice the elegant interior design elements, and appreciate the thoughtful details that make HIVY's candlelight dinner experience truly special. Pay attention to lighting fixtures and how they contribute to the soft, romantic glow during evening dinners.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Understanding the Romantic Ambiance</h3>
            <p className="text-gray-700 leading-relaxed">
              The virtual tour captures the essence of HIVY's signature romantic ambiance. Our venue features warm color schemes, elegant furnishings, and architectural details specifically chosen to create intimate dining atmospheres. While the tour shows our venue during regular lighting, imagine the transformation when candles are lit, fairy lights twinkle softly, and romantic music fills the space. The ambiance intensifies dramatically during actual candlelight dinner experiences.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Planning Decorations and Setup</h3>
            <p className="text-gray-700 leading-relaxed">
              Use the virtual tour strategically to plan your candlelight dinner setup. Identify table positions that offer the most privacy, understand where flower arrangements can be placed for maximum visual impact, and visualize candle placement throughout the space. This preparation helps you communicate decoration preferences clearly with our team, ensuring your candlelight dinner setup matches your romantic vision perfectly.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Privacy and Exclusivity Guaranteed</h3>
            <p className="text-gray-700 leading-relaxed">
              What sets HIVY apart from traditional restaurants is the complete privacy you'll experience. The virtual tour showcases spaces reserved exclusively for your candlelight dinner. Unlike crowded restaurants with neighboring tables and background noise, our venue ensures intimate moments remain private. The spaces you explore virtually are entirely yours during your booking, creating a restaurant experience without the typical distractions.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">How Virtual Tour Helps Surprise Planning</h3>
            <p className="text-gray-700 leading-relaxed">
              Planning a surprise candlelight dinner becomes significantly easier with our virtual tour. The planning partner can explore the venue, select preferred arrangements, and coordinate every detail through virtual preview and WhatsApp communication. Your partner remains completely unaware of the romantic experience awaiting them. From decoration placement to seating selection, every surprise element can be arranged secretly using insights from the virtual tour.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Venue Transformation for Candlelight Dinners</h3>
            <p className="text-gray-700 leading-relaxed">
              While the virtual tour shows our elegant base venue, the transformation for candlelight dinners is spectacular. Our team arranges dozens of candles creating a warm, flickering glow throughout the space. Fresh rose petals adorn the pathway, fairy lights add magical sparkle, and soft romantic music completes the atmosphere. The sophisticated venue you see virtually becomes an enchanted setting that takes your breath away upon arrival.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Why Couples Love Online Venue Preview</h3>
            <p className="text-gray-700 leading-relaxed">
              HIVY's virtual tour provides convenience that modern couples appreciate. Busy professionals can explore our candlelight dinner venue during lunch breaks, late evenings, or whenever convenient. Long-distance couples planning special occasions during visits to Surat can explore venues together through video calls. The virtual tour facilitates collaborative decision-making regardless of physical location, making romantic planning accessible and enjoyable.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Scheduling In-Person Visits</h3>
            <p className="text-gray-700 leading-relaxed">
              Many couples prefer supplementing the virtual tour with an in-person visit. Contact us to schedule a venue walkthrough where you can experience the ambiance firsthand, discuss menu preferences, and finalize your candlelight dinner arrangements. In-person visits are particularly helpful for finalizing specific decoration requests and understanding exactly how your chosen package will be presented.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-amber-700">Booking Process After Virtual Exploration</h3>
            <p className="text-gray-700 leading-relaxed">
              Ready to book your candlelight dinner after exploring our virtual tour? The process is straightforward. Reach out via WhatsApp at 9727027278 or submit an inquiry through our booking form. Share your preferred date, time slot, and package selection. Our team will confirm availability, discuss any special requests like anniversary decorations or proposal setups, and guide you through completing your booking. The virtual tour serves as a continuous reference throughout your planning journey, helping perfect every detail of your romantic candlelight dinner experience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our virtual tour</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {virtualTourFaqs.map((faq, index) => (
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
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
    </>
  );
}
