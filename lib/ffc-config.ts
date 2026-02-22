// HIVY - Place for Celebrations - Surat Configuration
// Main configuration file for the HIVY website

export interface SetupPackage {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  cakeIncluded: boolean; // true for Setup 1-3, false for Setup 4-8 (extra cost)
  features: string[];
  perfectFor: string[];
  thumbnail: string;
  images: string[];
  hidden?: boolean; // If true, package won't show on website but data is preserved
}

export interface ServiceCategory {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: ServiceKeyword[];
}

export interface ServiceKeyword {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
}

export interface AreaConfig {
  slug: string;
  name: string;
}

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: "HIVY - Candle Light Dinner in Surat",
  tagline: "Premium Romantic Candle Light Dinner Experience",
  description: "Surat's finest candle light dinner venue. Private & glass house setups with gourmet dining. Book your romantic candle light dinner experience at HIVY.",
  phone: "+91 9727027278",
  whatsapp: "919727027278",
  email: "hello@hivy.co.in",
  address: "252/253, 2nd Floor, The Boulevard, Near Pratham Circle, Galleria Street, Green City Road, Adajan, Pal Gam, Surat, Gujarat 394510",
  city: "Surat",
  website: "https://candlelightdinnersurat.com",
  colors: {
    primary: "#7F1D1D", // Deep Wine Red
    secondary: "#D4A574", // Warm Gold
    accent: "#F59E0B", // Candle Light Amber
    gradient: "from-rose-900 to-amber-800",
    gradientHover: "from-rose-950 to-amber-900",
    lightBg: "bg-amber-50",
    darkBg: "bg-neutral-900",
    text: "text-neutral-800"
  },
  socialLinks: {
    instagram: "https://www.instagram.com/hivy_placeforcelebration/?hl=en",
    facebook: "https://www.facebook.com/p/Hivy-placeforcelebration-61553052747625/",
    youtube: ""
  }
};

// ==================== SETUP PACKAGES (6 Setups) ====================
export const packages: SetupPackage[] = [
  {
    id: "setup-1",
    slug: "tent-of-romance",
    name: "Tent of Romance",
    emoji: "⛺💕✨",
    shortDescription: "Step into a cozy romantic tent where love blooms under soft lights and dreamy décor ✨",
    fullDescription: `⛺💕✨ Tent of Romance @ ₹6500/- only — where intimacy meets elegance, and every moment feels wrapped in love

Experience the ultimate romantic celebration at Surat's best candlelight dinner venue ✨. Tent of Romance is designed for couples who want a cozy, intimate, and unforgettable celebration.

🎂 Cake / Champagne / Photography
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)
• Book Photography: ₹2700/-
  - 10 to 15 Photos
  - 30 to 45 seconds Reel
  - Same day delivery of all pictures and video after your date complete

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
From personalized messages written in real rose petals on the floor to a complete transformation of the space, we design every detail to match your unique vision. The entire area is beautifully decorated, from the ceiling to the floor, with stunning props, vibrant accents, and custom touches that bring your idea to life.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Valentine's Day Special

📍 Best romantic tent setup Surat | Candlelight dinner Gotri | Couple-friendly venue`,
    price: 6500,
    cakeIncluded: true,
    features: [
      "3 Hours Private Romantic Tent Celebration ⛺",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Photography Package Available: ₹2700/-",
      "7kg Real Rose Petals Floor Decoration 🌹",
      "Trending Tent Setup with Curtains & Lights 💡",
      "Unique Vintage Props & Bohemian Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Ambiance 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Setup 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Valentine's Day"],
    thumbnail: "/hivy-images/6500/cover.webp",
    images: [
      "/hivy-images/6500/cover.webp",
      "/hivy-images/6500/2.webp",
      "/hivy-images/6500/3.webp",
      "/hivy-images/6500/4.webp",
      "/hivy-images/6500/5.webp",
      "/hivy-images/6500/6.webp",
      "/hivy-images/6500/7.webp",
      "/hivy-images/6500/8.webp",
      "/hivy-images/6500/9.webp",
      "/hivy-images/6500/10.webp",
      "/hivy-images/6500/11.webp",
      "/hivy-images/6500/12.webp"
    ]
  },
  {
    id: "setup-2",
    slug: "fairy-tale-proposals",
    name: "Fairy Tale Proposals",
    emoji: "🧚✨💍",
    shortDescription: "Step into a magical fairytale where dreams come true and love stories begin ✨",
    fullDescription: `🧚✨💍 Fairy Tale Proposals @ ₹6300/- — where every moment feels like a dream, and love stories get their perfect beginning

Step into a magical fairytale setting where romance meets enchantment at Surat's premier proposal venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

⛺ Trending Tent
We turn your proposal into a magical experience. Our expert team creates a stunning atmosphere with a floor adorned in real rose petals, an intimate tent draped in elegant curtains, and twinkling fairy lights that set the perfect romantic mood. Every detail is designed to make your moment unforgettable, ensuring your proposal is as enchanting as your love story.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

🌹 Floor Decorations
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. You can also customize according to your need.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🍽️ Mouth-Watering Dishes
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Marriage Proposal

📍 Best fairytale proposal venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 6300,
    cakeIncluded: true,
    features: [
      "3 Hours Private Fairytale Celebration ✨",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Magical Tent with Elegant Curtains",
      "7kg Real Rose Petals Floor Art 🌹",
      "Twinkling Fairy Lights Setup 💡",
      "Unique Vintage Props & Décor",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Perfect for Proposals 💍"
    ],
    perfectFor: ["Marriage Proposal", "Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot"],
    thumbnail: "/hivy-images/6300/Cover.webp",
    images: [
      "/hivy-images/6300/Cover.webp",
      "/hivy-images/6300/2.webp",
      "/hivy-images/6300/3.webp",
      "/hivy-images/6300/4.webp",
      "/hivy-images/6300/5.webp",
      "/hivy-images/6300/6.webp",
      "/hivy-images/6300/7.webp",
      "/hivy-images/6300/8.webp",
      "/hivy-images/6300/9.webp",
      "/hivy-images/6300/10.webp",
      "/hivy-images/6300/11.webp"
    ]
  },
  {
    id: "setup-3",
    slug: "swing-of-love",
    name: "Swing of LOVE",
    emoji: "🪽💕",
    shortDescription: "Float in love on a dreamy swing setup where romance meets playfulness ✨",
    fullDescription: `🪽💕 Swing of LOVE @ ₹5100/- — where love takes flight, moments feel lighter, and hearts swing together in perfect harmony

Experience the magic of romance on a beautifully decorated swing setup at Surat's most unique romantic venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🪽 Swing Of LOVE
"Swing of Love" is a beautifully designed decorative piece that symbolizes romance, harmony, and elegance. Featuring a gracefully crafted swing adorned with delicate embellishments, it creates a dreamy and charming ambiance. Perfect for special occasions, this piece adds a touch of love and serenity to any space.

🌸 Curtains, Flowers, and Lights
The space is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Also Comfortable Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful space.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Date Night

📍 Best swing setup venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 5100,
    cakeIncluded: true,
    features: [
      "3 Hours Private Swing Setup Celebration 🪽",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Beautiful Decorated Swing of Love",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Décor 🌹",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Instagram-worthy Photo Spots 📸"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Date Night"],
    thumbnail: "/hivy-images/5100/Cover photo.webp",
    images: [
      "/hivy-images/5100/Cover photo.webp",
      "/hivy-images/5100/2.webp",
      "/hivy-images/5100/3.webp",
      "/hivy-images/5100/4.webp",
      "/hivy-images/5100/5.webp",
      "/hivy-images/5100/6.webp",
      "/hivy-images/5100/7.webp",
      "/hivy-images/5100/8.webp",
      "/hivy-images/5100/9.webp",
      "/hivy-images/5100/10.webp",
      "/hivy-images/5100/12.webp"
    ]
  },
  {
    id: "setup-4",
    slug: "boho-chic",
    name: "BoHo Chic",
    emoji: "🌾🪶✨",
    shortDescription: "Embrace free-spirited romance in a bohemian paradise filled with warmth and elegance ✨",
    fullDescription: `🌾🪶✨ BoHo Chic @ ₹5700/- — where bohemian vibes meet romantic elegance, and every moment feels effortlessly beautiful

Step into a boho-inspired wonderland where rustic charm meets modern romance at Surat's premier bohemian venue ✨.

🎂 Cake & Champagne
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

🌾 Boho Styled Tent
Our tent is a work of art, with its intricate details and bohemian flair. Step inside and feel the cares of the world melt away as you immerse yourself in its cozy embrace.

🌸 Curtains, Flowers, and Lights
The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
On the floor, we create stunning decorations using up to 7kg of real rose petals, arranged in different love shapes. These intricate designs add a touch of romance and elegance to the space.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Boho Theme Party

📍 Best bohemian venue Surat | Boho celebration cafe Gotri | Couple-friendly venue`,
    price: 5700,
    cakeIncluded: true,
    features: [
      "3 Hours Private Bohemian Celebration 🌾",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Artistic Boho Styled Tent",
      "Flowing Curtains & Twinkling Lights 💡",
      "7kg Real Rose Petals Floor Art 🌹",
      "Vintage Lanterns & Bohemian Rugs 🪴",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Intimate Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof Experience with Wind 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Boho Theme Party"],
    thumbnail: "/hivy-images/5700/Cover.webp",
    images: [
      "/hivy-images/5700/Cover.webp",
      "/hivy-images/5700/2.webp",
      "/hivy-images/5700/3.webp",
      "/hivy-images/5700/4.webp",
      "/hivy-images/5700/5.webp",
      "/hivy-images/5700/6.webp",
      "/hivy-images/5700/7.webp",
      "/hivy-images/5700/8.webp",
      "/hivy-images/5700/9.webp",
      "/hivy-images/5700/10.webp",
      "/hivy-images/5700/11.webp",
      "/hivy-images/5700/12.webp",
      "/hivy-images/5700/13.webp",
      "/hivy-images/5700/14.webp",
      "/hivy-images/5700/15.webp"
    ]
  },
  {
    id: "setup-5",
    slug: "twin-heart",
    name: "TwinHeart",
    emoji: "💕💕",
    shortDescription: "Celebrate love with twin hearts symbolizing two souls becoming one ✨",
    fullDescription: `💕💕 TwinHeart @ ₹4700/- only — where two hearts beat as one, and love is celebrated in its purest form

Experience the magic of togetherness in a beautifully decorated twin heart setup at Surat's most romantic venue ✨.

🎂 Cake & Champagne
• Cake: ₹500/-
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 3 Mesmerizing Hours
3 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

❤️ Elegant Tent
Combining Red and White color to realm of elegance and luxury, where white curtains softly frame the scene, gentle lighting dances in the air, combined with Red Rose Petals.

🌸 Curtains, Flowers, and Lights
Decorating the floor with Red Roses giving twin heart shapes, enhanced by carefully selected props. The tent is decorated with flowing curtains, vibrant flowers, and twinkling lights, creating a magical ambiance that is sure to enchant you and your partner.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🌹 A Floor Adorned with Natural Red Rose Petals
Immerse yourselves in the romance of a love story told through petals. Our Twin Hearts Rose Petal Decoration is designed to capture the essence of your connection. A beautiful arrangement of delicate rose petals forms two intertwined hearts, symbolizing the bond that ties you and your partner together. Surrounded by soft, fragrant petals, this stunning setup creates a breathtaking moment—perfect for a proposal, anniversary, or any celebration of love.

🍽️ Dishes That Delight the Senses
Indulge in our mouth-watering dishes, specially prepared to tantalize your taste buds and complement the romantic setting. From appetizers to desserts, our menu is sure to delight.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

🎉 Perfect For
Romantic Proposal Surat | Anniversary Celebration | Birthday Surprise | Candlelight Dinner | Pre-Wedding Photoshoot | Couple Date Night

📍 Best heart-themed venue Surat | Romantic celebration cafe Gotri | Couple-friendly venue`,
    price: 4700,
    cakeIncluded: false,
    features: [
      "3 Hours Private Twin Heart Celebration 💕",
      "Cake Available: ₹500/-",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Elegant Red & White Tent Setup",
      "Twin Heart Rose Petal Floor Art 🌹",
      "Flowing Curtains & Twinkling Lights 💡",
      "Unique Props & Vintage Lanterns",
      "Comfortable Lower Seating 💑",
      "Candle-Lit Romantic Atmosphere 🕯️",
      "Mouth-Watering Multi-Course Dishes 🍽️",
      "Romantic Background Music 🎶",
      "Open Roof with Gentle Breeze 🌙"
    ],
    perfectFor: ["Romantic Proposal", "Anniversary Celebration", "Birthday Surprise", "Candlelight Dinner", "Pre-Wedding Photoshoot", "Couple Date Night"],
    thumbnail: "/hivy-images/6500/cover.webp",
    images: [
      "/hivy-images/6500/cover.webp",
      "/hivy-images/6500/2.webp",
      "/hivy-images/6500/3.webp",
      "/hivy-images/6500/4.webp",
      "/hivy-images/6500/5.webp",
      "/hivy-images/6500/6.webp",
      "/hivy-images/6500/7.webp",
      "/hivy-images/6500/8.webp",
      "/hivy-images/6500/9.webp",
      "/hivy-images/6500/10.webp",
      "/hivy-images/6500/11.webp",
      "/hivy-images/6500/12.webp"
    ],
    hidden: true // Hidden from website but data preserved
  },
  {
    id: "setup-6",
    slug: "the-elite-group-setup",
    name: "Elite Group Setup",
    emoji: "💍✨",
    shortDescription: "Create a one-of-a-kind proposal experience tailored just for your love story ✨",
    fullDescription: `💍✨ Elite Group Setup — where your unique love story gets the perfect setting it deserves

Make your proposal truly unforgettable with a customized setup designed around your love story at Surat's best elite group setup venue ✨.

📦 Package Includes
• Cake: Complimentary
• Champagne: ₹500/- (Non-Alcoholic Fruit Flavor)

⏰ 2 Mesmerizing Hours
2 hours for creating beautiful memories, each moment a brushstroke on the canvas of your love story.

✨ What Makes This Experience Special?
• A fully decorated private setup with rose petals, warm fairy lights, and aesthetic details
• Lower seating arrangement for a relaxed and intimate vibe
• Exclusive reservation — the space is yours alone
• Background music to enhance the mood
• Ideal for photography & videography to capture your special moments
• Neon LED message to add to your mood
• Perfect for proposals, birthdays, bride-to-be celebrations, or any personal milestone

⚠️ This experience focuses on ambience and celebration. Food is not included in this package.

🪴 Unique Props
We provide unique props to enhance the atmosphere and add a touch of whimsy to your experience. From vintage lanterns to bohemian rugs, and Neon LED light message, our props will transport you to another world.

💑 Lower Seating
Relax and unwind in our comfortable lower seating, designed to help you and your partner connect on a deeper level as you enjoy each other's company in this beautiful open roof with the wind blowing through making it truly mesmerizing moments.

🕯️ Candle Lights
The soft glow of candle lights adds a warm, romantic touch to your evening. We strategically place candles around the tent to enhance the intimate atmosphere.

🎶 Romantic Music
Set the mood with soft, romantic music playing in the background, enhancing the overall ambiance of your evening and creating a truly unforgettable experience.

📌 Important Notes
• This package does not include food or beverages
• Ideal for couples or small groups accompanying the celebration
• Advance booking recommended due to limited availability

🎉 Perfect For
Marriage Proposal Surat | Birthday Celebration | Bride-to-Be Party | Anniversary Surprise | Personal Milestones | Pre-Wedding Photoshoot

📍 Best elite group setup venue Surat | Custom celebration cafe Gotri | Couple-friendly venue`,
    price: 5400,
    cakeIncluded: true,
    features: [
      "2 Hours Private Elite Group Celebration 💍",
      "Complimentary Celebration Cake 🍰",
      "Champagne: ₹500/- (Non-Alcoholic)",
      "Fully Decorated Private Setup ✨",
      "Rose Petals & Warm Fairy Lights",
      "Neon LED Custom Message 💡",
      "Exclusive Reservation - Space is Yours",
      "Lower Seating for Intimate Vibe 💑",
      "Candle-Lit Ambiance 🕯️",
      "Romantic Background Music 🎶",
      "Perfect for Photography & Videography 📸",
      "⚠️ Food NOT included in this package"
    ],
    perfectFor: ["Marriage Proposal", "Birthday Celebration", "Bride-to-Be Party", "Anniversary Surprise", "Personal Milestones", "Pre-Wedding Photoshoot"],
    thumbnail: "/hivy-images/5400/2.webp",
    images: [
      "/hivy-images/5400/2.webp",
      "/hivy-images/5400/3.webp",
      "/hivy-images/5400/4.webp",
      "/hivy-images/5400/5.webp",
      "/hivy-images/5400/6.webp",
      "/hivy-images/5400/7.webp",
      "/hivy-images/5400/8.webp",
      "/hivy-images/5400/9.webp",
      "/hivy-images/5400/10.webp",
      "/hivy-images/5400/11.webp"
    ]
  }
];

// Get visible packages (excluding hidden ones) in specific order: 5100, 5700, 6300, 6500, 5400
export const getVisiblePackages = (): SetupPackage[] => {
  const priceOrder = [5100, 5700, 6300, 6500, 5400];
  return packages
    .filter(pkg => !pkg.hidden)
    .sort((a, b) => {
      const aIndex = priceOrder.indexOf(a.price);
      const bIndex = priceOrder.indexOf(b.price);
      // If price not in order array, put at end
      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });
};

// ==================== MENU ITEMS ====================
export const menuItems = {
  starters: [
    { name: "Welcome Drink", description: "A refreshing welcome to begin your romantic experience", emoji: "🥤" },
    { name: "Cheese Fondue", description: "A rich, velvety cheese fondue served with cheese balls, wedges, and nachos", emoji: "🧀" },
    { name: "Paneer Tortilla", description: "Soft tortilla filled with spicy paneer and the chef's special seasoning", emoji: "🌯" },
    { name: "Peri Peri Fries with Mac & Cheese", description: "Creamy mac & cheese paired with peri-peri fries", emoji: "🍟" },
    { name: "Tangy Loaf", description: "Warm loaf served with cheesy garlic sauce", emoji: "🍞" }
  ],
  desserts: [
    { name: "Dessert with Chocolate Bite", description: "A sweet ending with rich chocolate indulgence", emoji: "🍫" }
  ],
  addOns: [
    { name: "Cake", description: "Free in select packages, ₹350 for others", price: "Free / ₹350", emoji: "🍰" },
    { name: "Champagne", description: "Non-Alcoholic Fruit Flavour", price: "₹500", emoji: "🥂" }
  ]
};

// ==================== SERVICE CATEGORIES (100% CANDLE LIGHT DINNER FOCUSED) ====================
export const serviceCategories: ServiceCategory[] = [
  {
    slug: "candle-light-dinner",
    name: "Candle Light Dinner",
    emoji: "🕯️",
    description: "Experience the most romantic candle light dinner in Surat with premium private dining, stunning decorations, and unforgettable couple moments at HIVY.",
    metaTitle: "Candle Light Dinner in Surat | HIVY - Best Romantic Dining Venue",
    metaDescription: "Book the best candle light dinner in Surat at HIVY. Private dining, romantic ambiance, gourmet food & magical couple experiences. Call +91 9727027278!",
    keywords: [
      { slug: "candle-light-dinner-in-surat", title: "Candle Light Dinner in Surat", h1: "Best Candle Light Dinner in Surat", metaTitle: "Candle Light Dinner in Surat | #1 Romantic Dining Experience 2026", metaDescription: "Experience the best candle light dinner in Surat at HIVY. Private venue, romantic decorations, gourmet food & unforgettable moments for couples." },
      { slug: "romantic-candle-light-dinner-surat", title: "Romantic Candle Light Dinner Surat", h1: "Romantic Candle Light Dinner in Surat", metaTitle: "Romantic Candle Light Dinner Surat | Premium Couple Dining", metaDescription: "Plan a romantic candle light dinner in Surat with rose petals, fairy lights & intimate ambiance. HIVY offers Surat's most romantic dining experience." },
      { slug: "private-candle-light-dinner-surat", title: "Private Candle Light Dinner Surat", h1: "Private Candle Light Dinner in Surat", metaTitle: "Private Candle Light Dinner Surat | 100% Exclusive Couples Venue", metaDescription: "Book a 100% private candle light dinner in Surat. HIVY offers exclusive couples-only dining with complete privacy and romantic ambiance." },
      { slug: "luxury-candle-light-dinner-surat", title: "Luxury Candle Light Dinner Surat", h1: "Luxury Candle Light Dinner in Surat", metaTitle: "Luxury Candle Light Dinner Surat | Premium 5-Star Experience", metaDescription: "Indulge in a luxury candle light dinner in Surat with premium decorations, gourmet cuisine & world-class service at HIVY." },
      { slug: "candle-light-dinner-for-couples-surat", title: "Candle Light Dinner for Couples", h1: "Candle Light Dinner for Couples in Surat", metaTitle: "Candle Light Dinner for Couples Surat | Romantic Date Night", metaDescription: "Perfect candle light dinner for couples in Surat. HIVY offers intimate dining experiences designed exclusively for romantic pairs." },
      { slug: "candle-light-dinner-near-me-surat", title: "Candle Light Dinner Near Me", h1: "Candle Light Dinner Near Me in Surat", metaTitle: "Candle Light Dinner Near Me Surat | Best Local Options", metaDescription: "Find the best candle light dinner near you in Surat. HIVY is centrally located and serves all Surat areas with romantic dining." },
      { slug: "candle-light-dinner-restaurant-surat", title: "Candle Light Dinner Restaurant Surat", h1: "Best Candle Light Dinner Restaurant in Surat", metaTitle: "Candle Light Dinner Restaurant Surat | Top Romantic Venue", metaDescription: "Discover the best candle light dinner restaurant in Surat. HIVY offers private romantic dining that beats any restaurant experience." },
      { slug: "surprise-candle-light-dinner-surat", title: "Surprise Candle Light Dinner Surat", h1: "Surprise Candle Light Dinner in Surat", metaTitle: "Surprise Candle Light Dinner Surat | Plan Secret Romantic Evening", metaDescription: "Plan the perfect surprise candle light dinner in Surat for your partner. HIVY helps coordinate secret romantic setups." },
      { slug: "candle-light-dinner-with-decoration-surat", title: "Candle Light Dinner with Decoration", h1: "Candle Light Dinner with Decoration in Surat", metaTitle: "Candle Light Dinner with Decoration Surat | Stunning Setups", metaDescription: "Book candle light dinner with stunning decorations in Surat. HIVY includes rose petals, fairy lights, balloons & romantic themes." },
      { slug: "candle-light-dinner-setup-at-home-surat", title: "Candle Light Dinner Setup at Home", h1: "Candle Light Dinner Setup at Home Surat", metaTitle: "Candle Light Dinner Setup at Home Surat | Home Service", metaDescription: "Get professional candle light dinner setup at your home in Surat or visit HIVY's premium venue for a magical dining experience." },
      { slug: "candle-light-dinner-date-surat", title: "Candle Light Dinner Date Surat", h1: "Candle Light Dinner Date in Surat", metaTitle: "Candle Light Dinner Date Surat | Perfect Romantic Evening", metaDescription: "Plan the perfect candle light dinner date in Surat. HIVY offers 3-hour private romantic dining with decorations & music." },
      { slug: "best-candle-light-dinner-places-surat", title: "Best Candle Light Dinner Places", h1: "Best Candle Light Dinner Places in Surat", metaTitle: "Best Candle Light Dinner Places in Surat 2026 | Top Spots", metaDescription: "Discover the best candle light dinner places in Surat. HIVY ranks #1 for romantic private dining with private views." },
      { slug: "affordable-candle-light-dinner-surat", title: "Affordable Candle Light Dinner Surat", h1: "Affordable Candle Light Dinner in Surat", metaTitle: "Affordable Candle Light Dinner Surat | Budget-Friendly Romance", metaDescription: "Enjoy affordable candle light dinner in Surat without compromising on quality. HIVY offers packages starting from ₹4700." },
      { slug: "premium-candle-light-dinner-experience-surat", title: "Premium Candle Light Dinner Experience", h1: "Premium Candle Light Dinner Experience in Surat", metaTitle: "Premium Candle Light Dinner Experience Surat | Luxury Dining", metaDescription: "Experience premium candle light dinner in Surat with luxury setup, rose petals, champagne & gourmet dining at HIVY." },
      { slug: "candle-light-dinner-with-music-surat", title: "Candle Light Dinner with Music", h1: "Candle Light Dinner with Music in Surat", metaTitle: "Candle Light Dinner with Music Surat | Romantic Ambiance", metaDescription: "Enjoy candle light dinner with romantic background music in Surat. HIVY creates the perfect ambiance for couples." },
      { slug: "candle-light-dinner-for-girlfriend-surat", title: "Candle Light Dinner for Girlfriend", h1: "Candle Light Dinner for Girlfriend in Surat", metaTitle: "Candle Light Dinner for Girlfriend Surat | Make Her Feel Special", metaDescription: "Plan the perfect candle light dinner for your girlfriend in Surat. HIVY helps you create an unforgettable romantic evening." },
      { slug: "candle-light-dinner-for-boyfriend-surat", title: "Candle Light Dinner for Boyfriend", h1: "Candle Light Dinner for Boyfriend in Surat", metaTitle: "Candle Light Dinner for Boyfriend Surat | Surprise Him Tonight", metaDescription: "Surprise your boyfriend with a romantic candle light dinner in Surat. HIVY offers the perfect private venue for couples." },
      { slug: "candle-light-dinner-packages-surat", title: "Candle Light Dinner Packages Surat", h1: "Candle Light Dinner Packages in Surat", metaTitle: "Candle Light Dinner Packages Surat | All-Inclusive Pricing", metaDescription: "Explore all-inclusive candle light dinner packages in Surat at HIVY. From ₹4700-₹6500 with food, decorations & music." },
      { slug: "outdoor-candle-light-dinner-surat", title: "Outdoor Candle Light Dinner Surat", h1: "Outdoor Candle Light Dinner in Surat", metaTitle: "Outdoor Candle Light Dinner Surat | Open-Air Romance", metaDescription: "Experience magical outdoor candle light dinner in Surat at HIVY's open private. Dine in romantic setting with romantic ambiance." },

      // NEW 20 COUPLE-FOCUSED KEYWORDS
      { slug: "candle-light-dinner-for-husband-surat", title: "Candle Light Dinner for Husband", h1: "Romantic Candle Light Dinner for Husband in Surat", metaTitle: "Candle Light Dinner for Husband Surat | Surprise Him Tonight", metaDescription: "Plan a surprise candle light dinner for your husband in Surat. HIVY offers private romantic setups to rekindle the spark." },
      { slug: "candle-light-dinner-for-wife-surat", title: "Candle Light Dinner for Wife", h1: "Elegant Candle Light Dinner for Wife in Surat", metaTitle: "Candle Light Dinner for Wife Surat | Make Her Feel Special", metaDescription: "Surprise your wife with an elegant candle light dinner in Surat. Private venue, rose petals, gourmet food & romantic music at HIVY." },
      { slug: "candle-light-dinner-for-anniversary-surat", title: "Candle Light Dinner for Anniversary", h1: "Candle Light Dinner for Anniversary in Surat", metaTitle: "Anniversary Candle Light Dinner Surat | Celebrate Your Love", metaDescription: "Celebrate your anniversary with a romantic candle light dinner in Surat. HIVY creates unforgettable anniversary dining experiences." },
      { slug: "candle-light-dinner-for-birthday-surat", title: "Candle Light Dinner for Birthday", h1: "Candle Light Dinner for Birthday in Surat", metaTitle: "Birthday Candle Light Dinner Surat | Romantic Birthday Celebration", metaDescription: "Make birthdays special with a candle light dinner in Surat. HIVY combines cake, decorations & intimate dining for couples." },
      { slug: "candle-light-dinner-for-proposal-surat", title: "Candle Light Dinner for Proposal", h1: "Candle Light Dinner for Proposal in Surat", metaTitle: "Proposal Candle Light Dinner Surat | Perfect 'Yes' Moment", metaDescription: "Plan the perfect proposal with a candle light dinner in Surat. HIVY helps create magical 'will you marry me' moments." },
      { slug: "candle-light-dinner-for-valentines-day-surat", title: "Candle Light Dinner for Valentine's Day", h1: "Valentine's Day Candle Light Dinner in Surat", metaTitle: "Valentine's Day Candle Light Dinner Surat 2026 | Book Now", metaDescription: "Book a romantic Valentine's Day candle light dinner in Surat at HIVY. Limited slots available for Feb 14th. Reserve now!" },
      { slug: "couple-candle-light-dinner-surat", title: "Couple Candle Light Dinner", h1: "Couple Candle Light Dinner Experience in Surat", metaTitle: "Couple Candle Light Dinner Surat | Exclusive Pair Dining", metaDescription: "Enjoy an exclusive couple candle light dinner in Surat. HIVY offers 100% couples-only private dining with romantic ambiance." },
      { slug: "midnight-candle-light-dinner-surat", title: "Midnight Candle Light Dinner", h1: "Midnight Candle Light Dinner in Surat", metaTitle: "Midnight Candle Light Dinner Surat | Late Night Romance", metaDescription: "Experience a magical midnight candle light dinner in Surat. HIVY offers late-night romantic dining for couples. Perfect for 12 AM celebrations." },
      { slug: "candle-light-dinner-with-cake-surat", title: "Candle Light Dinner with Cake", h1: "Candle Light Dinner with Cake in Surat", metaTitle: "Candle Light Dinner with Cake Surat | Complete Celebration Package", metaDescription: "Book candle light dinner with complimentary cake in Surat. HIVY includes celebration cake with every romantic dinner package." },
      { slug: "candle-light-dinner-with-flowers-surat", title: "Candle Light Dinner with Flowers", h1: "Candle Light Dinner with Flowers in Surat", metaTitle: "Candle Light Dinner with Flowers Surat | Rose Petal Romance", metaDescription: "Enjoy candle light dinner decorated with real flowers and rose petals in Surat. HIVY uses 7kg fresh roses for every setup." },
      { slug: "intimate-candle-light-dinner-surat", title: "Intimate Candle Light Dinner", h1: "Intimate Candle Light Dinner in Surat", metaTitle: "Intimate Candle Light Dinner Surat | Cozy Private Dining", metaDescription: "Experience an intimate candle light dinner in Surat with just the two of you. HIVY offers completely private and cozy couple dining." },
      { slug: "budget-candle-light-dinner-surat", title: "Budget Candle Light Dinner", h1: "Budget Candle Light Dinner in Surat", metaTitle: "Budget Candle Light Dinner Surat | Romantic Yet Affordable", metaDescription: "Enjoy a romantic candle light dinner on a budget in Surat. HIVY offers affordable packages starting ₹4700 with full setup." },
      { slug: "candle-light-dinner-booking-online-surat", title: "Candle Light Dinner Booking Online", h1: "Book Candle Light Dinner Online in Surat", metaTitle: "Candle Light Dinner Booking Online Surat | Easy Reservation", metaDescription: "Book your candle light dinner online in Surat at HIVY. Easy WhatsApp booking, instant confirmation & hassle-free reservation." },
      { slug: "candle-light-dinner-for-two-surat", title: "Candle Light Dinner for Two", h1: "Candle Light Dinner for Two in Surat", metaTitle: "Candle Light Dinner for Two Surat | Private Table for Couples", metaDescription: "Book a candle light dinner for two in Surat. HIVY offers exclusive private dining experiences designed for just two people." },
      { slug: "candle-light-dinner-with-photography-surat", title: "Candle Light Dinner with Photography", h1: "Candle Light Dinner with Photography in Surat", metaTitle: "Candle Light Dinner with Photography Surat | Capture the Moment", metaDescription: "Book candle light dinner with professional photography in Surat. HIVY offers dinner + photoshoot combo packages for couples." },
      { slug: "surprise-candle-light-dinner-for-wife-surat", title: "Surprise Candle Light Dinner for Wife", h1: "Surprise Candle Light Dinner for Wife in Surat", metaTitle: "Surprise Candle Light Dinner for Wife Surat | Secret Setup", metaDescription: "Plan a surprise candle light dinner for your wife in Surat. HIVY coordinates everything secretly for the perfect reveal." },
      { slug: "surprise-candle-light-dinner-for-husband-surat", title: "Surprise Candle Light Dinner for Husband", h1: "Surprise Candle Light Dinner for Husband in Surat", metaTitle: "Surprise Candle Light Dinner for Husband Surat | He Deserves It", metaDescription: "Surprise your husband with a romantic candle light dinner in Surat. HIVY plans the perfect secret evening for him." },
      { slug: "candle-light-dinner-with-live-music-surat", title: "Candle Light Dinner with Live Music", h1: "Candle Light Dinner with Live Music in Surat", metaTitle: "Candle Light Dinner with Live Music Surat | Musical Romance", metaDescription: "Enjoy candle light dinner with live romantic music in Surat. HIVY offers personalized music experiences for couples." },
      { slug: "first-date-candle-light-dinner-surat", title: "First Date Candle Light Dinner", h1: "First Date Candle Light Dinner in Surat", metaTitle: "First Date Candle Light Dinner Surat | Impressive First Date", metaDescription: "Make your first date unforgettable with a candle light dinner in Surat. HIVY creates the perfect romantic first impression." },
      { slug: "candle-light-dinner-with-private-room-surat", title: "Candle Light Dinner with Private Room", h1: "Candle Light Dinner with Private Room in Surat", metaTitle: "Candle Light Dinner Private Room Surat | 100% Privacy", metaDescription: "Book candle light dinner in a private room in Surat. HIVY offers completely enclosed couple-only dining spaces." }
    ]
  }
];

// ==================== SURAT AREAS ====================
export const suratAreas: AreaConfig[] = [
  { slug: "adajan-surat", name: "Adajan" },
  { slug: "athwa-surat", name: "Athwa" },
  { slug: "vesu-surat", name: "Vesu" },
  { slug: "piplod-surat", name: "Piplod" },
  { slug: "city-light-surat", name: "City Light" },
  { slug: "pal-surat", name: "Pal" },
  { slug: "ghod-dod-road-surat", name: "Ghod Dod Road" },
  { slug: "ring-road-surat", name: "Ring Road" },
  { slug: "vip-road-surat", name: "VIP Road" },
  { slug: "dumas-road-surat", name: "Dumas Road" },
  { slug: "katargam-surat", name: "Katargam" },
  { slug: "varachha-surat", name: "Varachha" },
  { slug: "udhna-surat", name: "Udhna" },
  { slug: "pandesara-surat", name: "Pandesara" },
  { slug: "sachin-surat", name: "Sachin" },
  { slug: "sarthana-surat", name: "Sarthana" },
  { slug: "magdalla-surat", name: "Magdalla" },
  { slug: "althan-surat", name: "Althan" },
  { slug: "bhatar-surat", name: "Bhatar" },
  { slug: "rander-surat", name: "Rander" },
  { slug: "jahangirpura-surat", name: "Jahangirpura" },
  { slug: "hajira-surat", name: "Hajira" },
  { slug: "olpad-surat", name: "Olpad" },
  { slug: "kadodara-surat", name: "Kadodara" },
  { slug: "kim-surat", name: "Kim" },
  { slug: "amroli-surat", name: "Amroli" },
  { slug: "limbayat-surat", name: "Limbayat" },
  { slug: "kapodra-surat", name: "Kapodra" },
  { slug: "bamroli-surat", name: "Bamroli" },
  { slug: "parvat-patiya-surat", name: "Parvat Patiya" },
  { slug: "majura-gate-surat", name: "Majura Gate" },
  { slug: "nanpura-surat", name: "Nanpura" },
  { slug: "gopipura-surat", name: "Gopipura" },
  { slug: "begumpura-surat", name: "Begumpura" },
  { slug: "mahidharpura-surat", name: "Mahidharpura" },
  { slug: "sagrampura-surat", name: "Sagrampura" },
  { slug: "dindoli-surat", name: "Dindoli" },
  { slug: "mota-varachha-surat", name: "Mota Varachha" },
  { slug: "new-city-light-surat", name: "New City Light" },
  { slug: "parle-point-surat", name: "Parle Point" }
];

// Helper functions
export function getPackageBySlug(slug: string): SetupPackage | undefined {
  const pkg = packages.find(p => p.slug === slug);
  // Return undefined if package is hidden (treat as not found)
  if (pkg?.hidden) return undefined;
  return pkg;
}

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(s => s.slug === slug);
}

export function getKeywordBySlug(serviceSlug: string, keywordSlug: string): ServiceKeyword | undefined {
  const service = getServiceBySlug(serviceSlug);
  return service?.keywords.find(k => k.slug === keywordSlug);
}

export function getAreaBySlug(slug: string): AreaConfig | undefined {
  return suratAreas.find(a => a.slug === slug);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString('en-IN')}.00`;
}

// ==================== BLOG POSTS ====================
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  coverImage: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-candle-light-dinner-places-surat-guide",
    title: "Best Candle Light Dinner Places in Surat: Complete Guide 2026",
    excerpt: "Discover the top candle light dinner venues in Surat for a romantic evening with your partner. From private setups to glass houses.",
    metaTitle: "Best Candle Light Dinner Places in Surat 2026 | Top Venues",
    metaDescription: "Looking for the best candle light dinner in Surat? Discover top romantic venues with private setups, gourmet food & stunning ambiance.",
    coverImage: "/hivy-images/5100/2.webp",
    publishedAt: "2026-01-15",
    readTime: "6 min",
    category: "Candle Light Dinner",
    tags: ["candle light dinner", "surat", "romantic dinner", "best places"]
  },
  {
    slug: "how-to-plan-perfect-candle-light-dinner",
    title: "How to Plan the Perfect Candle Light Dinner for Your Partner",
    excerpt: "A complete guide to planning a memorable candle light dinner that will make your partner feel special and loved.",
    metaTitle: "How to Plan Perfect Candle Light Dinner | Complete Guide",
    metaDescription: "Planning a candle light dinner? Learn how to create the perfect romantic evening with our step-by-step guide covering setup, menu & ambiance.",
    coverImage: "/hivy-images/6500/2.webp",
    publishedAt: "2026-01-12",
    readTime: "7 min",
    category: "Candle Light Dinner",
    tags: ["candle light dinner", "planning", "romantic", "guide"]
  },
  {
    slug: "private-candle-light-dinner-experience-surat",
    title: "Private Candle Light Dinner Experience in Surat",
    excerpt: "Experience the magic of dining in a romantic setting with a private candle light dinner in Surat. Perfect for couples seeking romance.",
    metaTitle: "Private Candle Light Dinner Surat | Romantic Experience",
    metaDescription: "Experience romantic private candle light dinner in Surat. Dine in romantic setting with fairy lights, candles & gourmet cuisine at HIVY.",
    coverImage: "/hivy-images/6300/2.webp",
    publishedAt: "2026-01-10",
    readTime: "5 min",
    category: "Candle Light Dinner",
    tags: ["private", "candle light dinner", "surat", "romantic"]
  },
  {
    slug: "private-candle-light-dinner-couples-guide",
    title: "Private Candle Light Dinner for Couples: Why It's Worth It",
    excerpt: "Discover why a private candle light dinner setup creates more intimate and memorable experiences for couples.",
    metaTitle: "Private Candle Light Dinner for Couples | Why Choose Private",
    metaDescription: "Want an intimate dining experience? Learn why private candle light dinner setups are perfect for couples seeking romance & privacy.",
    coverImage: "/hivy-images/5700/2.webp",
    publishedAt: "2026-01-08",
    readTime: "5 min",
    category: "Candle Light Dinner",
    tags: ["private dining", "candle light dinner", "couples", "intimate"]
  },
  {
    slug: "candle-light-dinner-decoration-ideas",
    title: "Candle Light Dinner Decoration Ideas for Romantic Ambiance",
    excerpt: "Creative decoration ideas to enhance your candle light dinner experience with the perfect romantic atmosphere.",
    metaTitle: "Candle Light Dinner Decoration Ideas | Romantic Ambiance Tips",
    metaDescription: "Looking for candle light dinner decoration ideas? Discover creative ways to set up candles, fairy lights, rose petals & more.",
    coverImage: "/hivy-images/6500/3.webp",
    publishedAt: "2026-01-05",
    readTime: "6 min",
    category: "Candle Light Dinner",
    tags: ["decoration", "candle light dinner", "romantic", "ambiance"]
  },
  {
    slug: "candle-light-dinner-menu-ideas",
    title: "What to Serve at a Candle Light Dinner: Menu Ideas",
    excerpt: "Gourmet menu ideas for your candle light dinner, from appetizers to desserts that complement the romantic mood.",
    metaTitle: "Candle Light Dinner Menu Ideas | What to Serve",
    metaDescription: "Planning the perfect candle light dinner menu? Discover romantic food ideas from starters to desserts for an unforgettable meal.",
    coverImage: "/hivy-images/5100/3.webp",
    publishedAt: "2026-01-03",
    readTime: "6 min",
    category: "Candle Light Dinner",
    tags: ["menu", "candle light dinner", "food", "romantic"]
  },
  {
    slug: "surprise-candle-light-dinner-partner",
    title: "How to Surprise Your Partner with a Candle Light Dinner",
    excerpt: "Step-by-step guide to planning a surprise candle light dinner that will leave your partner speechless.",
    metaTitle: "Surprise Candle Light Dinner | How to Plan a Romantic Surprise",
    metaDescription: "Want to surprise your partner? Learn how to plan a secret candle light dinner with tips on booking, timing & the big reveal.",
    coverImage: "/hivy-images/6300/3.webp",
    publishedAt: "2025-12-28",
    readTime: "7 min",
    category: "Candle Light Dinner",
    tags: ["surprise", "candle light dinner", "romantic", "partner"]
  },
  {
    slug: "candle-light-dinner-date-night-ideas",
    title: "Candle Light Dinner Date Night Ideas for Couples",
    excerpt: "Creative date night ideas centered around a romantic candle light dinner to rekindle your relationship.",
    metaTitle: "Candle Light Dinner Date Night Ideas | Romantic Date Tips",
    metaDescription: "Looking for date night inspiration? Discover candle light dinner date ideas to make your evening special and romantic.",
    coverImage: "/hivy-images/5700/3.webp",
    publishedAt: "2025-12-25",
    readTime: "5 min",
    category: "Candle Light Dinner",
    tags: ["date night", "candle light dinner", "couples", "ideas"]
  },
  {
    slug: "affordable-candle-light-dinner-options-surat",
    title: "Affordable Candle Light Dinner Options in Surat",
    excerpt: "Enjoy a romantic candle light dinner experience in Surat without breaking the bank. Budget-friendly options inside.",
    metaTitle: "Affordable Candle Light Dinner Surat | Budget Options",
    metaDescription: "Looking for budget candle light dinner in Surat? Discover affordable romantic dining options with great ambiance & food.",
    coverImage: "/hivy-images/6500/4.webp",
    publishedAt: "2025-12-22",
    readTime: "5 min",
    category: "Candle Light Dinner",
    tags: ["affordable", "candle light dinner", "budget", "surat"]
  },
  {
    slug: "candle-light-dinner-vs-regular-restaurant",
    title: "Candle Light Dinner vs Regular Restaurant: Which to Choose?",
    excerpt: "Compare the experience of a dedicated candle light dinner setup versus dining at a regular romantic restaurant.",
    metaTitle: "Candle Light Dinner vs Restaurant | Which is Better?",
    metaDescription: "Deciding between a candle light dinner setup and regular restaurant? Compare privacy, ambiance, experience & value.",
    coverImage: "/hivy-images/5100/4.webp",
    publishedAt: "2025-12-20",
    readTime: "5 min",
    category: "Candle Light Dinner",
    tags: ["comparison", "candle light dinner", "restaurant", "dining"]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(b => b.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(b => b.category === category);
}
