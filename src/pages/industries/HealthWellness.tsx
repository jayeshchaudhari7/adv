import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Heart } from "lucide-react";

const HealthWellness = () => (
  <IndustryPageTemplate
    icon={Heart}
    title="Health & Wellness Marketing"
    subtitle="Compliant, trust-building advertising for health, supplement, and wellness brands."
    description="Health and wellness marketing requires a delicate balance between persuasive advertising and regulatory compliance. Our health marketing experts understand the restrictions across Google, Meta, and TikTok for supplement, health, and wellness claims. We build campaigns that educate, build trust, and convert — all while staying fully compliant with advertising policies and health regulations in both the UK and India."
    problems={[
      { title: "Ad Policy Restrictions", desc: "Health and supplement ads face strict platform policies, leading to frequent disapprovals and account flags." },
      { title: "Claim Limitations", desc: "You can't say what your product does directly, requiring creative messaging strategies." },
      { title: "Trust Barriers", desc: "Consumers are sceptical of health claims online, making social proof and credibility essential." },
      { title: "Subscription Churn", desc: "Health supplement subscriptions face high churn, requiring strong retention strategies." },
      { title: "Regulatory Complexity", desc: "Different regulations in UK, EU, US, and India make multi-market campaigns complex." },
      { title: "Education Gap", desc: "Customers often need to understand why they need your product before they'll consider buying." },
    ]}
    strategy={[
      "Audit your current advertising for compliance risks and policy violations.",
      "Develop compliant messaging frameworks that communicate benefits without triggering disapprovals.",
      "Build education-first content funnels that nurture prospects from awareness to purchase.",
      "Create social proof campaigns leveraging testimonials, expert endorsements, and clinical data.",
      "Launch campaigns across compliant channels with proper disclaimers and substantiation.",
      "Implement subscription retention flows with health tips, usage reminders, and loyalty incentives.",
    ]}
    channelMix={[
      { channel: "Google Search", desc: "Capture symptom and solution searches with compliant ad copy and educational landing pages." },
      { channel: "Meta Ads", desc: "Build awareness through lifestyle content and testimonials that resonate with health-conscious audiences." },
      { channel: "YouTube Ads", desc: "Educational video content from experts builds trust and drives supplement consideration." },
      { channel: "Email & SMS", desc: "Nurture health journeys with educational sequences, dosage reminders, and replenishment prompts." },
      { channel: "Influencer Marketing", desc: "Partner with health and fitness influencers for authentic product endorsements and reviews." },
      { channel: "Amazon Ads", desc: "Dominate Amazon's health category where many first-time supplement buyers start their search." },
    ]}
    caseStudy={{
      brand: "Wellness Supplement Brand",
      challenge: "A natural supplement brand had their Meta ad account restricted multiple times due to health claim violations. Their messaging was effective but non-compliant, leaving them unable to scale.",
      solution: "We rewrote all ad copy using compliant messaging frameworks, shifted to education-first video content, and diversified to Google and YouTube. We also built an email funnel that did the 'heavy lifting' of health education.",
      highlights: [
        { metric: "ROAS", value: "4.5x" },
        { metric: "Subscriber Growth", value: "+280%" },
        { metric: "Ad Disapprovals", value: "-95%" },
        { metric: "LTV Increase", value: "+65%" },
      ],
    }}
    relatedIndustries={[
      { title: "Beauty & Cosmetics", href: "/industries/beauty" },
      { title: "Food & Beverage", href: "/industries/food-beverage" },
      { title: "Sporting Goods", href: "/industries/sporting-goods" },
    ]}
  />
);

export default HealthWellness;
