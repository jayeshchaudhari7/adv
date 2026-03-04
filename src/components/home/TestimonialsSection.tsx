import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Brainwave61",
    role: "Tech & Digital Solutions",
    quote: "Advertza transformed our digital presence completely. Their data-driven approach to Google and Meta ads helped us achieve a 4.2x ROAS within just 3 months. The team is incredibly responsive and strategic.",
    rating: 5,
  },
  {
    name: "The Yellow Lens Accessories",
    role: "Fashion Accessories Brand",
    quote: "Working with Advertza has been a game-changer for our brand. They scaled our Meta and TikTok campaigns beautifully, bringing in high-quality traffic that actually converts. Our revenue has grown 280% year-over-year.",
    rating: 5,
  },
  {
    name: "TYL Visuals",
    role: "Creative & Visual Studio",
    quote: "The Advertza team truly understands performance marketing. They don't just run ads — they build growth engines. Our lead generation costs dropped by 60% while volume tripled. Highly recommended!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="bg-surface-warm py-16 md:py-24">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">
          Trusted by Growing Brands
        </h2>
        <p className="text-muted-foreground">
          We've helped businesses across industries scale profitably. Here's what our partners say.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-xl border border-border bg-background p-7"
          >
            <Quote className="mb-4 h-8 w-8 text-primary/20" />
            <div className="mb-4 flex gap-1">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.quote}"</p>
            <div className="border-t border-border pt-4">
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          …and many more brands across <span className="font-semibold text-foreground">Fashion, Tech, Beauty, Home & Garden</span> and other industries.
        </p>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
