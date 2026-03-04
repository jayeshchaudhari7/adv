import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "@/assets/advertza-logo.png";

const footerLinks = {
  services: [
    { name: "Google Ads", href: "/services/google-ads" },
    { name: "Meta Ads", href: "/services/meta-ads" },
    { name: "TikTok Ads", href: "/services/tiktok-ads" },
    { name: "Amazon Ads", href: "/services/amazon-ads" },
    { name: "Shopify Marketing", href: "/services/shopify" },
    { name: "Email Marketing", href: "/services/email-marketing" },
  ],
  industries: [
    { name: "Fashion & Apparel", href: "/industries/fashion" },
    { name: "Beauty & Cosmetics", href: "/industries/beauty" },
    { name: "Health & Wellness", href: "/industries/health-wellness" },
    { name: "Electronics & Tech", href: "/industries/electronics" },
    { name: "All Industries", href: "/industries" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const Footer = () => (
  <footer className="border-t border-border bg-charcoal text-muted">
    <div className="container py-16">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="Advertza" className="h-10" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Performance-driven digital marketing agency helping brands scale profitably across Google, Meta, TikTok, Amazon & more.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Services</h4>
          <ul className="space-y-2.5">
            {footerLinks.services.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Industries */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Industries</h4>
          <ul className="space-y-2.5">
            {footerLinks.industries.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Company</h4>
          <ul className="space-y-2.5">
            {footerLinks.company.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="text-primary-foreground">India:</strong> 16, Sai Baba Society, Pandesara, Surat
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                <strong className="text-primary-foreground">UK:</strong> United Kingdom
              </span>
            </li>
            <li className="flex items-start gap-2 text-sm text-muted-foreground">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <a href="tel:+919725487887" className="block hover:text-primary">🇮🇳 +91 97254 87887</a>
                <a href="tel:+447442193744" className="block hover:text-primary">🇬🇧 +44 7442 193744</a>
              </div>
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:hello@advertza.com" className="hover:text-primary">hello@advertza.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-charcoal-light">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Advertza. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Offices in UK & India</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="https://reddit.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary" aria-label="Reddit">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
