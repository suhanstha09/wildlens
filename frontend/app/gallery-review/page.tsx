const captures = [
  { title: 'Panthera onca', score: '98% match', selected: true },
  { title: 'Leopard cat', score: '94% match' },
  { title: 'Tapir pair', score: '92% match' },
  { title: 'Low confidence', score: '42% match', flagged: true },
  { title: 'Macaw', score: '90% match' },
  { title: 'Beaver', score: '97% match' },
  { title: 'Monkey', score: '91% match' },
  { title: 'Black bear', score: '89% match' },
  { title: 'Sloth', score: '96% match' },
  { title: 'Jaguar', score: '95% match' },
];

import Link from 'next/link';

export default function GalleryReviewPage() {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <div className="brand-lockup">
          <div className="brand-mark">WL</div>
          <div>
            <p className="brand-title">Wild Lens</p>
            <p className="brand-subtitle">Scientific hub</p>
          </div>
        </div>

        <button className="new-dataset-button" type="button">+ New Dataset</button>

        <nav className="nav-stack" aria-label="Primary navigation">
          {[
            ['Dashboard', '/'],
            ['Upload Pipeline', '/upload-pipeline'],
            ['Gallery Review', '/gallery-review'],
            ['Analytics', '/analytics'],
          ].map(([item, href], index) => (
            <a key={item} className={`nav-item ${index === 2 ? 'active' : ''}`} href={href}>
              <span className="nav-icon" aria-hidden="true">
                {index === 0 ? '◫' : index === 1 ? '↑' : index === 2 ? '▣' : '▤'}
              </span>
              {item}
            </a>
          ))}
        </nav>

        <div className="sidebar-footer">
          <a href="#">Documentation</a>
          <a href="#">Support</a>
        </div>
      </aside>

      <div className="dashboard-main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Review mode · Dataset Amazon_Basin_2024_Q3</p>
            <h1>Wildlife Gallery Review</h1>
          </div>

          <div className="topbar-actions">
            <button className="secondary-button" type="button">Clear Filters</button>
            <button className="primary-button" type="button">False Triggers</button>
            <button className="secondary-button" type="button">Verify Selection</button>
          </div>
        </header>

        <section className="review-filters panel">
          <div>
            <p className="card-label">Species Filter</p>
            <button className="filter-input" type="button">All Species</button>
          </div>
          <div>
            <p className="card-label">Min. Confidence</p>
            <div className="filter-slider"><span style={{ width: '85%' }} /></div>
          </div>
          <div>
            <p className="card-label">Camera ID</p>
            <button className="filter-input" type="button">All Units</button>
          </div>
          <div>
            <p className="card-label">Batch Status</p>
            <div className="batch-chips">
              <span className="batch-chip active">Unverified (412)</span>
              <span className="batch-chip">Flagged (18)</span>
            </div>
          </div>
        </section>

        <section className="gallery-toolbar">
          <label className="checkline">
            <input type="checkbox" /> Select All (Showing 124 images)
          </label>
          <div className="view-toggle"><span>View:</span><button type="button">▦</button><button type="button">☷</button></div>
        </section>

        <section className="gallery-grid">
          {captures.map((capture) => (
            <article className={`capture-card ${capture.selected ? 'selected' : ''} ${capture.flagged ? 'flagged' : ''}`} key={capture.title}>
              <span className="match-badge">{capture.score}</span>
              <div className="capture-image" aria-hidden="true" />
              <div className="capture-overlay">
                <strong>{capture.title}</strong>
                <p>2024-05-13 · 02:22:19</p>
              </div>
            </article>
          ))}
        </section>

        <div className="review-footer">
          <p>Showing 1-10 of 412 unverified captures</p>
          <div className="pagination">
            <button type="button">‹</button>
            <button className="active" type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button">›</button>
          </div>
        </div>
      </div>

      <Link className="assistant-fab" href="/assistant" aria-label="Open Scuba assistant">AI</Link>
    </main>
  );
}