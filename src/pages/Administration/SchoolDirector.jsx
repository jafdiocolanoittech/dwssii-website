import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import directorImage from '../../assets/images/school-director1.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function SchoolDirector() {
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
            <p className="tagline">Office of the School Director</p>
          </motion.div>
        </div>
      </section>

      {/* ===== DIRECTOR PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="director-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="director-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              School Director
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Guiding DWSSII with faith, expertise, and dedicated service.
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
                  src={directorImage}
                  alt="Fr. Rico Glenn C. Deuna - School Director of DWSSII"
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
                      <li>Date of Ordination: February 9, 2008</li>
                      <li>Years in Priesthood: 18</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Philippine Dental Association (PDA)</strong> — Member since 1991
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>University of the Philippines Manila (UP, Manila)</strong> (2010)
                    <br />Master of Hospital Administration (MHA)
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2008)
                    <br />Master of Arts in Theology, Major in Pastoral Ministry (MAPM)
                  </li>
                  <li>
                    <strong>Manila Central University (MCU)</strong> (1991)
                    <br />Doctor of Dental Medicine (DMD)
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2008)
                    <br />Master of Arts in Theology, Major in Pastoral Ministry — Summa Cum Laude
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong>
                    <br />Ecclesiastical Course — Magna Cum Laude
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
                  <li>CEO at Holy Name University Medical Center in Tagbilaran City, Bohol</li>
                  <li>Vice President for Administration at Divine Word College of Legazpi</li>
                  <li>Administrative Officer / VP Admin at Saint Jude Catholic School</li>
                  <li>Parish Priest at Chair of St. Peter Parish Church, Rizal, Occ. Mindoro</li>
                  <li>Parish Priest at Sto. Niño de Violago Quasi Parish, Quezon City</li>
                  <li>Mission Church Administrator at Rio Tuba, Bataraza, Palawan</li>
                  <li>Parochial Vicar at St. Arnold Janssen Parish Shrine in Cainta, Rizal</li>
                  <li>Parochial Vicar at Sto. Niño Parish Church in Apurawan, Aborlan, Palawan</li>
                  <li>Guest Priest at Sto. Niño Cathedral in Calapan, Mindoro</li>
                  <li>Private Dental Practice for 9 years at Deuna Dental Clinic, Sampaloc, Manila (1991–2000)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}