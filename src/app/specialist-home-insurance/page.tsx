import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/data/site";

export const metadata: Metadata = {
  title: "Specialist Home Insurance",
  description:
    "Tailored specialist home insurance for distinctive, high-value, and non-standard homes requiring individual underwriting.",
};

export default function SpecialistHomeInsurancePage() {
  const product = getProduct("specialist-home-insurance");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
