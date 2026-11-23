import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import rpdoImage from '../../assets/director\'s council/rpdo.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function RPDO() {
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
            <p className="tagline">Office of the Research, Planning & Development</p>
          </motion.div>
        </div>
      </section>

      {/* ===== RPDO PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="rpdo-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="rpdo-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council Member
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Research, Planning & Development Officer
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
                  src={rpdoImage}
                  alt="Doreen E. Morgado - RPDO of DWSSII"
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
                    <strong>Asian Psychological Services and Assessment, Inc.</strong> — Principal Circle of the Philippines, Member since 2026
                  </li>
                  <li>
                    <strong>Asian Society of Teachers for Research, Inc.</strong> — Member since 2025
                  </li>
                  <li>
                    <strong>Semirara Multi-purpose Cooperative</strong> — Education Committee Secretary, Member since 2025
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word College of Calapan (DWCC)</strong> (2021)
                    <br />Master of Arts in Education, major in School Administration and Supervision
                  </li>
                  <li>
                    <strong>De La Salle John Bosco College (DLSJB)</strong> (2003)
                    <br />Bachelor of Science in Secondary Education, Major in Mathematics
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word School of Semirara Island, Inc.</strong> (2023)
                    <br />Editor-in-Chief of Mina Kang Kaaram, the DWSSII Research Journal
                  </li>
                  <li>
                    <strong>Mina Kang Kaaram</strong>
                    <br />3 published issues (2023–2025)
                  </li>
                  <li>
                    <strong>Outstanding Club Moderator</strong>
                    <br />GEMS Club (2013–2017)
                  </li>
                  <li>
                    <strong>Semirara Coal Festival DepEd Night 2023</strong>
                    <br />LGU Caluya Outstanding Teacher
                    <br />Pinoy Henyo Champion
                  </li>
                </ul>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Years of Service at DWSSII</h3>
                <p className="profile-text">
                  19 years (June 2007 – Present)
                </p>
              </div>

              <div className="profile-section">
                <h3 className="profile-title">Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>Research Planning & Development Officer at DWSSII</li>
                  <li>DWSSII Sports Management Committee Consultative Member — Present</li>
                  <li>High School Head Teacher at DWSSII</li>
                  <li>High School Teacher at DWSSII</li>
                  <li>High School Teacher at Saint Vincent De Paul College, Mangagoy, Bislig City</li>
                  <li>Part-Time High School Teacher at John Bosco School, Mangagoy, Bislig City</li>
                  <li>Branch Personnel at M Lhuillier Philippines, Agusan Del Sur (2004–2005)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}