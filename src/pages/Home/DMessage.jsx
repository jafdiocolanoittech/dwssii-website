import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import directorPhoto from '../../assets/images/school-director2.jpg';

const SNOW = 'https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

/* ---- Inline SVG decorations (no external images = never breaks) ---- */
const PineSprig = () => (
  <svg viewBox="0 0 120 60" fill="none" stroke="#2e6b34" strokeWidth="3" strokeLinecap="round">
    <line x1="6" y1="30" x2="114" y2="30" />
    <line x1="20" y1="30" x2="12" y2="14" /><line x1="20" y1="30" x2="12" y2="46" />
    <line x1="40" y1="30" x2="32" y2="10" /><line x1="40" y1="30" x2="32" y2="50" />
    <line x1="60" y1="30" x2="52" y2="8"  /><line x1="60" y1="30" x2="52" y2="52" />
    <line x1="80" y1="30" x2="74" y2="12" /><line x1="80" y1="30" x2="74" y2="48" />
    <line x1="100" y1="30" x2="96" y2="18"/><line x1="100" y1="30" x2="96" y2="42" />
  </svg>
);

const GiftBox = () => (
  <svg viewBox="0 0 100 100">
    <rect x="14" y="40" width="72" height="52" rx="4" fill="#f3ead7" stroke="#d8c9a3" strokeWidth="2"/>
    <rect x="10" y="30" width="80" height="14" rx="3" fill="#efe2c8" stroke="#d8c9a3" strokeWidth="2"/>
    <rect x="44" y="30" width="12" height="62" fill="#d4af37"/>
    <rect x="10" y="34" width="80" height="6" fill="#d4af37"/>
    <ellipse cx="38" cy="22" rx="12" ry="9" fill="#d4af37" stroke="#b8860b" strokeWidth="1.5"/>
    <ellipse cx="62" cy="22" rx="12" ry="9" fill="#d4af37" stroke="#b8860b" strokeWidth="1.5"/>
    <circle cx="50" cy="24" r="6" fill="#f4d03f" stroke="#b8860b" strokeWidth="1.5"/>
  </svg>
);

const Star = ({ color }) => (
  <svg viewBox="0 0 24 24" fill={color}>
    <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8z"/>
  </svg>
);

const Pinecone = () => (
  <svg viewBox="0 0 60 80">
    <ellipse cx="30" cy="42" rx="22" ry="32" fill="#8B5A2B"/>
    <path d="M10 30h40M10 44h40M10 58h40M22 14v56M38 14v56" stroke="#5D3A1A" strokeWidth="2" fill="none"/>
  </svg>
);

const Berries = () => (
  <svg viewBox="0 0 130 60" fill="none">
    <path d="M10 30 Q65 18 120 30" stroke="#7a4a2b" strokeWidth="3"/>
    <ellipse cx="40" cy="22" rx="9" ry="5" fill="#2e6b34" transform="rotate(-25 40 22)"/>
    <ellipse cx="90" cy="22" rx="9" ry="5" fill="#2e6b34" transform="rotate(25 90 22)"/>
    <circle cx="55" cy="34" r="7" fill="#c41e3a"/><circle cx="68" cy="38" r="7" fill="#a01729"/>
    <circle cx="80" cy="34" r="7" fill="#c41e3a"/><circle cx="66" cy="28" r="6" fill="#d63b54"/>
  </svg>
);

const Beads = () => (
  <svg viewBox="0 0 460 200" className="deco deco-beads" fill="none">
    <circle cx="40"  cy="40"  r="4" fill="#d4af37"/><circle cx="420" cy="40"  r="4" fill="#d4af37"/>
    <circle cx="30"  cy="120" r="3" fill="#c41e3a"/><circle cx="430" cy="120" r="3" fill="#c41e3a"/>
    <circle cx="120" cy="20"  r="3" fill="#ffffff" stroke="#ccc"/><circle cx="340" cy="20" r="3" fill="#ffffff" stroke="#ccc"/>
    <circle cx="90"  cy="150" r="3" fill="#d4af37"/><circle cx="370" cy="150" r="3" fill="#d4af37"/>
  </svg>
);

export default function DMessage() {
  const [showSnow, setShowSnow] = useState(true);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowSnow(false), 6000);
    return () => clearTimeout(t);
  }, []);

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
    <>
      {showSnow && (
        <div className="snowfall-container">
          {Array.from({ length: 40 }).map((_, i) => (
            <img 
              key={i} 
              src={SNOW} 
              alt="" 
              className="snowflake-img" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 3 + 4}s`,
                width: `${Math.random() * 18 + 14}px`
              }} 
            />
          ))}
        </div>
      )}

      {/* Hero: shrinks as you scroll; the title stays pinned under the navbar */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Director's Message
          </motion.h1>
          <motion.p className="tagline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            A word of welcome, vision, and inspiration from our School Director
          </motion.p>
        </div>
      </section>

      <section className="director-section" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="director-layout">

            <motion.div 
              className="director-image-col" 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeInUp}
            >
              {/* NOTE: Added style to zoom out the picture */}
              <div className="director-image-frame" style={{ maxWidth: '75%', margin: '0 auto' }}>
                <img src={directorPhoto} alt="School Director" className="director-image" />
              </div>
            </motion.div>

            <motion.div 
              className="director-text-col" 
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeInUp} 
              transition={{ delay: 0.2 }}
            >
              <div className="profile-section">
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-dark)' }}>
                  {/* Name can go here if needed */}
                </h3>
                <span className="director-title"></span>
                <p className="profile-text large-message">
                  On behalf of the entire DWSSII Community, I wish you all a very merry Christmas filled with Love, Joy, and peace.
                </p>
                <p className="profile-text large-message">
                  May this Festive season bring you closer to your loved ones and ignite the Flame of hope and happiness in your hearts.
                </p>
              </div>

              <motion.div 
                className="festive-wrapper" 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="festive-stage">
                  <div className="deco deco-pine-l"><PineSprig /></div>
                  <div className="deco deco-pine-r"><PineSprig /></div>
                  <div className="deco deco-gift"><GiftBox /></div>
                  <div className="deco deco-berries"><Berries /></div>

                  <div className="greeting-text-container">
                    <div className="greet-merry">Merry</div>
                    <div className="greet-christmas">Christmas</div>
                    <div className="greet-and">And</div>
                    <div className="greet-newyear">Happy New Year</div>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}