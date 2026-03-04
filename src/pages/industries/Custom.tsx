import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Settings } from "lucide-react";

const Custom = () => (
  <IndustryPageTemplate
    icon={Settings}
    title="Custom Marketing Solutions"
    subtitle="Bespoke digital marketing strategies tailored to your unique industry and business model."
    description="Don't see your industry listed? No problem. Our team has worked across dozens of verticals — from B2B SaaS to luxury hospitality, automotive parts to educational courses. We believe every business deserves a marketing strategy built from the ground up for their specific market dynamics, customer behaviour, and competitive landscape. We don't use cookie-cutter approaches — we build custom growth engines."
    problems={[
      { title: "Unique Market Dynamics", desc: "Every industry has specific buying patterns, decision-makers, and sales cycles that generic strategies miss." },
      { title: "Niche Audiences", desc: "Specialised products often have smaller, harder-to-reach target audiences requiring precise targeting." },
      { title: "Complex Sales Cycles", desc: "B2B and high-consideration purchases involve multiple stakeholders and longer decision timelines." },
      { title: "Limited Benchmarks", desc: "Niche industries lack the advertising benchmarks available for common verticals." },
      { title: "Platform Fit Uncertainty", desc: "Not every channel works for every business — finding the right mix requires testing and expertise." },
      { title: "Scaling Challenges", desc: "What works at £5K/month ad spend may not work at £50K — scaling requires strategic evolution." },
    ]}
    strategy={[
      "Deep-dive discovery session to understand your business model, customers, and competitive landscape.",
      "Research your industry's digital marketing landscape — what competitors do, where customers are, and what works.",
      "Develop a custom channel strategy based on your specific audience behaviour and purchase journey.",
      "Create industry-specific creative and messaging that resonates with your target market.",
      "Launch test campaigns across recommended channels with clear success metrics.",
      "Iterate, optimise, and scale based on performance data — doubling down on what works.",
    ]}
    channelMix={[
      { channel: "Google Ads", desc: "Search, Shopping, and Display campaigns tailored to your industry's search behaviour and intent patterns." },
      { channel: "Meta Ads", desc: "Advanced targeting using custom and lookalike audiences based on your ideal customer profile." },
      { channel: "LinkedIn Ads", desc: "For B2B businesses — target by job title, industry, company size, and seniority level." },
      { channel: "Email Marketing", desc: "Custom nurture sequences aligned with your sales cycle and customer decision journey." },
      { channel: "Content Marketing", desc: "Educational content that establishes authority and captures organic search traffic." },
      { channel: "Analytics & CRO", desc: "Custom dashboards and conversion optimisation specific to your business KPIs." },
    ]}
    caseStudy={{
      brand: "Niche B2B Brand",
      challenge: "A specialised industrial supplies company had no digital marketing presence. Their entire business relied on trade shows and cold calling, and they wanted to modernise their lead generation.",
      solution: "We built a Google Ads strategy targeting long-tail industry-specific search terms, created LinkedIn campaigns targeting procurement managers, and developed an email nurture sequence for trade show contacts.",
      highlights: [
        { metric: "Lead Volume", value: "+520%" },
        { metric: "Cost Per Lead", value: "-65%" },
        { metric: "Pipeline Value", value: "£2.4M" },
        { metric: "Close Rate", value: "18%" },
      ],
    }}
    relatedIndustries={[
      { title: "Fashion & Apparel", href: "/industries/fashion" },
      { title: "Electronics & Tech", href: "/industries/electronics" },
      { title: "Health & Wellness", href: "/industries/health-wellness" },
    ]}
  />
);

export default Custom;
