const jobs = [
  {
    name: 'Amazon_Sector_G4_Batch_01',
    stage: 'Species Tagging',
    eta: '4m 22s',
    progress: '72%',
    throughput: '1.2 GB / 1.6 GB',
  },
  {
    name: 'Thermal_Survey_Night_09',
    stage: 'Filtering Noise',
    eta: '12m 45s',
    progress: '35%',
    throughput: '450 MB / 2.1 GB',
  },
  {
    name: 'Micro_Samples_V2_HighRes',
    stage: 'Analyzing',
    eta: 'Calculating',
    progress: '0%',
    throughput: '0 / 842 files',
  },
];

import Link from 'next/link';

export default function UploadPipelinePage() {
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
        .upload-shell {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          min-height: calc(100vh - 57px);
          align-items: start;
        }

        /* ── SIDEBAR ── */
        .upload-sidebar {
          padding: 20px 16px;
          border-right: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.82);
          display: flex;
          flex-direction: column;
          min-height: calc(100vh - 57px);
          position: sticky;
          top: 57px;
        }
        .upload-sidebar .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .upload-sidebar .brand-mark {
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
        .upload-sidebar .brand-title { font-weight: 700; margin: 0; font-size: 0.95rem; }
        .upload-sidebar .brand-subtitle { color: var(--on-surface-variant); font-size: 0.82rem; margin: 0; }

        .upload-sidebar .new-dataset-button {
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

        .upload-sidebar .nav-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .upload-sidebar .nav-item {
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
        .upload-sidebar .nav-item:hover { background: var(--surface-container-low); }
        .upload-sidebar .nav-item.active {
          color: var(--on-surface);
          background: var(--surface-container-lowest);
          border-color: var(--outline-variant);
        }
        .upload-sidebar .nav-icon {
          width: 18px;
          text-align: center;
          color: var(--primary);
        }
        .upload-sidebar .assistant-assistant-button {
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
        .upload-sidebar .assistant-support-link {
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
          <label className="searchbar" aria-label="Search pipeline">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search pipeline..." />
          </label>
        </div>
        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Notifications">◔</button>
          <button className="icon-button" type="button" aria-label="Settings">⚙</button>
          <div className="avatar" aria-hidden="true">S</div>
        </div>
      </header>

      <div className="upload-shell">
        {/* ── SIDEBAR ── */}
        <aside className="upload-sidebar">
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
              <a key={item} className={`nav-item ${index === 1 ? 'active' : ''}`} href={href}>
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {item}
              </a>
            ))}
          </nav>

          <button className="assistant-assistant-button" type="button">AI Assistant Scuba</button>
          <a className="assistant-support-link" href="#">Support</a>
        </aside>

        {/* ── MAIN ── */}
        <div className="dashboard-main upload-main">
          <header className="topbar upload-heading-bar">
            <div>
              <p className="eyebrow">Wildlife Monitoring · Field Station 04</p>
              <h1>Data Ingestion Pipeline</h1>
            </div>
          </header>

          <section className="hero-row">
            <div>
              <p className="section-kicker">Upload high-resolution field imagery</p>
              <p className="lede">Supports RAW, JPG, and PNG batches with automated species tagging, noise filtering, and AI-assisted quality control for field teams working in low-connectivity environments.</p>
            </div>
            <div className="hero-actions">
              <button className="primary-button" type="button">Browse Local Storage</button>
              <button className="secondary-button" type="button">Configure AI</button>
            </div>
          </section>

          <section className="upload-hero panel">
            <div className="dropzone">
              <div className="dropzone-icon" aria-hidden="true">⇪</div>
              <h2>Drag & Drop Field Data</h2>
              <p>Supports RAW, JPG, and PNG formats up to 500GB per batch.</p>
              <button className="primary-button" type="button">Browse Local Storage</button>
            </div>
            <div className="upload-meta-grid">
              <article>
                <p className="card-label">Cluster Capacity</p>
                <strong>12.4 / 50 TB</strong>
                <div className="meter"><span style={{ width: '25%' }} /></div>
                <p className="body-note">75% remains available</p>
              </article>
              <article>
                <p className="card-label">Active Nodes</p>
                <strong>08 Online</strong>
                <p className="body-note">Latency: 14ms (Optimum)</p>
              </article>
              <article>
                <p className="card-label">AI Core Load</p>
                <strong>42.8%</strong>
                <p className="body-note">Nvidia A100 Tensor Cluster</p>
              </article>
            </div>
          </section>

          <section className="jobs-section">
            <div className="panel-header compact">
              <div>
                <p className="card-label">Active Jobs (3)</p>
                <h2>Processing queue</h2>
              </div>
              <span className="status-chip">Sort by: Time Remaining</span>
            </div>

            <div className="job-list">
              {jobs.map((job) => (
                <article className="job-card" key={job.name}>
                  <img
                    className="job-thumb"
                    src={`https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=240&q=80&sat=-20&${job.name}`}
                    alt="Forest thumbnail"
                  />
                  <div className="job-copy">
                    <div className="job-head">
                      <strong>{job.name}</strong>
                      <span className="job-id">ID: PR-0482</span>
                    </div>
                    <p><span>●</span> {job.stage} <span className="job-divider">|</span> ETA: {job.eta}</p>
                    <div className="meter meter-inline"><span style={{ width: job.progress }} /></div>
                    <div className="job-foot">
                      <span>{job.progress} completed</span>
                      <span>{job.throughput}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
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