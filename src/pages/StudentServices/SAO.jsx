import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import sao1Image from '../../assets/images/sao1-gs.jpg';
import sao2Image from '../../assets/images/sao2-hs.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function SAO() {
  const heroRef = useRef(null);

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
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
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
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Student Affairs Office</h1>
            <p className="tagline">Supporting Student Development and Welfare</p>
          </motion.div>
        </div>
      </section>

      {/* ===== SAO PERSONNEL (ZIGZAG - 2 Coordinators) ===== */}
      <section className="sao-office-section">
        <div className="sao-office-grid">
          <motion.div
            className="sao-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Person 1: Grade School SAO Coordinator (Left) */}
            <div className="sao-person-row sao-pic-left">
              <div className="sao-office-img-wrapper">
                <img src={sao1Image} alt="Annie Lee P. Mintu - Grade School SAO Coordinator" className="sao-office-img" />
              </div>
              <div className="sao-person-info">
                <h4 className="sao-person-name">Annie Lee P. Mintu, LPT</h4>
                <span className="sao-person-title">Student Affairs Coordinator</span>
                <span className="sao-person-title">Grade School</span>
              </div>
            </div>

            {/* Person 2: High School SAO Coordinator (Right) */}
            <div className="sao-person-row sao-pic-right">
              <div className="sao-office-img-wrapper">
                <img src={sao2Image} alt="Greecky G. Hawod - High School SAO Coordinator" className="sao-office-img" />
              </div>
              <div className="sao-person-info">
                <h4 className="sao-person-name">Greecky G. Hawod, LPT</h4>
                <span className="sao-person-title">Student Affairs Coordinator</span>
                <span className="sao-person-title">High School</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="sao-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="sao-office-text">
              The <strong>Student Affairs Office (SAO) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> is dedicated to fostering the holistic development of every Wordian. We provide comprehensive support services that nurture students' academic, social, emotional, and spiritual growth, ensuring they thrive both inside and outside the classroom.
            </p>
            <p className="sao-office-text">
              Led by Ms. Annie Lee P. Mintu, LPT for the Grade School and Mr. Greecky G. Hawod, LPT for the High School, our office implements programs that promote student welfare, leadership development, values formation, and active participation in school and community activities. We work closely with parents, teachers, and administrators to create a safe, inclusive, and supportive environment for every learner.
            </p>
            <div className="sao-office-highlight">
              <p className="sao-office-highlight-text">
                To our students: you are not alone in your journey. We are here to guide, support, and celebrate your growth. To our parents and partners: thank you for trusting us with the formation of your children. Together, we build a community of responsible, compassionate, and Wordian leaders.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SAO PROGRAMS & ACTIVITIES SECTION ===== */}
      <section className="sao-activities-section">
        <div className="container">
          <motion.article
            className="news-item lit-article reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
          >
            {/* CONTENT SIDE (Left because of .reverse) */}
            <div className="news-content">
              <div className="lit-meta">
                <span className="lit-category">Student Affairs</span>
                <span className="lit-dot" aria-hidden="true">•</span>
                <span className="lit-date">School Year 2026-2027</span>
              </div>

              <h3 className="news-title lit-title">Empowering Students Through Holistic Formation</h3>
              
              <p className="news-description lit-paragraph">
                The Student Affairs Office at Divine Word School of Semirara Island, Inc. (DWSSII) continues to implement programs that develop well-rounded individuals equipped with strong values, leadership skills, and a sense of social responsibility.
              </p>
              <p className="news-description lit-paragraph">
                From orientation programs and leadership training to values formation activities and student welfare services, we ensure that every Wordian receives the support they need to excel academically and grow personally. Our coordinators work tirelessly to create meaningful experiences that shape character and build a vibrant school community.
              </p>

              <span className="lit-hashtag">#VivereVerbumIntegritate #StudentWelfareFirst</span>
            </div>

            {/* PHOTO SIDE (Right because of .reverse) */}
            <div className="lit-gallery-col">
              <img 
                src={sao1Image} 
                alt="DWSSII Student Affairs Office" 
                className="sao-activity-img-plain" 
              />
              <p className="lit-gallery-note" style={{ marginTop: '16px', textAlign: 'center' }}>
                "Forming leaders, nurturing hearts, building community."
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}