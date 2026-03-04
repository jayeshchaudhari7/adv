import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp } from "lucide-react";

const Shopify = () => (
  <ServicePageTemplate
    icon={TrendingUp}
    title="Shopify Marketing"
    subtitle="Full-funnel growth strategies specifically built for Shopify and Shopify Plus stores."
    description="As Shopify specialists, we understand the unique opportunities and challenges of the platform. From store optimization to multi-channel advertising, we build growth engines specifically for Shopify merchants. Our strategies leverage Shopify's native features, app ecosystem, and integrations to maximize your store's revenue."
    features={[
      { title: "Store Optimization", desc: "Speed, UX, and conversion optimization for your Shopify storefront." },
      { title: "Multi-Channel Ads", desc: "Google, Meta, TikTok, and Pinterest campaigns connected to your Shopify catalogue." },
      { title: "Email & SMS Flows", desc: "Klaviyo-powered automation — welcome series, abandoned cart, post-purchase." },
      { title: "Shopify SEO", desc: "Technical and on-page SEO to drive organic traffic to your store." },
      { title: "App Stack Optimization", desc: "Curate the right apps for analytics, reviews, upsells, and loyalty." },
      { title: "Shopify Plus Scaling", desc: "Enterprise solutions for high-growth brands — checkout customization, B2B, and multi-store." },
    ]}
    process={[
      "Shopify store audit — speed, UX, conversion funnel, and app stack review.",
      "Growth strategy development with prioritized initiatives and KPIs.",
      "Implementation — store optimizations, tracking setup, and campaign launch.",
      "Multi-channel advertising across Google, Meta, and TikTok with Shopify integration.",
      "Ongoing optimization — A/B testing, creative refresh, and funnel improvements.",
      "Monthly growth reviews with revenue attribution and scaling plans.",
    ]}
    faqs={[
      { q: "Do you build Shopify stores?", a: "We focus on marketing and growth, but we partner with top Shopify developers for store builds and custom development." },
      { q: "Which Shopify apps do you recommend?", a: "We recommend a lean app stack — typically Klaviyo, Judge.me, and a few conversion-focused apps based on your needs." },
      { q: "Can you help migrate to Shopify?", a: "We can advise on migration strategy and connect you with development partners for technical migration." },
    ]}
    relatedServices={[
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Email & SMS", href: "/services/email-marketing" },
      { title: "Analytics & CRO", href: "/services/analytics" },
    ]}
  />
);

export default Shopify;
