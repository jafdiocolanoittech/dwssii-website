import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import goalsImage from '../../assets/images/dwssii-goals.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const GOALS = [
  {
    letter: 'a',
    text: 'To build a community guided by a Christian value system that provides responsible and competent leaders for the nation.',
  },
  {
    letter: 'b',
    text: 'To foster social awareness and responsiveness towards the social, economic and educational upliftment of the indigenous peoples, the marginalized, and underprivileged.',
  },
  {
    letter: 'c',
    text: 'To provide a general education that will develop the whole human person to become technically and professionally competent.',
  },
  {
    letter: 'd',
    text: 'To advance skills and knowledge applying the latest trends in information technology that will make the individual an active, productive, and competitive participant of the global community.',
  },
  {
    letter: 'e',
    text: 'To provide training in scientific principles, methods and attitudes and effect advance knowledge through research in order to contribute to improvement of the quality of life.',
  },
  {
    letter: 'f',
    text: 'To provide the manpower needs of the nation that will contribute towards economic progress.',
  },
  {
    letter: 'g',
    text: 'To promote a deep sense of national identity, appreciation and preservation of our cultural heritage.',
  },
  {
    letter: 'h',
    text: 'To actively participate in the protection, preservation and conservation of a sustainable environment and to work towards the reduction and solution of ecological problems.',
  },
  {
    letter: 'i',
    text: 'To foster harmonious relationships in the community through mutual respect of human dignity and belief, and protection of individual human rights.',
  },
];

export default function Goals() {
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
            <h1>Institutional Goals</h1>
            <p className="tagline">Our Strategic Objectives</p>
          </motion.div>
        </div>
      </section>

      {/* ===== MODERN GOALS SECTION ===== */}
      <section className="als-section" aria-labelledby="goals-heading">
        {/* Constrained max-width for a balanced, modern, non-stretched look */}
        <div className="als-container" style={{ maxWidth: '1150px' }}>
          
          {/* LEFT: Image */}
          <motion.div
            className="als-image-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="als-image-frame">
              <img
                src={goalsImage}
                alt="DWSSII Institutional Goals"
                className="als-image"
                decoding="async"
              />
            </div>
            <p className="als-image-caption"></p>
          </motion.div>

          {/* RIGHT: Modern Goals List */}
          <motion.div
            className="als-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="als-label"></span>
            <h2 className="als-title" style={{ marginBottom: '16px' }}></h2>
            <p className="als-text" style={{ marginBottom: '32px' }}>
              To attain its Vision and Mission, DWSSII is committed to the following strategic objectives that shape the future of our learners and community.
            </p>

            {/* Modern Card-Style List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {GOALS.map((goal, index) => (
                <motion.div
                  key={goal.letter}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                    padding: '20px',
                    background: '#ffffff',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-green)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  // Simple hover effect via inline style logic or just rely on CSS
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.08)';
                    e.currentTarget.style.borderLeftColor = 'var(--gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderLeftColor = 'var(--primary-green)';
                  }}
                >
                  {/* Modern Circular Letter Badge */}
                  <span 
                    style={{ 
                      flexShrink: 0, 
                      width: '36px', 
                      height: '36px', 
                      borderRadius: '50%', 
                      background: 'var(--light-green)', 
                      color: 'var(--primary-green)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {goal.letter.toUpperCase()}
                  </span>
                  
                  {/* Goal Text (inherits global 0.85rem sizing) */}
                  <p className="als-text" style={{ margin: 0, lineHeight: '1.7', paddingTop: '6px' }}>
                    {goal.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}