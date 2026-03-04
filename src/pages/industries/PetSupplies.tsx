import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Dog } from "lucide-react";

const PetSupplies = () => (
  <IndustryPageTemplate
    icon={Dog}
    title="Pet Supplies Marketing"
    subtitle="Emotionally-driven campaigns for pet food, accessories, and pet care brands."
    description="Pet parents are passionate, loyal, and willing to spend on quality products for their furry family members. The pet industry is booming, and we help pet supply brands tap into this emotional connection with campaigns that combine heartwarming content with performance-driven targeting. From premium pet food subscriptions to innovative accessories, we understand what makes pet owners click, engage, and convert."
    problems={[
      { title: "Emotional Decision Making", desc: "Pet purchases are driven by love and guilt — your messaging must connect emotionally while demonstrating value." },
      { title: "Subscription Competition", desc: "Every pet brand offers subscriptions, making differentiation and retention increasingly difficult." },
      { title: "Species/Size Segmentation", desc: "Dogs, cats, small pets — each has different products and audiences, complicating campaign structure." },
      { title: "Amazon Dominance", desc: "Amazon is the #1 pet supply destination. Competing for D2C sales requires a compelling value proposition." },
      { title: "Weight & Shipping", desc: "Pet food is heavy, making shipping expensive and margin-challenging for D2C brands." },
      { title: "Brand Loyalty", desc: "Once pet owners find something that works, they rarely switch — making first-mover advantage crucial." },
    ]}
    strategy={[
      "Audit your product range, targeting, and current campaign performance across channels.",
      "Create emotionally resonant content featuring real pets and authentic owner testimonials.",
      "Build pet-specific audience segments based on species, breed size, life stage, and health needs.",
      "Launch acquisition campaigns with irresistible trial offers and sample packs.",
      "Implement subscription funnels with flexible scheduling and easy customisation options.",
      "Develop retention programmes with pet birthday rewards, wellness tips, and community features.",
    ]}
    channelMix={[
      { channel: "Meta Ads", desc: "Pet content performs exceptionally on Facebook and Instagram. UGC pet videos and carousel product ads drive high engagement." },
      { channel: "Google Shopping", desc: "Capture intent-driven searches for specific pet products, breeds, and health-related needs." },
      { channel: "TikTok Ads", desc: "Pet TikTok is one of the most engaged communities. Cute pet content combined with product showcases drives viral reach." },
      { channel: "Amazon Ads", desc: "Essential for pet supplies — dominate category search with Sponsored Products and Brand Store presence." },
      { channel: "Email & SMS", desc: "Automate reorder reminders, pet health tips, and seasonal product recommendations based on pet profiles." },
      { channel: "Influencer Marketing", desc: "Pet influencers and veterinarians provide trusted endorsements that drive immediate purchase intent." },
    ]}
    caseStudy={{
      brand: "Premium Pet Food Brand",
      challenge: "A natural pet food brand was losing market share to Amazon and struggling to build a D2C subscription base. Their acquisition cost was 2x their first-order margin.",
      solution: "We launched a 'free trial' funnel on Meta with UGC content from real pet owners, created breed-specific landing pages, and built an email nurture sequence featuring pet health education that converted trial users into subscribers.",
      highlights: [
        { metric: "ROAS", value: "4.1x" },
        { metric: "Subscribers", value: "+380%" },
        { metric: "Trial → Sub Rate", value: "45%" },
        { metric: "Churn Reduction", value: "-35%" },
      ],
    }}
    relatedIndustries={[
      { title: "Health & Wellness", href: "/industries/health-wellness" },
      { title: "Food & Beverage", href: "/industries/food-beverage" },
      { title: "Custom Solutions", href: "/industries/custom" },
    ]}
  />
);

export default PetSupplies;
