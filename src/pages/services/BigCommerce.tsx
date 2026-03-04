import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp } from "lucide-react";

const BigCommerce = () => (
  <ServicePageTemplate
    icon={TrendingUp}
    title="BigCommerce Marketing"
    subtitle="Scalable marketing strategies for BigCommerce merchants — from startup to enterprise."
    description="BigCommerce offers powerful built-in features for growing brands. We help BigCommerce merchants maximize their platform's potential through strategic advertising, SEO, and conversion optimization designed for BigCommerce's unique architecture and capabilities."
    features={[
      { title: "Channel Manager Ads", desc: "Advertising across Google, Facebook, and marketplaces via BigCommerce's native integrations." },
      { title: "BigCommerce SEO", desc: "Leverage BigCommerce's SEO-friendly URLs and customizable metadata for organic growth." },
      { title: "Product Feed Management", desc: "Optimized product feeds for Google Shopping, Facebook, and comparison sites." },
      { title: "Conversion Optimization", desc: "A/B testing, checkout optimization, and UX improvements." },
      { title: "Email Automation", desc: "Abandoned cart recovery, post-purchase flows, and customer win-back campaigns." },
      { title: "Multi-Storefront", desc: "Marketing strategies for BigCommerce's multi-storefront capabilities." },
    ]}
    process={[
      "BigCommerce store audit and marketing assessment.",
      "Channel strategy and campaign planning.",
      "Technical setup and integration configuration.",
      "Campaign launch and testing.",
      "Optimization and scaling.",
      "Performance reporting and growth planning.",
    ]}
    faqs={[
      { q: "Why BigCommerce over Shopify?", a: "Both are excellent platforms. BigCommerce offers more built-in features and no transaction fees. We optimize marketing regardless of platform." },
      { q: "Do you handle B2B BigCommerce?", a: "Yes, we support B2B BigCommerce stores with specialized advertising and lead generation strategies." },
    ]}
    relatedServices={[
      { title: "Shopify Marketing", href: "/services/shopify" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Email & SMS", href: "/services/email-marketing" },
    ]}
  />
);

export default BigCommerce;
