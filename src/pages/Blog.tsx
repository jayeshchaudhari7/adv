import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Google Ads", "Meta Ads", "E-commerce", "Email Marketing", "Analytics"];

const allPosts = [
  {
    slug: "google-ads-ecommerce-2025",
    category: "Google Ads",
    title: "7 Google Ads Strategies That Tripled Our Client's ROAS in 2025",
    excerpt: "Discover the exact campaign structures and bidding strategies we used to achieve 3x return on ad spend for e-commerce brands.",
    date: "Feb 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "meta-ads-creative-testing",
    category: "Meta Ads",
    title: "The Creative Testing Framework We Use for Every Meta Ads Campaign",
    excerpt: "Learn our systematic approach to testing ad creatives that consistently finds winning combinations and reduces CPA by 40%.",
    date: "Feb 20, 2026",
    readTime: "5 min read",
  },
  {
    slug: "shopify-conversion-tips",
    category: "E-commerce",
    title: "12 Shopify Conversion Rate Hacks You Can Implement Today",
    excerpt: "Quick wins and proven optimizations that helped our Shopify clients boost conversion rates by an average of 35%.",
    date: "Feb 12, 2026",
    readTime: "8 min read",
  },
  {
    slug: "email-marketing-flows",
    category: "Email Marketing",
    title: "5 Automated Email Flows Every E-commerce Brand Needs",
    excerpt: "From welcome series to win-back campaigns — the essential automations that generate revenue on autopilot.",
    date: "Feb 5, 2026",
    readTime: "7 min read",
  },
  {
    slug: "google-analytics-ga4-guide",
    category: "Analytics",
    title: "GA4 for E-commerce: The Complete Setup Guide",
    excerpt: "Step-by-step instructions for configuring GA4 to track every meaningful interaction across your online store.",
    date: "Jan 28, 2026",
    readTime: "10 min read",
  },
  {
    slug: "meta-ads-scaling-playbook",
    category: "Meta Ads",
    title: "How to Scale Meta Ads Without Killing Your CPA",
    excerpt: "Our proven playbook for scaling ad spend from $5k to $50k/month while maintaining profitable cost per acquisition.",
    date: "Jan 20, 2026",
    readTime: "6 min read",
  },
  {
    slug: "tiktok-ecommerce-strategy",
    category: "E-commerce",
    title: "TikTok Shop: The Untapped Goldmine for E-commerce Brands",
    excerpt: "How forward-thinking brands are leveraging TikTok's commerce features to reach Gen Z and millennial shoppers.",
    date: "Jan 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "google-pmax-best-practices",
    category: "Google Ads",
    title: "Performance Max Campaigns: Best Practices for 2026",
    excerpt: "Everything you need to know about running profitable PMax campaigns, from asset groups to audience signals.",
    date: "Jan 8, 2026",
    readTime: "9 min read",
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? allPosts : allPosts.filter(p => p.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Blog</p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-4xl font-extrabold text-foreground md:text-5xl">
                Insights & Resources
              </motion.h1>
              <p className="text-muted-foreground">Expert strategies, case studies, and tips to grow your e-commerce brand.</p>
            </div>

            {/* Category Tabs */}
            <div className="mx-auto mb-10 flex max-w-3xl flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground shadow-gold"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {post.category}
                  </span>
                  <h2 className="mb-2 text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs text-muted-foreground">{post.date} · {post.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
