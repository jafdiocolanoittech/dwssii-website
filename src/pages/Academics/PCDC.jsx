import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import pcdcImage from '../../assets/images/pcdc-group.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function PCDC() {
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
            <h1>PCDC</h1>
            <p className="tagline">Pre-School Child Development Center</p>
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
              <img src={pcdcImage} alt="DWSSII Pre-School Child Development Center" className="als-image" />
            </div>
            <p className="als-image-caption">"Where little minds grow big dreams."</p>
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
                The <strong>Pre-School Child Development Center (PCDC) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> provides a nurturing, safe, and stimulating environment where young learners ages 3 to 5 begin their educational journey. Rooted in the SVD tradition of holistic formation, our pre-school program lays the foundation for lifelong learning through play-based activities, creative exploration, and age-appropriate instruction.
              </p>

              <p className="als-text">
                Our curriculum is designed to develop the whole child—cognitively, socially, emotionally, physically, and spiritually. Through guided play, storytelling, arts and crafts, music, and movement, we help children build essential pre-literacy and pre-numeracy skills while fostering curiosity, confidence, and a love for learning. Every activity is carefully crafted to match the developmental stage of our young learners.
              </p>

              <p className="als-text">
                At PCDC, we believe that early childhood is the most critical period for shaping attitudes, values, and habits. Our dedicated teachers create a warm, family-like atmosphere where every child feels valued and encouraged. We integrate the CHIMES core values—Christ-Centered, Harmony with Nature, Integrity, Mission-Hearted, Excellence, and Servant Leadership—into daily routines, helping our youngest Divinians grow not just in knowledge, but in character.
              </p>

              <div className="als-highlight">
                <p className="als-highlight-text">
                  To our little learners: every day is a new adventure! Keep asking questions, keep exploring, and keep smiling. To our parents: thank you for entrusting us with your children during these precious formative years. Your partnership and involvement are key to their growth and happiness.
                </p>
                <p className="als-highlight-bold">
                  Together, let us nurture these young hearts and minds as they take their first steps toward a bright and promising future.
                </p>
              </div>
            </div>

            <div className="als-objectives">
              <h3 className="als-objectives-title">Center Objectives</h3>
              <ul className="als-objectives-list">
                <li>Provide a developmentally appropriate curriculum that fosters cognitive, social, emotional, and physical growth.</li>
                <li>Create a safe, nurturing, and joyful learning environment where children feel secure and valued.</li>
                <li>Develop foundational literacy, numeracy, and communication skills through play-based and hands-on learning.</li>
                <li>Instill basic Christian values and the SVD CHIMES core values in age-appropriate ways.</li>
                <li>Strengthen the partnership between home and school to support the holistic development of every child.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}