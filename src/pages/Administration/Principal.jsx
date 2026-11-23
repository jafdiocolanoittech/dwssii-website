import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import principalImage from '../../assets/director\'s council/principal.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Principal() {
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
            <p className="tagline">Office of the Principal</p>
          </motion.div>
        </div>
      </section>

      {/* ===== PRINCIPAL PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="principal-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="principal-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Basic Education Principal
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
                  src={principalImage}
                  alt="Grace A. Arguelles - Principal of DWSSII"
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
                    <strong>Educators Research and Innovation Organization Inc.</strong> — Member since 2024
                  </li>
                  <li>
                    <strong>Principal's Circle of the Philippines</strong> — Member since 2026
                  </li>
                  <li>
                    <strong>Philippine Association for Teachers and Educators (PAFTE), Inc.</strong> — Member since 2026
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2025)
                    <br />Doctor of Philosophy (Candidate) Major in Educational Management
                  </li>
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2021)
                    <br />Master of Arts in Education, Major in Administration and Supervision
                  </li>
                  <li>
                    <strong>Philippine Normal University (PNU)</strong> (2016)
                    <br />Master of Arts in Education with Specialization in Elementary Education (CAR)
                  </li>
                  <li>
                    <strong>Occidental Mindoro State University (OMSU)</strong> (2004)
                    <br />Bachelor of Secondary Education Major in English
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>International Journal of Research Publication and Reviews (IJRPR)</strong> (2024)
                    <br />Work Engagements and Job Performance of Teachers of Divine Word School of Semirara Island, Inc. (Vol. 5, Issue 12)
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  21 years (June 2005 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Basic Education Principal at DWSSII (2025 – Present)</li>
                  <li>Assistant Principal for Curriculum Planning and Development at DWSSII (2022–2024)</li>
                  <li>Grade School Principal at DWSSII (2017–2022)</li>
                  <li>Grade School Assistant Principal at DWSSII (2012–2017)</li>
                  <li>English Subject Area Coordinator at DWSSII (2009–2011)</li>
                  <li>English Teacher, High School Department at DWSSII (2007–2009)</li>
                  <li>Teacher-In-Charge and English Teacher, High School Department at DWSSII (2005–2007)</li>
                  <li>High School Teacher at DWSSII (November 2004 – March 2005)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}