import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { privacyPolicyMeta, privacyPolicySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Quintus Partners Ltd, including how personal data is collected, used, shared, retained, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        text="How Quintus collects, uses, stores, shares, and protects personal data in connection with underwriting, broker relationships, and insurance services."
      />
      <section className="section section-white">
        <div className="container legal-layout">
          <aside className="legal-summary">
            <h2>{privacyPolicyMeta.documentTitle}</h2>
            <dl>
              <div>
                <dt>Prepared by</dt>
                <dd>{privacyPolicyMeta.preparedBy}</dd>
              </div>
              <div>
                <dt>Date</dt>
                <dd>{privacyPolicyMeta.date}</dd>
              </div>
            </dl>
          </aside>
          <div className="legal-content">
            {privacyPolicySections.map((section) => (
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
