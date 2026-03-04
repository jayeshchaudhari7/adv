import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/advertza-logo.png";

const services = [
  {
    category: "Channel Services",
    items: [
      { name: "Google Ads Management", href: "/services/google-ads" },
      { name: "Meta Ads Management", href: "/services/meta-ads" },
      { name: "TikTok Ads Management", href: "/services/tiktok-ads" },
      { name: "Amazon Ads Management", href: "/services/amazon-ads" },
      { name: "Marketplace Advertising", href: "/services/marketplace-ads" },
    ],
  },
  {
    category: "Platform Services",
    items: [
      { name: "Shopify Marketing", href: "/services/shopify" },
      { name: "WooCommerce Marketing", href: "/services/woocommerce" },
      { name: "BigCommerce Marketing", href: "/services/bigcommerce" },
      { name: "Magento Marketing", href: "/services/magento" },
    ],
  },
  {
    category: "Specialized Services",
    items: [
      { name: "Conversion Rate Optimization", href: "/services/cro" },
      { name: "Email & SMS Marketing", href: "/services/email-marketing" },
      { name: "Analytics & Reporting", href: "/services/analytics" },
      { name: "Creative Services", href: "/services/creative" },
      { name: "Influencer Marketing", href: "/services/influencer" },
    ],
  },
];

const industryItems = [
  { name: "Fashion & Apparel", href: "/industries/fashion" },
  { name: "Beauty & Cosmetics", href: "/industries/beauty" },
  { name: "Home & Garden", href: "/industries/home-garden" },
  { name: "Electronics & Tech", href: "/industries/electronics" },
  { name: "Health & Wellness", href: "/industries/health-wellness" },
  { name: "Food & Beverage", href: "/industries/food-beverage" },
  { name: "Pet Supplies", href: "/industries/pet-supplies" },
  { name: "Jewelry", href: "/industries/jewelry" },
  { name: "Sporting Goods", href: "/industries/sporting-goods" },
  { name: "Custom Solutions", href: "/industries/custom" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: "services" as const },
  { name: "Industries", href: "/industries", hasDropdown: "industries" as const },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Advertza" className="h-10 md:h-12" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.hasDropdown)}
              onMouseLeave={() => link.hasDropdown && setOpenDropdown(null)}
            >
              <Link
                to={link.href}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href || (link.hasDropdown && location.pathname.startsWith(`/${link.hasDropdown}`)) ? "text-primary" : "text-foreground"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>

              {/* Services Mega Menu */}
              {link.hasDropdown === "services" && (
                <AnimatePresence>
                  {openDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-2 w-[640px] -translate-x-1/2 rounded-xl border border-border bg-background p-6 shadow-xl"
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {services.map((group) => (
                          <div key={group.category}>
                            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                              {group.category}
                            </p>
                            <ul className="space-y-2">
                              {group.items.map((item) => (
                                <li key={item.name}>
                                  <Link to={item.href} className="text-sm text-foreground transition-colors hover:text-primary" onClick={() => setOpenDropdown(null)}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 border-t border-border pt-4">
                        <Link to="/services" className="text-sm font-semibold text-primary hover:underline" onClick={() => setOpenDropdown(null)}>
                          View All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Industries Dropdown */}
              {link.hasDropdown === "industries" && (
                <AnimatePresence>
                  {openDropdown === "industries" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 top-full mt-2 w-[280px] -translate-x-1/2 rounded-xl border border-border bg-background p-4 shadow-xl"
                    >
                      <ul className="space-y-2">
                        {industryItems.map((item) => (
                          <li key={item.name}>
                            <Link to={item.href} className="block rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-primary" onClick={() => setOpenDropdown(null)}>
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-3 border-t border-border pt-3">
                        <Link to="/industries" className="text-sm font-semibold text-primary hover:underline" onClick={() => setOpenDropdown(null)}>
                          View All Industries →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+919725487887" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            +91 97254 87887
          </a>
          <Link to="/contact" className="rounded-lg bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-gold transition-all hover:opacity-90">
            Get Free Audit
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden" aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="container space-y-4 py-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.href} className="block text-base font-medium text-foreground" onClick={() => setMobileOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" className="mt-4 block rounded-lg bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-primary-foreground" onClick={() => setMobileOpen(false)}>
                Get Free Audit
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
