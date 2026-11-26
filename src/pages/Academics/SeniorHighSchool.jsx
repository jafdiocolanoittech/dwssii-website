import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import shsImage from '../../assets/images/shs-group.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function SeniorHighSchool() {
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
            <h1>Senior High School</h1>
            <p className="tagline">Preparing for the Future</p>
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
              <img src={shsImage} alt="DWSSII Senior High School Students" className="als-image" />
            </div>
            <p className="als-image-caption">"Equipping learners for college, career, and beyond."</p>
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
                The <strong>Senior High School (SHS) Department of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> is the final stage of basic education, designed to prepare Grade 11 and Grade 12 learners for higher education, middle-level skills development, employment, or entrepreneurship. Aligned with the K to 12 curriculum and guided by the SVD missionary tradition, we empower our students to make informed choices about their future pathways.
              </p>

              <p className="als-text">
                Our department offers specialized tracks and strands that cater to the diverse interests, strengths, and aspirations of our learners. Through focused academic instruction, specialized subjects, and real-world applications, we equip students with the competencies they need to succeed in their chosen fields—whether they pursue a college degree, enter the workforce, or launch their own ventures.
              </p>

              <p className="als-text">
                Beyond the classroom, SHS students engage in Work Immersion, Research Capstones, and community-based projects that connect their learning to real-life challenges. These experiences develop critical thinking, problem-solving, and professional skills while grounding them in the SVD CHIMES values—Christ-Centered, Harmony with Nature, Integrity, Mission-Hearted, Excellence, and Servant Leadership. Our graduates leave DWSSII not only academically prepared but also morally grounded and mission-driven.
              </p>

              <div className="als-highlight">
                <p className="als-highlight-text">
                  To our SHS students: these two years are your bridge to the future. Choose your path wisely, work with purpose, and never stop dreaming. To our parents and guardians: thank you for walking this journey with us. Your support and guidance are vital as your children step closer to their goals.
                </p>
                <p className="als-highlight-bold">
                  Together, let us shape competent, compassionate, and Christ-centered young adults ready to serve God, country, and community.
                </p>
              </div>
            </div>

            <div className="als-objectives">
              <h3 className="als-objectives-title">Department Objectives</h3>
              <ul className="als-objectives-list">
                <li>Provide specialized and relevant SHS tracks and strands aligned with the K to 12 curriculum.</li>
                <li>Prepare students for college entrance, technical-vocational certification, employment, or entrepreneurship.</li>
                <li>Develop advanced research, communication, and critical thinking skills through specialized subjects and capstone projects.</li>
                <li>Offer meaningful Work Immersion experiences that connect classroom learning to real-world industry practice.</li>
                <li>Form graduates who embody the SVD CHIMES values and are ready to serve as responsible, mission-hearted citizens.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}