import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Video } from "lucide-react";

const TikTokAds = () => (
  <ServicePageTemplate
    icon={Video}
    title="TikTok Ads Management"
    subtitle="Engage Gen-Z and millennials with scroll-stopping creative on the fastest-growing social platform."
    description="TikTok has over 1 billion monthly active users and the highest engagement rates of any social platform. Our TikTok Ads team creates native, authentic content that blends seamlessly into users' feeds while driving measurable business results. From spark ads to lead generation, we help brands break through on TikTok."
    features={[
      { title: "In-Feed Ads", desc: "Native video ads that appear in users' For You feeds with seamless shopping integrations." },
      { title: "Spark Ads", desc: "Boost organic TikTok posts as paid ads to maintain authenticity and social proof." },
      { title: "TikTok Shop", desc: "Shoppable video and live shopping integrations for direct e-commerce conversions." },
      { title: "Creator Partnerships", desc: "Collaborate with TikTok creators for authentic UGC-style ad content." },
      { title: "Lead Generation", desc: "In-app lead forms that capture prospect info without leaving TikTok." },
      { title: "Pixel & Events API", desc: "Full tracking setup for accurate conversion measurement and optimization." },
    ]}
    process={[
      "Platform audit, trend analysis, and competitor creative research.",
      "Content strategy development aligned with TikTok's native formats.",
      "Creative production — short-form videos, hooks, and CTA variations.",
      "Campaign launch with audience testing and budget allocation.",
      "Performance optimization — creative refresh cycles, audience expansion.",
      "Weekly reports with trend insights and content recommendations.",
    ]}
    faqs={[
      { q: "Is TikTok right for my business?", a: "TikTok works for most B2C brands, especially in fashion, beauty, food, fitness, education, and e-commerce. We'll assess your fit during our free audit." },
      { q: "What kind of content works on TikTok?", a: "Authentic, entertaining, and educational content performs best. We create native-feeling ads that don't look like traditional advertising." },
      { q: "What's the minimum budget?", a: "TikTok campaigns start from £500/month (₹50,000). We recommend £1,500+ for meaningful data and optimization." },
      { q: "Do you handle video production?", a: "Yes, we produce all TikTok creative in-house, including UGC-style videos, product demos, and trend-based content." },
    ]}
    relatedServices={[
      { title: "Meta Ads", href: "/services/meta-ads" },
      { title: "Creative Services", href: "/services/creative" },
      { title: "Influencer Marketing", href: "/services/influencer" },
    ]}
  />
);

export default TikTokAds;
