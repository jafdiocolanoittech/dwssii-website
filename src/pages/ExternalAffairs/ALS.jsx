import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import als1Image from '../../assets/images/als1.jpg';
import als2Image from '../../assets/images/als2.jpg';
import alsActivityImage from '../../assets/images/als.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function ALS() {
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
      {/* Hero Subpage */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Alternative Learning System</h1>
            <p className="tagline">Empowering Communities Through Accessible Education</p>
          </motion.div>
        </div>
      </section>

      {/* ===== ALS PERSONNEL (ZIGZAG) ===== */}
      <section className="als-office-section">
        <div className="als-office-grid">
          <motion.div
            className="als-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Person 1: ALS Coordinator (Far Left) */}
            <div className="als-person-row als-pic-left">
              <div className="als-office-img-wrapper">
                <img src={als1Image} alt="Claudine A. Oliveros - ALS Coordinator" className="als-office-img" />
              </div>
              <div className="als-person-info">
                <h4 className="als-person-name">Claudine A. Oliveros, LPT</h4>
                <span className="als-person-title">ALS Coordinator</span>
              </div>
            </div>

            {/* Person 2: ALS Learning Facilitator (Pushed Right) */}
            <div className="als-person-row als-pic-right">
              <div className="als-office-img-wrapper">
                <img src={als2Image} alt="Shanley Blanche S. Taglucop - ALS Learning Facilitator" className="als-office-img" />
              </div>
              <div className="als-person-info">
                <h4 className="als-person-name">Shanley Blanche S. Taglucop, LPT</h4>
                <span className="als-person-title">ALS Learning Facilitator</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: ALS Content */}
          <motion.div
            className="als-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="als-office-text">
              At <strong>Divine Word School of Semirara Island, Inc. (DWSSII) Alternative Learning System (ALS)</strong>, we remain committed to providing inclusive, accessible, and meaningful educational opportunities for individuals who wish to continue their learning journey. Guided by the values and mission of the Society of the Divine Word (SVD), we believe that education is a lifelong journey and every individual deserves the opportunity to learn, grow, and achieve their dreams.
            </p>
            <p className="als-office-text">
              Through the Alternative Learning System, we empower out-of-school youth and adults to pursue their education through flexible and learner-centered approaches. We provide opportunities for learners to develop essential knowledge, practical skills, confidence, and values that prepare them for further education, employment, and meaningful participation in their communities.
            </p>
            <div className="als-office-highlight">
              <p className="als-office-highlight-text">
                To our learners: never stop believing in your potential. To our parents and community partners: thank you for supporting our mission. And to our dedicated ALS personnel: your commitment makes every learning opportunity meaningful.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

            {/* ===== ALS ACTIVITIES SECTION (Content Left, Image Right) ===== */}
      <section className="als-activities-section">
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
                <span className="lit-category">Alternative Learning System</span>
                <span className="lit-dot" aria-hidden="true">•</span>
                <span className="lit-date">School Year 2026-2027</span>
              </div>

              <h3 className="news-title lit-title">Empowering Learners Beyond the Classroom</h3>
              
              <p className="news-description lit-paragraph">
                The DWSSII Alternative Learning System (ALS) continues to break barriers by providing flexible, inclusive, and quality education to out-of-school youth and adults in our community. 
              </p>
              <p className="news-description lit-paragraph">
                Through dedicated facilitation and learner-centered modules, our ALS program ensures that no one is left behind. We celebrate the resilience of our learners and the unwavering commitment of our ALS coordinators and teachers who make this mission possible.
              </p>

              <span className="lit-hashtag">#VivereVerbumIntegritate #EducationForAll</span>
            </div>

            {/* PHOTO SIDE (Right because of .reverse) - NO CARD, NO HOVER */}
            <div className="lit-gallery-col">
              <img 
                src={alsActivityImage} 
                alt="DWSSII ALS Activities" 
                className="als-activity-img-plain" 
              />
              <p className="lit-gallery-note" style={{ marginTop: '16px', textAlign: 'center' }}>
                "Learning knows no age or boundaries."
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}