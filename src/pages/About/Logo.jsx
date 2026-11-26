import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../../assets/images/dwssii-logo.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const logoMeanings = [
  {
    title: 'The Cross on the Mountain',
    text: 'The cross on the mountain is the symbol of the Catholic faith, the propagation of which the DWSSII holds as her divine mission. The school stands like a sentinel on the mountain, guarding the seed of the Catholic traditions where she stands. In all her undertakings, she shines with the militant spirit of the cross and the Crucified.'
  },
  {
    title: 'The Eagle',
    text: 'The eagle is the symbol of St. John, the evangelist, whose gospel begins with the words, “In the beginning was the Word…” (1.1), the passage from which the DWSSII derives her name. The eagle also stands for true knowledge and wisdom that the school imparts to all who come to her fountains of learning.'
  },
  {
    title: 'The SVD Logo',
    text: 'The SVD logo is to recognize the SVD spirit that nurtures the school. Being faithful disciples of the Lord, the SVDs take on the mission entrusted to them – the spreading of the Good News to the ends of the earth and bearing witness to the Word through education.'
  },
  {
    title: 'The Map of Semirara Island',
    text: 'The map of Semirara Island symbolizes the fertile soil in which the seed of the Catholic faith has been planted and nourished. It also represents the richness and the opportunities that await its settlers, particularly the youth which the DWSSII devotedly serves.'
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
                border: '1px solid rgba(0,0,0,0.15)',
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
              The official seal of the Divine Word School of Semirara Island, Inc. features four distinct figures that embody our mission, values, and commitment to holistic education rooted in the Christian faith.
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
                The education that the school fosters hopes to kindle inspiration and courage among the students to dispel religious ignorance to make them true witnesses of the resurrected Christ so that they become paragons of bearing witness to the Word.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}