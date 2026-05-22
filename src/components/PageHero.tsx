import Link from "next/link";
import { ButtonLink } from "./ButtonLink";

type PageHeroProps = {
  title: string;
  text: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function PageHero({ title, text, ctaHref, ctaLabel }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </nav>
        <h1>{title}</h1>
        <p>{text}</p>
        {ctaHref && ctaLabel ? (
          <ButtonLink href={ctaHref}>{ctaLabel}</ButtonLink>
        ) : null}
      </div>
    </section>
  );
}
