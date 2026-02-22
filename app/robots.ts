/**
 * HIVY - PLACE FOR CELEBRATIONS - SEO OPTIMIZED ROBOTS.TXT
 * Domain: candlelightdinnersurat.com
 * 
 * Configuration for search engine crawlers:
 * - Allow all public pages including service keywords & area pages
 * - Block admin, API, and private routes
 * - Specify sitemap location
 * - Optimized for maximum SEO visibility
 * 
 * Total Indexable Pages: ~223
 * - Homepage, Static pages, Service categories
 * - 113 Service keyword pages
 * - 21 Candle Light Dinner keyword pages
 * - 40 Surat area pages  
 * - 6 Package pages
 * - 25 Blog posts
 * 
 * Last Updated: February 2026
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://candlelightdinnersurat.com";
  
  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: [
          "/",
          // Static pages
          "/about",
          "/contact",
          "/menu",
          "/virtual-tour",
          "/privacy-policy",
          "/terms-conditions",
          // Package pages
          "/packages",
          "/packages/*",
          // Service pages
          "/services",
          "/services/*",
          // Blog pages
          "/blog",
          "/blog/*",
          // Service keyword pages (birthday, anniversary, proposal, etc.)
          "/birthday-*",
          "/anniversary-*",
          "/proposal-*",
          "/candlelight-*",
          "/candle-light-*",
          "/surprise-*",
          "/romantic-*",
          "/private-*",
          "/private-*",
          "/luxury-*",
          "/affordable-*",
          "/premium-*",
          "/outdoor-*",
          "/pre-wedding-*",
          "/pregnancy-*",
          "/baby-*",
          "/valentines-*",
          "/romantic-*",
          "/couple-*",
          "/dinner-*",
          "/engagement-*",
          "/maternity-*",
          "/gender-reveal-*",
          "/godh-bharai-*",
          "/rose-day-*",
          "/propose-day-*",
          "/chocolate-day-*",
          "/teddy-day-*",
          "/promise-day-*",
          "/hug-day-*",
          "/kiss-day-*",
          "/marriage-*",
          "/private-*",
          "/intimate-*",
          "/special-*",
          "/unique-*",
          "/midnight-*",
          "/best-*",
          "/outdoor-*",
          "/indoor-*",
          "/night-*",
          "/first-*",
          "/10th-*",
          "/25th-*",
          "/wedding-*",
          "/expecting-*",
          // Candle Light Dinner keyword pages
          "/candle-light-dinner-in-surat",
          "/romantic-candle-light-dinner-surat",
          "/private-candle-light-dinner-surat",
          "/private-candle-light-dinner-surat",
          "/luxury-candle-light-dinner-surat",
          "/candle-light-dinner-for-couples-surat",
          "/candle-light-dinner-near-me-surat",
          "/candle-light-dinner-restaurant-surat",
          "/surprise-candle-light-dinner-surat",
          "/candle-light-dinner-with-decoration-surat",
          "/candle-light-dinner-setup-at-home-surat",
          "/candle-light-dinner-date-surat",
          "/best-candle-light-dinner-places-surat",
          "/affordable-candle-light-dinner-surat",
          "/premium-candle-light-dinner-experience-surat",
          "/candle-light-dinner-with-music-surat",
          "/candle-light-dinner-for-girlfriend-surat",
          "/candle-light-dinner-for-boyfriend-surat",
          "/candle-light-dinner-packages-surat",
          "/outdoor-candle-light-dinner-surat",
          // Surat area pages
          "/adajan-surat",
          "/athwa-surat",
          "/vesu-surat",
          "/piplod-surat",
          "/city-light-surat",
          "/pal-surat",
          "/ghod-dod-road-surat",
          "/ring-road-surat",
          "/vip-road-surat",
          "/dumas-road-surat",
          "/katargam-surat",
          "/varachha-surat",
          "/udhna-surat",
          "/pandesara-surat",
          "/sachin-surat",
          "/sarthana-surat",
          "/magdalla-surat",
          "/althan-surat",
          "/bhatar-surat",
          "/rander-surat",
          "/jahangirpura-surat",
          "/hajira-surat",
          "/olpad-surat",
          "/kadodara-surat",
          "/kim-surat",
          "/amroli-surat",
          "/limbayat-surat",
          "/kapodra-surat",
          "/bamroli-surat",
          "/parvat-patiya-surat",
          "/majura-gate-surat",
          "/nanpura-surat",
          "/gopipura-surat",
          "/begumpura-surat",
          "/mahidharpura-surat",
          "/sagrampura-surat",
          "/dindoli-surat",
          "/mota-varachha-surat",
          "/new-city-light-surat",
          "/parle-point-surat",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/private/",
          "/leads/",
          "/_next/",
        ],
      },
      {
        // Google crawler - full access
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/leads/"],
      },
      {
        // Google Images crawler
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/packages/", "/hivy-images/", "/_next/image"],
        disallow: ["/api/", "/admin/"],
      },
      {
        // Bing crawler
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Yandex crawler
        userAgent: "Yandex",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // DuckDuckGo crawler
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/leads/"],
      },
      {
        // Facebook crawler for social sharing
        userAgent: "facebookexternalhit",
        allow: "/",
      },
      {
        // Twitter crawler for cards
        userAgent: "Twitterbot",
        allow: "/",
      },
      {
        // LinkedIn crawler
        userAgent: "LinkedInBot",
        allow: "/",
      },
      {
        // WhatsApp crawler for link previews
        userAgent: "WhatsApp",
        allow: "/",
      },
      {
        // Instagram crawler
        userAgent: "Instagram",
        allow: "/",
      },
      {
        // Pinterest crawler
        userAgent: "Pinterestbot",
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
