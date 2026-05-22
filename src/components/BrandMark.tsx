import Link from "next/link";

export function BrandMark() {
  return (
    <Link className="brand-mark" href="/" aria-label="Quintus Underwriting home">
      <span className="brand-word">Quintus</span>
      <span className="brand-rule" aria-hidden="true" />
      <span className="brand-descriptor">Underwriting</span>
    </Link>
  );
}
