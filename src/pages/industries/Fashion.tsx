import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Shirt } from "lucide-react";

const Fashion = () => (
  <IndustryPageTemplate
    icon={Shirt}
    title="Fashion & Apparel Marketing"
    subtitle="Performance-driven advertising for fashion brands — from fast fashion to luxury apparel."
    description="The fashion industry is fiercely competitive with rapidly changing trends and seasonal demand. Our fashion marketing experts help apparel brands cut through the noise with visually stunning ad campaigns, influencer partnerships, and data-driven targeting that converts browsers into buyers. We understand the unique dynamics of fashion eCommerce — from lookbook-style creative to size-inclusive targeting and seasonal campaign planning."
    problems={[
      { title: "High Competition", desc: "Fashion is one of the most competitive ad spaces, driving up CPCs and making profitable acquisition challenging." },
      { title: "Seasonal Demand", desc: "Revenue fluctuates dramatically between seasons, requiring careful budget planning and inventory-aligned campaigns." },
      { title: "High Return Rates", desc: "Fashion eCommerce sees 25-40% return rates, eating into margins and making accurate ROAS tracking critical." },
      { title: "Brand vs Performance", desc: "Balancing brand-building creative with performance-focused ads is a constant challenge for growing fashion labels." },
      { title: "Trend Velocity", desc: "Trends move fast — your ad creative and product feed need to keep pace with what customers want right now." },
      { title: "Size & Fit Issues", desc: "Online shoppers can't try before they buy, making persuasive product imagery and social proof essential." },
    ]}
    strategy={[
      "Audit your current ad accounts, creative assets, and product feed quality.",
      "Build seasonal campaign calendars aligned with fashion buying cycles and trend forecasts.",
      "Create scroll-stopping visual ads with lifestyle imagery, UGC, and video content.",
      "Implement advanced audience segmentation — by style preference, price point, and purchase history.",
      "Launch full-funnel campaigns across Google Shopping, Meta, TikTok, and Pinterest.",
      "Optimise for customer lifetime value, not just first-purchase ROAS.",
    ]}
    channelMix={[
      { channel: "Meta Ads", desc: "Instagram and Facebook are essential for fashion discovery. We use dynamic product ads, collection ads, and Reels to showcase your catalogue." },
      { channel: "Google Shopping", desc: "Capture high-intent shoppers searching for specific products with optimised product feeds and Shopping campaigns." },
      { channel: "TikTok Ads", desc: "Reach Gen-Z and millennial fashion consumers with authentic, trend-driven video content that drives viral engagement." },
      { channel: "Pinterest Ads", desc: "Tap into the fashion inspiration platform where users actively plan purchases and save products." },
      { channel: "Email & SMS", desc: "Drive repeat purchases with personalised style recommendations, back-in-stock alerts, and VIP early access." },
      { channel: "Influencer Marketing", desc: "Partner with fashion influencers for authentic content that builds trust and drives direct conversions." },
    ]}
    caseStudy={{
      brand: "Fashion & Apparel Brand",
      challenge: "A mid-size D2C fashion brand was struggling with rising acquisition costs on Meta and inconsistent ROAS across seasons. Their product feed was poorly optimised and creative fatigue was setting in.",
      solution: "We rebuilt their Google Shopping feed with enhanced product titles and images, launched a TikTok content strategy featuring UGC creators, and implemented a seasonal budget allocation model that front-loaded spend during peak demand periods.",
      highlights: [
        { metric: "ROAS", value: "4.8x" },
        { metric: "Revenue Growth", value: "+210%" },
        { metric: "CPA Reduction", value: "-45%" },
        { metric: "Return Rate", value: "-18%" },
      ],
    }}
    relatedIndustries={[
      { title: "Beauty & Cosmetics", href: "/industries/beauty" },
      { title: "Jewelry", href: "/industries/jewelry" },
      { title: "Sporting Goods", href: "/industries/sporting-goods" },
    ]}
  />
);

export default Fashion;
