import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import sssoImage from '../../assets/director\'s council/ssso.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function SSSO() {
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
            <p className="tagline">Office of the Student Services</p>
          </motion.div>
        </div>
      </section>

      {/* ===== SSSO PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="ssso-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="ssso-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Student Services Officer
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
                  src={sssoImage}
                  alt="Sarah Jane R. Canabo - Student Services Officer of DWSSII"
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
                    <strong>Philippine Association of Practitioners of Student Affairs and Services, Inc. (PAPSAS)</strong> — Member since 2025
                  </li>
                  <li>
                    <strong>Principals' Circle of the Philippines (PCP-APSA)</strong> — Member since 2026
                  </li>
                  <li>
                    <strong>Semirara Multipurpose Cooperative (SEMCO)</strong> — Mediation and Conciliation Committee Secretary, Member since 2024
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2023)
                    <br />Master of Arts in Education - Teaching English Language (MAEd TEL)
                  </li>
                  <li>
                    <strong>Bago City College (BCC)</strong> (2010)
                    <br />Bachelor of Elementary Education
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  14 years (June 2012 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Student Services Officer at DWSSII (2021–Present)</li>
                  <li>Subject Area Coordinator in English at DWSSII (2022–2024)</li>
                  <li>Grade School Head Teacher at DWSSII (2015–2020)</li>
                  <li>Grade School Teacher at DWSSII (2012–2015)</li>
                  <li>English Teacher at Sipalay City National High School</li>
                  <li>Substitute Teacher at Barangay V Elementary School</li>
                  <li>Customer Service Representative at Transcom Bacolod, Inc.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}