import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const blogPosts = [
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
];

const BlogSection = () => (
  <section className="border-t border-border py-20 md:py-28">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Blog</p>
        <h2 className="mb-4 text-3xl font-extrabold text-foreground md:text-4xl">Latest Insights & Tips</h2>
        <p className="text-muted-foreground">Actionable strategies and expert advice to scale your e-commerce brand.</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
          >
            <span className="mb-3 inline-block w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h3 className="mb-2 text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="text-xs text-muted-foreground">{post.date} · {post.readTime}</span>
              <Link to={`/blog`} className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline">
                Read More <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/blog" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
          View All Articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  </section>
);

export default BlogSection;
