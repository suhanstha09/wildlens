"use client";

import { useRouter } from 'next/navigation';

export default function AssistantPage() {
  const router = useRouter();

  return (
    <main className="screen-shell">
      <style>{`
        .assistant-assistant-button-dup,
        .assistant-support-link-dup {
          display: none;
        }

        /* Override assistant-sidebar to remove bottom buttons */
        .assistant-sidebar {
          display: flex;
          flex-direction: column;
        }

        /* Back button styled like scuba pill */
        .assistant-back-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 24px;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          color: var(--on-surface-variant);
          font: inherit;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.15s ease;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          min-height: unset;
          margin: 0;
        }
        .assistant-back-button:hover {
          background: var(--surface-container-high);
          border-color: var(--primary);
          color: var(--on-surface);
          box-shadow: 0 4px 14px rgba(26,60,52,0.14);
        }

        /* Header alignment fix */
        .assistant-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 12px;
        }
        .assistant-header-copy {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
        }
        .assistant-header-copy h1 {
          margin: 0;
          font-size: 1.6rem;
          line-height: 1;
        }
      `}</style>

      <header className="site-topbar">
        <div className="site-brand" aria-label="Wild Lens home">
          <div className="brand-mark">WL</div>
          <strong>Wild Lens</strong>
        </div>

        <div className="site-search">
          <label className="searchbar searchbar-wide" aria-label="Search assistant">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search assistant..." />
          </label>
        </div>

        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Notifications">◔</button>
          <button className="icon-button" type="button" aria-label="Settings">⚙</button>
          <div className="avatar" aria-hidden="true">S</div>
        </div>
      </header>

      <div className="assistant-shell">
        <aside className="assistant-sidebar">
          <div className="brand-lockup assistant-brand">
            <div className="brand-mark">WL</div>
            <div>
              <p className="brand-title">Wild Lens</p>
              <p className="brand-subtitle">Scientific hub</p>
            </div>
          </div>

          <section className="assistant-panel">
            <p className="card-label">Recent Sessions</p>
            <div className="session-card active">Jaguar Detection St. 04 <span>2 mins ago</span></div>
            <div className="session-card">Migratory Pattern Alpha <span>3 hours ago</span></div>
            <div className="session-card">Station 12 Offline Alert <span>Yesterday</span></div>
          </section>

          <section className="assistant-panel">
            <p className="card-label">Suggested Queries</p>
            <button className="query-pill" type="button">Summarize yesterday&apos;s canopy detections</button>
            <button className="query-pill" type="button">Compare heatmaps for Sector G</button>
            <button className="query-pill" type="button">List all nocturnal species found</button>
          </section>

          <button className="new-dataset-button assistant-new-button" type="button">+ New Observation</button>
          <button className="assistant-assistant-button" type="button">AI Assistant Scuba</button>
          <a className="assistant-support-link" href="#">Support</a>
        </aside>

        <section className="assistant-main">
          <header className="assistant-header">
            <div className="assistant-header-copy">
              <button
                className="assistant-back-button"
                type="button"
                onClick={() => router.back()}
              >
                ← Back
              </button>
              <h1>Scuba AI Assistant</h1>
            </div>
          </header>

          <div className="assistant-chat">
            <div className="assistant-prompt">Tell me more about the Jaguar detected at Station 04</div>

            <article className="assistant-response panel">
              <p className="card-label">Species Identified</p>
              <h2>Panthera onca</h2>
              <p className="response-body">I detected a male adult jaguar at Station 04 at 02:15 AM. The biometric markers suggest this is &quot;Individual J-22&quot;, previously recorded 12km north of this location.</p>
              <div className="response-grid">
                <div className="confidence-card">
                  <p className="card-label">Confidence Score</p>
                  <strong>98.4%</strong>
                  <div className="meter"><span style={{ width: '98%' }} /></div>
                  <span className="body-note">±0.2% variance</span>
                </div>
                <div className="map-card" aria-hidden="true">STATION 04 · -3.485, -62.215</div>
              </div>
              <div className="context-box">
                <p className="card-label">Ecological Context</p>
                <p>Jaguars are the only big cats that routinely hunt by piercing the skull of their prey. Their presence at Station 04 indicates a healthy local ecosystem and sufficient biodiversity of primary prey species like capybara and peccaries.</p>
              </div>
            </article>

            <p className="assistant-meta">Scuba v2.4 · PROCESSED IN 420MS</p>
          </div>

          <footer className="assistant-composer">
            <button type="button">📎</button>
            <input type="text" placeholder="Query biodiversity data or analyze a detection..." />
            <button type="button">🎙</button>
            <button className="primary-button send-button" type="button">➤</button>
          </footer>
        </section>
      </div>
    </main>
  );
}