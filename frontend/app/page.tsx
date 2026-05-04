const highlights = [
  'App Router structure',
  'Server-first by default',
  'Ready for feature folders',
];

export default function HomePage() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Wildlens</p>
        <h1>Next.js app scaffold</h1>
        <p className="lede">
          A clean starting point with the App Router, TypeScript, and a simple structure you can grow into.
        </p>

        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item} className="feature-pill">
              {item}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}