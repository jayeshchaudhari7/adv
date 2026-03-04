import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What industries do you specialize in?", a: "We work primarily with eCommerce, D2C brands, SaaS companies, and lead generation businesses across both UK and Indian markets." },
  { q: "How much do your services cost?", a: "Our pricing is tailored to each client's needs and budget. We offer flexible packages starting from custom monthly retainers. Contact us for a free proposal." },
  { q: "How quickly can I see results?", a: "Most clients see meaningful improvements within the first 30 days. Significant ROI improvements typically occur within 60-90 days of optimization." },
  { q: "Do you require long-term contracts?", a: "No. We work on month-to-month agreements. We believe in earning your business every month through results, not contracts." },
  { q: "Which platforms do you advertise on?", a: "We manage campaigns across Google, Meta (Facebook/Instagram), TikTok, Amazon, Walmart, eBay, and other major platforms." },
  { q: "How do you measure success?", a: "We focus on business-critical metrics: ROAS, CPA, revenue growth, and profit margins — not vanity metrics like impressions or clicks." },
  { q: "Do you offer creative services?", a: "Yes! Our in-house creative team produces ad creatives, landing pages, and video content optimized for performance across all platforms." },
  { q: "What makes Advertza different?", a: "We combine data-driven strategy with creative excellence, and we operate across UK and India giving us unique global perspective and cost-effective solutions." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface-warm py-20 md:py-28">
      <div className="container">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-background"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 text-sm font-semibold text-foreground md:text-base">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
