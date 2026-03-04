import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Store } from "lucide-react";

const MarketplaceAds = () => (
  <ServicePageTemplate
    icon={Store}
    title="Marketplace Advertising"
    subtitle="Expand your presence across Walmart, eBay, Etsy, Flipkart, and more marketplaces."
    description="Don't put all your eggs in one basket. We help brands expand across multiple online marketplaces, managing advertising campaigns on Walmart, eBay, Etsy, Flipkart, and other platforms. Our multi-marketplace approach diversifies your revenue streams and captures customers wherever they shop."
    features={[
      { title: "Walmart Ads", desc: "Sponsored Products and Search Brand Amplifier campaigns on Walmart.com." },
      { title: "eBay Promoted Listings", desc: "Standard and advanced promoted listings to increase visibility in eBay search results." },
      { title: "Etsy Ads", desc: "On-site and off-site advertising to reach handmade and vintage product buyers." },
      { title: "Flipkart Ads", desc: "Product listing ads and brand ads on India's largest e-commerce marketplace." },
      { title: "Multi-Marketplace Strategy", desc: "Unified strategy across all marketplaces with centralized reporting and optimization." },
      { title: "Listing Syndication", desc: "Consistent product content across all marketplaces for brand integrity." },
    ]}
    process={[
      "Marketplace opportunity assessment — which platforms fit your products best.",
      "Account setup and product listing optimization across chosen marketplaces.",
      "Campaign architecture and budget allocation across platforms.",
      "Launch with controlled spend and performance benchmarking.",
      "Cross-platform optimization and budget reallocation based on ROAS.",
      "Monthly reporting with marketplace-level insights and growth recommendations.",
    ]}
    faqs={[
      { q: "Which marketplaces should I sell on?", a: "It depends on your products and target markets. We'll assess the best fit during our free audit based on your category, competition, and margins." },
      { q: "Do you manage the marketplace accounts too?", a: "We focus on advertising, but we also provide listing optimization and can recommend account management partners." },
      { q: "Can you manage UK and India marketplaces?", a: "Yes — we manage Amazon UK, eBay UK, Etsy, Flipkart, Amazon India, and more." },
    ]}
    relatedServices={[
      { title: "Amazon Ads", href: "/services/amazon-ads" },
      { title: "Shopify Marketing", href: "/services/shopify" },
      { title: "Google Shopping", href: "/services/google-ads" },
    ]}
  />
);

export default MarketplaceAds;
