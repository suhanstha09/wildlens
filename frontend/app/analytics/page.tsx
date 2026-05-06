import Link from 'next/link';

const metrics = [
  ['Active Sensors', '128 / 130', '+2.4% vs last week'],
  ['Daily Detections', '1,402', 'Peak at 03:00 AM'],
  ['Processing Queue', '8.2k GB', 'Ingestion steady'],
];

const species = [
  ['White-tailed Deer', '78%'],
  ['Red Fox', '61%'],
  ['Coyote', '48%'],
  ['Black Bear', '33%'],
  ['Others', '18%'],
];

export default function AnalyticsPage() {
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
        .icon-button {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: transparent;
          color: var(--on-surface-variant);
          border: 1px solid var(--outline-variant);
          cursor: pointer;
          font: inherit;
        }
        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--primary-container);
          color: var(--on-primary);
          font-size: 0.8rem;
          font-weight: 700;
        }

        /* ── SHELL ── */
        .analytics-shell {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          min-height: calc(100vh - 57px);
          align-items: start;
        }

        /* ── SIDEBAR ── */
        .analytics-sidebar {
          padding: 20px 16px;
          border-right: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.82);
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 57px);
          position: sticky;
          top: 57px;
        }
        .analytics-sidebar .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .analytics-sidebar .brand-mark {
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
        .analytics-sidebar .brand-title { font-weight: 700; margin: 0; font-size: 0.95rem; }
        .analytics-sidebar .brand-subtitle { color: var(--on-surface-variant); font-size: 0.82rem; margin: 0; }

        .analytics-sidebar .new-dataset-button {
          width: 100%;
          padding: 14px 18px;
          border-radius: 6px;
          font-weight: 600;
          background: var(--primary);
          color: var(--on-primary);
          border: 0;
          font: inherit;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(26, 60, 52, 0.16);
          margin-bottom: 14px;
          text-align: left;
        }

        .analytics-sidebar .nav-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .analytics-sidebar .nav-item {
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
        .analytics-sidebar .nav-item:hover { background: var(--surface-container-low); }
        .analytics-sidebar .nav-item.active {
          color: var(--on-surface);
          background: var(--surface-container-lowest);
          border-color: var(--outline-variant);
        }
        .analytics-sidebar .nav-icon {
          width: 18px;
          text-align: center;
          color: var(--primary);
        }
        .analytics-sidebar .assistant-assistant-button {
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
        .analytics-sidebar .assistant-support-link {
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
          <label className="searchbar" aria-label="Search data">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search data..." />
          </label>
        </div>
        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Notifications">◔</button>
          <button className="icon-button" type="button" aria-label="Settings">⚙</button>
          <div className="avatar" aria-hidden="true">R</div>
        </div>
      </header>

      <div className="analytics-shell">
        {/* ── SIDEBAR ── */}
        <aside className="analytics-sidebar">
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
              <a key={item} className={`nav-item ${index === 3 ? 'active' : ''}`} href={href}>
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {item}
              </a>
            ))}
          </nav>

          <button className="assistant-assistant-button" type="button">AI Assistant Scuba</button>
          <a className="assistant-support-link" href="#">Support</a>
        </aside>

        {/* ── MAIN ── */}
        <div className="dashboard-main">
          <header className="topbar analytics-titlebar">
            <div>
              <p className="eyebrow">Analytics and Insights</p>
              <h1>Operational intelligence</h1>
              <p className="lede">Real-time ecological data streams from Station 04 active surveillance network.</p>
            </div>
            <button className="primary-button" type="button">Export Report</button>
          </header>

          <section className="stats-grid">
            {metrics.map(([label, value, detail]) => (
              <article className="stat-card" key={label}>
                <p className="card-label">{label}</p>
                <div className="stat-row">
                  <strong>{value}</strong>
                  <span className="trend muted">{detail}</span>
                </div>
                <div className="meter">
                  <span style={{ width: label === 'Processing Queue' ? '72%' : label === 'Daily Detections' ? '88%' : '94%' }} />
                </div>
              </article>
            ))}
          </section>

          <section className="content-grid analytics-content-grid">
            <article className="panel panel-large chart-panel">
              <div className="panel-header">
                <div>
                  <p className="card-label">Animal Activity over 24 Hours</p>
                  <h2>Temporal distribution of captured triggers</h2>
                </div>
                <div className="legend">
                  <span><i className="legend-dot mammals" />Mammals</span>
                  <span><i className="legend-dot avian" />Avian</span>
                </div>
              </div>
              <div className="chart" aria-hidden="true">
                <span className="grid-line line-1" />
                <span className="grid-line line-2" />
                <span className="grid-line line-3" />
                <span className="grid-line line-4" />
                <span className="axis axis-left">00:00</span>
                <span className="axis axis-mid">12:00</span>
                <span className="axis axis-right">23:59</span>
                <svg viewBox="0 0 720 280" preserveAspectRatio="none" className="chart-svg">
                  <path d="M 0 228 C 80 228, 120 220, 160 192 S 260 92, 340 96 S 460 218, 560 180 S 640 92, 720 80" className="chart-line mammals" />
                  <path d="M 0 252 C 90 246, 140 232, 220 222 S 360 214, 430 236 S 560 248, 620 212 S 690 190, 720 172" className="chart-line avian" />
                </svg>
              </div>
            </article>

            <article className="panel panel-side species-panel">
              <div className="panel-header compact">
                <div>
                  <p className="card-label">Species Distribution</p>
                  <h2>Volume per classification</h2>
                </div>
              </div>
              <div className="species-list">
                {species.map(([name, value], index) => (
                  <div className="species-row" key={name}>
                    <div className="species-meta">
                      <span>{name}</span>
                      <strong>{value}</strong>
                    </div>
                    <div className="species-bar">
                      <span
                        style={{ width: value }}
                        className={index < 2 ? 'moss' : index === 2 ? 'clay' : index === 3 ? 'dark' : 'light'}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <button className="ghost-button" type="button">Export Species Report</button>
            </article>
          </section>

          <section className="panel panel-large table-panel analytics-table-panel">
            <div className="panel-header">
              <div>
                <p className="card-label">Camera Trap Performance</p>
                <h2>Hardware health and efficiency metrics</h2>
              </div>
            </div>
            <table className="performance-table">
              <thead>
                <tr>
                  <th>Trap Unit ID</th>
                  <th>Uptime</th>
                  <th>Trigger Rate</th>
                  <th>Battery</th>
                  <th>Storage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['UNIT-04-A1', '99.8%', '12.4 / hr', '84%', '64%'],
                  ['UNIT-04-A2', '94.2%', '8.1 / hr', '32%', '78%'],
                  ['UNIT-04-B1', '100%', '24.7 / hr', 'Solar', '18%'],
                  ['UNIT-04-C5', '0.0%', '0.0 / hr', '0%', '4%'],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>
                      <div className="meter meter-inline"><span style={{ width: row[4] }} /></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
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