import Link from "next/link";
import type { Product } from "@/data/site";
import { IconSeal } from "./IconSeal";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <article className="product-card">
      <IconSeal label={product.shortTitle} index={index + 1} />
      <h3>{product.title}</h3>
      <p>{product.summary}</p>
      <Link href={`/${product.slug}`} className="text-link">
        Learn more
        <span aria-hidden="true"> →</span>
      </Link>
    </article>
  );
}
