import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import johnImage from '../../assets/director\'s council/john.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function John() {
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
            <p className="tagline">Office of the External Relations</p>
          </motion.div>
        </div>
      </section>

      {/* ===== JOHN PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="john-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="john-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              External Relations Officer
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
                  src={johnImage}
                  alt="Johnie L. Taday - External Relations Officer of DWSSII"
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
                    <strong>Philippine Educational Theater Association (PETA)</strong> — Alumnus, Member since 2017
                  </li>
                  <li>
                    <strong>Semirara Multipurpose Cooperative</strong> — Member since 2016
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2022)
                    <br />Master of Arts in Education Major in Science (CAR)
                  </li>
                  <li>
                    <strong>National Teachers College (NTC)</strong> (2017)
                    <br />Master of Arts in Education Major in Elementary Education (Units Earned)
                  </li>
                  <li>
                    <strong>Philippine Normal University (PNU)</strong> (2012)
                    <br />Master of Arts in Education Major in Elementary Education (Units Earned)
                  </li>
                  <li>
                    <strong>Occidental Mindoro State University (OMSU)</strong> (2009)
                    <br />Bachelor in Elementary Education
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>BEYOND USUAL</strong> (2023, 2024, and 2025)
                    <br />Writer of the Official Coffee Table Book of BLGU Semirara's Coal Festival
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  15 years (June 2010 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>External Relations Officer at DWSSII — Present</li>
                  <li>School Publication and E/Learning Development Coordinator at DWSSII (2025)</li>
                  <li>School Communications Officer at DWSSII (2024)</li>
                  <li>The Divine Courier School Paper Adviser at DWSSII (2022)</li>
                  <li>Co-author of CLVE Workbook for Grade 1, part of a series for SVD Schools of the Central Province</li>
                  <li>Prefect of Discipline at DWSSII (2021)</li>
                  <li>Financial Analyst / CSR at R-Sitel Philippines (2014)</li>
                  <li>Subject Teacher at DWSSII (2010)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}