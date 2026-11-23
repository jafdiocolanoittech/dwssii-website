import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ministerImage from '../../assets/director\'s council/minister.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Minister() {
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
            <h1>Administration</h1>
            <p className="tagline">Office of the Spiritual Enrichment & Development</p>
          </motion.div>
        </div>
      </section>

      {/* ===== MINISTER PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="minister-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="minister-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Spiritual Enrichment & Development Officer
            </p>
          </motion.header>

          <div className="director-layout">
            {/* LEFT: Portrait Image */}
            <motion.div
              className="director-image-col"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="director-image-frame">
                <img
                  src={ministerImage}
                  alt="Fr. Jerome A. Ormita, SVD, LPT - Minister of DWSSII"
                  className="director-image"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* RIGHT: Profile Details */}
            <motion.div
              className="director-text-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="profile-section">
                <h3 className="profile-title">Affiliations</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Society of the Divine Word (SVD)</strong>
                    <ul>
                      <li>Date of Ordination: December 7, 2013</li>
                      <li>Years in Priesthood: 13</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong>
                    <br />Master of Arts in Business Administration (Ongoing)
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2013)
                    <br />Master of Arts in Theology, Major in Mission Studies
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2011)
                    <br />A.B. Theology Degree
                  </li>
                  <li>
                    <strong>Xavier University (Ateneo de Cagayan)</strong>
                    <br />Bachelor of Arts in English Literature
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2011)
                    <br />A.B. in Theology — Cum Laude
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong>
                    <br />Ecclesiastical Course — Cum Laude
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong>
                    <br />Master of Arts in Theology, Major in Mission Studies — Magna Cum Laude
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  4 months (July 1, 2026 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Vice-President for Finance at Divine Word College of Calapan (2023–2025)</li>
                  <li>Formation Division Head at Saint Jude Catholic School (2022–2023)</li>
                  <li>Assistant Administrative Officer at Saint Jude Catholic School (2020–2022)</li>
                  <li>Parish Priest at Our Lady of the Assumption, Lubang, Occidental Mindoro (2019–2020)</li>
                  <li>Office of the Community Development and Alumni Affairs at Saint Jude Catholic School (2013–2016)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}