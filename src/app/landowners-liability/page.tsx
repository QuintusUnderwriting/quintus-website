import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/ProductDetail";
import { getProduct } from "@/data/site";

export const metadata: Metadata = {
  title: "Landowners Liability",
  description:
    "Landowners liability insurance support from Quintus Underwriting for rural, estate, and specialist land exposures.",
};

export default function LandownersLiabilityPage() {
  const product = getProduct("landowners-liability");

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}
