import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import asstImage from '../../assets/director\'s council/asst.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function AsstPrincipal() {
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
            <p className="tagline">Office of the Assistant Principal</p>
          </motion.div>
        </div>
      </section>

      {/* ===== ASST. PRINCIPAL PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="asst-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="asst-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Assistant Principal - Senior High School
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
                  src={asstImage}
                  alt="Joy P. Sanico - Assistant Principal of DWSSII"
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
                    <strong>Semirara Multipurpose Cooperative (SEMCO)</strong> — Member
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2022)
                    <br />Master of Arts in Education Major in Science
                  </li>
                  <li>
                    <strong>Philippine Normal University, Manila (PNU)</strong> (2018)
                    <br />Master of Science Education Major in General Science (Units Earned)
                  </li>
                  <li>
                    <strong>State University of Northern Negros (SUNN)</strong> (2011)
                    <br />Bachelor of Secondary Education Major in General Science
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word School of Semirara Island, Inc.</strong> (2014–2020)
                    <br />Most Outstanding Club — Club Moderator
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  13 years (June 2013 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Assistant Principal - Senior High School at DWSSII</li>
                  <li>PAASCU Coordinator at DWSSII</li>
                  <li>Subject Area Coordinator - Science at DWSSII</li>
                  <li>Subject Area Coordinator - Junior High School / Science Club Moderator at DWSSII</li>
                  <li>High School Science Teacher / Science Club Moderator at DWSSII</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}