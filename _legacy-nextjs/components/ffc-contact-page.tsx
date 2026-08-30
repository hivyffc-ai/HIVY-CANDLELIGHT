'use client';

import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Star, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCBookingForm, FFCWhatsAppFloat } from '@/components/ffc-booking-form';
import FFCReviewsSlider from '@/components/ffc-reviews-slider';
import { siteConfig } from '@/lib/ffc-config';

export default function FFCContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-950 via-neutral-900 to-amber-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <MessageCircle className="h-4 w-4 mr-2" /> Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you! Book your candlelight dinner or ask us anything.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Let's Connect
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-rose-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                        <p className="text-gray-600 mb-2">We're available for calls and booking inquiries</p>
                        <a 
                          href={`tel:${siteConfig.phone}`}
                          className="text-xl font-bold text-rose-900 hover:text-rose-950"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                        <p className="text-gray-600 mb-2">Quick responses via WhatsApp</p>
                        <a 
                          href={`https://wa.me/${siteConfig.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                        >
                          <MessageCircle className="h-5 w-5" />
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-rose-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-gray-600 mb-2">For detailed inquiries and partnerships</p>
                        <a 
                          href={`mailto:${siteConfig.email}`}
                          className="text-rose-900 hover:text-rose-950"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-rose-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                        <p className="text-gray-600">
                          {siteConfig.address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Operating Hours */}
                <Card className="border-stone-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-rose-900" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Available Time Slots</h3>
                        <div className="text-gray-600 space-y-2 text-sm">
                          <div>
                            <p className="font-semibold text-rose-950 mb-1">🍽️ Lunch (Indoor)</p>
                            <p>12 PM - 3 PM | 1 PM - 4 PM | 2 PM - 5 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-950 mb-1">🌅 Evening (Indoor)</p>
                            <p>4 PM - 7 PM | 5 PM - 8 PM | 6 PM - 9 PM</p>
                          </div>
                          <div>
                            <p className="font-semibold text-rose-950 mb-1">🌙 Dinner (Indoor/Private)</p>
                            <p>7 PM - 10 PM | 7:30 PM - 10:30 PM | 8 PM - 11 PM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <div className="flex gap-4">
                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-stone-1000 to-pink-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">
                Book Your Candlelight Dinner
              </h2>
              <FFCBookingForm pageTitle="Contact Page" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info SEO Section */}
      <section className="py-16 bg-amber-50/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Reserve Your Candlelight Experience</h2>
          <div className="prose prose-lg prose-amber max-w-none text-gray-700">
            <h3 className="text-xl font-bold text-amber-900 mt-6">Booking Your Romantic Candlelight Dinner</h3>
            <p>
              A candlelight dinner at HIVY is more than just a meal — it is an experience designed to create intimacy, romance, and unforgettable memories. Booking this experience begins with a simple conversation with our team. Whether you are planning a surprise date for your partner, celebrating a special occasion, or simply wanting to spend quality time together in a magical setting, we are here to bring your romantic vision to life. Our candlelight dinner packages include everything from the elegant table setup with real candles and rose petals to a multi-course gourmet meal served in complete privacy.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Preferred Contact Methods for Reservations</h3>
            <p>
              We recommend WhatsApp as the fastest way to reserve your candlelight dinner. Send us a message with your preferred date and time, and our reservation team will respond within minutes with availability and package options. If you prefer speaking directly, call our booking number and a coordinator will walk you through the entire reservation process, answer your questions about menu options, and help you select the perfect package for your romantic evening. For detailed inquiries or corporate bookings, email communication is also available.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Best Times to Book Candlelight Dinners</h3>
            <p>
              Candlelight dinners are most magical during the evening and dinner hours when the natural light fades and the warm glow of candles fills your private space. Our most popular slots are the evening sessions from 6 PM to 9 PM and dinner sessions from 7 PM to 10 PM. These timings allow couples to arrive as twilight sets in and experience the full transformation of the venue into a romantic haven. For advance planning, we recommend booking at least three to five days ahead for weekday slots and seven to ten days for weekends. Special occasions like Valentine's Day, anniversaries, and proposal nights should be booked at least two weeks in advance.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">What to Discuss During Your Inquiry</h3>
            <p>
              When you reach out to book your candlelight dinner, sharing certain details helps us create the perfect evening for you. Let us know the occasion you are celebrating, whether it is an anniversary, birthday, proposal, or simply a romantic date night. Share your preferred date and time slot, the theme or ambiance you envision, and any specific requests you might have. If you are planning a surprise, tell us how you want the reveal to unfold. Our team takes every detail into account to ensure your evening is exactly as you imagined or even better.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Menu and Dietary Preference Communication</h3>
            <p>
              Your candlelight dinner includes a carefully curated multi-course meal designed for romance. When booking, let us know about any dietary preferences or restrictions, including vegetarian requirements, allergies, or specific cuisine preferences. We can customize your menu to include dishes you both love and exclude anything you prefer to avoid. Couples often request specific dishes or ask for recommendations, and our culinary team is happy to accommodate special requests when communicated during the booking process. The goal is to ensure every bite of your dinner is as delightful as the ambiance surrounding you.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Romantic Timing Slot Recommendations</h3>
            <p>
              For the most romantic candlelight experience, we recommend the 7 PM to 10 PM dinner slot. This timing allows you to arrive as the evening darkens, witness the hundreds of candles being lit, and enjoy your dinner in the warm, intimate glow that only real candlelight provides. The 8 PM to 11 PM slot is perfect for those who prefer a later dinner or want to extend their romantic evening into the night. For special occasions like proposals, we can coordinate the exact moment when you want to pop the question so that everything is perfectly timed.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Our Location in Surat — Dumas Road Area</h3>
            <p>
              HIVY is situated in the heart of Surat's most scenic area, near VR Mall on Dumas Road in Adajan. This location offers easy accessibility from all major neighborhoods including Vesu, City Light, Althan, Pal, Athwa, and beyond. The drive from most areas of Surat takes between 15 to 30 minutes. Our venue provides ample free parking for both cars and two-wheelers, so you can arrive relaxed and ready to enjoy your romantic evening. The exact address and Google Maps location are shared after you confirm your booking.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Confirmation and Preparation Process</h3>
            <p>
              Once you finalize your candlelight dinner booking with a small advance payment, our team begins preparing for your special evening. You will receive a confirmation message with all the details including your date, time slot, package name, and any special requests noted. On the day of your dinner, your private setup begins hours before your arrival. Our decoration team arranges every candle, every rose petal, every fairy light to create the perfect romantic atmosphere. By the time you walk in, your private dining space is transformed into a magical candlelit haven waiting just for you.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Helping You Plan the Perfect Evening</h3>
            <p>
              Our commitment goes beyond just providing a venue — we actively help you plan every aspect of your romantic evening. If you are unsure which package to choose, our team offers honest recommendations based on your occasion and budget. If you want to include special elements like musicians, photographers, custom decorations, or surprise reveals, we coordinate everything. We have helped hundreds of couples create their perfect romantic evenings, and our experience means we can anticipate what makes these moments truly special.
            </p>

            <h3 className="text-xl font-bold text-amber-900 mt-8">Customer Testimonial Highlights</h3>
            <p>
              Couples who have experienced candlelight dinners at HIVY consistently share their appreciation for our attention to detail and romantic ambiance. Many describe the experience as exceeding their expectations, with the real candlelight, the beautiful decorations, and the complete privacy creating an atmosphere they could not have imagined. Partners who planned surprises tell us how our coordination made their special moments flawless. These testimonials inspire us to maintain the highest standards and continue creating romantic experiences that become cherished memories for every couple who walks through our doors.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold font-serif">Find Us</h2>
            <p className="text-gray-600 mt-2">Visit HIVY - Candle Light Dinner in Surat</p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0665549872024!2d72.78282829999999!3d21.1895149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d4fc7b5dbb9%3A0xb1aa92785a2443b8!2sHIVY%20-%20Place%20For%20Celebration!5e0!3m2!1sen!2sin!4v1769339702912!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="HIVY - Candle Light Dinner in Surat Location"
              />
            </div>
            <div className="text-center mt-6">
              <a 
                href="https://maps.app.goo.gl/HIVY-Place-For-Celebration"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rose-900 hover:bg-rose-950">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
              <HelpCircle className="h-4 w-4 mr-2" /> Questions & Answers
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Frequently Asked Questions - Booking & Contact
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How can I book a candle light dinner at HIVY?",
                answer: "You can book by calling or WhatsApping us at " + siteConfig.phone + ", filling out the booking form on this page, or sending us an email. Our team will confirm your date, time slot, and package within minutes."
              },
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking 2-3 days in advance, especially for weekends and holidays. However, same-day bookings may be available depending on slot availability — contact us to check."
              },
              {
                question: "What are the available time slots for candle light dinner?",
                answer: "We offer multiple time slots: Lunch (12-3 PM, 1-4 PM, 2-5 PM), Evening (4-7 PM, 5-8 PM, 6-9 PM), and Dinner (7-10 PM, 7:30-10:30 PM, 8-11 PM). Each slot gives you 3 hours of private celebration time."
              },
              {
                question: "Is an advance payment required to confirm the booking?",
                answer: "Yes, a small advance payment is required to lock in your reservation. The remaining amount can be paid at the venue on the day of your celebration. We accept all major payment methods including UPI, cards, and cash."
              },
              {
                question: "Can I reschedule or cancel my booking?",
                answer: "You can reschedule your booking by informing us at least 24 hours in advance. Rescheduled dates must be within one month, subject to availability. Please note our No Refund policy — but you can always reschedule."
              },
              {
                question: "Is parking available at the venue?",
                answer: "Yes, free parking is available at our Adajan venue for both two-wheelers and four-wheelers. Our location is easily accessible with ample parking space."
              },
              {
                question: "Can I add extra decorations or customize my setup?",
                answer: "Absolutely! We offer customization options including extra roses, balloon decorations, personalized banners, name plates, photo frames, and more. Share your vision with our team and we'll make it happen."
              },
              {
                question: "Do you offer birthday surprise or proposal setups?",
                answer: "Yes! We specialize in surprise birthday dinners, romantic proposals, anniversary surprises, and all kinds of surprise celebrations. Our team coordinates every detail discreetly to ensure the surprise is perfect."
              },
              {
                question: "What is the best way to reach HIVY from different areas of Surat?",
                answer: "HIVY is located in Adajan near Pratham Circle. You can easily reach us by car, auto, or cab from any area in Surat. Use Google Maps and search 'HIVY - Place For Celebration' for precise directions."
              },
              {
                question: "How quickly does HIVY respond to booking inquiries?",
                answer: "Our team typically responds within 5-10 minutes on WhatsApp during operating hours (10 AM to 11 PM). For urgent bookings, calling us directly is the fastest option."
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

      {/* Why Contact HIVY - SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Everything You Need to Know Before Booking
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Booking a candle light dinner at HIVY is a simple and stress-free process. Whether you are planning a last-minute date night, a surprise birthday celebration for your partner, or a carefully planned marriage proposal, our team is here to guide you through every step. You can reach us via phone call, WhatsApp, or by filling out the booking form above — whichever is most convenient for you.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">How the Booking Process Works</h3>
            <p>
              Once you contact us, our team will help you choose the perfect package based on your celebration type, preferred date and time slot, and budget. We offer five unique candle light dinner setups, each with a different theme and price range starting from ₹4,700 all the way to ₹6,500. After confirming your package, you simply need to select your preferred time slot — we offer lunch, evening, and dinner slots ranging from 12 PM to 11 PM — and make a small advance payment to lock in your reservation. That's it! Our team takes care of everything else, including the full setup, decoration, candle arrangements, music, food preparation, and cleanup.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">What to Expect When You Arrive</h3>
            <p>
              On the day of your celebration, come to our venue in Adajan, Surat, at your scheduled time. You will be greeted by our staff and escorted to your private setup — beautifully decorated with candles, rose petals, fairy lights, and your chosen theme. A welcome drink will be served, followed by your multi-course meal. The entire venue is reserved exclusively for you, ensuring complete privacy throughout your 3-hour celebration window. We also coordinate photography services on request, so you can capture every magical moment.
            </p>
            <h3 className="text-xl font-bold text-neutral-900 mt-8">Frequently Asked Booking Questions</h3>
            <p>
              <strong>How far in advance should I book?</strong> We recommend booking at least 2-3 days in advance, especially for weekends and holidays, as slots fill up quickly. However, we do accommodate same-day bookings when slots are available — just call or WhatsApp us to check availability.
            </p>
            <p>
              <strong>Can I customize the setup?</strong> Absolutely! We offer add-on options including extra roses, balloon decorations, personalized banners, photo frames, and more. Share your vision with our team, and we will make it happen.
            </p>
            <p>
              <strong>Is parking available?</strong> Yes, free parking is available at our venue for both two-wheelers and four-wheelers.
            </p>
            <p>
              <strong>What is your cancellation policy?</strong> We offer flexible rescheduling. If your plans change, simply notify us at least 24 hours before your booking, and we will happily reschedule to another date at no extra charge.
            </p>
            <p>
              For any other questions or special requests, don't hesitate to reach out. Our team is available to assist you and ensure your celebration at HIVY is absolutely perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <FFCReviewsSlider />

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}
