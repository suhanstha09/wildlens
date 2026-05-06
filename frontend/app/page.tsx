import Link from 'next/link';

const activityItems = [
  ['Panthera onca detected', 'Station 04 · 2 min ago', 'High priority'],
  ['False trigger: wind', 'Station 12 · 15m ago', 'Filtered'],
  ['Cabidae group sighted', 'Station 09 · 44m ago', 'Verified'],
  ['Low battery warning', 'Station 02 · 1h ago', 'Action needed'],
];

const detections = [
  {
    title: 'Tapir terrestris',
    score: '99% match',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Jaguar cub',
    score: '98% match',
    image: 'https://images.unsplash.com/photo-1501706362039-c6e80948d6b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Fox profile',
    score: '98% match',
    image: 'https://images.unsplash.com/photo-1552410260-0fd9b577afa6?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Macaw pair',
    score: '98% match',
    image: 'https://images.unsplash.com/photo-1501706362039-c6e80948d6b8?auto=format&fit=crop&w=600&q=80&sat=-40',
  },
  {
    title: 'Coyote pack',
    score: '98% match',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=600&q=80',
  },
];

export default function HomePage() {
  return (
    <main className="screen-shell">
      <style>{`
        /* ── TOPBAR ── */
        .site-topbar {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 20px;
          padding: 12px 22px;
          border-bottom: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.94);
          backdrop-filter: blur(12px);
          position: sticky;
          top: 0;
          z-index: 20;
        }
        .site-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .site-brand strong {
          font-size: 1rem;
          letter-spacing: -0.02em;
        }
        .site-search {
          display: flex;
          justify-content: center;
        }
        .searchbar {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid var(--outline-variant);
          border-radius: 2px;
          background: rgba(248, 249, 248, 0.84);
          color: var(--on-surface-variant);
          width: min(38vw, 420px);
        }
        .searchbar input {
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: var(--on-surface);
          font: inherit;
        }
        .site-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-self: end;
        }

        /* ── SHELL ── */
        .home-shell {
          display: grid !important;
          grid-template-columns: 290px minmax(0, 1fr) !important;
          min-height: calc(100vh - 57px);
          align-items: start;
        }

        /* ── SIDEBAR ── */
        .home-sidebar {
          padding: 20px 16px;
          border-right: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.82);
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 57px);
          position: sticky;
          top: 57px;
        }
        .home-sidebar .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .home-sidebar .brand-mark {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: grid;
          place-items: center;
          background: var(--primary);
          color: var(--on-primary);
          font-weight: 700;
          letter-spacing: 0.08em;
          font-size: 13px;
          flex-shrink: 0;
        }
        .home-sidebar .brand-title { font-weight: 700; margin: 0; font-size: 0.95rem; }
        .home-sidebar .brand-subtitle { color: var(--on-surface-variant); font-size: 0.82rem; margin: 0; }

        .home-sidebar .new-dataset-button {
          width: 100%;
          padding: 14px 18px;
          border-radius: 6px;
          font-weight: 600;
          background: var(--primary);
          color: var(--on-primary);
          border: 0;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(26, 60, 52, 0.16);
          margin-bottom: 14px;
          text-align: left;
        }

        .home-sidebar .nav-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .home-sidebar .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 6px;
          color: var(--on-surface-variant);
          text-decoration: none;
          border: 1px solid transparent;
          font-size: 0.95rem;
          transition: background 0.15s;
        }
        .home-sidebar .nav-item:hover { background: var(--surface-container-low); }
        .home-sidebar .nav-item.active {
          color: var(--on-surface);
          background: var(--surface-container-lowest);
          border-color: var(--outline-variant);
        }
        .home-sidebar .nav-icon {
          width: 18px;
          text-align: center;
          color: var(--primary);
        }
        .home-sidebar .assistant-assistant-button {
          min-height: 44px;
          padding: 0 18px;
          border: 1px solid var(--outline-variant);
          border-radius: 6px;
          background: var(--surface-container-lowest);
          color: var(--on-surface);
          font: inherit;
          font-weight: 600;
          cursor: pointer;
          margin-top: 12px;
          text-align: left;
        }
        .home-sidebar .assistant-support-link {
          color: var(--on-surface-variant);
          text-decoration: none;
          margin-top: 10px;
          font-size: 0.88rem;
        }

        /* ── SCUBA FAB ── */
        .scuba-fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: 24px;
          padding: 11px 18px;
          color: var(--on-surface);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 60;
          text-decoration: none;
          transition: all 0.15s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        .scuba-fab:hover {
          background: var(--surface-container-high);
          border-color: var(--primary);
          box-shadow: 0 4px 20px rgba(26,60,52,0.15);
        }
        .scuba-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }
      `}</style>

      {/* ── SITE TOPBAR ── */}
      <header className="site-topbar">
        <div className="site-brand" aria-label="Wild Lens home">
          <div className="brand-mark">WL</div>
          <strong>Wild Lens</strong>
        </div>
        <div className="site-search">
          <label className="searchbar" aria-label="Search datasets, species, or locations">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search datasets, species, or locations..." />
          </label>
        </div>
        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Notifications">◔</button>
          <button className="icon-button" type="button" aria-label="Settings">⚙</button>
          <div className="avatar" aria-hidden="true">R</div>
        </div>
      </header>

      <div className="dashboard-shell home-shell">
        {/* ── SIDEBAR ── */}
        <aside className="home-sidebar">
          <div className="brand-lockup">
            <div className="brand-mark">WL</div>
            <div>
              <p className="brand-title">Wildlife Monitoring</p>
              <p className="brand-subtitle">Field Station 04</p>
            </div>
          </div>

          <button className="new-dataset-button" type="button">+ New Dataset</button>

          <nav className="nav-stack" aria-label="Primary navigation">
            {[
              ['Dashboard', '/', '◫'],
              ['Upload Pipeline', '/upload-pipeline', '↑'],
              ['Gallery Review', '/gallery-review', '▣'],
              ['Analytics', '/analytics', '▤'],
            ].map(([item, href, icon], index) => (
              <a key={item} className={`nav-item ${index === 0 ? 'active' : ''}`} href={href}>
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {item}
              </a>
            ))}
          </nav>

          <button className="assistant-assistant-button" type="button">AI Assistant Scuba</button>
          <a className="assistant-support-link" href="#">Support</a>
        </aside>

        {/* ── DASHBOARD MAIN ── */}
        <div className="dashboard-main">
          <section className="hero-row home-hero">
            <div>
              <p className="eyebrow">Wildlife Monitoring · Field Station 04</p>
              <h1>Monitoring Overview</h1>
              <p className="lede">Real-time ecological data from the Amazon Basin North Sector.</p>
            </div>
          </section>

          <section className="stats-grid home-stats">
            <article className="stat-card">
              <p className="card-label">Total Images Processed</p>
              <div className="stat-row">
                <strong>128,402</strong>
                <span className="trend positive">+12%</span>
              </div>
              <div className="meter"><span style={{ width: '84%' }} /></div>
            </article>
            <article className="stat-card">
              <p className="card-label">Wildlife Detected</p>
              <div className="stat-row">
                <strong>64.2%</strong>
                <span className="trend muted">Sage Stable</span>
              </div>
              <div className="mini-bars" aria-hidden="true">
                <span style={{ height: '28%' }} />
                <span style={{ height: '42%' }} />
                <span className="highlight" style={{ height: '72%' }} />
                <span style={{ height: '36%' }} />
                <span className="highlight" style={{ height: '60%' }} />
                <span className="highlight" style={{ height: '56%' }} />
              </div>
            </article>
            <article className="stat-card">
              <p className="card-label">False Triggers Filtered</p>
              <div className="stat-row">
                <strong>42,109</strong>
                <span className="trend warning">Ochre At Risk</span>
              </div>
              <p className="body-note">Efficiency optimized by 4.2% since last sync.</p>
            </article>
          </section>

          <section className="content-grid home-content-grid">
            <article className="panel panel-large map-panel">
              <div className="panel-header">
                <div>
                  <p className="card-label">Camera Trap Network</p>
                  <h2>24 Active</h2>
                </div>
                <div className="network-status">
                  <span className="status-chip">24 Active</span>
                  <span className="status-chip offline">2 Offline</span>
                </div>
              </div>
              <div className="network-map" aria-hidden="true">
                <span className="map-pin" style={{ left: '22%', top: '38%' }} />
                <span className="map-pin" style={{ left: '46%', top: '56%' }} />
                <span className="map-pin offline" style={{ left: '67%', top: '64%' }} />
                <span className="map-pin" style={{ left: '35%', top: '70%' }} />
              </div>
            </article>

            <article className="panel panel-side activities-panel home-activity-panel">
              <div className="panel-header compact">
                <div>
                  <p className="card-label">Recent Activity</p>
                  <h2>Live field updates</h2>
                </div>
              </div>
              <ul className="activity-list">
                {activityItems.map(([title, meta, badge]) => (
                  <li key={title}>
                    <div className="activity-marker" />
                    <div>
                      <strong>{title}</strong>
                      <p>{meta}</p>
                    </div>
                    <span className="status-chip">{badge}</span>
                  </li>
                ))}
              </ul>
              <button className="ghost-button home-activity-button" type="button">
                View All Activity
              </button>
            </article>
          </section>

          <section className="panel detections-panel">
            <div className="panel-header compact">
              <div>
                <p className="card-label">High-Confidence Detections</p>
                <h2>Species cards from the latest batch</h2>
              </div>
              <div className="detection-actions">
                <button className="secondary-button" type="button">Filter Species</button>
                <button className="secondary-button" type="button">Unknown Species</button>
                <button className="primary-button" type="button">Export CSV</button>
              </div>
            </div>
            <div className="detection-strip">
              {detections.map((item) => (
                <article className="detection-card" key={item.title}>
                  <div
                    className="detection-image"
                    style={{ backgroundImage: `linear-gradient(180deg, rgba(1,38,31,0.12), rgba(1,38,31,0.5)), url(${item.image})` }}
                  />
                  <div className="detection-caption">
                    <strong>{item.title}</strong>
                    <span>{item.score}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="home-footer">
            <span>© 2024 Wild Lens Systems</span>
            <span>Security Protocol: AES-256</span>
            <span>API Docs</span>
            <span>Network Status</span>
          </footer>
        </div>
      </div>

      {/* ── SCUBA FAB ── */}
      <Link className="scuba-fab" href="/assistant" aria-label="Open Scuba assistant">
        <div className="scuba-dot" />
        Scuba
      </Link>
    </main>
  );
}