import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Championing Education Images
import champ1 from '../../assets/championing/champ1.jpeg';
import champ2 from '../../assets/championing/champ2.jpeg';
import champ3 from '../../assets/championing/champ3.jpeg';
import champ4 from '../../assets/championing/champ4.jpeg';
import champ5 from '../../assets/championing/champ5.jpeg';
import champ6 from '../../assets/championing/champ6.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const activities = [
  {
    id: 1,
    date: 'November 2026',
    location: 'Office of the Punong Barangay, Semirara',
    category: 'Community Relations',
    title: 'Championing Education Through Leadership and Generosity',
    paragraphs: [
      'The DWSSII administrators paid a courtesy visit to the Office of the Punong Barangay of Semirara, Hon. Catherine Lim, RN, to present a Certificate of Appreciation in recognition of the Barangay Council\'s invaluable contributions to the institution.',
      'The administrators likewise conveyed their heartfelt appreciation to Kap Kikai for her personal financial assistance in support of the upcoming Administrators\' Strategic Planning Activity, a generous gesture that underscores her continued commitment to strengthening educational leadership and institutional development.',
      'The visit likewise provided an opportunity to proudly introduce DWSSII\'s student achievers who recently brought honor to Semirara through their outstanding performance at the International Robotics Competition in Bangkok, Thailand.',
      'DWSSII remains grateful for leaders whose generosity and commitment help create meaningful opportunities for education and excellence.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1FirqDPuHw/',
    photos: [
      { src: champ1, caption: 'Courtesy visit to Hon. Catherine Lim, RN' },
      { src: champ2, caption: 'Presentation of the Certificate of Appreciation' },
      { src: champ3, caption: 'DWSSII administrators with Kap Kikai' },
      { src: champ4, caption: 'Introducing the student achievers' },
      { src: champ5, caption: 'Recognizing the International Robotics Competition winners' },
      { src: champ6, caption: 'A moment of gratitude and unity' }
    ]
  }
];

function PhotoMosaic({ photos, onOpen }) {
  const preview = photos.slice(0, 3);
  const extra = photos.length - preview.length;

  return (
    <div className={`lit-mosaic lit-mosaic-${preview.length}`}>
      {preview.map((photo, i) => (
        <button
          key={i}
          type="button"
          className="lit-mosaic-item"
          onClick={() => onOpen(i)}
          aria-label={`View photo ${i + 1} of ${photos.length}`}
        >
          <img src={photo.src} alt={photo.caption} loading="lazy" decoding="async" />
          {i === preview.length - 1 && extra > 0 && (
            <span className="lit-mosaic-more">+{extra}</span>
          )}
          <span className="lit-mosaic-hint" aria-hidden="true">View</span>
        </button>
      ))}
    </div>
  );
}

function Lightbox({ photos, index, onClose, onNext, onPrev }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onNext, onPrev]);

  const photo = photos[index];

  return (
    <motion.div
      className="lit-lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
    >
      <button className="lit-lb-close" onClick={onClose} aria-label="Close gallery">&times;</button>

      <button className="lit-lb-nav lit-lb-prev" onClick={(e) => { e.stopPropagation(); onPrev(); }} aria-label="Previous photo">&#10094;</button>

      <motion.figure
        className="lit-lb-figure"
        key={index}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={photo.src} alt={photo.caption} className="lit-lb-image" />
        <figcaption className="lit-lb-caption">
          <span className="lit-lb-counter">{index + 1} / {photos.length}</span>
          {photo.caption}
        </figcaption>
      </motion.figure>

      <button className="lit-lb-nav lit-lb-next" onClick={(e) => { e.stopPropagation(); onNext(); }} aria-label="Next photo">&#10095;</button>

      <div className="lit-lb-thumbs" onClick={(e) => e.stopPropagation()}>
        {photos.map((p, i) => (
          <button
            key={i}
            className={`lit-lb-thumb ${i === index ? 'active' : ''}`}
            onClick={() => onNext(i)}
            aria-label={`Go to photo ${i + 1}`}
          >
            <img src={p.src} alt="" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function InstitutionalActivities() {
  const [lightbox, setLightbox] = useState({ open: false, post: 0, index: 0 });
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

  const openLightbox = (post, index) => setLightbox({ open: true, post, index });
  const closeLightbox = () => setLightbox((s) => ({ ...s, open: false }));

  const currentPhotos = activities[lightbox.post]?.photos || [];

  const nextPhoto = useCallback((direct) => {
    setLightbox((s) => {
      const total = activities[s.post].photos.length;
      const idx = typeof direct === 'number' ? direct : (s.index + 1) % total;
      return { ...s, index: idx };
    });
  }, []);

  const prevPhoto = useCallback(() => {
    setLightbox((s) => {
      const total = activities[s.post].photos.length;
      return { ...s, index: (s.index - 1 + total) % total };
    });
  }, []);

  return (
    <main className="subpage">
      {/* Hero Subpage */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Institutional Activities</h1>
            <p className="tagline">Celebrating excellence, unity, and growth through our school programs and events</p>
          </motion.div>
        </div>
      </section>

      {/* ===== NEWS / ARTICLE FEED WITH MULTI-PHOTO GALLERIES ===== */}
      <section className="seminars-section" style={{ padding: '80px 0' }}>
        <div className="container">
          {activities.map((post, pIndex) => {
            const isEven = pIndex % 2 === 0;
            return (
              <motion.article
                key={post.id}
                className={`news-item lit-article ${isEven ? '' : 'reverse'}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={isEven ? fadeInLeft : fadeInRight}
              >
                <div className="lit-gallery-col">
                  <PhotoMosaic photos={post.photos} onOpen={(i) => openLightbox(pIndex, i)} />
                  <p className="lit-gallery-note">
                    {post.photos.length} photos — click any photo to view the gallery
                  </p>
                </div>

                <div className="news-content">
                  <div className="lit-meta">
                    <span className="lit-category">{post.category}</span>
                    <span className="lit-dot" aria-hidden="true">•</span>
                    <span className="lit-date">{post.date}</span>
                  </div>

                  <h3 className="news-title lit-title">{post.title}</h3>
                  <span className="news-location">{post.location}</span>

                  {post.paragraphs.map((p, i) => (
                    <p key={i} className="news-description lit-paragraph">{p}</p>
                  ))}

                  <span className="lit-hashtag">{post.hashtag}</span>

                  {post.fbLink && (
                    <a href={post.fbLink} target="_blank" rel="noopener noreferrer" className="lit-fb-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{ marginRight: '8px' }}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      View Full Post on Facebook
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ===== ACTIVITY CARDS ===== */}
      <section className="goals-section">
        <div className="container">
          <div className="history-section" style={{ marginBottom: '48px', borderTop: '2px solid var(--primary-green)' }}>
            <h2 style={{ marginBottom: '24px' }}>Our Activities</h2>
            {/* This <p> will automatically inherit the global 0.85rem font size */}
            <p>
              Divine Word School of Semirara Island Inc. is committed to holistic development through various institutional activities that foster academic excellence, spiritual growth, and community engagement.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter">AC</div>
              <h3>Academic Competitions</h3>
              <p>Quiz bees, science fairs, and academic challenges that showcase student excellence and intellectual growth.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">CO</div>
              <h3>Community Outreach</h3>
              <p>Service projects, mission trips, and social responsibility programs that extend our care beyond the campus.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">CU</div>
              <h3>Cultural Events</h3>
              <p>Foundation Day, Buwan ng Wika, and cultural showcases that celebrate our heritage and creativity.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">SP</div>
              <h3>Sports & Athletics</h3>
              <p>Intramurals, sports festivals, and athletic competitions that promote teamwork and physical wellness.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">SI</div>
              <h3>Science & Innovation</h3>
              <p>Research symposiums, innovation fairs, and STEM activities that encourage critical thinking and discovery.</p>
            </div>

            <div className="value-card">
              <div className="value-letter">EN</div>
              <h3>Environmental Programs</h3>
              <p>Tree planting, clean-up drives, and sustainability initiatives that promote environmental stewardship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox.open && (
          <Lightbox
            photos={currentPhotos}
            index={lightbox.index}
            onClose={closeLightbox}
            onNext={nextPhoto}
            onPrev={prevPhoto}
          />
        )}
      </AnimatePresence>
    </main>
  );
}