import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Personnel Images
import agtcHeadImage from "../../assets/director's council/profile/agtc2.png";
import agtcCombinedImage from '../../assets/images/tc.png'; // Combined photo for both in-charges

// All 13 AGTC Activity/Service Images (100.png shows first)
import agtcPic1 from '../../assets/agtc/100.png';
import agtcPic2 from '../../assets/agtc/0.png';
import agtcPic3 from '../../assets/agtc/1.png';
import agtcPic4 from '../../assets/agtc/2.png';
import agtcPic5 from '../../assets/agtc/3.png';
import agtcPic6 from '../../assets/agtc/4.png';
import agtcPic7 from '../../assets/agtc/5.png';
import agtcPic8 from '../../assets/agtc/6.png';
import agtcPic9 from '../../assets/agtc/7.png';
import agtcPic10 from '../../assets/agtc/8.png';
import agtcPic11 from '../../assets/agtc/9.png';
import agtcPic12 from '../../assets/agtc/11.png';
import agtcPic13 from '../../assets/agtc/12.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function AGTC() {
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

  // Split pics: first 3 beside content, remaining 10 in gallery grid
  const sidePics = [agtcPic1, agtcPic2, agtcPic3];
  const galleryPics = [agtcPic4, agtcPic5, agtcPic6, agtcPic7, agtcPic8, agtcPic9, agtcPic10, agtcPic11, agtcPic12, agtcPic13];

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Admissions, Guidance, and Testing Center</h1>
            <p className="tagline">Empowering Learners Through Quality Training and Assessment</p>
          </motion.div>
        </div>
      </section>

      {/* ===== AGTC PERSONNEL (Head Stacked, Combined Staff Photo Below) ===== */}
      <section className="agtc-office-section">
        <div className="agtc-office-grid">
          <motion.div
            className="agtc-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* HEAD: AGTC & TEP Coordinator (Stacked - Bigger Photo) */}
            <div className="agtc-person-row agtc-pic-stacked">
              <div className="agtc-office-img-wrapper agtc-head-img-wrapper">
                <img src={agtcHeadImage} alt="AGTC & TEP Coordinator" className="agtc-office-img" />
              </div>
              <div className="agtc-person-info">
                <h4 className="agtc-person-name">Marilyn A. Lim, MAEd</h4>
                <span className="agtc-person-title">AGTC & TEP Coordinator</span>
              </div>
            </div>

            {/* COMBINED STAFF PHOTO (Single Frame, Names Side-by-Side Below) */}
            <div className="agtc-person-row agtc-pic-stacked">
              <div className="agtc-office-img-wrapper agtc-combined-img-wrapper">
                <img src={agtcCombinedImage} alt="AGTC In-Charges" className="agtc-office-img" />
              </div>
              <div className="agtc-person-info agtc-combined-info">
                <div className="agtc-staff-member">
                  <h4 className="agtc-person-name">Frederick E. Orca</h4>
                  <span className="agtc-person-title">Admissions In-Charge</span>
                </div>
                
                <div className="agtc-staff-divider"></div>
                
                <div className="agtc-staff-member">
                  <h4 className="agtc-person-name">James M. Benegildo, RPm</h4>
                  <span className="agtc-person-title">Testing In-Charge</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="agtc-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="agtc-office-text">
              The <strong>Admissions, Guidance, and Testing Center (AGTC) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> serves as the hub for academic excellence, skills development, and comprehensive assessment services. We are committed to providing quality training programs, standardized testing, and efficient admissions processes that support the educational journey of every learner.
            </p>
            <p className="agtc-office-text">
              Under the leadership of our <strong>AGTC & TEP Coordinator</strong>, the center oversees a wide range of academic services including entrance examinations, placement tests, skills assessments, and specialized training programs. We work closely with students, parents, and faculty to ensure that every assessment is fair, accurate, and aligned with the school's academic standards.
            </p>
            <p className="agtc-office-text">
              <strong>Mr. Frederick E. Orca</strong>, our Admissions In-Charge, handles the enrollment and admissions process with care and efficiency. He assists prospective students and parents in navigating the application requirements, ensuring a smooth and welcoming experience from inquiry to enrollment.
            </p>
            <p className="agtc-office-text">
              <strong>Mr. James M. Benegildo, RPm</strong>, our Testing In-Charge, manages all examination processes, from test preparation and administration to results analysis and reporting. He ensures that every testing activity is conducted with integrity, confidentiality, and professionalism.
            </p>
            <div className="agtc-office-highlight">
              <p className="agtc-office-highlight-text">
                To our students: your potential is limitless, and we are here to help you discover it. Together, we build a foundation of excellence, integrity, and lifelong learning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== AGTC SERVICES SECTION (Content Left, 3 Pics Right - Aligned) ===== */}
      <section className="agtc-services-section">
        <div className="agtc-services-grid">
          {/* LEFT SIDE: Content */}
          <motion.div
            className="agtc-services-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label">Our Services</span>
            <h2 className="agtc-section-title">Comprehensive Academic & Training Services</h2>
            <p className="agtc-services-text">
              The AGTC offers a wide array of services designed to support the academic and professional growth of our students. From standardized testing to specialized skills training, we ensure that every learner is equipped to succeed.
            </p>
            <ul className="agtc-services-list">
              <li><strong>Entrance & Placement Examinations:</strong> Standardized testing to accurately assess student readiness and appropriate academic placement.</li>
              <li><strong>Skills Assessment & Development:</strong> Targeted programs to identify and enhance specific academic and vocational skills.</li>
              <li><strong>Admissions Assistance:</strong> Streamlined and supportive guidance for prospective students and their families throughout the enrollment process.</li>
              <li><strong>Specialized Training Programs:</strong> Workshops and seminars aimed at holistic student development and career readiness.</li>
              <li><strong>Records & Documentation:</strong> Efficient management of student records, certifications, and other academic credentials.</li>
              <li><strong>Community Engagement:</strong> Programs that foster collaboration, leadership, and service among the Wordian community.</li>
            </ul>
            <div className="agtc-services-highlight">
              <p className="agtc-services-highlight-text">
                At AGTC, we believe that every assessment is an opportunity for growth, and every training is a step toward excellence. We are committed to empowering every learner to reach their full potential.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3 Pics Stacked */}
          <motion.div
            className="agtc-services-images"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sidePics.map((img, index) => (
              <motion.div
                key={index}
                className="agtc-service-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`AGTC Service ${index + 1}`} className="agtc-service-img" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== AGTC GALLERY SECTION (10 Pics, 2 per row) ===== */}
      <section className="agtc-gallery-section">
        <div className="container">
          <div className="agtc-gallery-grid">
            {galleryPics.map((img, index) => (
              <motion.div
                key={index}
                className="agtc-gallery-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`AGTC Activity ${index + 1}`} className="agtc-gallery-img" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}