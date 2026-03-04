import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { submitLead } from "@/lib/submitLead";


interface ServiceFeature {
  title: string;
  desc: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  process: string[];
  faqs: FAQ[];
  relatedServices: { title: string; href: string }[];
}

const ServicePageTemplate = ({ icon: Icon, title, subtitle, description, features, process, faqs, relatedServices }: ServicePageProps) => {
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
        {/* Hero */}
        <section className="bg-surface-warm py-16 md:py-24">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h1 className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
                  {title}
                </h1>
                <p className="mb-6 text-lg text-muted-foreground">{subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
                    Get Free Audit <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+919725487887" className="flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary">
                    <Phone className="h-4 w-4" /> +91 97254 87887
                  </a>
                </div>
              </motion.div>

              {/* Lead Capture Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl border border-border bg-background p-7 shadow-lg">
                <h2 className="mb-1 text-xl font-bold text-foreground">Get Your Free Audit</h2>
                <p className="mb-5 text-sm text-muted-foreground">Discover how we can help you scale profitably.</p>
                <form className="space-y-3" onSubmit={ handleSubmit }>
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

        {/* Description */}
        <section className="py-16 md:py-20">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-surface-warm py-16 md:py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">What's Included</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-background p-6">
                  <CheckCircle2 className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Our Process</h2>
            <div className="mx-auto grid max-w-3xl gap-4">
              {process.map((step, i) => (
                <div key={i} className="flex gap-4 rounded-lg border border-border bg-background p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                  <p className="text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-surface-warm py-16 md:py-20">
          <div className="container">
            <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Frequently Asked Questions</h2>
            <div className="mx-auto max-w-3xl space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group rounded-xl border border-border bg-background p-5">
                  <summary className="cursor-pointer font-semibold text-foreground">{faq.q}</summary>
                  <p className="mt-3 text-sm text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20">
          <div className="container">
            <h2 className="mb-8 text-center text-2xl font-extrabold text-foreground">Related Services</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((s) => (
                <Link key={s.href} to={s.href} className="group flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary hover:text-primary">
                  {s.title} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-16 text-center md:py-20">
          <div className="container">
            <h2 className="mb-4 text-3xl font-extrabold text-white">Ready to Grow Your Business?</h2>
            <p className="mb-8 text-white/70">Get a free audit and discover how we can help you scale profitably.</p>
            <Link to="/contact" className="inline-block rounded-lg bg-gradient-gold px-8 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
              Get Your Free Audit →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicePageTemplate;
