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

// Replace with actual DWSSII awards photos and details
const achievements = [
  {
    id: 1,
    year: '2023',
    title: 'PAASCU Level II Accreditation',
    body: 'Philippine Accrediting Association of Schools, Colleges and Universities',
    description: 'Grade School and High School departments officially recognized for exceeding standards in curriculum, faculty qualifications, and physical facilities.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    year: '2022',
    title: 'Division School of the Year',
    body: 'Department of Education (DepEd)',
    description: 'Recognized for outstanding performance in academic excellence, innovation in teaching, and active community engagement within the division.',
    image: 'https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    year: '2024',
    title: 'Best Research Paper in Basic Education',
    body: 'Regional Science and Technology Fair',
    description: 'Our senior high school students secured the top spot with their innovative research on sustainable agricultural practices in island communities.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
  }
];

export default function AwardsAccreditations() {
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
            <h1>Awards & Accreditations</h1>
            <p className="tagline">A Legacy of Excellence and Recognition</p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Achievements Layout */}
      <section className="awards-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {achievements.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={item.id} 
                className={`news-item ${isEven ? '' : 'reverse'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="news-image-wrapper">
                  <img src={item.image} alt={item.title} className="news-image" />
                  <div className="news-year-badge">{item.year}</div>
                </div>
                <div className="news-content">
                  <span className="news-body">{item.body}</span>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-description">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}