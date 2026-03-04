import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shirt, Sparkles, Home, Cpu, Heart, UtensilsCrossed, Dog, Gem, Dumbbell, Settings, ArrowRight } from "lucide-react";

const industries = [
  { icon: Shirt, title: "Fashion & Apparel", desc: "Scale your fashion brand with targeted campaigns across Meta, Google Shopping, and TikTok.", href: "/industries/fashion" },
  { icon: Sparkles, title: "Beauty & Cosmetics", desc: "Drive product discovery and repeat purchases for beauty brands with influencer-powered ads.", href: "/industries/beauty" },
  { icon: Home, title: "Home & Garden", desc: "Reach homeowners and decorators with high-intent search and visual shopping campaigns.", href: "/industries/home-garden" },
  { icon: Cpu, title: "Electronics & Tech", desc: "Compete in high-consideration tech markets with full-funnel advertising strategies.", href: "/industries/electronics" },
  { icon: Heart, title: "Health & Wellness", desc: "Build trust and drive conversions for health, supplement, and wellness brands.", href: "/industries/health-wellness" },
  { icon: UtensilsCrossed, title: "Food & Beverage", desc: "Grow D2C food brands with subscription-focused campaigns and local targeting.", href: "/industries/food-beverage" },
  { icon: Dog, title: "Pet Supplies", desc: "Tap into the booming pet market with emotionally resonant ads and smart retargeting.", href: "/industries/pet-supplies" },
  { icon: Gem, title: "Jewelry", desc: "Showcase luxury and craftsmanship through visually stunning ad campaigns.", href: "/industries/jewelry" },
  { icon: Dumbbell, title: "Sporting Goods", desc: "Reach active consumers with performance-driven campaigns across search and social.", href: "/industries/sporting-goods" },
  { icon: Settings, title: "Custom Solutions", desc: "Don't see your industry? We build bespoke marketing strategies for any vertical.", href: "/industries/custom" },
];

const Industries = () => (
  <>
    <Header />
    <main>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Industries We Serve</p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Industry-Specific Marketing Expertise
            </motion.h1>
            <p className="text-lg text-muted-foreground">
              Every industry has unique challenges. We craft tailored strategies that address your specific market dynamics, customer behaviour, and competitive landscape.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={ind.href} className="group block h-full rounded-xl border border-border bg-background p-7 transition-all hover:border-primary hover:shadow-gold">
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <ind.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{ind.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Industries;
