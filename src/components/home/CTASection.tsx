import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const trust = [
  { icon: Shield, text: "No Long-Term Contracts" },
  { icon: Clock, text: "Results in 30 Days" },
  { icon: Award, text: "Certified Partners" },
];

const CTASection = () => (
  <section className="py-20 md:py-28">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl rounded-2xl bg-charcoal p-10 text-center md:p-16"
      >
        <h2 className="mb-4 text-3xl font-extrabold text-primary-foreground md:text-4xl">
          Ready to Scale Your Business?
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
          Get a free, no-obligation audit of your current ad performance.
          We'll show you exactly where you're leaving money on the table.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-8 py-4 text-base font-semibold text-primary-foreground shadow-gold transition-all hover:opacity-90"
        >
          Get Your Free Audit
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          {trust.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="h-4 w-4 text-primary" />
              {item.text}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
