export default function AssistantPage() {
  return (
    <main className="assistant-shell">
      <aside className="assistant-sidebar">
        <div className="brand-lockup assistant-brand">
          <div className="brand-mark">W</div>
          <div>
            <p className="brand-title">Scuba Assistant</p>
            <p className="brand-subtitle">Scientific companion</p>
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
      </aside>

      <section className="assistant-main">
        <header className="assistant-header">
          <h1>Scuba Assistant</h1>
          <div className="assistant-status">MODEL: WILDLENS-LMM-4.0 · CONTEXT: REGION-AMAZONAS</div>
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
        </div>

        <footer className="assistant-composer">
          <button type="button">📎</button>
          <input type="text" placeholder="Query biodiversity data or analyze a detection..." />
          <button type="button">🎙</button>
          <button className="primary-button send-button" type="button">➤</button>
        </footer>
      </section>
    </main>
  );
}