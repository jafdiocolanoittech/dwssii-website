import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Personnel Images
import cmoHeadImage from "../../assets/director's council/profile/minister2.png";
import cmoCombinedImage from '../../assets/images/cmo.png'; // Combined photo for staff

// Gallery / Activity Images (21 paths provided)
import cmoGal1 from '../../assets/cmo/860072330_122125337751436524_1670473076151308058_n.jpg';
import cmoGal2 from '../../assets/cmo/862806353_1438199004952061_80201.jfif';
import cmoGal3 from '../../assets/cmo/862934061_1114912721365844_47445.jfif';
import cmoGal4 from '../../assets/cmo/865140421_1494432292529948_73849.jfif';
import cmoGal5 from '../../assets/cmo/867177190_2171025567148650_41046.jfif';
import cmoGal6 from '../../assets/cmo/867595287_1987089191971903_38240.jfif';
import cmoGal7 from '../../assets/cmo/869774023_2237012363510252_43800.jfif';
import cmoGal8 from '../../assets/cmo/871558545_2073300963318723_8146062495797813638_n.jfif';
import cmoGal9 from '../../assets/cmo/873396373_1599305071445731_37264.jfif';
import cmoGal10 from '../../assets/cmo/875308528_1549593740258727_15250.jfif';
import cmoGal11 from '../../assets/cmo/875352220_2553771278790762_83186.jfif';
import cmoGal12 from '../../assets/cmo/876483482_4575085402750639_22938.jfif';
import cmoGal13 from '../../assets/cmo/876745055_1595796958510166_22423.jfif';
import cmoGal14 from '../../assets/cmo/799676861_1018977481189842_4733125705292142924_n.jfif';
import cmoGal15 from '../../assets/cmo/800756457_1061504186592777_7272105251622549452_n.jfif';
import cmoGal16 from '../../assets/cmo/800862883_2223222745741055_6852771899107707439_n.jfif';
import cmoGal17 from '../../assets/cmo/800965818_1426126952770415_3822622411572952300_n.jfif';
import cmoGal18 from '../../assets/cmo/801056426_4674982519401487_2762077121327435171_n.jfif';
import cmoGal19 from '../../assets/cmo/801396616_1953264288643202_1515521581558223859_n.jfif';
import cmoGal20 from '../../assets/cmo/825336389_122119223031436524_6768304099511734958_n.jpg';
import cmoGal21 from '../../assets/cmo/859676493_122125338201436524_557144986367578962_n.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function CMO() {
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

  // First 3 images for the Services section, remaining 18 for the Gallery grid
  const sidePics = [cmoGal1, cmoGal2, cmoGal3];
  const galleryPics = [
    cmoGal4, cmoGal5, cmoGal6, cmoGal7, cmoGal8, cmoGal9, 
    cmoGal10, cmoGal11, cmoGal12, cmoGal13, cmoGal14, cmoGal15, 
    cmoGal16, cmoGal17, cmoGal18, cmoGal19, cmoGal20, cmoGal21
  ];

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Campus Ministry Office</h1>
            <p className="tagline">Nurturing the Spiritual Life of the Campus Community</p>
          </motion.div>
        </div>
      </section>

      {/* ===== CMO PERSONNEL (Head Stacked, Combined Staff Photo Below) ===== */}
      <section className="cmo-office-section">
        <div className="cmo-office-grid">
          <motion.div
            className="cmo-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* HEAD: Fr. Jerome A. Ormita, SVD, LPT (Stacked - Bigger Photo) */}
            <div className="cmo-person-row cmo-pic-stacked">
              <div className="cmo-office-img-wrapper cmo-head-img-wrapper">
                <img src={cmoHeadImage} alt="Fr. Jerome A. Ormita, SVD, LPT" className="cmo-office-img" />
              </div>
              <div className="cmo-person-info">
                <h4 className="cmo-person-name">Fr. Jerome A. Ormita, SVD, LPT</h4>
                <span className="cmo-person-title">Spiritual Enrichment and Development Officer</span>
              </div>
            </div>

            {/* COMBINED STAFF PHOTO (Single Frame, Names Side-by-Side Below) */}
            <div className="cmo-person-row cmo-pic-stacked">
              <div className="cmo-office-img-wrapper cmo-combined-img-wrapper">
                <img src={cmoCombinedImage} alt="CMO Staff" className="cmo-office-img" />
              </div>
              <div className="cmo-person-info cmo-combined-info">
                <div className="cmo-staff-member">
                  <h4 className="cmo-person-name">Glorifelle B. Laredo, LPT</h4>
                  <span className="cmo-person-title">Spiritual Formation Coordinator</span>
                </div>
                
                <div className="cmo-staff-divider"></div>
                
                <div className="cmo-staff-member">
                  <h4 className="cmo-person-name">Leonell E. Patchicoy</h4>
                  <span className="cmo-person-title">CMO Staff</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="cmo-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="cmo-office-text">
              The <strong>Campus Ministry Office (CMO) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> is the heart of the school's spiritual life. Guided by the charism of the Society of the Divine Word (SVD), we accompany students, faculty, and staff in their journey of faith, prayer, and service — forming a community that lives the Word and bears witness to the Gospel in every aspect of school life.
            </p>
            <p className="cmo-office-text">
              Under the pastoral leadership of <strong>Fr. Jerome A. Ormita, SVD, LPT</strong>, our Spiritual Enrichment and Development Officer, the office oversees liturgical celebrations, retreats, recollections, and values formation programs. He provides spiritual guidance, leads the community in prayer, and ensures that the Wordian mission of evangelization and service remains at the core of everything we do.
            </p>
            <p className="cmo-office-text">
              Supported by <strong>Mrs. Glorifelle B. Laredo, LPT</strong> as Spiritual Formation Coordinator and <strong>Mr. Leonell E. Patchicoy</strong> as CMO Staff, we ensure that every activity is meaningful, well-prepared, and rooted in the Wordian spirit. Together, we organize programs that nurture the spiritual, moral, and social development of every learner.
            </p>
            <div className="cmo-office-highlight">
              <p className="cmo-office-highlight-text">
                To our students: may your faith be the light that guides your every decision. To our families and community partners: thank you for walking with us in forming hearts that love God, neighbor, and creation. Together, we build a community where the Word is lived, shared, and celebrated.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CMO SERVICES SECTION (Content Left, 3 Pics Right - Aligned) ===== */}
      <section className="cmo-services-section">
        <div className="cmo-services-grid">
          {/* LEFT SIDE: Content */}
          <motion.div
            className="cmo-services-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label">Our Services</span>
            <h2 className="cmo-section-title">Spiritual Formation and Ministry Services</h2>
            <p className="cmo-services-text">
              The Campus Ministry Office offers a comprehensive suite of programs designed to nurture the spiritual, moral, and social development of the DWSSII community, anchoring our learners in faith and service.
            </p>
            <ul className="cmo-services-list">
              <li><strong>Liturgical Celebrations:</strong> Regular Masses, prayer services, and sacramental preparations that anchor the school community in faith.</li>
              <li><strong>Retreats and Recollections:</strong> Guided spiritual exercises for students and staff to foster personal reflection, renewal, and a deeper relationship with God.</li>
              <li><strong>Values Formation Programs:</strong> Workshops and seminars aimed at integrating Wordian values of integrity, compassion, and service into daily life.</li>
              <li><strong>Community Outreach and Advocacy:</strong> Organized volunteerism and social action initiatives that empower students to serve marginalized communities.</li>
              <li><strong>Student Ministry and Leadership:</strong> Training and support for student ministers, altar servers, and campus ministry volunteers.</li>
            </ul>
            <div className="cmo-services-highlight">
              <p className="cmo-services-highlight-text">
                At CMO, we believe that true education forms the whole person—mind, heart, and spirit. We are committed to accompanying every Wordian in their journey of faith and service.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3 Pics Stacked */}
          <motion.div
            className="cmo-services-images"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sidePics.map((img, index) => (
              <motion.div
                key={index}
                className="cmo-service-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`CMO Service ${index + 1}`} className="cmo-service-img" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CMO GALLERY SECTION (18 Pics, 2 per row) ===== */}
      <section className="cmo-gallery-section">
        <div className="container">
          <div className="cmo-gallery-grid">
            {galleryPics.map((img, index) => (
              <motion.div
                key={index}
                className="cmo-gallery-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <img src={img} alt={`CMO Activity ${index + 1}`} className="cmo-gallery-img" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 