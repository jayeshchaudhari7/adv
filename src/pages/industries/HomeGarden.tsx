import IndustryPageTemplate from "@/components/IndustryPageTemplate";
import { Home } from "lucide-react";

const HomeGarden = () => (
  <IndustryPageTemplate
    icon={Home}
    title="Home & Garden Marketing"
    subtitle="Drive sales for furniture, home décor, and garden brands with targeted digital campaigns."
    description="Home and garden products involve considered purchases with longer decision cycles. Customers research extensively, compare options, and seek inspiration before buying. Our home & garden marketing strategies combine visual discovery platforms with high-intent search campaigns to capture customers at every stage — from inspiration browsing to final purchase. We understand the importance of room visualisation, lifestyle imagery, and seasonal demand patterns unique to this industry."
    problems={[
      { title: "Long Purchase Cycles", desc: "Furniture and home décor purchases often take weeks of consideration, requiring multi-touch attribution." },
      { title: "High AOV, Low Volume", desc: "Higher price points mean fewer conversions, making each click and impression more valuable." },
      { title: "Shipping & Returns", desc: "Large items have complex logistics, and customers worry about fit and quality sight-unseen." },
      { title: "Seasonal Peaks", desc: "Spring/summer garden seasons and holiday home décor create dramatic demand fluctuations." },
      { title: "Visual Decision Making", desc: "Customers need to visualise products in their space, requiring exceptional lifestyle photography." },
      { title: "Local Competition", desc: "Competing with local furniture stores and home centres that offer in-person browsing experiences." },
    ]}
    strategy={[
      "Analyse your product catalogue, pricing strategy, and current campaign performance.",
      "Build seasonal campaign calendars around home improvement and garden buying cycles.",
      "Create aspirational lifestyle content showing products in real-life room and garden settings.",
      "Implement extended attribution windows to capture the full customer journey for high-AOV products.",
      "Launch campaigns across Google, Meta, and Pinterest optimised for consideration and purchase.",
      "Develop retargeting sequences that address objections around size, quality, and delivery.",
    ]}
    channelMix={[
      { channel: "Google Shopping", desc: "Capture high-intent searchers with optimised product feeds featuring lifestyle images and detailed specifications." },
      { channel: "Pinterest Ads", desc: "Pinterest is the #1 home inspiration platform. Reach decorators and renovators actively planning purchases." },
      { channel: "Meta Ads", desc: "Use collection ads and carousel formats to showcase room setups and curated product collections." },
      { channel: "Google Search", desc: "Target research-phase queries like 'best outdoor furniture' and 'living room ideas' with helpful content." },
      { channel: "Email Marketing", desc: "Nurture browsers with room inspiration, styling guides, and limited-time promotions." },
      { channel: "Display & Remarketing", desc: "Stay top-of-mind during long consideration periods with dynamic product retargeting." },
    ]}
    caseStudy={{
      brand: "Home Décor Brand",
      challenge: "An online furniture retailer was burning budget on short attribution windows, missing the full value of their campaigns. Google Shopping ROAS appeared below target, discouraging investment.",
      solution: "We extended attribution to 30 days, restructured their Shopping feed with lifestyle images, and built a Pinterest-to-Google remarketing funnel that captured inspiration-stage browsers and converted them weeks later.",
      highlights: [
        { metric: "ROAS", value: "6.1x" },
        { metric: "Revenue", value: "+185%" },
        { metric: "AOV Increase", value: "+22%" },
        { metric: "Pinterest CVR", value: "2.4%" },
      ],
    }}
    relatedIndustries={[
      { title: "Electronics & Tech", href: "/industries/electronics" },
      { title: "Pet Supplies", href: "/industries/pet-supplies" },
      { title: "Custom Solutions", href: "/industries/custom" },
    ]}
  />
);

export default HomeGarden;
