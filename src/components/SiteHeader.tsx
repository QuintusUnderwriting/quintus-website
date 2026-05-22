import Link from "next/link";
import { brokerRegistrationUrl, navigation } from "@/data/site";
import { BrandMark } from "./BrandMark";
import { ButtonLink } from "./ButtonLink";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="container header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink className="header-cta" href={brokerRegistrationUrl}>
          Become a Broker Partner
        </ButtonLink>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <a href={brokerRegistrationUrl} target="_blank" rel="noreferrer">
              Become a Broker Partner
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
