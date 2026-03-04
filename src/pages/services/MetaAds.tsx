import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Phone, Star, ShieldCheck, Award, TrendingDown,
  Target, DollarSign, BarChart3, Users, Zap, Eye, RefreshCw, LineChart,
  MessageSquare, Clock, UserCheck, FileText, ChevronRight
} from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/lib/submitLead";


const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const trustBadges = [
  { icon: ShieldCheck, label: "Meta Business Partner" },
  { icon: Award, label: "Google Partner" },
  { icon: Star, label: "5-Star Rated Agency" },
];

const problems = [
  { icon: TrendingDown, title: "Low Sales & Revenue", desc: "Your store gets traffic but no conversions. Without optimized ad funnels, visitors leave without buying." },
  { icon: DollarSign, title: "Wasted Ad Spend", desc: "Burning through budget on broad audiences and untested creatives with no clear return on investment." },
  { icon: Target, title: "No Proper Targeting", desc: "Showing ads to the wrong people at the wrong time. Poor audience segmentation kills your ROAS." },
  { icon: BarChart3, title: "Low Conversion Rate", desc: "Clicks don't convert because your landing pages, offer, and ad-to-page match aren't optimized." },
];

const solutions = [
  { icon: LineChart, title: "Data-Driven Strategy", desc: "Every campaign starts with deep data analysis — audience insights, competitor benchmarks, and market trends." },
  { icon: Target, title: "Advanced Targeting", desc: "Custom audiences, lookalikes, interest stacking, and exclusion lists built from your first-party data." },
  { icon: RefreshCw, title: "Continuous A/B Testing", desc: "We test creatives, copy, audiences, and placements weekly to find and scale what works." },
  { icon: Zap, title: "Funnel Optimization", desc: "Full-funnel approach — from cold awareness to warm retargeting to hot conversion campaigns." },
];

const services = [
  { icon: Users, title: "Facebook Ads Management", desc: "Full campaign management across Facebook Feed, Marketplace, Stories, and Reels placements.", features: ["Campaign strategy & structure", "Audience research & creation", "Budget optimization & scaling"] },
  { icon: Eye, title: "Instagram Ads Scaling", desc: "Engage mobile-first audiences on Feed, Stories, Reels, and Explore with scroll-stopping creatives.", features: ["Visual-first creative strategy", "Influencer-style UGC ads", "Shopping & catalogue integration"] },
  { icon: RefreshCw, title: "Retargeting Campaigns", desc: "Multi-touch retargeting sequences that bring back visitors and nurture them to purchase.", features: ["Dynamic product retargeting", "Cart abandonment sequences", "Cross-sell & upsell funnels"] },
  { icon: BarChart3, title: "Conversion Tracking Setup", desc: "Accurate tracking with Meta Pixel, Conversions API, and server-side events for reliable data.", features: ["Meta Pixel installation", "Conversions API (CAPI) setup", "Custom event configuration"] },
];

const caseStudies = [
  { brand: "Fashion E-commerce Brand", before: { roas: "1.2x", cpl: "₹850", revenue: "₹2.5L/mo" }, after: { roas: "4.8x", cpl: "₹210", revenue: "₹12L/mo" }, period: "90 Days" },
  { brand: "Shopify Beauty Store", before: { roas: "0.8x", cpl: "£45", revenue: "£3K/mo" }, after: { roas: "5.2x", cpl: "£12", revenue: "£18K/mo" }, period: "60 Days" },
  { brand: "Local Service Business", before: { roas: "1.5x", cpl: "₹600", revenue: "₹1.8L/mo" }, after: { roas: "6.1x", cpl: "₹95", revenue: "₹8.5L/mo" }, period: "45 Days" },
];

const whyUs = [
  { icon: FileText, title: "Transparent Reporting", desc: "Real-time dashboards and no hidden metrics. You see exactly where every rupee and pound goes." },
  { icon: Clock, title: "Weekly Performance Reports", desc: "Detailed weekly updates with insights, recommendations, and next steps — not just numbers." },
  { icon: UserCheck, title: "Dedicated Ad Manager", desc: "A single point of contact who knows your business inside-out. No agency runaround." },
  { icon: Award, title: "Proven Track Record", desc: "50+ brands scaled profitably across UK and India with documented, verifiable results." },
];

const testimonials = [
  { name: "Rahul M.", company: "Brainwave61", text: "Advertza took our Meta Ads from bleeding money to 4.8x ROAS in under 3 months. Their targeting is incredibly precise.", rating: 5 },
  { name: "Priya S.", company: "The Yellow Lens Accessories", text: "Our Instagram sales exploded after they restructured our campaigns. Best decision we made for our brand.", rating: 5 },
  { name: "James T.", company: "UK Shopify Store", text: "Professional, data-driven, and they actually deliver results. Our cost per lead dropped by 70%.", rating: 5 },
];

const faqs = [
  { q: "What budget do you recommend for Meta Ads?", a: "We recommend starting with £1,000–2,000/month (₹1–2 lakh) to gather enough data for optimization. Once we identify winning audiences and creatives, we scale aggressively." },
  { q: "Do you create the ad creatives?", a: "Yes! Our in-house creative team produces all ad assets — static images, videos, carousels, UGC-style content, and copy — optimized for every Meta placement." },
  { q: "How do you handle iOS privacy & tracking?", a: "We implement Conversions API (CAPI) alongside the Meta Pixel for server-side tracking, ensuring accurate attribution even with iOS 14.5+ restrictions." },
  { q: "How quickly will I see results?", a: "Most clients see meaningful improvements within 2–4 weeks. Full optimization with scaled results typically happens by week 6–8." },
  { q: "Can you run ads for both UK and India?", a: "Absolutely. We create market-specific campaigns with localized creative, copy, currency targeting, and audience strategies for both regions." },
  { q: "Do you require long-term contracts?", a: "No. We work on month-to-month agreements. We earn your business every month through results, not contracts." },
];

const MetaAds = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", budget: "" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await submitLead(form);

      alert("Form submitted successfully");

      setForm({
        name: "",
        email: "",
        phone: "",
        budget: "",
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="bg-surface-warm py-20 md:py-28">
          <div className="container">
            <div className="mx-auto text-left flex gap-8">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Meta Ads Management
                </span>
                <h1 className="mb-5 text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
                  Scale Your Business with <span className="text-gradient-gold">High-ROI Meta Ads</span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
                  We help Shopify stores, local businesses, and e-commerce brands generate more leads and sales through data-driven Facebook & Instagram advertising. Average client ROAS: 4.5x+
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
                    Book Free Strategy Call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+919725487887" className="flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-base font-semibold text-foreground transition hover:border-primary">
                    <Phone className="h-4 w-4" /> +91 97254 87887
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                  {trustBadges.map((b) => (
                    <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <b.icon className="h-5 w-5 text-primary" /> {b.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-border bg-background p-7 shadow-lg">
                <h2 className="mb-1 text-xl font-bold text-foreground">Get Your Free Google Ads Audit</h2>
                <p className="mb-5 text-sm text-muted-foreground">Discover where you're wasting budget and how to fix it.</p>
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Monthly Ad Budget</option>
                    <option value="<1500">Less than £1,500 / ₹1.5L</option>
                    <option value="1500-5000">£1,500–5,000 / ₹1.5–5L</option>
                    <option value="5000-15000">£5,000–15,000 / ₹5–15L</option>
                    <option value="15000+">£15,000+ / ₹15L+</option>
                  </select>
                  <button type="submit" className="w-full rounded-lg bg-gradient-gold py-3.5 text-sm font-bold text-primary-foreground shadow-gold transition hover:opacity-90">
                    Get Free Audit →
                  </button>
                </form>
                <p className="mt-3 text-center text-xs text-muted-foreground">Free. No spam. No obligation.</p>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-destructive">Sound Familiar?</p>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Are These Problems Killing Your Growth?
              </h2>
              <p className="text-muted-foreground">Most businesses struggle with Meta Ads because they lack strategy, targeting, and optimization expertise.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {problems.map((p, i) => (
                <motion.div key={p.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-destructive/20 bg-destructive/5 p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-destructive/10 p-2.5">
                    <p.icon className="h-5 w-5 text-destructive" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SOLUTION ── */}
        <section className="bg-surface-warm py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Our Approach</p>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                How We <span className="text-gradient-gold">Fix It</span>
              </h2>
              <p className="text-muted-foreground">A proven, systematic approach to Meta Ads that turns wasted spend into profitable growth.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {solutions.map((s, i) => (
                <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-background p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">What We Offer</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Our Meta Ads Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((s, i) => (
                <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-background p-7">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">{s.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDIES ── */}
        <section className="bg-surface-warm py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Real Results</p>
              <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
                Before & After: Client Results
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((cs, i) => (
                <motion.div key={cs.brand} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  className="overflow-hidden rounded-xl border border-border bg-background">
                  <div className="border-b border-border bg-muted/30 px-6 py-4">
                    <h3 className="font-bold text-foreground">{cs.brand}</h3>
                    <p className="text-xs text-muted-foreground">Results in {cs.period}</p>
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="p-5">
                      <p className="mb-3 text-xs font-semibold uppercase text-destructive">Before</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">ROAS: <span className="font-semibold text-foreground">{cs.before.roas}</span></p>
                        <p className="text-muted-foreground">CPL: <span className="font-semibold text-foreground">{cs.before.cpl}</span></p>
                        <p className="text-muted-foreground">Rev: <span className="font-semibold text-foreground">{cs.before.revenue}</span></p>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="mb-3 text-xs font-semibold uppercase text-primary">After</p>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">ROAS: <span className="font-bold text-primary">{cs.after.roas}</span></p>
                        <p className="text-muted-foreground">CPL: <span className="font-bold text-primary">{cs.after.cpl}</span></p>
                        <p className="text-muted-foreground">Rev: <span className="font-bold text-primary">{cs.after.revenue}</span></p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Why Advertza</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Why Brands Choose Us</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyUs.map((w, i) => (
                <motion.div key={w.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                  className="rounded-xl border border-border bg-background p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3">
                    <w.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-bold text-foreground">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="bg-surface-warm py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Client Love</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">What Our Clients Say</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-background p-6">
                  <div className="mb-3 flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm italic text-muted-foreground">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Frequently Asked Questions</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-background p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA WITH FORM ── */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="container">
            <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                  Ready to Scale Your Business?
                </h2>
                <p className="mb-6 text-white/70">
                  Get a free strategy call and discover how our Meta Ads expertise can transform your growth. No contracts. No obligation.
                </p>
                <ul className="space-y-3">
                  {["Free campaign audit", "Custom growth strategy", "ROI projections", "No long-term contracts"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="mb-5 text-lg font-bold text-white">Book Your Free Strategy Call</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none" />
                  <input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none" />
                  <input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary focus:outline-none" />
                  <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 focus:border-primary focus:outline-none">
                    <option value="">Monthly Ad Budget</option>
                    <option value="<1000">Less than £1,000 / ₹1L</option>
                    <option value="1000-3000">£1,000–3,000 / ₹1–3L</option>
                    <option value="3000-10000">£3,000–10,000 / ₹3–10L</option>
                    <option value="10000+">£10,000+ / ₹10L+</option>
                  </select>
                  <button type="submit" className="w-full rounded-lg bg-gradient-gold py-3.5 text-sm font-bold text-primary-foreground shadow-gold transition hover:opacity-90">
                    Book Free Strategy Call →
                  </button>
                </form>
                <p className="mt-3 text-center text-xs text-white/40">No spam. No obligation. 100% free.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MetaAds;
