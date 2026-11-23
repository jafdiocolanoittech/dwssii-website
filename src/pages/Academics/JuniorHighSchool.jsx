import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import jhsImage from '../../assets/images/jhs-group.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function JuniorHighSchool() {
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
            <h1>Junior High School</h1>
            <p className="tagline">Developing Critical Thinkers and Future Leaders</p>
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
              <img src={jhsImage} alt="DWSSII Junior High School Students" className="als-image" />
            </div>
            <p className="als-image-caption">"Nurturing minds, shaping character, and building futures."</p>
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
                The <strong>Junior High School (JHS) Department of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> is dedicated to providing a comprehensive, values-oriented, and K-12 compliant education. Guided by the Society of the Divine Word (SVD) core values, we aim to holistically develop young adolescents during their crucial formative years, preparing them not just for Senior High School, but for life itself.
              </p>

              <p className="als-text">
                Our curriculum balances academic rigor with character formation. We integrate the CHIMES core values—Christ-Centered, Harmony with Nature, Integrity, Mission-Hearted, Excellence, and Servant Leadership—into every subject area. Through interactive learning, research-based projects, and community immersion, our students are trained to become critical thinkers and responsible citizens.
              </p>

              <p className="als-text">
                Beyond the classroom, the JHS Department offers a vibrant array of co-curricular activities, clubs, and sports programs. These platforms allow students to discover their unique talents, develop leadership skills, and build lasting friendships in a safe and supportive environment.
              </p>

              <div className="als-highlight">
                <p className="als-highlight-text">
                  To our JHS students: this is the time to explore, to question, and to grow. Embrace the challenges, lean on your teachers, and always strive to do your best. To our parents: thank you for trusting us with your children's formation. Your partnership is the cornerstone of their success.
                </p>
                <p className="als-highlight-bold">
                  Together, let us guide our learners to become competent, compassionate, and Christ-centered individuals ready to take on the world.
                </p>
              </div>
            </div>

            <div className="als-objectives">
              <h3 className="als-objectives-title">Department Objectives</h3>
              <ul className="als-objectives-list">
                <li>Provide a rigorous and relevant K-12 curriculum that prepares students for Senior High School and beyond.</li>
                <li>Instill the SVD core values (CHIMES) to foster moral integrity and spiritual growth.</li>
                <li>Develop critical thinking, research skills, and digital literacy through innovative teaching methods.</li>
                <li>Encourage holistic development through active participation in clubs, sports, and community service.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}