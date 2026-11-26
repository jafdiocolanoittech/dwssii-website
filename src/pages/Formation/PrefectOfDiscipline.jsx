import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import prefectImage from '../../assets/prefect/prefect.jpg';
import prefectActivityImage from '../../assets/prefect/prefectsample.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function PrefectOfDiscipline() {
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
            <h1>Prefect of Discipline</h1>
            <p className="tagline">Student Discipline & Maintenance Office</p>
          </motion.div>
        </div>
      </section>

      {/* ===== PREFECT PERSONNEL (Single Picture, Dual Designation) ===== */}
      <section className="prefect-office-section">
        <div className="prefect-office-grid">
          <motion.div
            className="prefect-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Single Picture with Dual Designation - Stacked Layout */}
            <div className="prefect-person-row prefect-pic-stacked">
              <div className="prefect-office-img-wrapper">
                <img src={prefectImage} alt="Rhammel Laudemer G. Quijano" className="prefect-office-img" />
              </div>
              <div className="prefect-person-info">
                <h4 className="prefect-person-name">Rhammel Laudemer G. Quijano</h4>
                <span className="prefect-person-title">Prefect of Discipline</span>
                <span className="prefect-person-title">Physical Plant and Maintenance Officer</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="prefect-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="prefect-office-text">
              At <strong>Divine Word School of Semirara Island, Inc. (DWSSII)</strong>, Mr. Rhammel Laudemer G. Quijano serves in a vital dual role that ensures both the moral and physical well-being of our school community. As the Prefect of Discipline, he fosters a safe, orderly, and values-driven environment for students. Concurrently, as the Physical Plant and Maintenance Officer, he ensures that our facilities are well-maintained, secure, and conducive to holistic learning.
            </p>
            <p className="prefect-office-text">
              His approach to both discipline and stewardship is deeply rooted in the Wordian values of integrity, respect, and community. He believes that a well-kept physical environment and compassionate, consistent guidance go hand in hand in forming individuals of good character who are ready to contribute positively to society.
            </p>
            <div className="prefect-office-highlight">
              <p className="prefect-office-highlight-text">
                To our students: discipline is not about restriction, but about freedom to become your best self. To our community: thank you for supporting our mission of forming responsible and respectful individuals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== DISCIPLINE MISSION / ACTIVITIES SECTION ===== */}
      <section className="prefect-activities-section">
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
                <span className="lit-category">Student Affairs & Facilities</span>
                <span className="lit-dot" aria-hidden="true">•</span>
                <span className="lit-date">School Year 2026-2027</span>
              </div>

              <h3 className="news-title lit-title">Fostering a Culture of Discipline and Stewardship</h3>
              
              <p className="news-description lit-paragraph">
                The Prefect of Discipline and Maintenance Office at Divine Word School of Semirara Island, Inc. (DWSSII) is dedicated to nurturing students who are not only academically competent but also morally upright and socially responsible. 
              </p>
              <p className="news-description lit-paragraph">
                Through clear guidelines, proactive values formation programs, and diligent care for our school's physical resources, we guide our students to become disciplined individuals who embody the core values of the institution. We work hand-in-hand with parents, teachers, and students to maintain a harmonious, respectful, and well-kept school environment.
              </p>

              <span className="lit-hashtag">#VivereVerbumIntegritate #DisciplineWithPurpose</span>
            </div>

            {/* PHOTO SIDE (Right because of .reverse) */}
            <div className="lit-gallery-col">
              <img 
                src={prefectActivityImage} 
                alt="DWSSII Discipline and Maintenance Office" 
                className="prefect-activity-img-plain" 
              />
              <p className="lit-gallery-note" style={{ marginTop: '16px', textAlign: 'center' }}>
                "Forming minds, shaping character, and caring for our home."
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}