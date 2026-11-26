import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Personnel Images
import headImage from "../../assets/director's council/profile/john2.png";
import combinedImage from '../../assets/images/radio.png';

// Front Page Images
import img0 from '../../assets/radiopublication/1.png';
import img1 from '../../assets/radiopublication/0.png';
import img2 from '../../assets/radiopublication/2.png';
import img3 from '../../assets/radiopublication/3.png';

// Radio Images
import radio1 from '../../assets/radiopublication/468398202_8666992376728923_4720618242769725201_n.jpg';
import radio2 from '../../assets/radiopublication/468325353_8666991283395699_7901396554935528533_n.jpg';
import radio3 from '../../assets/radiopublication/468338147_8666991826728978_5372241025071097117_n.jpg';
import radio4 from '../../assets/radiopublication/468347752_8666995886728572_1517978032824618329_n.jpg';

// Photo Stories Images (there is no 10.png)
import img4 from '../../assets/radiopublication/4.png';
import img5 from '../../assets/radiopublication/5.png';
import img6 from '../../assets/radiopublication/6.png';
import img7 from '../../assets/radiopublication/7.png';
import img8 from '../../assets/radiopublication/8.png';
import img9 from '../../assets/radiopublication/9.png';
import img11 from '../../assets/radiopublication/11.png';
import img12 from '../../assets/radiopublication/12.png';

/* ---------- EDIT YOUR TITLES AND HEADLINES HERE ---------- */

// Front Page: 0.png
const coverStory = {
  image: img0,
  category: 'Category',
  headline: '97.7% Passing Rate: 41 Grade 12 TVL Divinians Now TESDA National Certificate Holders!',
  excerpt: 'February 23–25, 2026 – DWSSII proudly celebrates the success of its Grade 12 TVL students who took the TESDA National Assessment at the STCI Assessment Center. Out of 42 candidates, 41 passed, giving the school an outstanding 97.7% passing rate'
};

// Front Page: 1.png to 3.png
const sideStories = [
  { image: img1, category: 'Category', headline: 'CLUSTER 5 DELEGATES SHINE AT APAAM: 39 DIVINANS WVRAA QUALIFIERS', excerpt: 'The Cluster 5 delegation from the Municipality of Caluya competed in the Antique Provincial Athletic Association Meet (APAAM) held from December 1 to 7, 2025 in San Jose de Buenavista, Antique. This provincial meet, one of the most anticipated sporting events in the province, brought together top student-athletes from five clusters who had qualified through their respective municipal competitions.' },
  { image: img2, category: 'Category', headline: 'DWSSII  BSP AND GSP CAMPOREE 2026: RESPOND  AND AID ', excerpt: 'January 30, 2026 – The fun and learning continued at the DWSSII Joint BSP and GSP Camporee 2026, bringing together young scouts for an unforgettable experience of adventure and skill-building.' },
  { image: img3, category: 'Category', headline: 'DWSSII PARTICIPATES BIOSCIENCES CONVENTION', excerpt: 'November 22, 2025- Students from Divine Word School of Semirara Island, Inc. proudly participated in the prestigious Biosciences Convention held at the University of the Philippines Diliman. The event gathered young science enthusiasts from various schools across the country to celebrate innovation, knowledge, and curiosity in the field of life sciences. Representing the school, the participating students joined fellow delegates in a day filled with engaging activities, including academic discussions, scientific lectures, and the highly anticipated Biosciences Quiz Bee. The convention provided an excellent opportunity for students to test their knowledge, exchange ideas, and experience a broader scientific community beyond their local environment. ' }
];

// Radio in Pictures: the four .jpg photos (no text)
const radioPhotos = [
  { image: radio1 },
  { image: radio2 },
  { image: radio3 },
  { image: radio4 }
];

// Photo Stories: 4.png to 12.png
// "size" controls the mosaic tile: 'big', 'tall', or 'normal'
const photoStories = [
  { image: img4, size: 'big', title: 'DWSSII EMPOWERS STUDENT JOURNALISTS AT CALUYA’S FIRST PHOTOJOURNALISM SEMINAR' },
  { image: img5, size: 'tall', title: 'DWSSII INTRODUCES SCUOLA AI LEARNING HUB' },
  { image: img6, size: 'normal', title: 'DWSSII INTRODUCES SCUOLA AI LEARNING HUB' },
  { image: img7, size: 'normal', title: 'WALKING IN FAITH: DWSSSII GRADE 3 PUPILS CELEBRATE THE SACRAMENT OF EUCHARIST' },
  { image: img8, size: 'tall', title: 'PRIDE AND DETERMINATION: DWSSII COMPETES AT THE BATANG PINOY NATIONAL CHAMPIONSHIPS' },
  { image: img9, size: 'big', title: 'PRIDE AND DETERMINATION: DWSSII COMPETES AT THE BATANG PINOY NATIONAL CHAMPIONSHIPS' },
  { image: img11, size: 'normal', title: 'CLUSTER 5 DELEGATES SHINE AT APAAM: 39 DIVINANS WVRAA QUALIFIERS' },
  { image: img12, size: 'normal', title: 'WAVES OF YELLOW: DWSSII COMMUNITY COMMEMORATES 40  YEARS OF EDSA POWEER REVOLUTION' }
];

// Lightbox order: Front Page, Radio, then Photo Stories
const lightboxItems = [
  { image: coverStory.image, title: coverStory.headline, caption: coverStory.excerpt },
  ...sideStories.map((s) => ({ image: s.image, title: s.headline, caption: s.excerpt })),
  ...radioPhotos,
  ...photoStories
];

const RADIO_OFFSET = 1 + sideStories.length;
const STORY_OFFSET = RADIO_OFFSET + radioPhotos.length;

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const reveal = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  variants: fadeInUp
};

export default function RadioPublication() {
  const heroRef = useRef(null);
  const closeRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [combinedRatio, setCombinedRatio] = useState(undefined);
  const isOpen = activeIndex !== null;

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
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  const close = useCallback(() => setActiveIndex(null), []);
  const step = useCallback((dir) => {
    setActiveIndex((i) => (i === null ? i : (i + dir + lightboxItems.length) % lightboxItems.length));
  }, []);

  // Lightbox: keyboard controls, scroll lock, and focus return
  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.({ preventScroll: true });
    };
  }, [isOpen, close, step]);

  const active = isOpen ? lightboxItems[activeIndex] : null;

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>School Publication and School Radio</h1>
            <p className="tagline">Amplifying Wordian Voices Through Radio and Print</p>
          </motion.div>
        </div>
      </section>

      {/* ===== PERSONNEL (Head Stacked, Combined Staff Photo Below) ===== */}
      <section className="rp-office-section">
        <div className="rp-office-grid">
          <motion.div
            className="rp-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rp-person-row rp-pic-stacked">
              <div className="rp-office-img-wrapper rp-head-img-wrapper">
                <img src={headImage} alt="Johnie L. Taday, External Relations Officer" className="rp-office-img" />
              </div>
              <div className="rp-person-info">
                <h4 className="rp-person-name">Johnie L. Taday, LPT</h4>
                <span className="rp-person-title">External Relations Officer</span>
              </div>
            </div>

            <div className="rp-person-row rp-pic-stacked">
              <div
                className="rp-office-img-wrapper rp-combined-img-wrapper"
                style={{ aspectRatio: combinedRatio }}
              >
                <img
                  src={combinedImage}
                  alt="Joseph B. Sulabo and John Reymel Paguia"
                  className="rp-office-img"
                  onLoad={(e) => {
                    const { naturalWidth, naturalHeight } = e.currentTarget;
                    setCombinedRatio(`${naturalWidth} / ${naturalHeight}`);
                  }}
                />
              </div>
              <div className="rp-person-info rp-combined-info">
                <div className="rp-staff-member">
                  <h4 className="rp-person-name">Joseph B. Sulabo</h4>
                  <span className="rp-person-title">SPERDO Technical Staff</span>
                </div>

                <div className="rp-staff-divider"></div>

                <div className="rp-staff-member">
                  <h4 className="rp-person-name">John Reymel Paguia</h4>
                  <span className="rp-person-title">SPERDO Senior Staff</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="rp-office-content-col" {...reveal}>
            <p className="rp-office-text">
              <strong>DWSSII School Publication and School Radio: Communicating the Divinian Mission</strong>
            </p>
            <p className="rp-office-text">
              The <strong>DWSSII School Publication and School Radio</strong> serve as meaningful platforms for student expression, responsible journalism, and community engagement. Through the written word and broadcast communication, they amplify voices, share stories, promote learning, and strengthen the bond within the Divinian community.
            </p>
            <p className="rp-office-text">
              Anchored in the <strong>four SVD characteristic dimensions</strong>, these initiatives promote Biblical values through truthful and meaningful storytelling, advance the missionary spirit by bringing the Divinian identity to the wider community, uphold Justice, Peace, and Integrity of Creation (JPIC) by raising awareness of social and environmental concerns, and strengthen communication through dialogue, collaboration, and the responsible exchange of information.
            </p>
            <div className="rp-office-highlight">
              <p className="rp-office-highlight-text">
                Through these media platforms, DWSSII continues to form learners who are not only effective communicators but also responsible storytellers and mission-oriented individuals who live the values of <strong><em>Vivere Verbum Integritate</em></strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== FRONT PAGE ===== */}
      <section className="rp-front-section">
        <div className="rp-wrap">
          <motion.header className="rp-masthead" {...reveal}>
            <h2 className="rp-masthead-title">The Front Page</h2>
          </motion.header>

          <div className="rp-front-grid">
            <motion.article className="rp-cover" {...reveal}>
              <button type="button" className="rp-photo rp-cover-photo" onClick={() => setActiveIndex(0)} aria-label="View cover story photo">
                <img src={coverStory.image} alt={coverStory.headline} />
              </button>
              <span className="rp-tag">{coverStory.category}</span>
              <h3 className="rp-cover-headline">{coverStory.headline}</h3>
              <p className="rp-cover-excerpt">{coverStory.excerpt}</p>
            </motion.article>

            <div className="rp-side-list">
              {sideStories.map((story, i) => (
                <motion.article key={story.headline + i} className="rp-side-story" {...reveal}>
                  <button type="button" className="rp-photo rp-side-photo" onClick={() => setActiveIndex(1 + i)} aria-label={`View photo for side story ${i + 1}`}>
                    <img src={story.image} alt={story.headline} />
                  </button>
                  <div>
                    <span className="rp-tag">{story.category}</span>
                    <h4 className="rp-side-headline">{story.headline}</h4>
                    <p className="rp-side-excerpt">{story.excerpt}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== RADIO IN PICTURES ===== */}
      <section className="rp-radio-section">
        <div className="rp-wrap">
          <motion.header className="rp-radio-header" {...reveal}>
            <h2 className="rp-radio-title">Radio in Pictures</h2>
            <p className="rp-radio-sub">A look at the radio activities of the Wordian community</p>
          </motion.header>

          <motion.div className="rp-radio-strip" {...reveal}>
            {radioPhotos.map((photo, i) => (
              <button key={i} type="button" className="rp-photo rp-radio-photo" onClick={() => setActiveIndex(RADIO_OFFSET + i)} aria-label={`View radio photo ${i + 1}`}>
                <img src={photo.image} alt={`Radio ${i + 1}`} loading="lazy" />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== PHOTO STORIES ===== */}
      <section className="rp-stories-section">
        <div className="rp-wrap">
          <motion.header className="rp-stories-header" {...reveal}>
            <h2 className="rp-stories-title">Photo Stories</h2>
            <span className="rp-stories-note">Moments in pictures</span>
          </motion.header>

          <div className="rp-mosaic">
            {photoStories.map((photo, i) => (
              <motion.button
                key={photo.title + i}
                type="button"
                className={`rp-photo rp-tile rp-tile-${photo.size}`}
                onClick={() => setActiveIndex(STORY_OFFSET + i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <img src={photo.image} alt={photo.title} loading="lazy" />
                <span className="rp-tile-caption">
                  <strong>{photo.title}</strong>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="rp-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button ref={closeRef} type="button" className="rp-lb-btn rp-lb-close" onClick={close} aria-label="Close">×</button>
            <button type="button" className="rp-lb-btn rp-lb-prev" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo">‹</button>
            <figure className="rp-lb-figure" onClick={(e) => e.stopPropagation()}>
              <img src={active.image} alt={active.title || 'Radio photo'} />
              <figcaption>
                {active.title && <strong>{active.title}</strong>}
                {active.caption && <p>{active.caption}</p>}
                <span>{activeIndex + 1} / {lightboxItems.length}</span>
              </figcaption>
            </figure>
            <button type="button" className="rp-lb-btn rp-lb-next" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo">›</button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}