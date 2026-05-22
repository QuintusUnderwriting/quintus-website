import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/data/site";

export const metadata: Metadata = {
  title: "Property Owners",
  description:
    "Property owners insurance solutions from Quintus Underwriting for residential, commercial, and mixed-use property risks.",
};

export default function PropertyOwnersPage() {
  const product = getProduct("property-owners");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
