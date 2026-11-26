import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import it1Image from '../../assets/images/it1.jpg';
import it2Image from '../../assets/images/it2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const IT_SERVICES = [
  { num: '01', title: 'Learning Management System', desc: 'Access to digital classrooms, assignments, and grades through our integrated LMS platform.' },
  { num: '02', title: 'Student Information Portal', desc: 'Secure online access for enrollment, academic records, and financial statements.' },
  { num: '03', title: 'ICT Laboratories', desc: 'Modern, air-conditioned computer labs equipped with high-speed internet and updated software.' },
  { num: '04', title: 'IT Helpdesk Support', desc: 'Dedicated technical assistance for students, faculty, and staff for hardware or software issues.' },
];

const IT_POLICIES = [
  { title: 'Acceptable Use Policy (AUP)', desc: 'Guidelines ensuring responsible, ethical, and productive use of school network and devices.' },
  { title: 'Data Privacy & Security', desc: 'Our commitment to protecting personal information in compliance with the Data Privacy Act of 2012.' },
];

// One icon per service, in the same order as IT_SERVICES
const IT_ICONS = [
  <path key="lms" d="M2 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H2zM22 4h-7a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H22z" />,
  <path key="portal" d="M3 5h18v14H3zM9 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 16c.5-2 5.5-2 6 0M15 10h3M15 14h3" />,
  <path key="lab" d="M3 4h18v12H3zM8 20h8M12 16v4" />,
  <path key="help" d="M4 14v-2a8 8 0 0 1 16 0v2M4 13h3v6H4zM17 13h3v6h-3zM18 19c0 2-3 2-5 2" />
];

export default function ITServices() {
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
    <main className="subpage it-page">
      {/* Hero Subpage */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Information Technology</h1>
            <p className="tagline">Empowering Education Through Innovation</p>
          </motion.div>
        </div>
      </section>

      {/* ===== IT OFFICE & PERSONNEL (COMPACT ZIGZAG) ===== */}
      <section className="it-office-section">
        <div className="it-office-grid">
          
                   {/* LEFT SIDE: Zigzag Images with Names Beside Them */}
          <motion.div
            className="it-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Person 1: IT Specialist (Far Left) */}
            <div className="it-person-row it-pic-left">
              <div className="it-office-img-wrapper">
                <img src={it1Image} alt="Joko Ali F. Diocolano - IT Specialist" className="it-office-img" />
              </div>
              <div className="it-person-info">
                <h4 className="it-person-name">Joko Ali F. Diocolano</h4>
                <span className="it-person-title">IT Specialist</span>
              </div>
            </div>

            {/* Person 2: IT Technician (Pushed Right for Zigzag) */}
            <div className="it-person-row it-pic-right">
              <div className="it-office-img-wrapper">
                <img src={it2Image} alt="Rod Anthony W. Fugoso - IT Technician" className="it-office-img" />
              </div>
              <div className="it-person-info">
                <h4 className="it-person-name">Rod Anthony W. Fugoso</h4>
                <span className="it-person-title">IT Technician</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IT Office Content */}
          <motion.div
            className="it-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            

            <p className="it-office-text">
              The <strong>Information Technology (IT) Office of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> serves as the backbone of the institution's digital infrastructure. Guided by the SVD mission, we are dedicated to integrating modern technology into the educational experience, ensuring that both faculty and students have access to reliable, secure, and innovative digital tools.
            </p>

            <p className="it-office-text">
              Our office manages the school's Learning Management System (LMS), Student Information Portal, and ICT laboratories. We strive to create a seamless digital environment that supports academic excellence, administrative efficiency, and continuous learning beyond the four walls of the classroom.
            </p>

            <p className="it-office-text">
              Beyond technical support, the IT Office is committed to fostering digital literacy and responsible technology use. We work closely with all departments to implement data privacy measures and ensure that our technological advancements align with the core values of the Divinian community.
            </p>

            <div className="it-office-highlight">
              <p className="it-office-highlight-text">
                To the DWSSII community: The IT Office is here to serve you. Whether you are navigating the LMS, troubleshooting a device, or exploring new digital tools, our team is dedicated to ensuring your technological experience is smooth, secure, and productive.
              </p>
            </div>

            <div className="it-office-objectives">
              <h3 className="it-office-objectives-title">Office Objectives</h3>
              <ul className="it-office-objectives-list">
                <li>Maintain and upgrade the school's IT infrastructure to ensure optimal performance and security.</li>
                <li>Provide prompt and efficient technical support to students, faculty, and staff.</li>
                <li>Integrate innovative digital tools into the curriculum to enhance the teaching and learning process.</li>
                <li>Promote digital literacy and responsible use of technology in accordance with data privacy laws.</li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ===== IT SERVICES GRID ===== */}
      <section className="it-services-section">
        <div className="container">
          <motion.header
            className="it-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="it-chip">Administrative Module</span>
            <h2 className="it-section-title">Digital Services & Facilities</h2>
            <p className="it-section-subtitle">Supporting the DWSSII community with reliable, modern technology.</p>
          </motion.header>

          <div className="it-services-grid">
            {IT_SERVICES.map((service, index) => (
              <motion.div
                key={service.num}
                className="it-service-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <article className="it-service-card">
                  <div className="it-service-top">
                    <span className="it-service-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {IT_ICONS[index]}
                      </svg>
                    </span>
                    <span className="it-service-num">{service.num}</span>
                  </div>
                  <h3 className="it-service-title">{service.title}</h3>
                  <p className="it-service-desc">{service.desc}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IT POLICIES & GOVERNANCE ===== */}
      <section className="it-policy-section">
        <div className="container">
          <motion.header
            className="it-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="it-chip">Governance</span>
            <h2 className="it-section-title">IT Policies & Guidelines</h2>
            <p className="it-section-subtitle">Ensuring a safe, secure, and productive digital environment for all Divinians.</p>
          </motion.header>

          <div className="it-policy-grid">
            {IT_POLICIES.map((policy, index) => (
              <motion.div
                key={policy.title}
                className="it-policy-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className="it-policy-title">{policy.title}</h3>
                <p className="it-policy-desc">{policy.desc}</p>
                <Link to="#" className="it-policy-link">
                  Read Full Policy <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}