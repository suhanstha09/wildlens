import Link from 'next/link';

export default function HomePage() {
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

        <button className="new-dataset-button" type="button">
          + New Dataset
        </button>

        <nav className="nav-stack" aria-label="Primary navigation">
          {[
            ['Dashboard', '/'],
            ['Upload Pipeline', '/upload-pipeline'],
            ['Gallery Review', '/gallery-review'],
            ['Analytics', '/analytics'],
          ].map(([item, href], index) => (
            <a key={item} className={`nav-item ${index === 0 ? 'active' : ''}`} href={href}>
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
            <p className="eyebrow">Wildlife Monitoring · Field Station 04</p>
            <h1>Monitoring Overview</h1>
          </div>

          <div className="topbar-actions">
            <label className="searchbar" aria-label="Search data">
              <span aria-hidden="true">⌕</span>
              <input type="search" placeholder="Search datasets, species, or locations..." />
            </label>
            <button className="icon-button" type="button" aria-label="Notifications">◔</button>
            <button className="icon-button" type="button" aria-label="Settings">⚙</button>
            <div className="avatar" aria-hidden="true">R</div>
          </div>
        </header>

        <section className="hero-row">
          <div>
            <p className="section-kicker">Real-time ecological data</p>
            <p className="lede">A high-utility interface for researchers tracking captures, reviewing false triggers, and monitoring the health of remote camera traps.</p>
          </div>
          <div className="hero-actions">
            <button className="primary-button" type="button">Export Report</button>
            <button className="secondary-button" type="button">Configure AI</button>
          </div>
        </section>

        <section className="stats-grid">
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
              <span className="trend warning">Ochre at Risk</span>
            </div>
            <p className="body-note">Efficiency optimized by 4.2% since last sync.</p>
          </article>
        </section>

        <section className="content-grid">
          <article className="panel panel-large chart-panel">
            <div className="panel-header">
              <div>
                <p className="card-label">Animal Activity over 24 Hours</p>
                <h2>Temporal distribution of captured triggers</h2>
              </div>
              <div className="legend"><span><i className="legend-dot mammals" />Mammals</span><span><i className="legend-dot avian" />Avian</span></div>
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
              {[
                ['White-tailed Deer', '78%'],
                ['Red Fox', '61%'],
                ['Coyote', '48%'],
                ['Black Bear', '33%'],
                ['Others', '18%'],
              ].map(([name, value], index) => (
                <div className="species-row" key={name}>
                  <div className="species-meta">
                    <span>{name}</span>
                    <strong>{value}</strong>
                  </div>
                  <div className="species-bar"><span style={{ width: value }} className={index < 2 ? 'moss' : index === 2 ? 'clay' : index === 3 ? 'dark' : 'light'} /></div>
                </div>
              ))}
            </div>
            <button className="ghost-button" type="button">Export Species Report</button>
          </article>
        </section>

        <section className="content-grid lower-grid">
          <article className="panel panel-large table-panel">
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
          </article>

          <article className="panel panel-side activities-panel">
            <div className="panel-header compact">
              <div>
                <p className="card-label">Recent Activity</p>
                <h2>Live field updates</h2>
              </div>
            </div>
            <ul className="activity-list">
              {[
                ['Panthera onca detected', 'Station 04 · 2 min ago', 'High priority'],
                ['False trigger: wind', 'Station 12 · 15m ago', 'Filtered'],
                ['Cabidae group sighted', 'Station 09 · 44m ago', 'Verified'],
                ['Low battery warning', 'Station 02 · 1h ago', 'Action needed'],
              ].map(([title, meta, badge]) => (
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
          </article>
        </section>
      </div>

      <Link className="assistant-fab" href="/assistant" aria-label="Open Scuba assistant">
        AI
      </Link>
    </main>
  );
}