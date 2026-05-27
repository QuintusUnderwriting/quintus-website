import type { Metadata } from "next";
import { BrokerCta } from "@/components/BrokerCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "FCA Notice",
  description: "Regulatory notice information for Quintus Underwriting.",
};

export default function FcaNoticePage() {
  return (
    <>
      <PageHero
        title="FCA Notice"
        text="Regulatory notice information for Quintus Underwriting."
      />
      <section className="section section-white">
        <div className="container legal-simple">
          <SectionHeader
            align="left"
            title="Regulatory notice to follow"
            text="The formal FCA notice wording will be added here once approved. Quintus will maintain clear regulatory information in line with its governance and broker-first operating model."
          />
        </div>
      </section>
      <BrokerCta />
    </>
  );
}
