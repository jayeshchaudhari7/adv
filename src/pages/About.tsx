import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Globe, Users, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every decision we make is backed by data and aimed at growing your bottom line." },
  { icon: Globe, title: "Global Reach", desc: "With offices in UK and India, we bring global perspective with local expertise." },
  { icon: Users, title: "Client-First", desc: "We treat your business like our own. Your growth is our growth." },
  { icon: Award, title: "Certified Experts", desc: "Our team holds certifications across Google, Meta, TikTok, and Amazon advertising." },
];

const About = () => (
  <>
    <Header />
    <main>
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">About Us</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mb-6 text-4xl font-extrabold text-foreground md:text-5xl">
              We're <span className="text-gradient-gold">Advertza</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg leading-relaxed text-muted-foreground">
              A performance marketing agency built by marketers who got tired of seeing brands waste money on agencies that prioritize vanity metrics over real business growth. We operate from both the UK and India, combining global strategy with cost-effective execution.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-warm py-20 md:py-28">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-extrabold text-foreground">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-border bg-background p-7 text-center">
                <div className="mx-auto mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-extrabold text-foreground">Two Countries, One Mission</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-border p-8">
                <p className="mb-1 text-2xl">🇮🇳</p>
                <h3 className="mb-2 text-lg font-bold text-foreground">India Office</h3>
                <p className="text-sm text-muted-foreground">16, Sai Baba Society, Pandesara, Surat</p>
                <p className="mt-2 text-sm text-primary font-medium">+91 886 656 7359</p>
              </div>
              <div className="rounded-xl border border-border p-8">
                <p className="mb-1 text-2xl">🇬🇧</p>
                <h3 className="mb-2 text-lg font-bold text-foreground">UK Office</h3>
                <p className="text-sm text-muted-foreground">United Kingdom</p>
                <p className="mt-2 text-sm text-primary font-medium">Serving UK & European clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default About;
