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
            <a key={item} className={`nav-item ${index === 1 ? 'active' : ''}`} href={href}>
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
            <h1>Data Ingestion Pipeline</h1>
          </div>
          <div className="topbar-actions">
            <label className="searchbar" aria-label="Search pipeline">
              <span aria-hidden="true">⌕</span>
              <input type="search" placeholder="Search pipeline..." />
            </label>
            <button className="icon-button" type="button" aria-label="Notifications">◔</button>
            <button className="icon-button" type="button" aria-label="Settings">⚙</button>
            <div className="avatar" aria-hidden="true">R</div>
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

      <Link className="assistant-fab" href="/assistant" aria-label="Open Scuba assistant">
        scuba
      </Link>
    </main>
  );
}