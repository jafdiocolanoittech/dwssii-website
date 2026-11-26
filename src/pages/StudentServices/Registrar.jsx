import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import reg1Image from '../../assets/images/reg1.jpg';
import reg2Image from '../../assets/images/reg2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Registrar() {
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

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Registrar's Office</h1>
            <p className="tagline">Records and Enrollment</p>
          </motion.div>
        </div>
      </section>

      {/* ===== REGISTRAR PERSONNEL (ZIGZAG - 2 Personnel) ===== */}
      <section className="registrar-office-section">
        <div className="registrar-office-grid">
          <motion.div
            className="registrar-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Person 1: Registrar (Left) */}
            <div className="registrar-person-row registrar-pic-left">
              <div className="registrar-office-img-wrapper">
                <img src={reg1Image} alt="Babylyn C. Tabujara - Registrar" className="registrar-office-img" />
              </div>
              <div className="registrar-person-info">
                <h4 className="registrar-person-name">Babylyn C. Tabujara, LPT</h4>
                <span className="registrar-person-title">Registrar</span>
              </div>
            </div>

            {/* Person 2: Registrar Staff (Right) */}
            <div className="registrar-person-row registrar-pic-right">
              <div className="registrar-office-img-wrapper">
                <img src={reg2Image} alt="Jonarose L. Eguia - Registrar Staff" className="registrar-office-img" />
              </div>
              <div className="registrar-person-info">
                <h4 className="registrar-person-name">Jonarose L. Eguia, LPT, MSIT</h4>
                <span className="registrar-person-title">Registrar Staff</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="registrar-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="registrar-office-text">
              The <strong>Registrar's Office of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> serves as the official custodian of all student academic records. We are committed to providing efficient, accurate, and secure services in managing enrollment, transcripts, certifications, and other academic documents essential to every learner's educational journey.
            </p>
            <p className="registrar-office-text">
              Under the leadership of Mrs. Babylyn C. Tabujara, LPT, and supported by Mrs. Jonarose L. Eguia, LPT, MSIT, our office ensures that every student's records are handled with integrity, confidentiality, and professionalism. We work closely with students, parents, and faculty to streamline processes and make academic services accessible and hassle-free.
            </p>
            <div className="registrar-office-highlight">
              <p className="registrar-office-highlight-text">
                To our students and parents: your records are in good hands. We are here to assist you with clarity, care, and commitment — because every record tells a story of growth, achievement, and Wordian excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== REGISTRAR SERVICES SECTION ===== */}
      <section className="registrar-activities-section">
        <div className="container">
          <motion.article
            className="news-item lit-article reverse"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInRight}
          >
            {/* CONTENT SIDE (Left because of .reverse) */}
            <div className="news-content">
              <div className="lit-meta">
                <span className="lit-category">Student Services</span>
                <span className="lit-dot" aria-hidden="true">•</span>
                <span className="lit-date">School Year 2026-2027</span>
              </div>

              <h3 className="news-title lit-title">Efficient and Reliable Academic Record Management</h3>
              
              <p className="news-description lit-paragraph">
                The Registrar's Office at Divine Word School of Semirara Island, Inc. (DWSSII) continues to uphold excellence in managing student records, enrollment processes, and academic documentation. Our team ensures that every transaction is handled with accuracy, confidentiality, and timely service.
              </p>
              <p className="news-description lit-paragraph">
                From enrollment to the issuance of transcripts, certifications, and other academic credentials, we remain dedicated to supporting the academic success of every Wordian. Through organized systems and a student-centered approach, we make every process smooth, transparent, and dependable.
              </p>

              <span className="lit-hashtag">#VivereVerbumIntegritate #ServiceWithIntegrity</span>
            </div>

            {/* PHOTO SIDE (Right because of .reverse) */}
            <div className="lit-gallery-col">
              <img 
                src={reg1Image} 
                alt="DWSSII Registrar's Office" 
                className="registrar-activity-img-plain" 
              />
              <p className="lit-gallery-note" style={{ marginTop: '16px', textAlign: 'center' }}>
                "Serving with integrity, preserving every record with care."
              </p>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}