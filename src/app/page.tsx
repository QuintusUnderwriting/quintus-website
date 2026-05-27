import { BrokerCta } from "@/components/BrokerCta";
import { ButtonLink } from "@/components/ButtonLink";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { StructuredBand } from "@/components/StructuredBand";
import {
  brokerReasons,
  brokerRegistrationUrl,
  pillars,
  products,
} from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Underwriting Driven by People &amp; Technology.</h1>
            <p>
              Specialist UK MGA delivering expert underwriting, intelligent
              technology, and broker-first service.
            </p>
            <div className="hero-actions">
              <ButtonLink href={brokerRegistrationUrl}>
                Become a Broker Partner
              </ButtonLink>
              <ButtonLink href="/products" variant="ghost">
                Explore Products
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <StructuredBand title="Why Brokers Choose Quintus" items={brokerReasons} />

      <section className="section section-white">
        <div className="container">
          <SectionHeader
            title="Our Products"
            text="Specialist propositions shaped for brokers who need technical underwriting, clarity, and responsive execution."
          />
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section about-preview">
        <div className="container about-preview-grid">
          <div>
            <SectionHeader
              align="left"
              title="About Us"
              text="Quintus Underwriting is a specialist UK MGA partnering with brokers to deliver tailored insurance solutions for property, lifestyle, and rural risks."
            />
            <p>
              We combine deep underwriting expertise with intelligent technology
              to deliver exceptional outcomes. Our focus is simple: support
              brokers with the insight, service, and solutions they need to
              protect what matters most to their clients.
            </p>
            <ButtonLink href="/about-us">Learn more about us</ButtonLink>
          </div>
          <aside className="about-note" aria-label="Quintus operating model">
            <span>Operating Model</span>
            <h3>Technical judgement, modern process, personal service.</h3>
            <p>
              A disciplined MGA model where underwriter access, data-led
              process, and broker relationships work together.
            </p>
          </aside>
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
