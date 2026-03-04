import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Users, Video, ShoppingBag, Store, BarChart3, Mail, Palette, TrendingUp, ArrowRight } from "lucide-react";

const allServices = [
  { icon: Search, title: "Google Ads Management", desc: "Search, Shopping, PMax, YouTube & Display campaigns that maximize your ROAS.", href: "/services/google-ads", category: "Channel" },
  { icon: Users, title: "Meta Ads Management", desc: "Facebook & Instagram ads with advanced targeting and creative excellence.", href: "/services/meta-ads", category: "Channel" },
  { icon: Video, title: "TikTok Ads Management", desc: "Engage Gen-Z and millennials with scroll-stopping creative content.", href: "/services/tiktok-ads", category: "Channel" },
  { icon: ShoppingBag, title: "Amazon Ads Management", desc: "Sponsored Products, Brands & DSP to dominate Amazon search results.", href: "/services/amazon-ads", category: "Channel" },
  { icon: Store, title: "Marketplace Advertising", desc: "Walmart, eBay, Etsy, Target+ — expand your marketplace presence.", href: "/services/marketplace-ads", category: "Channel" },
  { icon: TrendingUp, title: "Shopify Marketing", desc: "Full-funnel growth strategies specifically built for Shopify stores.", href: "/services/shopify", category: "Platform" },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Data-driven conversion optimization to squeeze more revenue from existing traffic.", href: "/services/analytics", category: "Specialized" },
  { icon: Mail, title: "Email & SMS Marketing", desc: "Retention flows that turn one-time buyers into lifetime customers.", href: "/services/email-marketing", category: "Specialized" },
  { icon: Palette, title: "Creative Services", desc: "Performance-optimized ad creatives, landing pages, and video production.", href: "/services/creative", category: "Specialized" },
];

const Services = () => (
  <>
    <Header />
    <main>
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
              Full-Funnel Digital Marketing
            </motion.h1>
            <p className="text-lg text-muted-foreground">
              From awareness to conversion, we manage every channel your brand needs to grow profitably across both UK and Indian markets.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link to={service.href} className="group block h-full rounded-xl border border-border bg-background p-7 transition-all hover:border-primary hover:shadow-gold">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">{service.category}</div>
                  <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
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

export default Services;
