type StructuredBandProps = {
  items: { title: string; text: string }[];
  title: string;
};

export function StructuredBand({ items, title }: StructuredBandProps) {
  return (
    <section className="section navy-band" aria-labelledby="structured-band-title">
      <div className="container">
        <div className="section-header section-header-center section-header-dark">
          <h2 id="structured-band-title">{title}</h2>
        </div>
        <div className="reason-grid">
          {items.map((item) => (
            <article key={item.title} className="reason-item">
              <span className="reason-rule" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
