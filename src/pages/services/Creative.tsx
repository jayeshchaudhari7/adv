import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Palette } from "lucide-react";

const Creative = () => (
  <ServicePageTemplate
    icon={Palette}
    title="Creative Services"
    subtitle="Performance-optimized ad creatives, landing pages, and video production that convert."
    description="Great marketing starts with great creative. Our in-house creative team produces scroll-stopping ad visuals, high-converting landing pages, and engaging video content — all designed with performance data in mind. We don't just make things look good; we make them convert."
    features={[
      { title: "Ad Creative Design", desc: "Static images, carousels, and animated ads optimized for each platform's specifications." },
      { title: "Video Production", desc: "Short-form and long-form video ads for TikTok, YouTube, Instagram Reels, and Facebook." },
      { title: "Landing Page Design", desc: "Conversion-focused landing pages with A/B testing built into the design process." },
      { title: "UGC-Style Content", desc: "Authentic user-generated-content-style videos that drive higher engagement and trust." },
      { title: "Brand Guidelines", desc: "Consistent visual identity across all advertising channels and touchpoints." },
      { title: "Creative Testing", desc: "Systematic testing of visual elements, messaging, and formats to find winners." },
    ]}
    process={[
      "Creative brief and brand immersion — understanding your brand, audience, and goals.",
      "Concept development — mood boards, storyboards, and copy frameworks.",
      "Production — design, filming, editing, and animation.",
      "Platform optimization — adapting assets for each channel's specs and best practices.",
      "Performance review — analyzing creative performance data.",
      "Iteration — refreshing and evolving creative based on results.",
    ]}
    faqs={[
      { q: "How many creatives do you produce per month?", a: "It depends on your plan, but typically 10-20 ad variations per month including static, video, and carousel formats." },
      { q: "Can you work with our existing brand guidelines?", a: "Absolutely. We work within your brand guidelines while pushing creative boundaries for performance." },
      { q: "Do you handle product photography?", a: "We can coordinate product shoots and also create compelling ads from existing product images." },
    ]}
    relatedServices={[
      { title: "Meta Ads", href: "/services/meta-ads" },
      { title: "TikTok Ads", href: "/services/tiktok-ads" },
      { title: "Analytics & CRO", href: "/services/analytics" },
    ]}
  />
);

export default Creative;
