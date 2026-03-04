import { motion } from "framer-motion";
import { ClipboardCheck, Rocket, TrendingUp, BarChart3 } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, step: "01", title: "Audit & Discovery", desc: "We deep-dive into your current performance, competitors, and growth opportunities." },
  { icon: Rocket, step: "02", title: "Strategy & Setup", desc: "Custom campaign architecture, audience targeting, and creative strategy built for your brand." },
  { icon: TrendingUp, step: "03", title: "Launch & Scale", desc: "We launch campaigns, optimize daily, and scale what works with data-backed decisions." },
  { icon: BarChart3, step: "04", title: "Report & Grow", desc: "Transparent reporting with actionable insights to continuously improve your results." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Our Process</p>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
          How We Drive Results
        </h2>
        <p className="text-muted-foreground">
          A proven 4-phase framework that turns ad spend into predictable, profitable revenue.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((item, i) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="relative text-center"
          >
            <div className="mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold text-primary-foreground shadow-gold">
              <item.icon className="h-7 w-7" />
            </div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-primary">{item.step}</p>
            <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
