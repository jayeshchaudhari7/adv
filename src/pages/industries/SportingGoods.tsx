import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Dumbbell } from "lucide-react";

const SportingGoods = () => (
  <IndustryPageTemplate
    icon={Dumbbell}
    title="Sporting Goods Marketing"
    subtitle="High-performance campaigns for sports equipment, activewear, and fitness brands."
    description="Sporting goods marketing requires understanding the intersection of passion, performance, and lifestyle. Whether you sell gym equipment, outdoor gear, activewear, or sports accessories, our campaigns connect with active consumers at the right moment — from New Year fitness resolutions to summer outdoor season. We combine performance advertising with community building to turn one-time buyers into brand advocates."
    problems={[
      { title: "Seasonal Peaks", desc: "January fitness resolutions, summer outdoor gear, winter sports — demand fluctuates dramatically throughout the year." },
      { title: "Category Breadth", desc: "Sporting goods spans thousands of SKUs across dozens of sports, making catalogue management complex." },
      { title: "Size & Fit Concerns", desc: "Activewear and footwear purchases are plagued by sizing uncertainty, driving high return rates." },
      { title: "Brand Competition", desc: "Competing with Nike, Adidas, and other giants requires clear niche positioning and community building." },
      { title: "Marketplace Pressure", desc: "Amazon, Dick's, and Decathlon capture most sporting goods searches, challenging D2C growth." },
      { title: "Community Expectations", desc: "Sports enthusiasts expect authentic brand involvement in their sport, not just product advertising." },
    ]}
    strategy={[
      "Audit your product catalogue, seasonal patterns, and current channel performance.",
      "Build sport-specific audience segments based on activity type, skill level, and purchase history.",
      "Create authentic action content — athletes using products in real-world training and competition.",
      "Implement seasonal campaign strategies aligned with sport-specific demand patterns.",
      "Launch cross-channel campaigns combining discovery (social) with capture (search/marketplace).",
      "Develop community programmes — training challenges, athlete partnerships, and UGC campaigns.",
    ]}
    channelMix={[
      { channel: "Google Shopping", desc: "Capture product-specific searches with detailed feeds including sport type, skill level, and specifications." },
      { channel: "Meta Ads", desc: "Target sport-specific audiences with action video content and dynamic product ads." },
      { channel: "TikTok Ads", desc: "Fitness and sports content thrives on TikTok. Workout demos and product reviews drive engagement." },
      { channel: "YouTube Ads", desc: "Product demonstrations, training tutorials, and athlete endorsements build consideration." },
      { channel: "Amazon Ads", desc: "Essential for sporting goods — dominate category search and capitalize on Prime shipping expectations." },
      { channel: "Email & SMS", desc: "Training plans, gear maintenance tips, and seasonal sale alerts keep customers engaged." },
    ]}
    caseStudy={{
      brand: "Fitness Equipment Brand",
      challenge: "A home fitness equipment brand saw massive pandemic growth but was struggling to maintain momentum. Their ROAS had declined 40% as competition intensified and demand normalised.",
      solution: "We pivoted from product-only messaging to a lifestyle brand approach — launching fitness challenge campaigns on TikTok, partnering with fitness creators, and building an email-based training community.",
      highlights: [
        { metric: "ROAS", value: "3.7x" },
        { metric: "Revenue Growth", value: "+125%" },
        { metric: "Community Size", value: "15K+" },
        { metric: "Repeat Purchase", value: "38%" },
      ],
    }}
    relatedIndustries={[
      { title: "Health & Wellness", href: "/industries/health-wellness" },
      { title: "Fashion & Apparel", href: "/industries/fashion" },
      { title: "Electronics & Tech", href: "/industries/electronics" },
    ]}
  />
);

export default SportingGoods;
