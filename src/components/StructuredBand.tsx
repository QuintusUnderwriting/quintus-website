type StructuredBandProps = {
  items: {
    title: string;
    text: string;
    symbol?: "broker" | "underwriting" | "technology" | "relationships" | "strength";
  }[];
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

function BrokerIcon({ symbol }: { symbol: NonNullable<StructuredBandProps["items"][number]["symbol"]> }) {
  switch (symbol) {
    case "broker":
      return (
        <svg className="reason-symbol" aria-hidden="true" viewBox="0 0 48 48" focusable="false">
          <path d="M10 14h28v16H21l-7 6v-6h-4z" />
          <path d="M18 22l3 3 7-7" />
        </svg>
      );
    case "underwriting":
      return (
        <svg className="reason-symbol" aria-hidden="true" viewBox="0 0 48 48" focusable="false">
          <path d="M24 8l12 4v8c0 7-5 13-12 18-7-5-12-11-12-18v-8l12-4z" />
          <path d="M19 25l4 4 7-8" />
        </svg>
      );
    case "technology":
      return (
        <svg className="reason-symbol" aria-hidden="true" viewBox="0 0 48 48" focusable="false">
          <rect x="15" y="15" width="18" height="18" rx="3" />
          <path d="M18 9v6M24 9v6M30 9v6M18 33v6M24 33v6M30 33v6M9 18h6M9 24h6M9 30h6M33 18h6M33 24h6M33 30h6" />
          <rect x="20" y="20" width="8" height="8" rx="1.5" />
        </svg>
      );
    case "relationships":
      return (
        <svg className="reason-symbol" aria-hidden="true" viewBox="0 0 48 48" focusable="false">
          <circle cx="18" cy="24" r="7" />
          <circle cx="30" cy="24" r="7" />
          <path d="M21 24h6" />
        </svg>
      );
    case "strength":
      return (
        <svg className="reason-symbol" aria-hidden="true" viewBox="0 0 48 48" focusable="false">
          <path d="M24 8l12 4v8c0 7-5 13-12 18-7-5-12-11-12-18v-8l12-4z" />
          <path d="M18 29v-6M24 29v-10M30 29v-8" />
        </svg>
      );
    default:
      return null;
  }
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
              {item.symbol ? (
                <div className="reason-mark" aria-hidden="true">
                  <BrokerIcon symbol={item.symbol} />
                </div>
              ) : icon === "pillar" ? (
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
