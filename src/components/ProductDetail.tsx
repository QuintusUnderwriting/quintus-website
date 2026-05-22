import type { Product } from "@/data/site";
import { brokerRegistrationUrl } from "@/data/site";
import { BrokerCta } from "./BrokerCta";
import { PageHero } from "./PageHero";
import { SectionHeader } from "./SectionHeader";

type ProductDetailProps = {
  product: Product;
};

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="detail-panel">
      <h3>{title}</h3>
      <ul className="gold-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <PageHero
        title={product.title}
        text={product.intro}
        ctaHref={brokerRegistrationUrl}
        ctaLabel="Discuss this product"
      />
      <section className="section section-white">
        <div className="container split-layout">
          <SectionHeader
            align="left"
            title="A considered underwriting route"
            text={product.outcome}
          />
          <div className="quote-panel">
            <p>
              Every risk deserves a clear view of exposure, controls, and
              commercial intent. Quintus is built around that conversation.
            </p>
          </div>
        </div>
      </section>
      <section className="section section-offwhite">
        <div className="container detail-grid">
          <DetailList title="Suitable for" items={product.suitableFor} />
          <DetailList
            title="Underwriting focus"
            items={product.underwritingFocus}
          />
          <DetailList title="Broker support" items={product.brokerSupport} />
        </div>
      </section>
      <BrokerCta
        title={`Talk to Quintus about ${product.shortTitle}`}
        text="Share the risk story, appetite question, or portfolio opportunity and our underwriting team will help shape the next step."
      />
    </>
  );
}
