import Link from "next/link";
import { brokerRegistrationUrl, navigation, productNav } from "@/data/site";
import { legalLinks } from "@/data/legal";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <BrandMark variant="footer" />
          <p>Specialist underwriting. Broker first. Built for tomorrow.</p>
        </div>
        <div>
          <h2>Quick Links</h2>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <a href={brokerRegistrationUrl} target="_blank" rel="noreferrer">
                Become a Broker Partner
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2>Our Products</h2>
          <ul>
            {productNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <p>
            Broker enquiries and partnership conversations can be directed
            through the broker partner page.
          </p>
          <a
            className="footer-link"
            href={brokerRegistrationUrl}
            target="_blank"
            rel="noreferrer"
          >
            Start a partnership conversation
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Quintus Underwriting. All rights reserved.</span>
        <nav aria-label="Legal links" className="legal-footer-links">
          {legalLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
