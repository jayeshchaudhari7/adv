import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Sparkles } from "lucide-react";

const Beauty = () => (
  <IndustryPageTemplate
    icon={Sparkles}
    title="Beauty & Cosmetics Marketing"
    subtitle="Data-driven growth strategies for beauty, skincare, and cosmetics brands."
    description="The beauty industry thrives on visual storytelling, influencer trust, and product discovery. Our beauty marketing specialists combine performance advertising with influencer partnerships and retention strategies to help cosmetics and skincare brands build loyal communities and scale revenue. We understand the unique regulatory landscape, the power of before-and-after content, and how to turn first-time buyers into subscription customers."
    problems={[
      { title: "Saturated Market", desc: "Thousands of beauty brands compete for attention, making differentiation and standout creative essential." },
      { title: "Regulatory Restrictions", desc: "Beauty and skincare ads face strict platform policies around claims, requiring careful copy and creative compliance." },
      { title: "Influencer Dependency", desc: "Many beauty brands over-rely on influencer marketing without integrating it into a broader performance strategy." },
      { title: "Shade/SKU Complexity", desc: "Large shade ranges and SKU counts make product feed management and dynamic ads challenging." },
      { title: "Customer Education", desc: "Skincare products often require education about ingredients and routines before purchase." },
      { title: "Subscription Churn", desc: "Beauty subscription models face high churn rates that erode long-term profitability." },
    ]}
    strategy={[
      "Audit your current campaigns, creative library, and customer journey from discovery to purchase.",
      "Develop a content strategy combining UGC, influencer content, and professional product photography.",
      "Build advanced audience segments based on skin type, beauty concerns, and purchase behaviour.",
      "Launch multi-platform campaigns optimised for product discovery and sample/trial conversions.",
      "Implement retention flows — replenishment reminders, routine builders, and loyalty rewards.",
      "Scale winning creative concepts while continuously testing new angles and formats.",
    ]}
    channelMix={[
      { channel: "Meta Ads", desc: "Instagram is the #1 beauty discovery platform. We use Reels, Stories, and dynamic product ads to drive both awareness and conversions." },
      { channel: "TikTok Ads", desc: "Beauty content goes viral on TikTok. We create authentic GRWM and tutorial-style ads that feel native to the platform." },
      { channel: "Google Ads", desc: "Capture high-intent searchers looking for specific products, ingredients, and solutions with Search and Shopping campaigns." },
      { channel: "Influencer Marketing", desc: "Partner with beauty creators for authentic reviews, tutorials, and unboxing content that builds trust." },
      { channel: "Email & SMS", desc: "Drive replenishment purchases, cross-sell routines, and nurture trial customers into full-size buyers." },
      { channel: "Amazon Ads", desc: "Dominate Amazon's beauty category with Sponsored Products, Brands, and A+ content optimisation." },
    ]}
    caseStudy={{
      brand: "Skincare Brand",
      challenge: "A clean skincare brand had strong organic social following but couldn't profitably scale paid advertising. Their CPA was 3x their target and conversion rates were below 1%.",
      solution: "We restructured their funnel — using TikTok and Instagram for education and awareness, Google for capturing high-intent demand, and email for nurturing trial customers into subscribers. We also optimised their landing pages for mobile conversion.",
      highlights: [
        { metric: "ROAS", value: "5.2x" },
        { metric: "Subscriber Growth", value: "+340%" },
        { metric: "CPA Reduction", value: "-62%" },
        { metric: "Conv. Rate", value: "3.8%" },
      ],
    }}
    relatedIndustries={[
      { title: "Fashion & Apparel", href: "/industries/fashion" },
      { title: "Health & Wellness", href: "/industries/health-wellness" },
      { title: "Jewelry", href: "/industries/jewelry" },
    ]}
  />
);

export default Beauty;
