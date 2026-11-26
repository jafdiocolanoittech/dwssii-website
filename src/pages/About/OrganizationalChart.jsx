import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import orgChartImage from '../../assets/images/org-chart.jpg';

// Note: Styles for this page live in the global index.css (.org-* section),
// so no local CSS import is needed here.

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const ZOOM_STEPS = [1, 1.5, 2, 3];

function Icon({ children }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

export default function OrganizationalChart() {
  const dialogRef = useRef(null);
  const heroRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);

  const zoom = ZOOM_STEPS[zoomIndex];

  const openViewer = () => {
    setZoomIndex(0);
    dialogRef.current?.showModal();
    setIsOpen(true);
  };

  const closeViewer = () => dialogRef.current?.close();

  /* Lock page scroll while the viewer is open */
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  // Scroll-linked shrink: writes a 0 -> 1 progress value (--p) straight to the
  // hero's CSS. No React state, no re-renders, no class toggling, so no flicker.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      const shrink = parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 180;
      const p = Math.min(Math.max(window.scrollY / shrink, 0), 1);
      hero.style.setProperty('--p', p.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <main className="subpage org-page">
      {/* Hero: shrinks as you scroll; the title stays pinned under the navbar */}
      <section ref={heroRef} className="hero hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Organizational Chart</h1>
            <p className="tagline">Our Leadership Structure</p>
          </motion.div>
        </div>
      </section>

      {/* ===== CHART ===== */}
      <section className="org-section" aria-labelledby="org-heading">
        <div className="container">
          <motion.header
            className="org-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="org-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>Leadership Structure</h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>The organizational structure of DWSSII</p>
          </motion.header>

          <motion.figure
            className="org-figure"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <button
              type="button"
              className="org-trigger"
              onClick={openViewer}
              aria-haspopup="dialog"
              aria-label="Open the organizational chart full screen"
            >
              <img
                src={orgChartImage}
                alt="Organizational chart of the Divine Word School of Semirara Island, Inc."
                className="org-image"
                decoding="async"
              />
              <span className="org-hint">
                <Icon>
                  <circle cx="10.5" cy="10.5" r="6" />
                  <path d="M15 15l5.5 5.5M10.5 8v5M8 10.5h5" />
                </Icon>
                View full size
              </span>
            </button>

            <figcaption className="org-actions">
              <button type="button" className="org-action" onClick={openViewer}>
                <Icon>
                  <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </Icon>
                Expand chart
              </button>
              <a className="org-action" href={orgChartImage} target="_blank" rel="noopener noreferrer">
                <Icon>
                  <path d="M14 4h6v6M20 4l-9 9M18 14v5H5V6h5" />
                </Icon>
                Open in new tab
              </a>
              <a className="org-action" href={orgChartImage} download="DWSSII-Organizational-Chart.jpeg">
                <Icon>
                  <path d="M12 4v11M7 11l5 5 5-5M5 20h14" />
                </Icon>
                Download
              </a>
            </figcaption>
          </motion.figure>

          {/* ===== SHORT DESCRIPTION UNDER THE CHART ===== */}
          <motion.div
            className="org-note"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="org-note-title">About this structure</h3>
            <p className="org-note-text">
              The chart above outlines the lines of authority and responsibility at Divine Word
              School of Semirara Island, Inc. Guided by the School Board and the School Director,
              each office works together to uphold academic excellence, discipline, and the
              faithful service of our students and community.
            </p>
            <p className="org-note-meta">
              Click the chart to view it in full size, or download a copy for reference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== FULL-SCREEN VIEWER ===== */}
      <dialog
        ref={dialogRef}
        className="org-dialog"
        aria-label="Organizational chart viewer"
        onClose={() => setIsOpen(false)}
        onClick={(e) => { if (e.target === dialogRef.current) closeViewer(); }}
      >
        <div className="org-toolbar">
          <span className="org-toolbar-title">Organizational Chart</span>
          <div className="org-toolbar-controls">
            <button
              type="button"
              onClick={() => setZoomIndex((i) => Math.max(0, i - 1))}
              disabled={zoomIndex === 0}
              aria-label="Zoom out"
            >
              <Icon><path d="M5 12h14" /></Icon>
            </button>
            <span className="org-zoom-level" aria-live="polite">{Math.round(zoom * 100)}%</span>
            <button
              type="button"
              onClick={() => setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
              disabled={zoomIndex === ZOOM_STEPS.length - 1}
              aria-label="Zoom in"
            >
              <Icon><path d="M5 12h14M12 5v14" /></Icon>
            </button>
            <button type="button" className="org-close" onClick={closeViewer} aria-label="Close viewer">
              <Icon><path d="M6 6l12 12M18 6L6 18" /></Icon>
            </button>
          </div>
        </div>

        <div className="org-scroll" tabIndex={0}>
          <img
            src={orgChartImage}
            alt="Organizational chart of the Divine Word School of Semirara Island, Inc."
            className="org-zoom-image"
            style={{ width: `${zoom * 100}%` }}
          />
        </div>
      </dialog>
    </main>
  );
}