import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ptaImage from '../../assets/images/pta.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function PTA() {
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
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Parent and Teacher Association</h1>
            <p className="tagline">Partnership between parents and teachers for student success</p>
          </motion.div>
        </div>
      </section>

      <section className="als-section">
        <div className="als-container">
          <motion.div
            className="als-image-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="als-image-frame">
              <img src={ptaImage} alt="DWSSII Parents and Teachers Association" className="als-image" />
            </div>
            <p className="als-image-caption">"Together, we shape the future of every Divinian learner."</p>
          </motion.div>

          <motion.div
            className="als-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="als-content">
              <p className="als-text">
                The <strong>Parents and Teachers Association (PTA)</strong> of Divine Word School of Semirara Island, Inc. (DWSSII) serves as a vital bridge between the home and the school, fostering a strong partnership built on mutual trust, shared responsibility, and a common goal — the holistic development of every learner.
              </p>

              <p className="als-text">
                Guided by the Divinian values of faith, service, and excellence, the PTA actively supports the institution's mission by collaborating with teachers, administrators, and the broader community to create a nurturing and enriching educational environment. Through open communication and coordinated efforts, the PTA ensures that students receive the academic, moral, and emotional support they need to thrive.
              </p>

              <p className="als-text">
                Beyond its role in school activities, the PTA champions initiatives that promote student welfare, parental involvement, and community engagement. From organizing educational programs and supporting school projects to advocating for the needs of learners, the PTA remains a steadfast partner in the pursuit of quality and relevant education.
              </p>

              <div className="als-highlight">
                <p className="als-highlight-text">
                  To our parents: your active involvement and unwavering support are the foundation of your child's success. To our teachers: your dedication and collaboration bring our shared vision to life. Together, we continue to build a community where every learner is valued, guided, and empowered to reach their fullest potential.
                </p>
                <p className="als-highlight-bold">
                  Together, let us strengthen the bond between home and school — because when parents and teachers unite, every child wins.
                </p>
              </div>
            </div>

            <div className="als-objectives">
              <h3 className="als-objectives-title">Key Objectives of the PTA</h3>
              <ul className="als-objectives-list">
                <li>Foster a strong partnership between parents, teachers, and the school administration.</li>
                <li>Support the academic, moral, and spiritual development of every DWSSII learner.</li>
                <li>Organize programs and activities that promote parental involvement and community engagement.</li>
                <li>Advocate for the welfare and holistic growth of students within and beyond the campus.</li>
                <li>Uphold the Divinian values of faith, service, and excellence in every endeavor.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-neutral, #f8fafc)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '48px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge" style={{ fontSize: '0.75rem' }}>External Affairs</span>
            <h2 style={{ marginTop: '12px', fontSize: '1.75rem', fontFamily: 'Playfair Display, serif' }}>Explore Other Programs</h2>
          </motion.div>

          <div className="events-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/external-affairs" className="related-link">
                <div className="event-card">
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)' }}>
                    <div className="day">EA</div>
                    <div className="month">Affairs</div>
                  </div>
                  <div className="event-details">
                    <h3>External Affairs</h3>
                    <p>Overview of community and external programs</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/external-affairs/als" className="related-link">
                <div className="event-card">
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)' }}>
                    <div className="day">AL</div>
                    <div className="month">ALS</div>
                  </div>
                  <div className="event-details">
                    <h3>Alternative Learning System</h3>
                    <p>Accessible education for out-of-school youth and adults</p>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/about/vm-cv" className="related-link">
                <div className="event-card">
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)' }}>
                    <div className="day">VM</div>
                    <div className="month">Mission</div>
                  </div>
                  <div className="event-details">
                    <h3>Vision & Mission</h3>
                    <p>The core values that guide our institution</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}