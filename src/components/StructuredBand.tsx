type StructuredBandProps = {
  items: { title: string; text: string }[];
  title: string;
  text?: string;
  icon?: "diamond" | "pillar";
};

const romanNumerals = ["I", "II", "III", "IV", "V"] as const;

function PillarIcon() {
  return (
    <svg
      className="pillar-symbol"
      aria-hidden="true"
      viewBox="0 0 48 48"
      focusable="false"
    >
      <path d="M11 9h26" />
      <path d="M14 14h20" />
      <path d="M17 14v22" />
      <path d="M24 14v22" />
      <path d="M31 14v22" />
      <path d="M14 36h20" />
      <path d="M10 41h28" />
    </svg>
  );
}

function toRomanNumeral(value: number) {
  return romanNumerals[value - 1] ?? String(value);
}

export function StructuredBand({
  items,
  title,
  text,
  icon = "diamond",
}: StructuredBandProps) {
  const headingId = `structured-band-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <section className="section navy-band" aria-labelledby={headingId}>
      <div className="container">
        <div className="section-header section-header-center section-header-dark">
          <h2 id={headingId}>{title}</h2>
          {text ? <p>{text}</p> : null}
        </div>
        <div className={`reason-grid reason-grid-${icon}`}>
          {items.map((item, index) => (
            <article key={item.title} className={`reason-item reason-item-${icon}`}>
              {icon === "pillar" ? (
                <div className="pillar-mark" aria-hidden="true">
                  <PillarIcon />
                  <span className="pillar-index">{toRomanNumeral(index + 1)}</span>
                </div>
              ) : (
                <span className="reason-rule" aria-hidden="true" />
              )}
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
