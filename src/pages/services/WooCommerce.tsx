import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp } from "lucide-react";

const WooCommerce = () => (
  <ServicePageTemplate
    icon={TrendingUp}
    title="WooCommerce Marketing"
    subtitle="Growth marketing for WordPress WooCommerce stores — ads, SEO, and conversion optimization."
    description="WooCommerce powers millions of online stores worldwide. Our WooCommerce marketing specialists help you drive traffic, increase conversions, and maximize customer lifetime value through multi-channel advertising, SEO, and retention marketing tailored for the WordPress ecosystem."
    features={[
      { title: "WooCommerce SEO", desc: "Technical and on-page SEO optimized for WooCommerce's WordPress foundation." },
      { title: "Google Shopping Feed", desc: "Product feed optimization and Google Merchant Center management." },
      { title: "Multi-Channel Ads", desc: "Google, Meta, and marketplace advertising connected to your WooCommerce catalogue." },
      { title: "Speed Optimization", desc: "Page speed improvements for better user experience and ad Quality Scores." },
      { title: "Email Marketing", desc: "Automated email flows using Mailchimp, Klaviyo, or WooCommerce-native tools." },
      { title: "Analytics Setup", desc: "GA4, conversion tracking, and e-commerce reporting for data-driven decisions." },
    ]}
    process={[
      "WooCommerce store and marketing audit.",
      "Growth strategy with channel prioritization.",
      "Technical setup — tracking, feeds, and integrations.",
      "Campaign launch across selected channels.",
      "Ongoing optimization and testing.",
      "Monthly reporting and strategic reviews.",
    ]}
    faqs={[
      { q: "Do you work with all WooCommerce themes?", a: "Yes, we work with any WooCommerce setup regardless of theme or hosting provider." },
      { q: "Can you help with WooCommerce plugins?", a: "We recommend and help configure marketing-related plugins for tracking, SEO, and email." },
    ]}
    relatedServices={[
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Shopify Marketing", href: "/services/shopify" },
      { title: "Analytics & CRO", href: "/services/analytics" },
    ]}
  />
);

export default WooCommerce;
