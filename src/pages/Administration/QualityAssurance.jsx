import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import qaImage from '../../assets/director\'s council/3.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function QualityAssurance() {
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
            <p className="tagline">Office of Quality Assurance</p>
          </motion.div>
        </div>
      </section>

      {/* ===== QA OFFICER PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="qa-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="qa-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Quality Assurance Officer
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
                  src={qaImage}
                  alt="Josephine P. Romero - Quality Assurance Officer of DWSSII"
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
                    <strong>Philippine Accreditation Association of Schools, Colleges and Universities (PAASCU)</strong> — Member since 1988
                  </li>
                  <li>
                    <strong>Ateneo Center for English Language Teaching (ACELT)</strong> — Member since 1990
                  </li>
                  <li>
                    <strong>Our Lady of Guadalupe Parish Lectors and Commentators Ministry</strong> — Member since 2012
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Ateneo de Manila University (ADMU)</strong> (1994)
                    <br />Master of Arts in Educational Administration
                    <br />Earned M.A. Units in English and Communication Arts
                  </li>
                  <li>
                    <strong>St. Louis University</strong> (1970)
                    <br />Bachelor of Arts in Secondary Education Major in English, Minor in History
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Philippine Accrediting Association of Schools, Colleges and Universities (PAASCU)</strong> (2025)
                    <br />For 25 successful accreditation survey visits/consultation
                  </li>
                  <li>
                    <strong>The ICM Congregation / STCQC</strong>
                    <br />For 10, 15, 25, and 30 years of service
                  </li>
                  <li>
                    <strong>St. Louis University Filipino</strong>
                    <br />Club Scholarship
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  17 years (November 2009 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Quality Assurance Officer at DWSSII</li>
                  <li>Basic Education Principal at DWSSII</li>
                  <li>Academic Consultant at DWSSII</li>
                  <li>High School Academic Coordinator at St. Theresa's College, Quezon City</li>
                  <li>English Communication Arts Coordinator at STCQC</li>
                  <li>Filipino and Araling Panlipunan Coordinator at STCQC</li>
                  <li>English Teacher and Class Adviser at STCQC</li>
                  <li>Creative Writing and Journalism Elective Teacher for 4th Year at STCQC</li>
                  <li>High School Students' Enrichment Group Coordinator at STCQC</li>
                  <li>Community Involvement (PALIHAN) Coordinator at STCQC</li>
                  <li>Assistant Guidance Counselor for 4th Year at STCQC</li>
                  <li>Moderator of The Theresian Magazine of STCQC</li>
                  <li>Debate Coach for Interschool/National events of STCQC</li>
                  <li>English Teacher and Class Adviser at the Ateneo de Davao, Davao City</li>
                  <li>Moderator of the school paper Animo and consultant of the school organ The Blue Knight of ADDU</li>
                  <li>Moderator of the Photography Club of ADDU</li>
                  <li>English Teacher and Class Adviser at Holy Family Academy, Baguio City</li>
                  <li>History, PE and Music Teacher at HFA, Baguio City</li>
                  <li>Author of Phoenix textbook in CA-English 3rd year, with teacher's guide: Exploring Life through English and American Literature</li>
                  <li>Co-author of CLNE Workbook for Grade 2, part of a series for SVD Schools of the Central Province</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}