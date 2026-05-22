import type { Metadata } from "next";
import { BrokerCta } from "@/components/BrokerCta";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { brokerRegistrationUrl, products } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Quintus Underwriting products for property owners, specialist home insurance, landowners liability, and bespoke schemes.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Products"
        text="Specialist underwriting propositions for brokers placing property, lifestyle, rural, and bespoke scheme risks."
        ctaHref={brokerRegistrationUrl}
        ctaLabel="Become a Broker Partner"
      />
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            title="Focused appetite. Clear routes to market."
            text="Each proposition is designed to give brokers practical access to technical underwriting and a clear conversation around the risk."
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
      <BrokerCta
        title="Have a product appetite question?"
        text="Bring us the risk, portfolio, or scheme opportunity and we will help identify the right underwriting route."
      />
    </>
  );
}
