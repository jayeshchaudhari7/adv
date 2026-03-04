import { motion } from "framer-motion";
import { TrendingUp, Search, ShoppingBag, Video, BarChart3, Mail, Palette, Users } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  { icon: Search, title: "Google Ads", desc: "Search, Shopping, PMax, YouTube & Display campaigns that drive profitable conversions.", href: "/services/google-ads" },
  { icon: Users, title: "Meta Ads", desc: "Facebook & Instagram advertising with advanced targeting and creative strategy.", href: "/services/meta-ads" },
  { icon: Video, title: "TikTok Ads", desc: "Engage new audiences with scroll-stopping creative on the fastest-growing platform.", href: "/services/tiktok-ads" },
  { icon: ShoppingBag, title: "Amazon Ads", desc: "Sponsored Products, Brands & DSP campaigns to dominate marketplace results.", href: "/services/amazon-ads" },
  { icon: BarChart3, title: "Analytics & CRO", desc: "Data-driven optimization to increase conversion rates and maximize your ROI.", href: "/services/analytics" },
  { icon: Mail, title: "Email & SMS", desc: "Retention marketing that turns one-time buyers into loyal, repeat customers.", href: "/services/email-marketing" },
];

const ServicesGrid = () => (
  <section className="bg-surface-warm py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">What We Do</p>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
          Full-Funnel Digital Marketing
        </h2>
        <p className="text-muted-foreground">
          From awareness to conversion, we manage every channel your brand needs to grow profitably.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={service.href}
              className="group block rounded-xl border border-border bg-background p-7 transition-all hover:border-primary hover:shadow-gold"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Learn More →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
