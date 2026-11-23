import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import hymnImage from '../../assets/images/dwssii-hymn.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Hymn() {
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
      {/* Hero Subpage: Shrinks as you scroll, NO breadcrumb */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>DWSSII Hymn</h1>
            <p className="tagline">Our School Song</p>
          </motion.div>
        </div>
      </section>

      {/* ===== HYMN SECTION (Constrained 50/50 Layout) ===== */}
      <section className="als-section" aria-labelledby="hymn-heading">
        {/* Added maxWidth: 1100px to keep the half-half split elegant and not too wide */}
        <div className="als-container" style={{ maxWidth: '1100px' }}>
          
          {/* LEFT: Image */}
          <motion.div
            className="als-image-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="als-image-frame">
              <img
                src={hymnImage}
                alt="DWSSII School Hymn"
                className="als-image"
                decoding="async"
              />
            </div>
            <p className="als-image-caption">"The anthem that unites our hearts in faith, learning, and service."</p>
          </motion.div>

          {/* RIGHT: Hymn Lyrics */}
          <motion.div
            className="als-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              
              <div className="hymn-stanza" style={{ marginBottom: '28px' }}>
                <p className="als-text" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                  Hail! Divine Word School hail!<br />
                  Semirara's pride and mine,<br />
                  Molder of young hearts and mind,<br />
                  Our Alma Mater dear!
                </p>
              </div>

              <div className="hymn-stanza" style={{ marginBottom: '28px' }}>
                <p className="als-text" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                  Hail! Divine Word School hail!<br />
                  Semirara's beacon light,<br />
                  Of ideals of godliness and love<br />
                  From Christ, the Word Divine!
                </p>
              </div>

              <div className="hymn-stanza" style={{ marginBottom: '28px' }}>
                <p className="als-text" style={{ fontStyle: 'italic', lineHeight: '1.8' }}>
                  We, your faithful sons and daughters<br />
                  Will keep your colors flying high,<br />
                  To lead young people of the land<br />
                  To your portals of knowledge and truth.
                </p>
              </div>

              {/* Chorus with distinct styling */}
              <div className="hymn-stanza hymn-chorus" style={{ marginTop: '36px', paddingTop: '28px', borderTop: '2px solid var(--gold)' }}>
                <p className="als-text" style={{ fontStyle: 'normal', fontWeight: '600', color: 'var(--primary-green-dark)', lineHeight: '1.8' }}>
                  We, your faithful sons and daughters<br />
                  Pledge ourselves to be true,<br />
                  As witnesses to your Word,<br />
                  To Jesus Christ, the Lord.
                </p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}