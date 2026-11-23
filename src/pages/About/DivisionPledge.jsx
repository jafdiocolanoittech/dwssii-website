import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import pledgeImage from '../../assets/images/divinian-pledge.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function DivinianPledge() {
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
      <section ref={heroRef} className="hero hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Divinian Pledge</h1>
            <p className="tagline">Our Commitment and Prayer</p>
          </motion.div>
        </div>
      </section>

      {/* ===== PLEDGE & PRAYER SECTION ===== */}
      <section className="pledge-section" aria-labelledby="pledge-heading">
        <div className="container">
          <motion.header
            className="pledge-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 id="pledge-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              The Divinian Prayer & Pledge
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              The spiritual foundation and commitment that unites every Divinian.
            </p>
          </motion.header>

          <div className="pledge-layout">
            {/* LEFT: Portrait Image */}
            <motion.div
              className="pledge-image-col"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="pledge-image-frame">
                <img
                  src={pledgeImage}
                  alt="Divinian Pledge and Prayer"
                  className="pledge-image"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* RIGHT: Prayer and Pledge Text */}
            <motion.div
              className="pledge-text-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {/* DWSSII Prayer */}
              <div className="prayer-block">
                <h3 className="block-title">DWSSII Prayer</h3>
                <p>
                  Holy Triune God, we thank and praise you for the gifts of Sts. Arnold Janssen and Joseph Freinademetz. You have chosen St. Arnold to establish three missionary congregations and have inspired St. Joseph Freinademetz to transform the people of China through the proclamation of the good news. We thank you for the inspiring lives and examples set before us by Blessed Maria Helena, Blessed Josepha, and our SVD Martyrs.
                </p>
                <p>
                  We humbly beg you to pour out your blessings to the Divine Word School of Semirara Island, Inc., especially the faculty, staff, and students, that we may be a lively center for sound learning, new discovery, and the pursuit of wisdom. Grant that those who teach and learn may find you to be the source of all truth as we work together to witness the Word to the world.
                </p>
                <p>
                  Bless, O Lord, the Semirara Mining and Power Corporation, the management, and all employees for their success and safety. May they become a source of light to see your presence in every individual as one family, one mind, and one heart.
                </p>
                <p style={{ marginBottom: 0 }}>
                  May the darkness of sin and the night of unbelief vanish before the light of the Word and the spirit of grace. And may the heart of Jesus live in the hearts of all people. <strong>AMEN.</strong>
                </p>
              </div>

              {/* Divinian Pledge */}
              <div className="pledge-block">
                <h3 className="block-title">Divinian Pledge</h3>
                <blockquote className="pledge-quote">
                  "I am a Divinian, I am God-fearing and God-loving. 
                  I am disciplined, I aim high, I aim for excellence. 
                  I keep challenging myself to be better every day. 
                  I am service-oriented, humble, loving, and caring for others, 
                  to the things around me, and to Mother Earth."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}   