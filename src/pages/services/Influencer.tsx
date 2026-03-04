import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Users } from "lucide-react";

const Influencer = () => (
  <ServicePageTemplate
    icon={Users}
    title="Influencer Marketing"
    subtitle="Partner with the right creators to build authentic brand awareness and drive sales."
    description="Influencer marketing bridges the trust gap between brands and consumers. We connect you with vetted creators across Instagram, TikTok, YouTube, and LinkedIn who authentically align with your brand values. From nano-influencers to macro-creators, we manage the entire process from discovery to ROI measurement."
    features={[
      { title: "Creator Discovery", desc: "Data-driven influencer identification based on audience demographics, engagement, and brand fit." },
      { title: "Campaign Strategy", desc: "Goal-aligned campaigns — awareness, launches, UGC content, or direct sales." },
      { title: "Negotiation & Contracts", desc: "Fair rate negotiation and legally compliant contracts protecting your brand." },
      { title: "Content Approval", desc: "Creative direction and content review to ensure brand consistency." },
      { title: "Performance Tracking", desc: "Unique links, promo codes, and pixel tracking for accurate ROI measurement." },
      { title: "Whitelisted Ads", desc: "Run paid ads through influencer handles for higher engagement and credibility." },
    ]}
    process={[
      "Brand audit and campaign objective setting.",
      "Creator research, shortlisting, and vetting.",
      "Outreach, negotiation, and contracting.",
      "Creative briefing and content production oversight.",
      "Campaign launch and real-time monitoring.",
      "Performance analysis and ROI reporting.",
    ]}
    faqs={[
      { q: "How do you choose influencers?", a: "We analyze engagement rates, audience authenticity, content quality, and brand alignment — not just follower count." },
      { q: "What's the minimum budget for influencer campaigns?", a: "Nano/micro-influencer campaigns can start from £2,000 (₹2 lakh). Larger campaigns with macro-influencers require £10,000+." },
      { q: "Do you manage UK and India influencers?", a: "Yes, we have networks in both markets and manage cross-border influencer campaigns." },
    ]}
    relatedServices={[
      { title: "TikTok Ads", href: "/services/tiktok-ads" },
      { title: "Meta Ads", href: "/services/meta-ads" },
      { title: "Creative Services", href: "/services/creative" },
    ]}
  />
);

export default Influencer;
