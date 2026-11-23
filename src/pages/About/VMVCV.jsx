import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import mvImage from '../../assets/images/mission-vision-corevalues.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function VMVCV() {
  const heroRef = useRef(null);

  const coreValues = [
    { letter: 'C', title: 'Christ-Centered', desc: 'Rooted in faith and guided by the teachings of Christ in all aspects of life and learning.' },
    { letter: 'H', title: 'Harmony with Nature', desc: 'Fostering environmental awareness and stewardship of God\'s creation.' },
    { letter: 'I', title: 'Integrity', desc: 'Upholding truth, honesty, and moral uprightness in every endeavor.' },
    { letter: 'M', title: 'Mission-Hearted', desc: 'Committed to the SVD mission of evangelization through education and selfless service.' },
    { letter: 'E', title: 'Excellence', desc: 'Striving for the highest standards in academics, character formation, and community service.' },
    { letter: 'S', title: 'Servant Leadership', desc: 'Dedicated to serving God, the Church, and the community, especially the marginalized.' }
  ];

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
            <h1>Vision, Mission & Core Values</h1>
            <p className="tagline">The guiding principles of our Divinian community</p>
          </motion.div>
        </div>
      </section>

      {/* ===== 1. VISION & MISSION ===== */}
      <section className="intro" style={{ padding: '64px 0', background: 'var(--white)' }}>
        <div className="container">
          <div className="mission-vision" style={{ gap: '48px' }}>
            <motion.div 
              className="mission" 
              style={{ borderTop: '4px solid var(--primary-green)', padding: '32px 24px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <span className="section-label" style={{ marginBottom: '16px', display: 'block' }}>Our Aspiration</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', marginBottom: '24px', color: 'var(--text-dark)' }}>Vision</h2>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-body)', margin: 0 }}>
                DIVINE WORD SCHOOL OF SEMIRARA ISLAND, INC. envisions an academic Christian community, working together towards the total development of its members and witnessing to the Word in the world under the patronage of Saint Arnold Janssen and the guidance of the Holy Spirit.
              </p>
            </motion.div>

            <motion.div 
              className="vision" 
              style={{ borderTop: '4px solid var(--divinian-orange)', padding: '32px 24px' }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <span className="section-label" style={{ marginBottom: '16px', display: 'block', color: 'var(--divinian-orange)' }}>Our Purpose</span>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.75rem', marginBottom: '24px', color: 'var(--text-dark)' }}>Mission</h2>
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--text-body)', margin: 0 }}>
                DWSSII commits itself to provide the pupils/students a Christian liberal education with technical and professional competence, development, and enhancement of the spiritual rooted on the gospel values, intellectual, moral, and physical capabilities of its members in the academic community through the generosity and support of Semirara Mining and Power Corporation in promoting quality and relevant education and raising the level of environmental awareness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 2. LANDSCAPE IMAGE FEATURE ===== */}
      <section style={{ padding: '0 0 64px', background: 'var(--white)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ 
              position: 'relative', 
              borderRadius: 'var(--radius-lg)', 
              overflow: 'hidden', 
              boxShadow: 'var(--shadow-elevated)',
              border: '1px solid var(--border-light)'
            }}>
              <img 
                src={mvImage} 
                alt="DWSSII Campus and Community" 
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              />
              {/* Subtle overlay gradient for premium feel */}
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                height: '120px', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' 
              }}></div>
              <div style={{ 
                position: 'absolute', 
                bottom: '32px', 
                left: '24px', 
                right: '24px',
                color: 'var(--white)' 
              }}>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0, opacity: 0.9 }}>
                  Established 2003
                </p>
                <p style={{ fontSize: '1.5rem', fontFamily: 'Playfair Display, serif', margin: '8px 0 0', fontWeight: 600, lineHeight: 1.2 }}>
                  Divine Word School of Semirara Island, Inc.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. CORE VALUES (CHIMES) ===== */}
      <section className="intro" style={{ padding: '64px 0', background: 'var(--bg-neutral)' }}>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span className="section-label-badge">Our Foundation</span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.25rem', marginTop: '16px', marginBottom: '16px' }}>
              Core Values
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              fontFamily: 'Playfair Display, serif', 
              fontStyle: 'italic', 
              color: 'var(--primary-green)',
              marginBottom: '8px'
            }}>
              "Vivere Verbum Integritate"
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
              Live the Word with Integrity
            </p>
          </motion.div>

          {/* REMOVED gridTemplateColumns inline style so CSS @media can make it 1 column on mobile */}
          <div className="values-grid" style={{ gap: '32px' }}>
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                className="value-card"
                style={{ 
                  textAlign: 'left', 
                  padding: '32px 24px', /* Reduced padding for better mobile fit */
                  borderTop: '3px solid var(--primary-green)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ transform: 'translateY(-4px)', boxShadow: 'var(--shadow-elevated)' }}
              >
                <div className="value-letter" style={{ 
                  width: '56px', 
                  height: '56px', 
                  fontSize: '1.5rem', 
                  marginBottom: '24px',
                  background: 'var(--light-green)',
                  color: 'var(--primary-green)',
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: 'var(--radius-sm)'
                }}>
                  {value.letter}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-dark)' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-body)', margin: 0 }}>
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}