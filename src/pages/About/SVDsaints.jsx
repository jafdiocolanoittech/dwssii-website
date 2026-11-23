import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import arnoldImage from '../../assets/images/Arnold_Janssen.jpg';
import svdSaintsImage from '../../assets/images/svd-saints.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const MILESTONES = [
  { year: '1837', label: 'Born in Goch, Germany' },
  { year: '1861', label: 'Ordained a priest' },
  { year: '1875', label: 'Founded the SVD' },
  { year: '1909', label: 'Died in Steyl' },
  { year: '2003', label: 'Canonized as Saint' },
];

export default function SVDsaints() {
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1>SVD Saints</h1>
            <p className="tagline">Saints of the Divine Word</p>
          </motion.div>
        </div>
      </section>

      {/* ===== ST. ARNOLD JANSSEN, FOUNDER ===== */}
      <section className="founder-section" id="arnold-janssen">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">Our Founder</span>
            <h2 className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>St. Arnold Janssen, SVD</h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>Founder of the Society of the Divine Word (1837&ndash;1909)</p>
          </motion.div>

          <div className="founder-layout">
            <motion.div
              className="founder-portrait"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="portrait-frame">
                <img src={arnoldImage} alt="Portrait of St. Arnold Janssen" className="portrait-image" />
              </div>
            </motion.div>

            <motion.div
              className="founder-bio"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                <strong>St. Arnold Janssen</strong> was born on <span style={{ color: 'var(--divinian-orange)', fontWeight: 600 }}>November 5, 1837</span>,
                in Goch, Germany. Ordained a priest for the Diocese of M&uuml;nster on{' '}
                <span style={{ color: 'var(--divinian-orange)', fontWeight: 600 }}>August 15, 1861</span>, he first served as a
                teacher of mathematics and the natural sciences in Bocholt, before giving himself fully to the
                missionary work of the Church.
              </p>

              <p>
                In <span style={{ color: 'var(--divinian-orange)', fontWeight: 600 }}>1875</span>, in Steyl in the Netherlands,
                he founded the <strong>Society of the Divine Word (SVD)</strong> &mdash; a missionary congregation
                committed to proclaiming the Word of God wherever the need was greatest. He later founded two
                congregations of sisters, the Holy Spirit Missionary Sisters and the Sisters Servants of the Holy
                Spirit of Perpetual Adoration.
              </p>

              <p>
                His missionary vision reached across the world, and eventually to the Philippines, where Divine Word
                schools, including DWSSII, continue the work of faith and education he began.
              </p>

              <p style={{ marginBottom: 0 }}>
                St. Arnold Janssen died in Steyl on <strong>January 15, 1909</strong>. He was beatified by
                Pope Paul VI in <span style={{ color: 'var(--divinian-orange)', fontWeight: 600 }}>1975</span> and canonized by
                Pope John Paul II on <span style={{ color: 'var(--divinian-orange)', fontWeight: 600 }}>October 5, 2003</span>.
                His feast day is celebrated every <strong>January 15</strong>.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="founder-milestones"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            {MILESTONES.map((m) => (
              <div className="milestone" key={m.year}>
                <span className="milestone-year">{m.year}</span>
                <span className="milestone-label">{m.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== SVD SAINTS IMAGE SHOWCASE ===== */}
      <section className="svd-saints-showcase">
        <div className="container">
          <motion.div
            className="svd-saints-frame"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">Our Patron Saints</span>
            <h3 className="svd-saints-title">The Saints of the Divine Word</h3>
            <p className="svd-saints-subtitle">
              Men and women who lived the missionary charism of the Word — inspiring our school community to faith, service, and holiness.
            </p>

            <div className="svd-saints-image-wrap">
              <img
                src={svdSaintsImage}
                alt="Saints of the Society of the Divine Word"
                className="svd-saints-image"
                decoding="async"
              />
            </div>

            <p className="svd-saints-caption">
              May their example guide every Divinian in learning, virtue, and mission.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}