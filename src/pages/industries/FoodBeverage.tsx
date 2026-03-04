import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { UtensilsCrossed } from "lucide-react";

const FoodBeverage = () => (
  <IndustryPageTemplate
    icon={UtensilsCrossed}
    title="Food & Beverage Marketing"
    subtitle="Appetite-driven advertising for D2C food brands, beverages, and specialty food companies."
    description="Food and beverage marketing is all about creating cravings through mouth-watering visuals, compelling brand stories, and strategic targeting. Whether you sell artisan snacks, health foods, craft beverages, or meal kits, our team builds campaigns that make people hungry to buy. We understand the unique challenges of food eCommerce — from perishability and shipping logistics to subscription models and local delivery zones."
    problems={[
      { title: "Perishability", desc: "Food products have shelf life constraints that affect inventory, shipping zones, and campaign timing." },
      { title: "Low AOV", desc: "Food and beverage purchases are typically lower value, requiring high volume and repeat purchases." },
      { title: "Shipping Costs", desc: "Cold chain and heavy-weight shipping can eat into margins, making profitability challenging." },
      { title: "Taste Barrier", desc: "Customers can't taste before buying online, making compelling imagery and reviews essential." },
      { title: "Subscription Fatigue", desc: "Food subscription boxes face high cancellation rates after the novelty wears off." },
      { title: "Seasonal Demand", desc: "Gift seasons, holidays, and weather patterns dramatically affect food and beverage sales." },
    ]}
    strategy={[
      "Audit your product range, pricing, shipping zones, and current marketing performance.",
      "Create appetite-driven creative — professional food photography and recipe video content.",
      "Build geo-targeted campaigns optimised for your delivery zones and shipping capabilities.",
      "Implement subscription-focused funnels with trial offers and easy commitment entry points.",
      "Launch multi-channel campaigns combining social discovery with search capture.",
      "Develop retention programmes with recipe inspiration, seasonal bundles, and loyalty rewards.",
    ]}
    channelMix={[
      { channel: "Meta Ads", desc: "Food content thrives on Instagram and Facebook. Carousel recipe ads, Stories, and Reels drive discovery and cravings." },
      { channel: "TikTok Ads", desc: "Food TikTok is massive. We create trending recipe content and ASMR-style product showcases." },
      { channel: "Google Ads", desc: "Capture specific searches for specialty foods, dietary requirements, and gifting occasions." },
      { channel: "Email & SMS", desc: "Recipe inspiration emails, reorder reminders, and seasonal gift guides drive repeat purchases." },
      { channel: "Influencer Marketing", desc: "Food bloggers and recipe creators provide authentic product integration that drives immediate sales." },
      { channel: "Local Advertising", desc: "Geo-targeted campaigns for local delivery zones, farmers market events, and retail locations." },
    ]}
    caseStudy={{
      brand: "D2C Specialty Food Brand",
      challenge: "An artisan snack brand had great products but couldn't scale beyond their local market. Shipping costs were eating into margins, and their Meta campaigns weren't generating enough first-time orders.",
      solution: "We restructured their pricing to include shipping, created mouth-watering TikTok recipe content, launched a '3-pack trial' offer funnel, and built geo-targeted campaigns focusing on regions with the best unit economics.",
      highlights: [
        { metric: "ROAS", value: "3.6x" },
        { metric: "New Customers", value: "+420%" },
        { metric: "Subscription Rate", value: "32%" },
        { metric: "Repeat Purchase", value: "48%" },
      ],
    }}
    relatedIndustries={[
      { title: "Health & Wellness", href: "/industries/health-wellness" },
      { title: "Pet Supplies", href: "/industries/pet-supplies" },
      { title: "Custom Solutions", href: "/industries/custom" },
    ]}
  />
);

export default FoodBeverage;
