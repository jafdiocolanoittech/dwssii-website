import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsImage from '../../assets/images/gs-group.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function GradeSchool() {
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
            <h1>Grade School</h1>
            <p className="tagline">Building Strong Foundations</p>
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
              <img src={gsImage} alt="DWSSII Grade School Students" className="als-image" />
            </div>
            <p className="als-image-caption">"Nurturing young minds in faith, knowledge, and character."</p>
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
                The <strong>Grade School Department of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> provides a solid academic foundation for learners from Grade 1 to Grade 6. Guided by the SVD missionary tradition and the CHIMES core values, we create a learning environment where children develop not only essential academic skills but also strong moral character and a deep love for God and country.
              </p>

              <p className="als-text">
                Our curriculum follows the Department of Education's K to 12 standards, ensuring that every student gains mastery in reading, writing, mathematics, science, and social studies. We employ interactive and child-centered teaching strategies that make learning enjoyable and meaningful. Through hands-on activities, collaborative projects, and creative expression, our students build confidence and critical thinking skills that prepare them for Junior High School and beyond.
              </p>

              <p className="als-text">
                Beyond academics, the Grade School Department emphasizes holistic formation. We integrate values education, catechism, and character-building activities into everyday learning. Our students participate in various co-curricular activities—scouting, arts, sports, and community service—that help them discover their talents, develop leadership, and learn the joy of serving others. Every child is encouraged to grow at their own pace in a supportive and nurturing atmosphere.
              </p>

              <div className="als-highlight">
                <p className="als-highlight-text">
                  To our Grade School learners: every lesson you learn today is a stepping stone to your dreams. Be curious, be kind, and always do your best. To our parents: thank you for partnering with us in your children's formation. Your love, guidance, and support are the greatest gifts you can give them.
                </p>
                <p className="als-highlight-bold">
                  Together, let us build strong foundations so our children can rise high and shine bright as future leaders of our community and Church.
                </p>
              </div>
            </div>

            <div className="als-objectives">
              <h3 className="als-objectives-title">Department Objectives</h3>
              <ul className="als-objectives-list">
                <li>Provide a strong academic foundation in literacy, numeracy, and critical thinking aligned with the K to 12 curriculum.</li>
                <li>Instill the SVD CHIMES core values to develop morally upright and Christ-centered learners.</li>
                <li>Foster a love for learning through engaging, interactive, and age-appropriate teaching methods.</li>
                <li>Develop social skills, creativity, and leadership through co-curricular activities and community involvement.</li>
                <li>Prepare students holistically for the challenges of Junior High School and lifelong learning.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}