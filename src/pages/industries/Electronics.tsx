import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Cpu } from "lucide-react";

const Electronics = () => (
  <IndustryPageTemplate
    icon={Cpu}
    title="Electronics & Tech Marketing"
    subtitle="Performance advertising for consumer electronics, gadgets, and tech accessories brands."
    description="Electronics and tech products live in a high-consideration, spec-driven market where customers compare features, read reviews, and research extensively before purchasing. Our tech marketing strategies combine search dominance with visual storytelling to capture both specification-driven and impulse buyers. We understand the unique challenges of tech marketing — from rapid product lifecycles to complex comparison shopping and the importance of review-driven trust."
    problems={[
      { title: "Spec-Driven Decisions", desc: "Tech buyers compare specifications across multiple products, requiring detailed and accurate product data." },
      { title: "Rapid Product Cycles", desc: "New models launch frequently, requiring fast creative turnaround and catalogue management." },
      { title: "Price Comparison", desc: "Electronics shoppers aggressively compare prices across retailers, pressuring margins." },
      { title: "Review Dependency", desc: "Purchase decisions heavily rely on reviews and ratings, making reputation management critical." },
      { title: "Complex Attribution", desc: "Multi-device research journeys make it difficult to attribute conversions accurately." },
      { title: "Amazon Dominance", desc: "Competing with Amazon's convenience and Prime shipping for electronics sales." },
    ]}
    strategy={[
      "Audit your product data, competitive positioning, and current channel performance.",
      "Build spec-rich product feeds with comparison-friendly attributes and competitive pricing data.",
      "Create content that simplifies complex specs into benefit-driven messaging.",
      "Implement cross-device tracking and extended attribution for accurate performance measurement.",
      "Launch campaigns across Google Shopping, Amazon, and YouTube for product demonstrations.",
      "Develop review generation strategies and social proof campaigns to build buyer confidence.",
    ]}
    channelMix={[
      { channel: "Google Shopping", desc: "Dominate product search results with optimised feeds featuring detailed specs, ratings, and competitive pricing." },
      { channel: "YouTube Ads", desc: "Product demonstrations and unboxing videos drive consideration for tech products. Video ads convert researchers." },
      { channel: "Amazon Ads", desc: "Essential for electronics — Sponsored Products, Brand Store, and A+ Content to compete on the largest marketplace." },
      { channel: "Google Search", desc: "Capture comparison queries like 'best wireless earbuds 2026' and 'laptop vs tablet' with helpful content." },
      { channel: "Meta Ads", desc: "Drive impulse purchases for accessories and gadgets with dynamic product ads and flash sale promotions." },
      { channel: "Remarketing", desc: "Retarget researchers with spec comparisons, review highlights, and limited-time pricing." },
    ]}
    caseStudy={{
      brand: "Consumer Electronics Brand",
      challenge: "A D2C electronics brand was losing market share to Amazon and struggling to justify their own website's higher prices. Their Google Shopping campaigns had poor click-through rates.",
      solution: "We rebuilt their product feeds with enhanced titles and review stars, launched YouTube product demo campaigns, and created a value-proposition-focused landing page strategy highlighting warranty, support, and bundle benefits.",
      highlights: [
        { metric: "ROAS", value: "3.9x" },
        { metric: "D2C Revenue", value: "+165%" },
        { metric: "CTR Increase", value: "+78%" },
        { metric: "CAC Reduction", value: "-35%" },
      ],
    }}
    relatedIndustries={[
      { title: "Home & Garden", href: "/industries/home-garden" },
      { title: "Sporting Goods", href: "/industries/sporting-goods" },
      { title: "Custom Solutions", href: "/industries/custom" },
    ]}
  />
);

export default Electronics;
