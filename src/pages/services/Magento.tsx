import ServicePageTemplate from "@/components/ServicePageTemplate";
import { TrendingUp } from "lucide-react";

const Magento = () => (
  <ServicePageTemplate
    icon={TrendingUp}
    title="Magento Marketing"
    subtitle="Enterprise-grade marketing for Adobe Commerce (Magento) stores with complex catalogues."
    description="Magento (Adobe Commerce) powers some of the world's largest e-commerce brands. Our team specializes in marketing strategies for Magento's complex, customizable ecosystem — from multi-store setups to large product catalogues with advanced pricing and B2B capabilities."
    features={[
      { title: "Large Catalogue Ads", desc: "Feed management and advertising for catalogues with thousands of SKUs." },
      { title: "Magento SEO", desc: "Technical SEO for Magento's complex URL structures and category architecture." },
      { title: "Multi-Store Marketing", desc: "Unified strategies across multiple Magento store views and websites." },
      { title: "B2B Advertising", desc: "Lead generation and account-based marketing for Magento B2B." },
      { title: "Performance Optimization", desc: "Page speed and Core Web Vitals improvement for better ad performance." },
      { title: "Advanced Analytics", desc: "Custom reporting and attribution modelling for complex e-commerce operations." },
    ]}
    process={[
      "Magento store and marketing ecosystem audit.",
      "Strategy development for your specific Magento setup.",
      "Technical integrations — tracking, feeds, and data layers.",
      "Campaign launch across priority channels.",
      "Ongoing optimization with Magento-specific considerations.",
      "Enterprise reporting with custom KPI dashboards.",
    ]}
    faqs={[
      { q: "Do you work with both Magento Open Source and Adobe Commerce?", a: "Yes, we support both versions with strategies adapted to each platform's capabilities." },
      { q: "Can you handle complex product feeds?", a: "Absolutely. We specialize in managing feeds for large, complex catalogues with variants, custom attributes, and dynamic pricing." },
    ]}
    relatedServices={[
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Analytics & CRO", href: "/services/analytics" },
      { title: "Shopify Marketing", href: "/services/shopify" },
    ]}
  />
);

export default Magento;
