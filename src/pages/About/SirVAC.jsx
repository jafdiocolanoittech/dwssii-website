import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import sirVacImage from '../../assets/images/sir-vac.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const contributions = [
  {
    title: 'Champion of Accessible, Quality Education',
    text: 'Sir Victor firmly believed that the sustainable growth of Semirara Island depended on empowering its youth. Under his leadership, SMPC heavily subsidized DWSSII, enabling the children of miners and local residents to access high-quality private education, vocational training, and comprehensive scholarship programs.'
  },
  {
    title: 'Infrastructure and Facilities Development',
    text: 'Leveraging his engineering background and corporate resources, he spearheaded the strategic expansion of the school\'s physical infrastructure, including the development of modern sports complexes and specialized trade school facilities on the island.'
  },
  {
    title: 'The "Sir VAC" Philosophy of Service',
    text: 'He instilled a culture of practical learning, technical excellence, and profound community care within the institution. The school community continues to commemorate his legacy through annual Eucharistic celebrations, honoring him as a father figure who prioritized building a better future over purely commercial pursuits.'
  }
];

export default function SirVAC() {
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
            <h1>Victor Almeda Consunji</h1>
            <p className="tagline">1950 – 2018 | Chairman of the Board of Trustees, DWSSII</p>
          </motion.div>
        </div>
      </section>

      {/* ===== MODERN PROFILE SECTION ===== */}
      <section className="als-section" aria-labelledby="sirvac-heading">
        <div className="als-container" style={{ maxWidth: '1150px', alignItems: 'start' }}>
          
          {/* LEFT: Portrait Image & Title (Perfectly Centered Together) */}
          <motion.div
            className="als-image-col"
            style={{ paddingTop: '20px' }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Wrapper ensures image and text share the exact same width and center alignment */}
            {/* Increased from 380px to 440px for a bigger, more prominent portrait */}
            <div style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'center' }}>
              <div 
                style={{ 
                  width: '100%', 
                  borderRadius: '8px', 
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  border: '1px solid rgba(0,0,0,0.08)'
                }}
              >
                <img 
                  src={sirVacImage} 
                  alt="Sir Victor A. Consunji" 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                />
              </div>
              
              <div style={{ marginTop: '24px' }}>
                <h3 style={{ 
                  fontSize: '1.35rem', 
                  marginBottom: '8px', 
                  fontFamily: 'var(--font-display)', 
                  color: 'var(--text-dark)',
                  fontWeight: 700
                }}>
                  Sir Victor A. Consunji
                </h3>
                
                <p style={{ 
                  color: 'var(--divinian-orange)', 
                  fontWeight: 600, 
                  fontSize: '0.85rem', 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase',
                  lineHeight: 1.5,
                  margin: 0,
                  textAlign: 'center' 
                }}>
                  President & COO<br/>
                  Semirara Mining & Power Corp.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Biography & Legacy */}
          <motion.div
            className="als-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="als-label">A Foundational Legacy</span>
            <h2 className="als-title" style={{ marginBottom: '16px' }}>Architect of Educational Excellence</h2>
            
            <p className="als-text" style={{ marginBottom: '32px' }}>
              The late Sir Victor A. Consunji holds a foundational legacy as one of the most significant figures in the history of the Divine Word School of Semirara Island, Inc. (DWSSII). As the longtime President and Chief Operating Officer of Semirara Mining and Power Corporation (SMPC), his impact extended far beyond the coal mine and power plants. He served as the primary pillar of support and Chairman of the Board of Trustees for DWSSII until his passing in December 2018.
            </p>

            <h3 style={{ 
              fontSize: '1.15rem', 
              fontWeight: '700',
              color: 'var(--text-dark)',
              fontFamily: 'var(--font-display)',
              marginBottom: '20px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--border-light)'
            }}>
              Core Contributions to DWSSII
            </h3>
            
            {/* Modern Card-Style List for Contributions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {contributions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  style={{
                    padding: '20px',
                    background: '#ffffff',
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--primary-green)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
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
                  <h4 style={{ 
                    fontSize: '1rem', 
                    fontWeight: '700', 
                    color: 'var(--text-dark)', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-display)'
                  }}>
                    {item.title}
                  </h4>
                  <p className="als-text" style={{ margin: 0, lineHeight: '1.7' }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Elegant Quote Block */}
            <motion.div 
              style={{ 
                padding: '24px 28px', 
                background: 'var(--bg-neutral)', 
                borderRadius: '8px', 
                borderLeft: '4px solid var(--divinian-orange)',
                marginBottom: '32px'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p style={{ margin: 0, fontSize: '1.1rem', fontStyle: 'italic', fontFamily: 'var(--font-display)', color: 'var(--text-dark)', lineHeight: '1.6' }}>
                "Whatever you do today must be better than yesterday."
              </p>
              <p style={{ margin: '12px 0 0', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--divinian-orange)' }}>
                — Victor A. Consunji
              </p>
            </motion.div>

            <p className="als-text" style={{ marginBottom: '32px' }}>
              His educational blueprint remains permanently intact. The <strong style={{ color: 'var(--text-dark)' }}>Victor A. Consunji Scholarship Program</strong> was formally established to carry forward his vision of funding long-term academic excellence for deserving students on the island.
            </p>

            <div style={{ paddingTop: '20px', borderTop: '1px solid var(--border-light)' }}>
              <p className="als-text" style={{ margin: 0, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-body)' }}>
                Semirara Mining & Power Corporation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== RELATED ABOUT PAGES ===== */}
      <section style={{ padding: '80px 0', background: 'var(--bg-neutral)' }}>
        <div className="container">
          <motion.div 
            style={{ textAlign: 'center', marginBottom: '48px' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge" style={{ fontSize: '0.75rem' }}>About DWSSII</span>
            <h2 style={{ marginTop: '12px', fontSize: '1.75rem', fontFamily: 'var(--font-display)' }}>Explore Our Heritage</h2>
          </motion.div>

          <div className="events-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/about/history" className="related-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="event-card" style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-light)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)', color: '#fff', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <div className="day" style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1 }}>HI</div>
                    <div className="month" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Story</div>
                  </div>
                  <div className="event-details">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>History</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.5 }}>
                      The enduring story of DWSSII
                    </p>
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
              <Link to="/about/vm-cv" className="related-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="event-card" style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)', color: '#fff', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <div className="day" style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1 }}>VM</div>
                    <div className="month" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission</div>
                  </div>
                  <div className="event-details">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>V-M-CV</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.5 }}>
                      Vision, Mission & Core Values
                    </p>
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
              <Link to="/about/goals" className="related-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="event-card" style={{ background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid var(--border-light)' }}>
                  <div className="event-date" style={{ background: 'var(--primary-green-dark)', color: '#fff', width: '50px', height: '50px', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <div className="day" style={{ fontSize: '1.2rem', fontWeight: 700, lineHeight: 1 }}>GO</div>
                    <div className="month" style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Goals</div>
                  </div>
                  <div className="event-details">
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontFamily: 'var(--font-display)', color: 'var(--text-dark)' }}>Goals</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', margin: 0, lineHeight: 1.5 }}>
                      Institutional objectives
                    </p>
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