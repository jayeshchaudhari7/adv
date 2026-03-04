import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Mail } from "lucide-react";

const EmailMarketing = () => (
  <ServicePageTemplate
    icon={Mail}
    title="Email & SMS Marketing"
    subtitle="Retention marketing that turns one-time buyers into loyal, repeat customers."
    description="Acquiring a new customer costs 5-7x more than retaining an existing one. Our Email & SMS marketing team builds automated flows and campaigns that nurture leads, recover abandoned carts, and drive repeat purchases — generating 30-40% of total revenue for our e-commerce clients."
    features={[
      { title: "Welcome Series", desc: "Multi-email onboarding sequences that convert subscribers into first-time buyers." },
      { title: "Abandoned Cart Recovery", desc: "Automated email and SMS sequences that recover 10-15% of abandoned checkouts." },
      { title: "Post-Purchase Flows", desc: "Thank you, review request, cross-sell, and replenishment reminders." },
      { title: "Campaign Calendars", desc: "Planned promotional campaigns aligned with sales events and seasons." },
      { title: "SMS Marketing", desc: "Time-sensitive promotions and transactional messages via SMS." },
      { title: "Segmentation & Personalization", desc: "Dynamic content based on purchase history, behavior, and preferences." },
    ]}
    process={[
      "Email/SMS audit — current flows, list health, and revenue attribution.",
      "Strategy development — flow architecture, campaign calendar, and segmentation plan.",
      "Flow buildout — welcome, abandoned cart, post-purchase, and win-back sequences.",
      "Template design — on-brand, mobile-responsive email templates.",
      "Launch and A/B testing — subject lines, send times, content variations.",
      "Monthly reporting — revenue attribution, engagement metrics, and list growth.",
    ]}
    faqs={[
      { q: "Which email platform do you use?", a: "We primarily work with Klaviyo for e-commerce, but also support Mailchimp, ActiveCampaign, and other platforms." },
      { q: "How much revenue should email generate?", a: "For e-commerce brands, email should drive 25-40% of total revenue. If you're below that, there's significant untapped opportunity." },
      { q: "Do you write the email copy?", a: "Yes — our team handles everything including copywriting, design, and technical setup." },
    ]}
    relatedServices={[
      { title: "Analytics & CRO", href: "/services/analytics" },
      { title: "Shopify Marketing", href: "/services/shopify" },
      { title: "Creative Services", href: "/services/creative" },
    ]}
  />
);

export default EmailMarketing;
