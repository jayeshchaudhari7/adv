import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BarChart3 } from "lucide-react";

const Analytics = () => (
  <ServicePageTemplate
    icon={BarChart3}
    title="Analytics & CRO"
    subtitle="Data-driven conversion rate optimization to squeeze more revenue from your existing traffic."
    description="You're paying for traffic — make sure it converts. Our Analytics & CRO team uses data, heatmaps, user recordings, and rigorous A/B testing to identify and fix conversion bottlenecks. We don't guess; we test, measure, and iterate until your website turns more visitors into customers."
    features={[
      { title: "GA4 Setup & Audit", desc: "Proper Google Analytics 4 configuration with custom events, goals, and e-commerce tracking." },
      { title: "Heatmap Analysis", desc: "Visual analysis of user behavior — clicks, scrolls, and attention patterns." },
      { title: "A/B Testing", desc: "Rigorous split testing of headlines, CTAs, layouts, and checkout flows." },
      { title: "Landing Page Optimization", desc: "High-converting landing pages designed for your advertising campaigns." },
      { title: "Funnel Analysis", desc: "Identify where users drop off and implement fixes to improve conversion rates." },
      { title: "Attribution Modelling", desc: "Understand which channels truly drive conversions with multi-touch attribution." },
    ]}
    process={[
      "Analytics audit — tracking accuracy, data quality, and reporting gaps.",
      "User behavior analysis — heatmaps, session recordings, and funnel analysis.",
      "Hypothesis development — prioritized list of conversion improvement opportunities.",
      "A/B test design and implementation.",
      "Statistical analysis and winner deployment.",
      "Continuous testing cycle with monthly CRO reports.",
    ]}
    faqs={[
      { q: "What tools do you use for CRO?", a: "We use GA4, Hotjar, Microsoft Clarity, Google Optimize (or VWO), and custom dashboards." },
      { q: "How much can CRO improve my revenue?", a: "Most clients see 15-40% improvement in conversion rates within 3-6 months of systematic testing." },
      { q: "Do I need a minimum traffic level?", a: "For statistically significant A/B tests, we recommend at least 10,000 monthly visitors. Below that, we focus on qualitative analysis and best-practice improvements." },
    ]}
    relatedServices={[
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Creative Services", href: "/services/creative" },
      { title: "Email & SMS", href: "/services/email-marketing" },
    ]}
  />
);

export default Analytics;
