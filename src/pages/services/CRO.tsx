import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BarChart3 } from "lucide-react";

const CRO = () => (
  <ServicePageTemplate
    icon={BarChart3}
    title="Conversion Rate Optimization"
    subtitle="Turn more visitors into customers with data-driven testing and optimization."
    description="CRO is the highest-ROI activity in digital marketing. Every 1% improvement in conversion rate directly increases revenue without spending more on ads. Our CRO specialists use qualitative and quantitative data to systematically improve every step of your customer journey."
    features={[
      { title: "User Research", desc: "Surveys, interviews, and usability testing to understand customer needs and objections." },
      { title: "Heatmap & Scroll Analysis", desc: "Visual data showing exactly how users interact with your pages." },
      { title: "A/B & Multivariate Testing", desc: "Rigorous testing methodology with statistical significance requirements." },
      { title: "Checkout Optimization", desc: "Reduce cart abandonment with streamlined, trust-building checkout experiences." },
      { title: "Mobile Optimization", desc: "Ensure your mobile experience converts as well as desktop." },
      { title: "Page Speed Optimization", desc: "Faster pages = higher conversions. We optimize for Core Web Vitals." },
    ]}
    process={[
      "Quantitative analysis — funnel data, drop-off points, and conversion benchmarks.",
      "Qualitative research — heatmaps, recordings, surveys, and user testing.",
      "Hypothesis prioritization using the ICE framework (Impact, Confidence, Ease).",
      "Test design and development.",
      "Test execution with proper statistical methodology.",
      "Results analysis, documentation, and next test planning.",
    ]}
    faqs={[
      { q: "How long does each test take?", a: "Tests typically run 2-4 weeks depending on traffic volume. We need statistical significance before declaring a winner." },
      { q: "What's a good conversion rate?", a: "Average e-commerce conversion is 2-3%. Top performers hit 5-8%. We'll benchmark yours against your industry." },
    ]}
    relatedServices={[
      { title: "Analytics & Reporting", href: "/services/analytics" },
      { title: "Google Ads", href: "/services/google-ads" },
      { title: "Creative Services", href: "/services/creative" },
    ]}
  />
);

export default CRO;
