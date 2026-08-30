'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FFCHeader, FFCFooter } from '@/components/ffc-layout';
import { FFCWhatsAppFloat, FFCBookNowButton } from '@/components/ffc-booking-form';
import { siteConfig, getAllBlogPosts, BlogPost } from '@/lib/ffc-config';

const blogFaqs = [
  { question: "What topics does the HIVY candlelight blog cover?", answer: "Our blog covers romantic dinner ideas, candlelight ambiance tips, relationship advice, proposal planning, anniversary date ideas, and real stories from couples who've experienced candlelight dinners at HIVY." },
  { question: "How often is new content published?", answer: "We regularly publish articles on romantic date ideas, candlelight dinner trends, and seasonal relationship content to inspire your next romantic evening." },
  { question: "Can the blog help me plan a romantic candlelight dinner?", answer: "Yes! Articles cover everything from choosing the perfect timing, dress code suggestions, conversation topics, and how to make your candlelight dinner unforgettable." },
  { question: "Are there proposal planning articles?", answer: "Absolutely! We have detailed guides on planning candlelight dinner proposals, including when to pop the question, romantic touches to add, and real proposal success stories." },
  { question: "Does the blog feature couple stories?", answer: "Yes, with guest permission, we share real candlelight dinner experiences. These stories offer inspiration and help you imagine your own romantic evening." },
  { question: "Are articles specific to Surat?", answer: "Many articles focus on romantic experiences in Surat, local celebration culture, and tips specific to planning candlelight dinners in our city." },
  { question: "Can I find anniversary date ideas in the blog?", answer: "Yes! We publish articles on creative anniversary date planning, romantic gestures, and how to make each anniversary more special than the last." },
  { question: "Does the blog have food and menu content?", answer: "We share articles on romantic dining preferences, food pairing suggestions, and menu customization ideas for candlelight dinners." },
  { question: "Are there decoration inspiration articles?", answer: "Yes, we feature articles on romantic ambiance creation, candlelight décor, flower arrangements, and how different setups transform the dining experience." },
  { question: "Can I request specific blog topics?", answer: "We welcome suggestions! Contact us with topics you'd like us to cover, and we may feature them in future articles." }
];

export default function FFCBlogPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  const categories = Array.from(new Set(posts.map(p => p.category)));

  const blogFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blogFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqJsonLd) }} />
      <FFCHeader />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-amber-50 via-white to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-amber-100 text-rose-900 mb-4">
              Candlelight Dinner Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Candlelight Dinner Ideas & Inspiration
            </h1>
            <p className="text-lg text-gray-600">
              Discover tips, guides, and romantic ideas for planning the perfect candlelight dinner in Surat. 
              From intimate date nights to proposal candlelight dinners, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="cursor-pointer hover:bg-amber-50 px-4 py-2">
              All Posts
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-amber-50 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Rich SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900">
                Romantic Dinner Insights & Ideas
              </h2>
              <p>
                Romance is an art, and the perfect candlelight dinner is its masterpiece. The HIVY Candlelight blog is your comprehensive resource for creating unforgettable romantic experiences in Surat. Whether you're planning a <strong>candlelight dinner proposal</strong>, looking for <strong>anniversary date night ideas</strong>, or seeking inspiration for a <strong>special romantic evening</strong>, our collection of articles will guide you toward creating magical moments. Every piece is written by our romance specialists — the same team that has orchestrated countless intimate candlelight experiences at Surat's most sought-after private dining venue.
              </p>
              <p>
                What distinguishes our candlelight blog from generic romantic advice websites? <strong>Authentic, lived experience.</strong> Every suggestion you encounter here has been refined through real candlelight dinners at HIVY. When we recommend specific candle placements or suggest the ideal moment for a surprise toast, it's because we've observed how these details elevate genuine romantic evenings. Our content draws from hundreds of successful romantic dates, providing wisdom that theoretical guides simply cannot match.
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                What Awaits You in Our Romantic Articles
              </h3>
              <p>
                The HIVY Candlelight blog explores an extensive range of romantic dinner topics designed specifically for <strong>couples seeking intimate experiences in Surat</strong>. Here's an overview of the content categories you can explore:
              </p>
              <ul className="space-y-2 my-4">
                <li><strong>Candlelight Dinner Planning Guides</strong> — Comprehensive instructions for orchestrating the perfect romantic evening, from choosing the right timing to creating the ideal ambiance that sets hearts aflutter.</li>
                <li><strong>Proposal Planning Resources</strong> — Detailed blueprints for candlelight dinner proposals, including ring selection advice, speech preparation tips, and how to coordinate photographers for capturing the moment.</li>
                <li><strong>Anniversary Date Ideas</strong> — Creative concepts for celebrating relationship milestones, from first anniversaries to silver jubilees, each tailored to rekindle romance and create lasting memories.</li>
                <li><strong>Romantic Ambiance Tips</strong> — Expert guidance on lighting, music selection, table settings, and the subtle details that transform an ordinary dinner into an extraordinary romantic experience.</li>
                <li><strong>Relationship Connection Advice</strong> — Conversation starters, meaningful gestures, and tips for deepening your bond over candlelit meals together.</li>
                <li><strong>Real Couple Stories</strong> — Inspiring narratives of actual romantic dinners at HIVY, showcasing the diverse ways couples have celebrated their love.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Why We Share Romance Expertise
              </h3>
              <p>
                Not every romantic dinner unfolds at HIVY, and we genuinely appreciate that reality. Sometimes you simply need an idea that ignites your imagination — a romantic concept that helps you surprise your partner at home, at a scenic lookout point, or at your favorite restaurant. Our blog fulfills that need generously. We share our candlelight dinner expertise freely because we believe that when romantic experiences throughout Surat become more thoughtful and intentional, love flourishes everywhere.
              </p>
              <p>
                Of course, if you discover an idea that captivates you and realize it would be absolutely breathtaking in one of our intimate candlelit private dining spaces, we're always just a <a href={`tel:${siteConfig.phone}`} className="text-amber-700 font-bold hover:underline">phone call</a> or <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp message</a> away. Many of our most magical candlelight experiences began with a partner reading our blog and thinking, "This is exactly the romantic evening I want to create."
              </p>

              <h3 className="text-2xl font-bold mt-10 mb-4 font-serif text-gray-900">
                Trending Romantic Dinner Ideas in Surat
              </h3>
              <p>
                Based on recent candlelight experiences at HIVY and the romantic queries couples share with us, here are the dinner date trends captivating Surat right now:
              </p>
              <ol className="space-y-2 my-4 list-decimal list-inside">
                <li><strong>Proposal Candlelight Dinners</strong> — Private dining experiences designed specifically for asking the most important question, complete with ring hiding spots and perfect timing for the big moment.</li>
                <li><strong>Blindfold Romantic Reveals</strong> — Partners being led blindfolded to a beautifully decorated candlelit setup, with the awe-inspiring reveal captured on camera.</li>
                <li><strong>Personalized Love Story Décor</strong> — Custom decorations featuring relationship timelines, favorite memories, and meaningful quotes that make each dinner uniquely yours.</li>
                <li><strong>Multi-Course Intimate Dining</strong> — Extended dinner experiences with multiple courses, allowing couples to savor each moment together without rushing.</li>
                <li><strong>Anniversary Celebration Packages</strong> — Comprehensive romantic packages marking relationship milestones with special touches like anniversary cakes and keepsake photographs.</li>
              </ol>
              <p>
                Explore our articles below for thorough guides on embracing these trends and discovering countless more romantic possibilities. Every article is crafted to provide practical, actionable insights you can apply immediately — whether you're planning a candlelight dinner at HIVY or creating romance anywhere else in Surat.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Link href={`/blog/${featuredPost.slug}`}>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 left-4 bg-rose-900">
                    Featured
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="w-fit mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-rose-900 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime} read
                    </span>
                  </div>
                  <Button className="w-fit bg-gradient-to-r from-rose-900 to-amber-700 hover:from-rose-950 hover:to-amber-800">
                    Read Article <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Link>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Candlelight Blog FAQs
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {blogFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-amber-50 rounded-lg border border-amber-200 px-6">
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
      <section className="py-16 bg-gradient-to-r from-rose-900 to-amber-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Candlelight Dinner?
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Turn your romantic moments into unforgettable candlelight dinner memories at HIVY - Candle Light Dinner in Surat, 
            Surat's premier private candlelight dining venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FFCBookNowButton pageTitle="Blog Page" className="text-lg px-8 py-6" />
            <Button 
              size="lg" 
              className="bg-amber-500 text-neutral-900 hover:bg-amber-400"
              asChild
            >
              <Link href="/packages">View Packages</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer">
                Book on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <FFCFooter />
      <FFCWhatsAppFloat />
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300 group">
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <Badge className="absolute top-3 left-3 bg-rose-900">
            {post.category}
          </Badge>
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-rose-900 transition-colors">
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
  );
}
