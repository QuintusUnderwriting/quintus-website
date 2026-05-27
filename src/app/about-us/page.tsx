import type { Metadata } from "next";
import { BrokerCta } from "@/components/BrokerCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { StructuredBand } from "@/components/StructuredBand";
import { pillars } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Quintus Underwriting, a specialist UK MGA built around broker relationships, underwriting judgement, and intelligent technology.",
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        text="A specialist UK MGA built for brokers who value underwriting access, clear thinking, and modern delivery."
      />
      <section className="section section-white">
        <div className="container editorial-grid">
          <div>
            <SectionHeader
              align="left"
              title="Underwriting with judgement. Technology with purpose."
              text="Quintus brings together experienced underwriting, responsive broker service, and intelligent process design."
            />
          </div>
          <div className="editorial-copy">
            <p>
              The Quintus model is grounded in a simple belief: better
              underwriting starts with better conversations. We take the time to
              understand each risk, the broker objective, and the policyholder
              context behind the presentation.
            </p>
            <p>
              Technology supports that work by improving speed, consistency, and
              visibility. It does not replace underwriting judgement. This
              balance helps brokers access a specialist market that is both
              disciplined and practical.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-offwhite">
        <div className="container value-grid">
          {[
            "Broker-first service model",
            "Specialist risk appetite",
            "Clear submission pathways",
            "Structured portfolio thinking",
          ].map((value) => (
            <article key={value} className="value-item">
              <span aria-hidden="true" />
              <h3>{value}</h3>
            </article>
          ))}
        </div>
      </section>
      <StructuredBand
        title="Built on Five Pillars"
        text="Quintus means the fifth: a platform designed around five structural principles that support long-term performance, trusted market relationships and consistent underwriting outcomes."
        items={pillars}
        icon="pillar"
      />
      <BrokerCta />
    </>
  );
}
