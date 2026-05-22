import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "gold" | "navy" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "gold",
  className = "",
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = `button button-${variant} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        focusable="false"
        className="button-icon"
      >
        <path d="M5 12h13m-5-5 5 5-5 5" />
      </svg>
    </>
  );

  if (isExternal) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
