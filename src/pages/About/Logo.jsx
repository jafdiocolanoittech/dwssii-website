import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/dwssii-logo.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const logoMeanings = [
  {
    title: 'The Open Bible',
    text: 'At the center of our emblem lies the Open Bible, symbolizing the Divine Word — the foundation of our institution. It represents our commitment to truth, wisdom, and the proclamation of the Gospel as the guiding light of education.'
  },
  {
    title: 'The Cross',
    text: 'Rising above the Bible is the Cross, a universal symbol of Christ\'s sacrifice and love. It reminds every Divinian that our pursuit of knowledge is inseparable from our faith, and that education must lead us closer to God.'
  },
  {
    title: 'The Torch of Knowledge',
    text: 'The torch signifies the light of learning that dispels the darkness of ignorance. It embodies our mission to illuminate minds, inspire critical thinking, and empower students to become agents of positive change in society.'
  },
  {
    title: 'The Waves of Semirara',
    text: 'Encircling the central symbols are stylized waves, representing Semirara Island — our home and the community we serve. They remind us of our roots and our responsibility to uplift the island and its people through quality education.'
  },
  {
    title: 'The Colors: Green and Gold',
    text: (
      <>
        <strong>Green</strong> symbolizes growth, life, and the flourishing of young minds under our care. <strong>Gold</strong> represents excellence, virtue, and the precious value of every Divinian's potential. Together, they reflect our vision of nurturing competent, compassionate, and Christ-centered leaders.
      </>
    )
  },
  {
    title: 'The School Name',
    text: (
      <>
        Encircling the emblem is the full name of the institution — <em>Divine Word School of Semirara Island, Inc.</em> — a proud declaration of our identity and our unwavering dedication to the mission of the Society of the Divine Word (SVD).
      </>
    )
  }
];

export default function Logo() {
  const heroRef = useRef(null);

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
    <main className="subpage">
      {/* Hero: shrinks as you scroll; the title stays pinned under the navbar */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>School Logo</h1>
            <p className="tagline">Symbol of Our Identity</p>
          </motion.div>
        </div>
      </section>

      {/* ===== MODERN LOGO SECTION ===== */}
      <section className="als-section" aria-labelledby="logo-heading">
        <div className="als-container" style={{ maxWidth: '1150px' }}>
          
          {/* LEFT: Circular Logo (Pushed down slightly, subtle black border) */}
          <motion.div
            className="als-image-col"
            style={{ paddingTop: '40px' }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="logo-image-frame" 
              style={{ 
                margin: '0 auto', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                border: '1px solid rgba(0,0,0,0.15)', /* Subtle thin black border */
                outline: 'none'
              }}
            >
              <img
                src={logoImage}
                alt="Divine Word School of Semirara Island, Inc. Official Logo"
                className="logo-image"
                decoding="async"
              />
            </div>
            <p className="als-image-caption" style={{ marginTop: '24px' }}>
              "Faith, Learning, and Service."
            </p>
          </motion.div>

          {/* RIGHT: Logo Meaning Content */}
          <motion.div
            className="als-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="als-label"></span>
            <h2 className="als-title" style={{ marginBottom: '16px' }}></h2>
            
            <p className="als-text" style={{ marginBottom: '32px' }}>
              The official logo of the Divine Word School of Semirara Island, Inc. is a visual testament to our mission, values, and commitment to holistic education rooted in the Christian faith.
            </p>

            {/* Clean, Modern Paragraph Blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {logoMeanings.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: 'var(--primary-green-dark)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '0.02em'
                  }}>
                    {item.title}
                  </h4>
                  <p className="als-text" style={{ margin: 0, lineHeight: '1.75' }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Closing Statement */}
            <div style={{ marginTop: '40px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
              <p className="als-text" style={{ margin: 0, fontStyle: 'italic', fontWeight: '600', color: 'var(--text-dark)', lineHeight: '1.7' }}>
                Every element of our logo speaks of faith, learning, and service — the three pillars that define every Divinian.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}