import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { brokerRegistrationUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Become a Broker Partner",
  description:
    "Start a broker partnership conversation with Quintus Underwriting.",
};

export default function BecomeBrokerPartnerPage() {
  return (
    <>
      <PageHero
        title="Become a Broker Partner"
        text="A specialist MGA partnership route for brokers who value access, clarity, and a disciplined underwriting conversation."
        ctaHref={brokerRegistrationUrl}
        ctaLabel="Open broker registration"
      />
      <section className="section section-white">
        <div className="container partner-grid">
          <div>
            <SectionHeader
              align="left"
              title="What makes a strong partnership"
              text="Quintus works best with brokers who bring clear risk information, thoughtful client context, and a shared focus on sustainable underwriting outcomes."
            />
            <div className="partner-list">
              {[
                "Clear product fit or portfolio opportunity",
                "Quality risk information and open underwriting dialogue",
                "A relationship-led approach to service and performance",
              ].map((item) => (
                <article key={item}>
                  <span aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
          <aside className="partner-form">
            <h2>Start the conversation</h2>
            <p>
              Complete the Quintus broker registration form to introduce your
              firm, share your product interests, and begin the onboarding
              conversation with the underwriting team.
            </p>
            <ul className="gold-list">
              <li>Broker details and contact information</li>
              <li>Product appetite and scheme opportunities</li>
              <li>Next-step review by the Quintus team</li>
            </ul>
            <ButtonLink href={brokerRegistrationUrl}>
              Open broker registration
            </ButtonLink>
          </aside>
        </div>
      </section>
    </>
  );
}
