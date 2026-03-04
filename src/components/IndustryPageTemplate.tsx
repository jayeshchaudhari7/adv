import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone, TrendingUp, Target, BarChart3 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Problem {
  title: string;
  desc: string;
}

interface ChannelMix {
  channel: string;
  desc: string;
}

interface CaseHighlight {
  metric: string;
  value: string;
}

export interface IndustryPageProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  problems: Problem[];
  strategy: string[];
  channelMix: ChannelMix[];
  caseStudy: {
    brand: string;
    challenge: string;
    solution: string;
    highlights: CaseHighlight[];
  };
  relatedIndustries: { title: string; href: string }[];
}

const IndustryPageTemplate = ({ icon: Icon, title, subtitle, description, problems, strategy, channelMix, caseStudy, relatedIndustries }: IndustryPageProps) => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="bg-surface-warm py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex rounded-xl bg-primary/10 p-4">
              <Icon className="h-10 w-10 text-primary" />
            </div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              {title}
            </motion.h1>
            <p className="mb-8 text-lg text-muted-foreground">{subtitle}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
                Get Free Audit
              </Link>
              <a href="tel:+919725487887" className="flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary">
                <Phone className="h-4 w-4" /> +91 97254 87887
              </a>
            </div>
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

      {/* Industry Problems */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Industry Challenges</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-background p-6">
                <Target className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Our Marketing Strategy</h2>
          <div className="mx-auto grid max-w-3xl gap-4">
            {strategy.map((step, i) => (
              <div key={i} className="flex gap-4 rounded-lg border border-border bg-background p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{i + 1}</span>
                <p className="text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channel Mix */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Recommended Channel Mix</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {channelMix.map((c, i) => (
              <motion.div key={c.channel} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="rounded-xl border border-border bg-background p-6">
                <BarChart3 className="mb-3 h-6 w-6 text-primary" />
                <h3 className="mb-2 text-lg font-bold text-foreground">{c.channel}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Case Study</h2>
          <div className="mx-auto max-w-3xl rounded-xl border border-border bg-background p-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">{caseStudy.brand}</p>
            <h3 className="mb-4 text-xl font-bold text-foreground">The Challenge</h3>
            <p className="mb-6 text-sm text-muted-foreground">{caseStudy.challenge}</p>
            <h3 className="mb-4 text-xl font-bold text-foreground">Our Solution</h3>
            <p className="mb-6 text-sm text-muted-foreground">{caseStudy.solution}</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {caseStudy.highlights.map((h) => (
                <div key={h.metric} className="rounded-lg bg-surface-warm p-4 text-center">
                  <p className="text-2xl font-extrabold text-foreground">{h.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{h.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section className="bg-surface-warm py-16 md:py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-extrabold text-foreground">Explore Other Industries</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedIndustries.map((s) => (
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
          <h2 className="mb-4 text-3xl font-extrabold text-white">Ready to Dominate Your Industry?</h2>
          <p className="mb-8 text-white/70">Get a free audit tailored to your industry and discover untapped growth opportunities.</p>
          <Link to="/contact" className="inline-block rounded-lg bg-gradient-gold px-8 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition hover:opacity-90">
            Get Your Free Audit →
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default IndustryPageTemplate;
