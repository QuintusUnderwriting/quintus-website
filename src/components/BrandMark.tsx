import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  variant?: "default" | "footer";
};

export function BrandMark({ variant = "default" }: BrandMarkProps) {
  const src =
    variant === "footer"
      ? "/images/quintus-logo-footer.png"
      : "/images/quintus-logo-cropped.png";

  return (
    <Link
      className={`brand-mark brand-mark-${variant}`}
      href="/"
      aria-label="Quintus Underwriting home"
    >
      <Image
        src={src}
        alt="Quintus Underwriting"
        width={340}
        height={209}
        className="brand-logo"
        priority
      />
    </Link>
  );
}
