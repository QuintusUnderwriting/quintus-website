import type { Metadata } from "next";
import { BrokerCta } from "@/components/BrokerCta";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for Quintus Underwriting website users.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        text="Website terms for users of the Quintus Underwriting website."
      />
      <section className="section section-white">
        <div className="container legal-simple">
          <SectionHeader
            align="left"
            title="Terms document to follow"
            text="The formal Quintus website terms and conditions will be added here once approved. For broker onboarding and underwriting enquiries, please use the broker registration route."
          />
        </div>
      </section>
      <BrokerCta />
    </>
  );
}
