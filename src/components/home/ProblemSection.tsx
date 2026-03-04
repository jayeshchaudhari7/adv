import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, DollarSign } from "lucide-react";

const problems = [
  { icon: DollarSign, title: "Wasting Ad Budget?", desc: "Most brands lose 30-50% of their ad spend on poor targeting, bad creatives, and unoptimized campaigns." },
  { icon: TrendingDown, title: "Stagnant Growth?", desc: "Plateaued revenue despite increasing spend? You need a strategic approach, not just more budget." },
  { icon: AlertTriangle, title: "No Clear ROI?", desc: "Can't tell which channels actually drive profit? Without proper attribution, you're flying blind." },
];

const ProblemSection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Sound Familiar?</p>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
          Challenges Holding You Back
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {problems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-background p-8"
          >
            <div className="mb-4 inline-flex rounded-lg bg-destructive/10 p-3">
              <item.icon className="h-6 w-6 text-destructive" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
