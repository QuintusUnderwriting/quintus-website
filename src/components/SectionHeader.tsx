type SectionHeaderProps = {
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  title,
  text,
  align = "center",
  tone = "light",
}: SectionHeaderProps) {
  return (
    <div className={`section-header section-header-${align} section-header-${tone}`}>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}
