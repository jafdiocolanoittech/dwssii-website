import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

// Replace these with actual DWSSII seminar photos and details
const seminars = [
  {
    id: 1,
    date: 'October 15-17, 2024',
    title: 'National Educators Summit 2024',
    location: 'Manila, Philippines',
    description: 'Faculty members attended the annual summit focusing on innovative teaching methodologies, 21st-century classroom management, and the integration of technology in basic education.',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800' 
  },
  {
    id: 2,
    date: 'August 5-6, 2024',
    title: 'SVD Educational Leadership Conference',
    location: 'Tagaytay City',
    description: 'Administrative staff and department heads participated in strategic planning and mission-aligned leadership workshops to further strengthen the Divine Word educational framework.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800' 
  },
  {
    id: 3,
    date: 'March 12, 2024',
    title: 'Digital Transformation in Basic Education',
    location: 'DWSSII Campus',
    description: 'A comprehensive, hands-on training for all teaching personnel on integrating AI tools, digital assessment platforms, and interactive media into the daily curriculum.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800' 
  }
];

export default function SeminarsConventions() {
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
            <h1>Seminars & Conventions</h1>
            <p className="tagline">Continuous Learning and Professional Development</p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Seminars Layout */}
      <section className="seminars-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {seminars.map((seminar, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={seminar.id} 
                className={`news-item ${isEven ? '' : 'reverse'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="news-image-wrapper">
                  <img src={seminar.image} alt={seminar.title} className="news-image" />
                  <div className="news-date-badge">{seminar.date}</div>
                </div>
                <div className="news-content">
                  <span className="news-location">{seminar.location}</span>
                  <h3 className="news-title">{seminar.title}</h3>
                  <p className="news-description">{seminar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}