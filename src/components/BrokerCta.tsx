import { brokerRegistrationUrl } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

type BrokerCtaProps = {
  title?: string;
  text?: string;
};

export function BrokerCta({
  title = "Become a Broker Partner",
  text = "Partner with Quintus Underwriting for specialist support, tailored solutions, and a team committed to broker success.",
}: BrokerCtaProps) {
  return (
    <section className="broker-cta" aria-labelledby="broker-cta-title">
      <div className="container broker-cta-inner">
        <div className="cta-symbol" aria-hidden="true">
          Q
        </div>
        <div>
          <h2 id="broker-cta-title">{title}</h2>
          <p>{text}</p>
        </div>
        <ButtonLink href={brokerRegistrationUrl}>
          Become a Broker Partner
        </ButtonLink>
      </div>
    </section>
  );
}
