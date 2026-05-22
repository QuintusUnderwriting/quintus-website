type IconSealProps = {
  label: string;
  index?: number;
};

export function IconSeal({ label, index }: IconSealProps) {
  const initials = label
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <span className="icon-seal" aria-hidden="true">
      {index ? String(index).padStart(2, "0") : initials}
    </span>
  );
}
