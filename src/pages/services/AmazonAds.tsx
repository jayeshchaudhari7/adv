import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ShoppingBag } from "lucide-react";

const AmazonAds = () => (
  <ServicePageTemplate
    icon={ShoppingBag}
    title="Amazon Ads Management"
    subtitle="Sponsored Products, Brands & DSP campaigns to dominate Amazon search results and grow sales."
    description="Amazon is the world's largest product search engine. Our Amazon advertising specialists help you win the Buy Box, rank higher in search results, and drive profitable sales through Sponsored Products, Sponsored Brands, Sponsored Display, and Amazon DSP campaigns. We optimize your entire Amazon presence from listings to advertising."
    features={[
      { title: "Sponsored Products", desc: "Keyword and product-targeted ads that appear in search results and product detail pages." },
      { title: "Sponsored Brands", desc: "Brand-focused ads with custom headlines, logos, and product collections." },
      { title: "Sponsored Display", desc: "Retargeting and audience-based display ads across Amazon and third-party sites." },
      { title: "Amazon DSP", desc: "Programmatic display and video ads to reach audiences on and off Amazon." },
      { title: "Listing Optimization", desc: "A+ Content, keyword-optimized titles, bullets, and backend search terms." },
      { title: "Review & Rating Strategy", desc: "Programs to build social proof and improve conversion rates organically." },
    ]}
    process={[
      "Amazon account audit — listings, advertising, and competitor analysis.",
      "Keyword research and campaign architecture planning.",
      "Listing optimization — titles, images, A+ Content, and backend keywords.",
      "Campaign launch — Sponsored Products, Brands, and Display setup.",
      "Daily bid management and weekly search term optimization.",
      "Monthly reporting with sales attribution and growth planning.",
    ]}
    faqs={[
      { q: "Do you manage both Amazon UK and Amazon India?", a: "Yes, we manage campaigns across Amazon.co.uk and Amazon.in with market-specific strategies." },
      { q: "What's your Amazon Ads management fee?", a: "Our fees are based on ad spend and scope. Contact us for a custom quote based on your goals." },
      { q: "Can you help with Amazon SEO too?", a: "Absolutely. Listing optimization is included in our Amazon management service — better listings mean better ad performance." },
      { q: "What's the minimum ad spend?", a: "We recommend a minimum of £1,000/month (₹1 lakh) in Amazon ad spend for meaningful results." },
    ]}
    relatedServices={[
      { title: "Marketplace Advertising", href: "/services/marketplace-ads" },
      { title: "Google Shopping", href: "/services/google-ads" },
      { title: "Email & SMS", href: "/services/email-marketing" },
    ]}
  />
);

export default AmazonAds;
