import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Gem } from "lucide-react";

const Jewelry = () => (
  <IndustryPageTemplate
    icon={Gem}
    title="Jewelry Marketing"
    subtitle="Luxury-positioned advertising for fine jewelry, fashion jewelry, and handcrafted accessories."
    description="Jewelry marketing demands visual excellence, trust-building, and an understanding of both emotional and occasion-driven purchasing. Whether you sell engagement rings, fashion jewelry, or handcrafted artisan pieces, our campaigns combine stunning visual creative with strategic targeting to reach customers at key life moments. We understand the importance of perceived value, craftsmanship storytelling, and the unique consideration journey for luxury purchases."
    problems={[
      { title: "Trust & Authenticity", desc: "Online jewelry purchases require enormous trust — customers worry about quality, authenticity, and sizing." },
      { title: "High AOV, Long Cycle", desc: "Fine jewelry purchases involve weeks of research and comparison, requiring extended nurture campaigns." },
      { title: "Visual Expectations", desc: "Product photography must convey sparkle, detail, and craftsmanship — mediocre images kill conversions." },
      { title: "Occasion Timing", desc: "Engagement, anniversaries, Valentine's Day — timing campaigns around gifting occasions is critical." },
      { title: "Return Anxiety", desc: "Customers worry about fit and appearance in person, making returns policies and virtual try-ons important." },
      { title: "Competition from Marketplaces", desc: "Etsy, Amazon, and retail chains create intense competition across all price points." },
    ]}
    strategy={[
      "Audit your brand positioning, visual assets, and current advertising performance.",
      "Create premium visual content — macro photography, lifestyle imagery, and video showcases.",
      "Build occasion-based campaign calendars targeting engagement, anniversary, and gifting seasons.",
      "Implement advanced audience targeting by income, interests, life events, and gifting intent.",
      "Launch campaigns across visual platforms emphasising craftsmanship and brand story.",
      "Develop trust-building elements — certifications, reviews, virtual try-on, and generous return policies.",
    ]}
    channelMix={[
      { channel: "Meta Ads", desc: "Instagram is the premier jewelry discovery platform. Carousel ads, Reels, and Stories showcase pieces beautifully." },
      { channel: "Google Shopping", desc: "Capture high-intent searches for specific jewelry types, stones, and price ranges with rich product listings." },
      { channel: "Pinterest Ads", desc: "Jewelry is one of Pinterest's top categories. Reach women planning weddings, anniversaries, and gifts." },
      { channel: "Google Search", desc: "Target queries like 'engagement rings near me' and 'custom jewelry online' with compelling ad copy." },
      { channel: "YouTube Ads", desc: "Brand storytelling and craftsmanship videos build the emotional connection needed for luxury purchases." },
      { channel: "Email Marketing", desc: "Occasion reminders, styling guides, and exclusive collection previews drive repeat purchases." },
    ]}
    caseStudy={{
      brand: "Fine Jewelry Brand",
      challenge: "A direct-to-consumer fine jewelry brand had beautiful products but was struggling to compete with established retailers online. Their Google Shopping campaigns had low click-through rates and high CPCs.",
      solution: "We upgraded their product photography with lifestyle and on-model images, created an engagement ring quiz funnel on Meta, and launched Pinterest campaigns targeting users saving wedding-related content.",
      highlights: [
        { metric: "ROAS", value: "5.8x" },
        { metric: "Revenue Growth", value: "+240%" },
        { metric: "Engagement Ring CVR", value: "4.2%" },
        { metric: "Average AOV", value: "+35%" },
      ],
    }}
    relatedIndustries={[
      { title: "Fashion & Apparel", href: "/industries/fashion" },
      { title: "Beauty & Cosmetics", href: "/industries/beauty" },
      { title: "Custom Solutions", href: "/industries/custom" },
    ]}
  />
);

export default Jewelry;
