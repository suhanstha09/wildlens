'use client';

import { useState } from 'react';
import Link from 'next/link';

const captures = [
  { id: 1, title: 'Panthera onca',   score: 98, date: '2024-05-12', time: '14:22:01', camId: 'CAM-001', selected: true,  flagged: false },
  { id: 2, title: 'Leopard cat',     score: 94, date: '2024-05-13', time: '02:22:19', camId: 'CAM-002', selected: false, flagged: false },
  { id: 3, title: 'Tapir pair',      score: 82, date: '2024-05-13', time: '02:22:19', camId: 'CAM-003', selected: false, flagged: false },
  { id: 4, title: 'Low confidence',  score: 42, date: '2024-05-13', time: '02:22:19', camId: 'CAM-004', selected: false, flagged: true  },
  { id: 5, title: 'Macaw',           score: 90, date: '2024-05-13', time: '02:22:19', camId: 'CAM-005', selected: false, flagged: false },
  { id: 6, title: 'Beaver',          score: 97, date: '2024-05-13', time: '02:22:19', camId: 'CAM-006', selected: false, flagged: false },
  { id: 7, title: 'Monkey',          score: 91, date: '2024-05-13', time: '02:22:19', camId: 'CAM-007', selected: false, flagged: false },
  { id: 8, title: 'Black bear',      score: 85, date: '2024-05-13', time: '02:22:19', camId: 'CAM-008', selected: false, flagged: false },
  { id: 9, title: 'Sloth',           score: 96, date: '2024-05-13', time: '02:22:19', camId: 'CAM-009', selected: false, flagged: false },
  { id: 10, title: 'Jaguar',         score: 95, date: '2024-05-13', time: '02:22:19', camId: 'CAM-010', selected: false, flagged: false },
];

const cardGradients = [
  'linear-gradient(135deg, #1a3a1a 0%, #2d5a27 40%, #4a7c59 100%)',
  'linear-gradient(135deg, #2c3e2d 0%, #3d5c3a 50%, #6b8f71 100%)',
  'linear-gradient(135deg, #1e3d2f 0%, #4a7c59 60%, #7aab89 100%)',
  'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #3d3d3d 100%)',
  'linear-gradient(135deg, #0d2b1a 0%, #1a5c3a 50%, #2e8b57 100%)',
  'linear-gradient(135deg, #1a2e1a 0%, #2a4a2a 50%, #3d6b3d 100%)',
  'linear-gradient(135deg, #1e2d3d 0%, #2a4a6b 50%, #3d7aab 100%)',
  'linear-gradient(135deg, #1a1e1a 0%, #2a3a2a 50%, #4a5a4a 100%)',
  'linear-gradient(135deg, #2d3d1a 0%, #4a6b2a 50%, #7aab3d 100%)',
  'linear-gradient(135deg, #1a2a1a 0%, #2d4a2d 50%, #4a7a4a 100%)',
];

export default function GalleryReviewPage() {
  const [cards, setCards] = useState(captures);
  const [selectAll, setSelectAll] = useState(false);
  const [confidence, setConfidence] = useState(85);
  const [activeBatch, setActiveBatch] = useState('unverified');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionBarDismissed, setActionBarDismissed] = useState(false);

  const selectedCards = cards.filter(c => c.selected);
  const hasSelection = selectedCards.length > 0;

  function toggleCard(id) {
    setCards(prev => prev.map(c => c.id === id ? { ...c, selected: !c.selected } : c));
  }

  function handleSelectAll(e) {
    const checked = e.target.checked;
    setSelectAll(checked);
    setCards(prev => prev.map(c => ({ ...c, selected: checked })));
  }

  return (
    <main className="screen-shell">
      <style>{`
        .screen-shell {
          min-height: 100vh;
          display: grid;
          grid-template-rows: auto 1fr;
        }

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
        .site-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          justify-self: end;
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
        .assistant-shell {
          min-height: 0;
          height: 100%;
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
        }

        /* ── SIDEBAR ── */
        .assistant-sidebar {
          padding: 20px 16px;
          border-right: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.82);
          display: flex;
          flex-direction: column;
          gap: 0;
          overflow-y: auto;
        }
        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .brand-mark {
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
        .brand-title { font-weight: 700; margin: 0; }
        .brand-subtitle { color: var(--on-surface-variant); font-size: 0.85rem; margin: 0; }

        .new-dataset-button {
          width: 100%;
          padding: 16px 18px;
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
        .nav-stack {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .nav-item {
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
        .nav-item:hover { background: var(--surface-container-low); }
        .nav-item.active {
          color: var(--on-surface);
          background: var(--surface-container-lowest);
          border-color: var(--outline-variant);
        }
        .nav-icon {
          width: 18px;
          text-align: center;
          color: var(--primary);
        }
        .assistant-assistant-button {
          min-height: 44px;
          padding: 0 18px;
          border: 1px solid var(--outline-variant);
          border-radius: 6px;
          background: var(--surface-container-lowest);
          color: var(--on-surface);
          font: inherit;
          font-weight: 600;
          cursor: pointer;
          margin-top: 8px;
        }
        .assistant-support-link {
          color: var(--on-surface-variant);
          text-decoration: none;
          margin-top: 8px;
          font-size: 0.88rem;
        }

        /* ── GALLERY MAIN ── */
        .gallery-main {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-width: 0;
        }

        /* ── INNER TOPBAR ── */
        .gallery-topbar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 22px;
          border-bottom: 1px solid var(--outline-variant);
          background: rgba(248, 249, 248, 0.94);
          backdrop-filter: blur(12px);
          flex-shrink: 0;
        }
        .topbar-pill {
          padding: 4px 10px;
          border-radius: 2px;
          background: var(--surface-container);
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .topbar-dataset {
          font-size: 0.88rem;
          color: var(--on-surface-variant);
          font-family: var(--font-space-grotesk);
        }
        .topbar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--on-surface);
          letter-spacing: -0.02em;
        }
        .topbar-spacer { flex: 1; }
        .topbar-btn {
          padding: 8px 14px;
          border-radius: 4px;
          font-size: 0.82rem;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          color: var(--on-surface-variant);
          display: flex; align-items: center; gap: 6px;
          transition: background 0.15s;
          font: inherit;
          font-size: 0.82rem;
          font-weight: 500;
        }
        .topbar-btn:hover { background: var(--surface-container-low); color: var(--on-surface); }
        .topbar-btn.red {
          background: var(--error-container);
          border-color: rgba(186,26,26,0.3);
          color: var(--on-error-container);
        }
        .topbar-btn.green {
          background: var(--primary-container);
          border-color: rgba(26,60,52,0.3);
          color: var(--on-primary);
        }

        /* ── CONTENT ── */
        .gallery-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px 22px 100px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* ── FILTER BAR ── */
        .filter-bar {
          padding: 16px 18px;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .filter-group { display: flex; flex-direction: column; gap: 6px; }
        .filter-label {
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--on-surface-variant);
          font-weight: 600;
        }
        .filter-select {
          appearance: none;
          background: var(--surface-container-low);
          border: 1px solid var(--outline-variant);
          border-radius: 4px;
          color: var(--on-surface);
          font: inherit;
          font-size: 0.9rem;
          padding: 8px 28px 8px 10px;
          cursor: pointer;
          outline: none;
          width: 140px;
          transition: border-color 0.15s;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%237b827d'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 8px center;
        }
        .filter-select:focus { border-color: var(--primary); }

        .confidence-row { display: flex; align-items: center; gap: 10px; }
        .confidence-slider {
          -webkit-appearance: none;
          appearance: none;
          width: 140px;
          height: 6px;
          border-radius: 999px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(to right, var(--primary) 0%, var(--primary) var(--val, 85%), rgba(193,200,196,0.5) var(--val, 85%), rgba(193,200,196,0.5) 100%);
        }
        .confidence-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px; height: 16px;
          border-radius: 50%;
          background: var(--primary);
          border: 2px solid var(--surface-container-lowest);
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          cursor: pointer;
        }
        .confidence-val {
          font-size: 0.88rem;
          color: var(--primary);
          font-weight: 600;
          min-width: 32px;
          font-family: var(--font-space-grotesk);
        }

        .batch-chips { display: flex; gap: 8px; flex-wrap: wrap; }
        .batch-chip {
          padding: 8px 14px;
          border-radius: 999px;
          background: var(--surface-container);
          color: var(--on-surface-variant);
          font-size: 0.86rem;
          border: 0;
          cursor: pointer;
          font: inherit;
          transition: all 0.15s;
        }
        .batch-chip.active {
          background: var(--primary);
          color: var(--on-primary);
        }

        /* ── TOOLBAR ── */
        .gallery-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .checkline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--on-surface-variant);
          font-size: 0.92rem;
          cursor: pointer;
        }
        .checkline input[type=checkbox] {
          width: 16px; height: 16px;
          accent-color: var(--primary);
          cursor: pointer;
        }
        .view-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--on-surface-variant);
          font-size: 0.85rem;
        }
        .view-btn {
          min-width: 34px;
          min-height: 34px;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          color: var(--on-surface);
          border-radius: 4px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          transition: all 0.15s;
        }
        .view-btn.active, .view-btn:hover {
          background: var(--surface-container);
          border-color: var(--primary);
          color: var(--primary);
        }

        /* ── GALLERY GRID ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }
        .capture-card {
          position: relative;
          min-height: 180px;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.15s;
        }
        .capture-card:hover { transform: translateY(-1px); }
        .capture-card.selected { box-shadow: inset 0 0 0 2px var(--primary); border-color: var(--primary); }
        .capture-card.flagged { box-shadow: inset 0 0 0 2px var(--error); border-color: var(--error); }

        .card-bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          transition: transform 0.3s ease;
        }
        .capture-card:hover .card-bg { transform: scale(1.04); }

        /* Checkbox */
        .card-checkbox {
          position: absolute;
          top: 8px; left: 8px;
          width: 20px; height: 20px;
          border-radius: 4px;
          border: 2px solid rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          z-index: 3;
          transition: all 0.15s;
        }
        .capture-card.selected .card-checkbox {
          background: var(--primary);
          border-color: var(--primary);
        }
        .checkmark { color: #fff; font-size: 11px; font-weight: 700; }

        /* CAM badge */
        .cam-badge {
          position: absolute;
          top: 8px; left: 36px;
          font-family: var(--font-space-grotesk);
          font-size: 0.65rem;
          color: rgba(255,255,255,0.8);
          background: rgba(0,0,0,0.5);
          padding: 2px 6px;
          border-radius: 2px;
          z-index: 3;
          display: none;
        }
        .capture-card.selected .cam-badge { display: block; }

        /* Match badge */
        .match-badge {
          position: absolute;
          top: 8px; right: 8px;
          z-index: 3;
          padding: 4px 8px;
          border-radius: 2px;
          background: rgba(248,249,248,0.88);
          color: var(--on-surface);
          font-size: 0.72rem;
          font-weight: 700;
        }
        .match-badge.low {
          background: var(--error-container);
          color: var(--on-error-container);
        }

        /* Bottom overlay */
        .capture-overlay {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          z-index: 2;
          padding: 20px 12px 12px;
          background: linear-gradient(180deg, transparent, rgba(26,60,52,0.82));
          color: var(--surface-container-lowest);
        }
        .capture-overlay strong, .capture-overlay p { display: block; margin: 0; }
        .capture-overlay p { margin-top: 3px; font-size: 0.75rem; opacity: 0.75; }

        /* Flagged overlay */
        .flagged-overlay {
          position: absolute;
          inset: 0;
          background: rgba(186,26,26,0.75);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          padding: 12px;
          text-align: center;
        }
        .flagged-icon { font-size: 20px; color: #fff; }
        .flagged-title { font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.2; }
        .flagged-sub { font-size: 0.7rem; color: rgba(255,255,255,0.8); }
        .flagged-date { font-size: 0.7rem; color: rgba(255,255,255,0.65); margin-top: 4px; }

        /* ── REVIEW FOOTER ── */
        .review-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 4px;
        }
        .footer-count {
          font-size: 0.85rem;
          color: var(--on-surface-variant);
          font-family: var(--font-space-grotesk);
        }
        .pagination { display: inline-flex; align-items: center; gap: 6px; }
        .page-btn {
          min-width: 34px;
          min-height: 34px;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container-lowest);
          color: var(--on-surface);
          border-radius: 4px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.88rem;
          transition: all 0.15s;
          font: inherit;
        }
        .page-btn:hover { background: var(--surface-container); }
        .page-btn.active {
          background: var(--primary);
          border-color: var(--primary);
          color: var(--on-primary);
        }

        /* ── ACTION BAR ── */
        .action-bar {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--surface-container-lowest);
          border: 1px solid var(--outline-variant);
          border-radius: 8px;
          padding: 10px 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          z-index: 50;
          box-shadow: 0 10px 30px rgba(29,34,31,0.14);
          min-width: 480px;
        }
        .action-count { display: flex; align-items: center; gap: 8px; }
        .action-count-badge {
          width: 24px; height: 24px;
          background: var(--primary);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--on-primary);
          flex-shrink: 0;
        }
        .action-count-text { font-size: 0.9rem; color: var(--on-surface); white-space: nowrap; }
        .action-count-text span { color: var(--on-surface-variant); font-size: 0.85rem; }
        .action-divider { width: 1px; height: 24px; background: var(--outline-variant); }
        .action-btn {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 14px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          border: 1px solid var(--outline-variant);
          background: var(--surface-container);
          color: var(--on-surface-variant);
          transition: all 0.15s;
          white-space: nowrap;
          font: inherit;
          font-size: 0.85rem;
        }
        .action-btn:hover { color: var(--on-surface); background: var(--surface-container-high); }
        .action-btn.red { color: var(--error); border-color: rgba(186,26,26,0.3); background: var(--error-container); }
        .action-btn.red:hover { background: #ffc8c5; }
        .verify-all-btn {
          display: flex; align-items: center; gap: 7px;
          padding: 10px 20px;
          border-radius: 4px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          border: 0;
          background: var(--primary);
          color: var(--on-primary);
          transition: all 0.15s;
          white-space: nowrap;
          font: inherit;
          font-weight: 600;
        }
        .verify-all-btn:hover { background: var(--primary-container); color: var(--on-primary); filter: brightness(1.1); }
        .action-dismiss {
          width: 28px; height: 28px;
          border-radius: 50%;
          background: var(--surface-container);
          border: 1px solid var(--outline-variant);
          color: var(--on-surface-variant);
          font-size: 16px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.15s;
          flex-shrink: 0;
        }
        .action-dismiss:hover { color: var(--on-surface); background: var(--surface-container-high); }

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
          display: flex; align-items: center; gap: 8px;
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
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--primary);
          flex-shrink: 0;
        }

        .gallery-content::-webkit-scrollbar { width: 4px; }
        .gallery-content::-webkit-scrollbar-track { background: transparent; }
        .gallery-content::-webkit-scrollbar-thumb { background: var(--surface-container-high); border-radius: 4px; }
      `}</style>

      {/* ── SITE TOPBAR ── */}
      <header className="site-topbar">
        <div className="site-brand">
          <div className="brand-mark">WL</div>
          <strong>Wildlife Monitoring</strong>
        </div>
        <div className="site-search">
          <label className="searchbar" aria-label="Search">
            <span aria-hidden="true">⌕</span>
            <input type="search" placeholder="Search captures, species..." />
          </label>
        </div>
        <div className="site-actions">
          <button className="icon-button" type="button" aria-label="Notifications">◔</button>
          <button className="icon-button" type="button" aria-label="Settings">⚙</button>
          <div className="avatar" aria-hidden="true">S</div>
        </div>
      </header>

      <div className="assistant-shell">
        {/* ── SIDEBAR ── */}
        <aside className="assistant-sidebar">
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
              <a key={item} className={`nav-item ${index === 2 ? 'active' : ''}`} href={href}>
                <span className="nav-icon" aria-hidden="true">{icon}</span>
                {item}
              </a>
            ))}
          </nav>

          <button className="assistant-assistant-button" type="button">AI Assistant Scuba</button>
          <a className="assistant-support-link" href="#">Support</a>
        </aside>

        {/* ── GALLERY MAIN ── */}
        <div className="gallery-main">
          {/* Inner topbar */}
          <div className="gallery-topbar">
            <span className="topbar-pill">Review Mode</span>
            <span className="topbar-dataset">Dataset: Amazon_Basin_2024_Q3</span>
            <span className="topbar-title">Wildlife Gallery Review</span>
            <div className="topbar-spacer" />
            <button className="topbar-btn" type="button">⊟ Clear Filters</button>
            <button className="topbar-btn red" type="button">⚑ False Triggers</button>
            <button className="topbar-btn green" type="button">✓ Verify Selection</button>
          </div>

          <div className="gallery-content">
            {/* FILTER BAR */}
            <section className="filter-bar">
              <div className="filter-group">
                <span className="filter-label">Species Filter</span>
                <select className="filter-select">
                  <option>All Species</option>
                  <option>Panthera onca</option>
                  <option>Leopard cat</option>
                  <option>Macaw</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Min. Confidence</span>
                <div className="confidence-row">
                  <input
                    type="range"
                    min={0} max={100}
                    value={confidence}
                    onChange={e => setConfidence(+e.target.value)}
                    className="confidence-slider"
                    style={{ '--val': `${confidence}%` }}
                  />
                  <span className="confidence-val">{confidence}%</span>
                </div>
              </div>

              <div className="filter-group">
                <span className="filter-label">Camera ID</span>
                <select className="filter-select">
                  <option>All Units</option>
                  <option>CAM-001</option>
                  <option>CAM-002</option>
                </select>
              </div>

              <div className="filter-group">
                <span className="filter-label">Batch Status</span>
                <div className="batch-chips">
                  <button
                    type="button"
                    className={`batch-chip ${activeBatch === 'unverified' ? 'active' : ''}`}
                    onClick={() => setActiveBatch('unverified')}
                  >
                    Unverified (412)
                  </button>
                  <button
                    type="button"
                    className={`batch-chip ${activeBatch === 'flagged' ? 'active' : ''}`}
                    onClick={() => setActiveBatch('flagged')}
                  >
                    Flagged (18)
                  </button>
                </div>
              </div>
            </section>

            {/* TOOLBAR */}
            <div className="gallery-toolbar">
              <label className="checkline">
                <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                Select All (Showing 124 images)
              </label>
              <div className="view-toggle">
                <span>View:</span>
                <button type="button" className="view-btn active">▦</button>
                <button type="button" className="view-btn">☷</button>
              </div>
            </div>

            {/* GALLERY */}
            <section className="gallery-grid">
              {cards.map((card, idx) => (
                <article
                  key={card.id}
                  className={`capture-card${card.selected ? ' selected' : ''}${card.flagged ? ' flagged' : ''}`}
                  onClick={() => toggleCard(card.id)}
                >
                  <div className="card-bg" style={{ background: cardGradients[idx % cardGradients.length] }} />

                  <div className="card-checkbox">
                    {card.selected && <span className="checkmark">✓</span>}
                  </div>

                  {card.selected && <span className="cam-badge">{card.camId}</span>}

                  {!card.flagged && (
                    <span className={`match-badge ${card.score < 70 ? 'low' : ''}`}>
                      {card.score}% Match
                    </span>
                  )}

                  {card.flagged && (
                    <div className="flagged-overlay">
                      <div className="flagged-icon">⚑</div>
                      <div className="flagged-title">Unidentified<br />Species</div>
                      <div className="flagged-sub">△ Low Confidence</div>
                      <div className="flagged-date">{card.date}<br />{card.time}</div>
                    </div>
                  )}

                  {!card.flagged && (
                    <div className="capture-overlay">
                      <strong>{card.title}</strong>
                      <p>{card.date} · {card.time}</p>
                    </div>
                  )}
                </article>
              ))}
            </section>

            {/* FOOTER */}
            <div className="review-footer">
              <span className="footer-count">Showing 1–10 of 412 unverified captures</span>
              <div className="pagination">
                <button className="page-btn" type="button">‹</button>
                {[1, 2, 3].map(p => (
                  <button
                    key={p}
                    className={`page-btn ${currentPage === p ? 'active' : ''}`}
                    type="button"
                    onClick={() => setCurrentPage(p)}
                  >
                    {p}
                  </button>
                ))}
                <button className="page-btn" type="button">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── ACTION BAR ── */}
      {hasSelection && !actionBarDismissed && (
        <div className="action-bar">
          <div className="action-count">
            <div className="action-count-badge">{selectedCards.length}</div>
            <div className="action-count-text">
              Images Selected <span>· {selectedCards.length} item{selectedCards.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          <div className="action-divider" />
          <button className="action-btn" type="button">⊟ Bulk Tag</button>
          <button className="action-btn red" type="button">⚑ Move to False Trigger</button>
          <button className="verify-all-btn" type="button">✓ Verify All</button>
          <button className="action-dismiss" type="button" onClick={() => setActionBarDismissed(true)}>×</button>
        </div>
      )}

      {/* ── SCUBA FAB ── */}
      <Link href="/assistant" className="scuba-fab" aria-label="Open Scuba assistant">
        <div className="scuba-dot" />
        SCUBA
      </Link>
    </main>
  );
}