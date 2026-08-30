'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ImageIcon, Video } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Gallery item type
export interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  featured?: boolean;
}

// SEO-friendly gallery items with keyword-rich names — mapped to real images & videos
export const galleryItems: GalleryItem[] = [
  // Featured Images
  { type: 'image', src: '/images/gallery/private-romantic-setup-surat-1.jpg', alt: 'Romantic private candle light dinner setup in Surat', title: 'Romantic Private', subtitle: 'Premium Package', featured: true },
  { type: 'image', src: '/images/gallery/romantic-private-candlelight-dinner-surat-1.jpg', alt: 'Candle light dinner at HIVY Surat', title: 'Candlelight Dinner', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-setup-surat-1.jpg', alt: 'Romantic dinner setup at HIVY Surat', title: 'Evening Romance', featured: false },
  { type: 'video', src: '/videos/birthday-celebration-video-surat-1.mp4', alt: 'Birthday celebration video at HIVY Surat', title: 'Birthday Celebration', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-decoration-surat-1.jpg', alt: 'Birthday surprise decoration at HIVY Surat', title: 'Birthday Surprise', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-celebration-surat-1.jpg', alt: 'Anniversary celebration at HIVY Surat', title: 'Anniversary Special', featured: false },
  { type: 'video', src: '/videos/anniversary-celebration-video-surat-1.mp4', alt: 'Anniversary celebration video at HIVY Surat', title: 'Anniversary Video', featured: false },
  { type: 'image', src: '/images/gallery/romantic-table-decoration-surat-1.jpg', alt: 'Romantic table decoration at HIVY Surat', title: 'Table Decor', featured: false },
  { type: 'image', src: '/images/gallery/birthday-balloon-decoration-surat-1.jpg', alt: 'Birthday balloon decoration at HIVY Surat', title: 'Balloon Decoration', featured: false },
  { type: 'image', src: '/images/gallery/anniversary-dinner-setup-surat-1.jpg', alt: 'Anniversary dinner setup at HIVY Surat', title: 'Anniversary Dinner', featured: false },
  { type: 'video', src: '/videos/private-celebration-reel-surat-1.mp4', alt: 'Private celebration reel at HIVY Surat', title: 'Private Vibes', featured: false },
  { type: 'image', src: '/images/gallery/romantic-ambiance-cafe-surat-1.jpg', alt: 'Romantic ambiance at HIVY cafe Surat', title: 'Romantic Ambiance', featured: false },
  { type: 'image', src: '/images/gallery/couple-celebration-surat-1.jpg', alt: 'Couple celebration at HIVY Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/evening-romantic-celebration-surat-1.jpg', alt: 'Evening romantic celebration at HIVY Surat', title: 'Evening Magic', featured: false },
  { type: 'image', src: '/images/gallery/glass-house-dinner-surat-1.jpg', alt: 'Glass house candle light dinner at HIVY Surat', title: 'Glass House', featured: false },
  { type: 'image', src: '/images/gallery/night-romantic-setup-surat-1.jpg', alt: 'Night romantic setup at HIVY Surat', title: 'Night Setup', featured: false },
  { type: 'image', src: '/images/gallery/proposal-setup-surat-1.jpg', alt: 'Proposal setup at HIVY Surat', title: 'Proposal Setup', featured: false },
  { type: 'image', src: '/images/gallery/day-celebration-surat-1.jpg', alt: 'Day celebration at HIVY Surat', title: 'Day Celebration', featured: false },
  { type: 'image', src: '/images/gallery/surprise-party-surat-1.jpg', alt: 'Surprise party at HIVY Surat', title: 'Surprise Party', featured: false },
  { type: 'image', src: '/images/gallery/romantic-dinner-date-surat-1.jpg', alt: 'Romantic dinner date at HIVY Surat', title: 'Dinner Date', featured: false },
  { type: 'image', src: '/images/gallery/valentines-day-celebration-surat-1.jpg', alt: 'Valentines day celebration at HIVY Surat', title: 'Valentine Setup', featured: false },
  { type: 'image', src: '/images/gallery/valentines-dinner-surat-1.jpg', alt: 'Valentines dinner at HIVY Surat', title: 'Valentine Dinner', featured: false },
  { type: 'image', src: '/images/gallery/valentines-romantic-setup-surat-1.jpg', alt: 'Valentines romantic setup at HIVY Surat', title: 'Valentine Romance', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-girlfriend-surat-1.jpg', alt: 'Birthday surprise for girlfriend at HIVY Surat', title: 'Girlfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/birthday-surprise-for-boyfriend-surat-1.jpg', alt: 'Birthday surprise for boyfriend at HIVY Surat', title: 'Boyfriend Surprise', featured: false },
  { type: 'image', src: '/images/gallery/birthday-room-decoration-surat-1.jpg', alt: 'Birthday room decoration at HIVY Surat', title: 'Room Decoration', featured: false },
  { type: 'image', src: '/images/gallery/couple-birthday-party-surat-1.jpg', alt: 'Couple birthday party at HIVY Surat', title: 'Birthday Party', featured: false },
  { type: 'image', src: '/images/gallery/surprise-date-surat-1.jpg', alt: 'Surprise date at HIVY Surat', title: 'Surprise Date', featured: false },
  { type: 'image', src: '/images/gallery/couple-moment-surat-1.jpg', alt: 'Couple moment at HIVY Surat', title: 'Couple Moment', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-photoshoot-surat-1.jpg', alt: 'Pre-wedding photoshoot at HIVY Surat', title: 'Pre-Wedding Photo', featured: false },
  { type: 'image', src: '/images/gallery/pre-wedding-shoot-surat-1.jpg', alt: 'Pre-wedding shoot at HIVY Surat', title: 'Photo Shoot', featured: false },
  { type: 'image', src: '/images/gallery/baby-shower-decoration-surat-1.jpg', alt: 'Baby shower decoration at HIVY Surat', title: 'Baby Shower', featured: false },
  { type: 'image', src: '/images/gallery/baby-moments-celebration-surat-1.jpg', alt: 'Baby moments celebration at HIVY Surat', title: 'Baby Moments', featured: false },
  { type: 'image', src: '/images/gallery/candlelight-dinner-for-couples-surat-1.jpg', alt: 'Candlelight dinner for couples at HIVY Surat', title: 'Couple Dinner', featured: false },
  { type: 'image', src: '/images/gallery/private-dinner-surat-1.jpg', alt: 'Private dinner at HIVY Surat', title: 'Private Dinner', featured: false },
  { type: 'image', src: '/images/gallery/private-dining-surat-1.jpg', alt: 'Private dining at HIVY Surat', title: 'Private Dining', featured: false },
  { type: 'image', src: '/images/gallery/romantic-venue-surat-1.jpg', alt: 'Romantic venue at HIVY Surat', title: 'Romantic Venue', featured: false },
  { type: 'image', src: '/images/gallery/celebration-venue-surat-1.jpg', alt: 'Celebration venue at HIVY Surat', title: 'Celebration Venue', featured: false },
];

interface FFCGalleryProps {
  title?: string;
  subtitle?: string;
  maxItems?: number;
  showFilters?: boolean;
  className?: string;
}

export function FFCGallery({ 
  title = "Candlelight Dinner Gallery", 
  subtitle = "Real candlelight dinners, real romantic memories",
  maxItems = 12,
  showFilters = true,
  className = ""
}: FFCGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'photos' | 'videos'>('all');
  
  const filteredItems = galleryItems
    .filter(item => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'photos') return item.type === 'image';
      if (activeFilter === 'videos') return item.type === 'video';
      return true;
    })
    .slice(0, maxItems);

  const photoCount = galleryItems.filter(item => item.type === 'image').length;
  const videoCount = galleryItems.filter(item => item.type === 'video').length;

  return (
    <section className={`py-12 md:py-16 bg-gradient-to-br from-amber-50 via-white to-amber-50/50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-amber-100 text-rose-900 border-amber-300">
            <ImageIcon className="h-4 w-4 mr-2" /> {title}
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
            {subtitle}
          </h2>
          <p className="text-gray-600">
            Browse our collection of romantic candlelight dinners in Surat
          </p>
        </div>

        {/* Filter Buttons */}
        {showFilters && (
          <div className="flex justify-center gap-3 mb-8">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'} 
              onClick={() => setActiveFilter('all')}
              className={activeFilter === 'all' 
                ? 'bg-rose-900 hover:bg-rose-800 text-white' 
                : 'border-amber-300 text-rose-900 hover:bg-amber-50'}
            >
              All ({photoCount + videoCount})
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
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredItems.map((item, index) => (
            <div 
              key={`${item.src}-${index}`}
              className={`relative group overflow-hidden rounded-xl ${
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
                    className="w-full h-full object-cover"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
                    onClick={(e) => { const v = e.currentTarget; v.paused ? v.play().catch(() => {}) : v.pause(); }}
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="h-4 w-4 md:h-5 md:w-5 text-rose-900 ml-1" fill="currentColor" />
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
      </div>
    </section>
  );
}

// Compact gallery for keyword/area pages
export function FFCGalleryCompact({ 
  title = "Gallery",
  maxItems = 8 
}: { title?: string; maxItems?: number }) {
  return (
    <FFCGallery 
      title={title}
      subtitle="See Our Celebrations"
      maxItems={maxItems}
      showFilters={false}
    />
  );
}

export default FFCGallery;
