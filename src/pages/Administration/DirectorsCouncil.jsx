import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Import profile images from the profile/ subfolder
import schoolDirectorImg from '../../assets/director\'s council/profile/schooldirector2.png';
import qaImg from '../../assets/director\'s council/profile/jo.jpg';
import rpdoImg from '../../assets/director\'s council/profile/rpdo2.png';
import ministerImg from '../../assets/director\'s council/profile/minister2.png';
import principalImg from '../../assets/director\'s council/profile/principal2.png';
import asstImg from '../../assets/director\'s council/profile/asst2.png';
import johnImg from '../../assets/director\'s council/profile/john2.png';
import agtcImg from '../../assets/director\'s council/profile/agtc2.png';
import sssoImg from '../../assets/director\'s council/profile/ssso2.png';
import secretaryImg from '../../assets/director\'s council/profile/joan.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const CouncilMember = ({ name, title, photo, link }) => (
  <motion.div 
    className="council-item"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
    
  >
    <Link to={link} className="council-link">
      <div className="council-photo-frame">
        <img src={photo} alt={name} className="council-photo" />
      </div>
      <h3 className="council-name">{name}</h3>
      <p className="council-title">{title}</p>
    </Link>
  </motion.div>
);

export default function DirectorsCouncil() {
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
            <h1>Director's Council</h1>
            <p className="tagline">Administrative Leadership</p>
          </motion.div>
        </div>
      </section>

      <section className="council-section">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge"></span>
            <h2 className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              Director's Council
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              The advisory body supporting the School Director.
            </p>
          </motion.header>

          <div className="council-tree">
            {/* Row 1: School Director */}
            <div className="council-row">
              <CouncilMember 
                name="Fr. Rico Glenn C. Deuna, SVD, DMD, MAPM, MHA" 
                title="School Director" 
                photo={schoolDirectorImg} 
                link="/administration/school-director" 
              />
            </div>

            {/* Row 2: QA and RPDO */}
            <div className="council-row">
              <CouncilMember 
                name="Josephine P. Romero, MAEdAd" 
                title="Quality Assurance Officer" 
                photo={qaImg} 
                link="/administration/quality-assurance" 
              />
              <CouncilMember 
                name="Doreen E. Morgado, MAEd" 
                title="RPD Officer" 
                photo={rpdoImg} 
                link="/administration/rpdo" 
              />
            </div>

            {/* Row 3: Principal, Minister (CENTER), Asst. Principal */}
            <div className="council-row">
              <CouncilMember 
                name="Grace A. Arguelles, MAEd" 
                title="Principal" 
                photo={principalImg} 
                link="/administration/principal" 
              />
              <CouncilMember 
                name="Fr. Jerome A. Ormita, SVD, LPT" 
                title="Spiritual Enrinchment & Development Officer" 
                photo={ministerImg} 
                link="/administration/minister" 
              />
              <CouncilMember 
                name="Joy P. Sanico, MAEd" 
                title="Asst. Principal" 
                photo={asstImg} 
                link="/administration/asst-principal" 
              />
            </div>

            {/* Row 4: John, AGTC, SSSO, Secretary */}
            <div className="council-row council-row-wide">
              <CouncilMember 
                name="Johnie L. Taday, LPT" 
                title="External Relations Officer" 
                photo={johnImg} 
                link="/administration/john" 
              />
              <CouncilMember 
                name="Marilyn A. Lim, MAEd" 
                title="AGTC & TEP Coordinator" 
                photo={agtcImg} 
                link="/administration/agtc" 
              />
              <CouncilMember 
                name="Sarah Jane R. Canabo, MAEd" 
                title="Student Services Officer" 
                photo={sssoImg} 
                link="/administration/ssso" 
              />
              <CouncilMember 
                name="Joan Frances M. Anobong" 
                title="Director's Secretary" 
                photo={secretaryImg} 
                link="/administration/secretary" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}