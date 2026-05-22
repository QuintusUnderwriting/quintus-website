import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/data/site";

export const metadata: Metadata = {
  title: "Bespoke Schemes",
  description:
    "Bespoke underwriting schemes for niche broker portfolios, affinity opportunities, and specialist distribution models.",
};

export default function BespokeSchemesPage() {
  const product = getProduct("bespoke-schemes");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
