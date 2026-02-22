'use client';

import React from 'react';
import { Utensils, Wine, Clock, Gift, Music, Camera, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { menuItems, siteConfig } from '@/lib/ffc-config';

const menuFaqs = [
  { question: "What is included in the candlelight dinner menu?", answer: "Our romantic dinner menu includes welcome mocktails, soup, starters (veg/non-veg), a multi-course main meal, and dessert. Each dish is presented elegantly to enhance the candlelight ambiance." },
  { question: "Can I request a special dish for my candlelight dinner?", answer: "Yes, we accommodate special requests with advance notice. Share your favorites or any romantic food wishes and our chef will try to incorporate them." },
  { question: "What vegetarian options are available for candlelight dinner?", answer: "We offer extensive vegetarian options including gourmet paneer preparations, vegetable curries, fresh salads, and vegetarian starters. Jain food is also available on request." },
  { question: "Is non-veg available for candlelight dinners?", answer: "Yes, non-vegetarian options include chicken starters, butter chicken, and other meat preparations. Let us know your preferences during booking." },
  { question: "What drinks come with candlelight dinner packages?", answer: "Welcome mocktails and soft drinks are included. Non-alcoholic champagne (₹500) can be added for a romantic toast during your candlelight experience." },
  { question: "Can you accommodate dietary restrictions?", answer: "Absolutely. We accommodate vegetarian, vegan, Jain, gluten-free, and allergy-specific requirements. Inform us during booking for proper meal preparation." },
  { question: "What makes the candlelight dinner menu special?", answer: "Our menu is curated for romantic dining with elegant presentation, balanced portions perfect for two, and dishes that complement the intimate candlelight setting." },
  { question: "Is the food served course by course?", answer: "Yes, food is served course by course to ensure a relaxed, romantic dining pace. This allows you to enjoy each dish and conversation without rushing." },
  { question: "Can I customize the entire dinner menu?", answer: "Yes, full menu customization is available. Share your food preferences, favorite cuisines, or any specific dishes you'd love and we'll create a personalized menu." },
  { question: "What dessert options are available?", answer: "Dessert options include chocolate brownie with ice cream, gulab jamun, cake, and seasonal specials. Romantic desserts like chocolate fondue can be arranged with advance notice." }
];

export default function FFCMenuPage() {
  const menuFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": menuFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      {/* FAQ Schema for AI & SEO visibility */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-rose-950 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
            <Utensils className="h-4 w-4 mr-2" /> Dining Experience
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            LUNCH / DINNER MENU
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Curated Gourmet Delicacies Crafted for Romantic Candlelight Dinners & Private Date Nights
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Starters Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍽️ Main Course</h2>
              <p className="text-gray-600">Delicious dishes crafted to complement the romantic ambiance</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.starters.map((item, index) => (
                <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Desserts Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🍫 Desserts</h2>
              <p className="text-gray-600">Sweet endings for your romantic evening</p>
            </div>
            
            <div className="space-y-6">
              {menuItems.desserts.map((item, index) => (
                <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className="text-4xl">{item.emoji}</span>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Add-ons Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-serif mb-2">🎁 What You Will Get</h2>
              <p className="text-gray-600">Cake & Champagne included</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {menuItems.addOns.map((item, index) => (
                <Card key={index} className="border-amber-200 bg-amber-50">
                  <CardContent className="p-6 text-center">
                    <span className="text-5xl mb-4 block">{item.emoji}</span>
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <p className="text-rose-900 font-bold text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-50/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-serif mb-2">✨ The Complete Experience</h2>
            <p className="text-gray-600">What makes your celebration special</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* 3 Hours */}
            <Card className="border-amber-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-rose-900" />
                  </div>
                  <h3 className="text-xl font-bold">3 Mesmerizing Hours</h3>
                </div>
                <p className="text-gray-600">
                  Three magical hours designed to create unforgettable memories, where every moment feels like a brushstroke on the canvas of your love story.
                </p>
              </CardContent>
            </Card>

            {/* Tent Decoration */}
            <Card className="border-amber-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-rose-900" />
                  </div>
                  <h3 className="text-xl font-bold">Romantic Tent Decoration</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Trending Tent Setup for romantic evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Curtains, Flowers & Twinkling Lights
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Unique Props & Lower Seating
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Soft Candle Glow Ambiance
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Dining Experience */}
            <Card className="border-amber-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Utensils className="h-6 w-6 text-rose-900" />
                  </div>
                  <h3 className="text-xl font-bold">Dining Experience</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Mouth-Watering Dishes
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Romantic Background Music
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-rose-900" />
                    Perfect mood setting
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation Policy */}
            <Card className="border-amber-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-rose-900" />
                  </div>
                  <h3 className="text-xl font-bold">Cancellation Policy</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Rescheduling must be informed at least one day prior. Event can be rescheduled within one month, subject to availability.
                </p>
                <p className="text-rose-900 font-semibold">
                  * No Refund Policy Applicable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Your Candlelight Dining Experience
              </h2>
              <p>
                When the soft glow of candlelight flickers across your private celebration space, every dish served becomes part of an unforgettable romantic narrative. At <strong>HIVY – Candlelight Dinner</strong> in Surat, we understand that a truly romantic evening requires more than beautiful décor – it demands a culinary experience that matches the intimacy of the moment, dish after carefully prepared dish.
              </p>
              <p>
                Our candlelight dinner menu has been thoughtfully designed by experienced chefs who specialize in romantic dining. Each element – from the initial welcome mocktail to the final spoonful of dessert – is calibrated to enhance the connection between you and your partner while creating a sensory journey that engages taste, aroma, and visual delight in equal measure.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                The Art of Course-by-Course Service
              </h3>
              <p>
                Unlike rushed restaurant dining, our candlelight dinners unfold at a <strong>deliberately romantic pace</strong>. The first thirty minutes of your three-hour celebration begin with welcome drinks – signature mocktails served in elegantly decorated glasses that catch the flickering candlelight beautifully. This is your moment to settle into the atmosphere, admire the fairy lights and floral arrangements, and reconnect with your partner before any substantial food arrives.
              </p>
              <p>
                When the starters emerge from our kitchen, they arrive warm and impeccably presented. Whether you've chosen <strong>vegetarian appetizers</strong> like crispy paneer bites, loaded cheese fondue, or garden-fresh bruschetta, or <strong>non-vegetarian selections</strong> such as tender chicken tikka or spiced seekh kebabs, each dish is portioned for sharing – encouraging that intimate moment of feeding each other or debating which starter is the favourite.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Main Course Perfection
              </h3>
              <p>
                The heart of any candlelight dinner lies in the main course, and HIVY ensures this centrepiece exceeds expectations. Our multi-course meal features a balanced selection of dishes that reflect both comfort and sophistication. <strong>Vegetarian couples</strong> can savour rich paneer butter masala, aromatic vegetable biryani, creamy dal makhani, and freshly baked naan – dishes that are indulgent without being heavy, allowing you to enjoy the meal without post-dinner drowsiness.
              </p>
              <p>
                For those who prefer <strong>non-vegetarian preparations</strong>, our kitchen excels in butter chicken, mutton rogan josh, and grilled chicken dishes that balance flavour and spice perfectly. Each gravy is prepared using traditional recipes enhanced with our chef's signature touches, ensuring familiar comfort food elevated to celebration quality.
              </p>
              <p>
                We also offer <strong>Jain food options</strong> prepared without onion and garlic for couples with specific dietary observances. Simply mention your requirements during booking, and our team will ensure every dish respects your preferences while delivering full flavour satisfaction.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Sweet Endings: Desserts by Candlelight
              </h3>
              <p>
                The dessert course arrives during the final act of your romantic evening – timed perfectly to coincide with the emotional crescendo of your celebration. Our signature <strong>warm chocolate brownie</strong> served with vanilla ice cream creates that perfect photograph moment: two spoons, one dessert, candlelight dancing in the background. Alternatively, choose traditional <strong>gulab jamun</strong> for a sweet Indian touch, or opt for our fresh fruit platter for a lighter finish.
              </p>
              <p>
                Every candlelight dinner package includes a <strong>complimentary celebration cake</strong> for special occasions. Whether it’s an anniversary, proposal celebration, or simply a date night that deserves a sweet highlight, the cake-cutting moment becomes another cherished memory under the romantic tent décor.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Beverages That Enhance Romance
              </h3>
              <p>
                Careful attention has been given to our <strong>beverage selection</strong>, ensuring drinks complement rather than overpower the food. Welcome mocktails include virgin mojito, rose sharbat spritzer, and mango tango – refreshing options that photograph beautifully in decorated glasses. Throughout the dinner, soft drinks, fresh juice, and bottled water remain available.
              </p>
              <p>
                For those special toasting moments – proposals, anniversaries, or simply celebrating love – <strong>non-alcoholic champagne</strong> can be added for ₹500. The celebratory pop, the bubbling glasses, and the romantic clink create picture-perfect moments that couples treasure forever.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Customization and Dietary Care
              </h3>
              <p>
                Every couple is unique, and so should be their candlelight dinner. Our <strong>fully customizable menu</strong> allows you to request specific dishes, adjust spice levels, accommodate allergies, or even recreate a meaningful dish from your relationship history. Inform us of gluten sensitivities, nut allergies, dairy restrictions, or any other dietary concerns, and our kitchen will prepare every item safely.
              </p>
              <p>
                We encourage couples to speak with our team during booking to discuss menu preferences. Whether you want extra-spicy dishes, a particular regional cuisine emphasis, or special items that hold sentimental value, we adapt our standard menu to create something truly personal.
              </p>

              <div className="mt-10 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center">
                <p className="text-lg font-semibold text-amber-900 mb-2">
                  Ready to plan your romantic dinner menu?
                </p>
                <p className="text-gray-600">
                  Call <a href={`tel:${siteConfig.phone}`} className="text-amber-800 font-bold hover:underline">{siteConfig.phone}</a> to discuss menu customizations for your candlelight celebration.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Candlelight Dinner Menu FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {menuFaqs.map((faq, index) => (
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
      <section className="py-16 bg-gradient-to-r from-rose-900 to-amber-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
            Ready to Book Your Romantic Dining Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Reserve your table and let us create magical moments for you
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Menu Page" className="text-lg px-8 py-6 bg-amber-500 text-neutral-900 hover:bg-amber-400" />
            <a href={`tel:${siteConfig.phone}`}>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-6">
                Call {siteConfig.phone}
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
