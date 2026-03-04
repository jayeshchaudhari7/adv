import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Phone, Star, ShieldCheck, Award, Search,
  Target, DollarSign, BarChart3, TrendingUp, Zap, Eye, RefreshCw, LineChart,
  Clock, UserCheck, FileText, AlertTriangle, Users
} from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/lib/submitLead";


const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const services = [
  { icon: Search, title: "Google Search Ads", desc: "Capture high-intent buyers at the exact moment they search for your products or services. Keyword-targeted campaigns that drive conversions." },
  { icon: Eye, title: "Display Ads", desc: "Visual banner ads across 3M+ websites to build brand awareness and retarget engaged visitors with compelling creative." },
  { icon: Users, title: "YouTube Ads", desc: "Video advertising on the world's second-largest search engine. Skippable, non-skippable, bumper, and discovery ad formats." },
  { icon: BarChart3, title: "Shopping Ads", desc: "Product listing ads with images, prices, and reviews that dominate the Shopping tab and drive e-commerce revenue." },
  { icon: Target, title: "Performance Max", desc: "AI-powered campaigns across all Google channels — Search, Display, YouTube, Gmail, and Maps — with a single campaign." },
];

const results = [
  { metric: "4.5x", label: "Average ROAS", desc: "Across all client accounts" },
  { metric: "68%", label: "CPL Reduction", desc: "Average cost-per-lead decrease" },
  { metric: "3.2x", label: "Revenue Growth", desc: "Average client revenue increase" },
  { metric: "150+", label: "Campaigns Managed", desc: "Across UK & India markets" },
];

const process = [
  { step: "01", title: "Deep Audit", desc: "Comprehensive analysis of your current account, competitor landscape, keyword gaps, and wasted spend opportunities." },
  { step: "02", title: "Strategy Design", desc: "Custom campaign architecture, keyword research, audience segmentation, and budget allocation plan tailored to your goals." },
  { step: "03", title: "Campaign Build", desc: "Ad copy creation, landing page recommendations, conversion tracking setup, and campaign launch with controlled budgets." },
  { step: "04", title: "Optimize & Test", desc: "Weekly bid adjustments, negative keywords, ad rotation, quality score improvements, and A/B testing framework." },
  { step: "05", title: "Scale & Grow", desc: "Aggressive scaling of winning campaigns, new channel expansion, and monthly reporting with growth recommendations." },
];

const faqs = [
  { q: "What's the minimum budget for Google Ads?", a: "We recommend a minimum of £1,500/month (₹1,50,000) for meaningful results. However, we can work with budgets as low as £500 for highly targeted campaigns in specific niches." },
  { q: "How quickly will I see results from Google Ads?", a: "Search campaigns typically show results within 2–4 weeks. Shopping and Performance Max campaigns may take 4–6 weeks to fully optimize as the algorithm learns your ideal customer profile." },
  { q: "Do you manage both UK and India campaigns?", a: "Yes! We manage campaigns across both markets with localized strategies, currency targeting, regional keywords, and market-specific ad copy." },
  { q: "Are you Google Ads certified?", a: "Yes, our team holds Google Ads certifications across Search, Shopping, Display, Video, and Measurement. We're also a Google Partner agency." },
  { q: "What makes your PPC management different?", a: "We focus on profit, not just clicks. Every optimization decision is based on actual revenue data, not vanity metrics. Plus, you get a dedicated strategist, not a junior account manager." },
  { q: "Do you offer a free audit?", a: "Absolutely. We provide a comprehensive, no-obligation audit of your Google Ads account that identifies wasted spend, missed opportunities, and a clear roadmap for improvement." },
];

const GoogleAds = () => {
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
        {/* ── ABOVE THE FOLD ── */}
        <section className="bg-surface-warm py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  Google Ads Management
                </span>
                <h1 className="mb-5 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">
                  Maximize Your ROI with <span className="text-gradient-gold">Expert Google Ads</span> Management
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">
                  We help businesses generate more leads and sales through data-driven Google Search, Shopping, YouTube & Performance Max campaigns. Average client ROAS: 4.5x+
                </p>
                <div className="mb-6 flex flex-wrap gap-4">
                  {[
                    { icon: ShieldCheck, label: "Google Partner" },
                    { icon: Award, label: "Certified Experts" },
                    { icon: Star, label: "5-Star Rated" },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <b.icon className="h-4 w-4 text-primary" /> {b.label}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
                    Get Free Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+919725487887" className="flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary">
                    <Phone className="h-4 w-4" /> +91 97254 87887
                  </a>
                </div>
              </motion.div>

              {/* Above-the-fold form */}
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

        {/* ── SERVICES ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Our Expertise</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">Google Ads Services</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.07 }}
                  className="rounded-xl border border-border bg-background p-6">
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESULTS ── */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Proven Results</p>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">Numbers That Speak</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {results.map((r, i) => (
                <motion.div key={r.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
                  <p className="text-gradient-gold mb-1 text-4xl font-extrabold">{r.metric}</p>
                  <p className="font-semibold text-white">{r.label}</p>
                  <p className="text-xs text-white/50">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Our Process</p>
              <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">How We Deliver Results</h2>
            </div>
            <div className="mx-auto max-w-3xl space-y-4">
              {process.map((p, i) => (
                <motion.div key={p.step} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}
                  className="flex gap-5 rounded-xl border border-border bg-background p-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-sm font-bold text-primary-foreground">
                    {p.step}
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-surface-warm py-16 md:py-24">
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

        {/* ── URGENCY ── */}
        <section className="py-16 md:py-20">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="mx-auto max-w-3xl rounded-2xl border-2 border-primary/30 bg-primary/5 p-10 text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-primary/10 p-3">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="mb-3 text-2xl font-extrabold text-foreground md:text-3xl">Limited Availability</h2>
              <p className="mb-2 text-muted-foreground">
                We only take on <strong className="text-foreground">5 new clients per month</strong> to ensure every account gets the attention it deserves.
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                Claim your free audit now before spots fill up for this month.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 text-sm font-bold text-primary-foreground shadow-gold transition hover:opacity-90">
                Claim Your Free Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-charcoal py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl">
                Stop Wasting Ad Spend. Start Growing.
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-white/70">
                Get a free, no-obligation audit of your Google Ads account. We'll show you exactly where you're leaving money on the table — and how to fix it.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 text-base font-bold text-primary-foreground shadow-gold transition hover:opacity-90">
                  Get Your Free Audit <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+919725487887" className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-primary">
                  <Phone className="h-4 w-4" /> +91 97254 87887
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
                {["No Contracts", "Free Audit", "Results in 30 Days"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-sm text-white/60">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GoogleAds;
