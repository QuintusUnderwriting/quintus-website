import type { Metadata } from "next";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";
import { PageHero } from "@/components/PageHero";
import { cookiePolicyMeta, cookiePolicySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "Cookie policy for Quintus Underwriting, including how essential, analytics, and marketing cookies are used and managed.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        title="Cookie Policy"
        text="How Quintus uses essential cookies, when optional cookies may be set, and how you can update your preferences."
      />
      <section className="section section-white">
        <div className="container legal-layout">
          <aside className="legal-summary">
            <h2>{cookiePolicyMeta.documentTitle}</h2>
            <dl>
              <div>
                <dt>Prepared by</dt>
                <dd>{cookiePolicyMeta.preparedBy}</dd>
              </div>
              <div>
                <dt>Date</dt>
                <dd>{cookiePolicyMeta.date}</dd>
              </div>
            </dl>
            <CookieSettingsButton className="cookie-policy-settings">
              Open cookie settings
            </CookieSettingsButton>
          </aside>
          <div className="legal-content">
            {cookiePolicySections.map((section) => (
              <article className="legal-section" key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul className="gold-list legal-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.groups ? (
                  <div className="legal-group-grid">
                    {section.groups.map((group) => (
                      <div className="legal-group" key={group.title}>
                        <h3>{group.title}</h3>
                        <ul>
                          {group.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
                {section.links ? (
                  <div className="legal-inline-links">
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          link.href.startsWith("http") ? "noreferrer" : undefined
                        }
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
                {section.followOn?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
