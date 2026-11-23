import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Recollection Images
import reco1 from '../../assets/recollection/reco1.jpeg';
import reco2 from '../../assets/recollection/reco2.jpeg';
import reco3 from '../../assets/recollection/reco3.jpeg';

// First Friday Mass Images
import ff1 from '../../assets/firstfridaymass/first1.jpeg';
import ff2 from '../../assets/firstfridaymass/first2.jpeg';
import ff3 from '../../assets/firstfridaymass/first3.jpeg';
import ff4 from '../../assets/firstfridaymass/first4.jpeg';

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

/* =========================================
   ACTIVITIES DATA
   ========================================= */
const activities = [
  {
    id: 1,
    date: 'November 16, 2026',
    location: 'Our Lady of Guadalupe Parish',
    category: 'Recollection',
    title: 'Opening Hearts, Renewing Faith: DWSSII Pre-Advent Recollection 2026',
    paragraphs: [
      'DWSSII personnel came together for a meaningful day of prayer, reflection, and spiritual renewal during the Pre-Advent Recollection held on November 16, 2026, at Our Lady of Guadalupe Parish.',
      'Anchored on the theme, “Before We Close the Doors, Let Us Open Our Hearts,” the recollection provided an opportunity to pause, examine our lives, reconcile, and prepare our hearts for the coming of Christ.',
      'Our heartfelt gratitude to Rev. John Rey Darryl A. Luces for facilitating the recollection and to Fr. Allan Tanoja for his valuable support in making this spiritual activity possible.',
      'May the lessons and reflections from this gathering inspire every Divinian to embrace the Advent season with renewed faith, grateful hearts, and a deeper commitment to our mission.',
      'Let us open our hearts and make room for Christ.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/19nHmSxvvQ/',
    photos: [
      { src: reco1, caption: 'Pre-Advent Recollection 2026 — Our Lady of Guadalupe Parish' },
      { src: reco2, caption: 'A moment of prayer and reflection' },
      { src: reco3, caption: 'DWSSII personnel in spiritual renewal' }
    ]
  },
  {
    id: 2,
    date: 'November 2026',
    location: 'DWSSII Campus',
    category: 'First Friday Mass',
    title: 'First Friday Mass | November 2026',
    paragraphs: [
      'A morning of faith, gratitude, remembrance, and hope.',
      'The DWSSII community gathered for its First Friday Mass for the month of November, offering prayers of thanksgiving and seeking God\'s continued guidance, blessings, and protection for the entire school community.',
      'In observance of the month dedicated to remembering the faithful departed, we also offered special prayers for our departed loved ones and members of the community who have gone before us.',
      'The celebration likewise included a special blessing for our APAAM athletes, who will represent the school in the upcoming Provincial Competition this first week of December.',
      'May God grant them strength, courage, discipline, and wisdom as they prepare for the competition.',
      'May this celebration of the Holy Eucharist continue to strengthen our faith, unite our community, and inspire us to live with love, compassion, and purpose.',
      'May we continue to live our faith through words and deeds.'
    ],
    hashtag: '#VivereVerbumIntegritate',
    fbLink: 'https://www.facebook.com/share/p/1HYTXMXdvn/',
    photos: [
      { src: ff1, caption: 'First Friday Mass - November 2026' },
      { src: ff2, caption: 'Community gathering in prayer' },
      { src: ff3, caption: 'Special blessing for APAAM athletes' },
      { src: ff4, caption: 'Celebrating the Holy Eucharist' }
    ]
  }
];

/* =========================================
   PHOTO MOSAIC (FB-style preview grid)
   ========================================= */
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

/* =========================================
   LIGHTBOX
   ========================================= */
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

      <button
        className="lit-lb-nav lit-lb-prev"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous photo"
      >&#10094;</button>

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

      <button
        className="lit-lb-nav lit-lb-next"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next photo"
      >&#10095;</button>

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

/* =========================================
   MAIN PAGE
   ========================================= */
export default function LiturgicalActivities() {
  const [lightbox, setLightbox] = useState({ open: false, post: 0, index: 0 });
  const heroRef = useRef(null);

  // Scroll-linked shrink: writes a 0 -> 1 progress value (--p) straight to the
  // hero's CSS. No React state, no re-renders, no class toggling, so no flicker.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      const shrink =
        parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 180;
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
      {/* Hero: shrinks as you scroll; the title stays pinned under the navbar */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="breadcrumb">
              <Link to="/"></Link>
              <span className="separator"></span>
              <span className="current"></span>
            </div>
            <h1>Liturgical Activities</h1>
            <p className="tagline">Nurturing faith and spiritual growth through worship, prayer, and community</p>
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
                {/* PHOTO MOSAIC SIDE */}
                <div className="lit-gallery-col">
                  <PhotoMosaic
                    photos={post.photos}
                    onOpen={(i) => openLightbox(pIndex, i)}
                  />
                  <p className="lit-gallery-note">
                    {post.photos.length} photos — click any photo to view the gallery
                  </p>
                </div>

                {/* CONTENT SIDE */}
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

                  {/* FACEBOOK LINK BUTTON */}
                  {post.fbLink && (
                    <a
                      href={post.fbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lit-fb-link"
                    >
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

      {/* ===== MINISTRY CARDS ===== */}
      <section className="goals-section">
        <div className="container">
          <div className="history-section" style={{ marginBottom: '48px', borderTop: '2px solid var(--primary-green)' }}>
            <h2 style={{ marginBottom: '24px' }}>Our Liturgical Ministries</h2>
            <p>
              These activities deepen our relationship with God and strengthen our bond as a school family.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter">DM</div>
              <h3>Daily Mass</h3>
              <p>Regular celebration of the Holy Eucharist for students, faculty, and staff to nourish their spiritual lives.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">BS</div>
              <h3>Bible Studies</h3>
              <p>Scripture reflection sessions and Bible sharing groups that deepen understanding of God's Word.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">PS</div>
              <h3>Prayer Services</h3>
              <p>Community prayer gatherings, rosary devotions, and liturgical celebrations throughout the school year.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">RR</div>
              <h3>Retreats &amp; Recollections</h3>
              <p>Spiritual retreats for students and staff that provide time for reflection, renewal, and deeper encounter with God.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">FD</div>
              <h3>Feast Day Celebrations</h3>
              <p>Special liturgies celebrating the feast of St. Arnold Janssen, our patron, and other important dates in the liturgical calendar.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">MF</div>
              <h3>Ministry Formation</h3>
              <p>Formation programs for altar servers, lectors, Eucharistic ministers, and other liturgical ministries.</p>
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