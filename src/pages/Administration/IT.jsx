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
    <main className="subpage">
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
      <section className="intro" style={{ background: 'var(--bg-neutral)', padding: '64px 0' }}>
        <div className="container">
          <motion.header
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <span className="section-label-badge">Administrative Module</span>
            <h2 className="founder-title" style={{ marginTop: '16px' }}>Digital Services & Facilities</h2>
            <p className="founder-subtitle">Supporting the DWSSII community with reliable, modern technology.</p>
          </motion.header>

          <div className="values-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {IT_SERVICES.map((service, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <div className="value-letter" style={{ fontSize: '1.5rem', border: 'none', background: 'var(--light-green)', color: 'var(--primary-green-dark)', fontWeight: '700' }}>
                  {service.num}
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{service.title}</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.7', color: 'var(--text-body)', marginBottom: 0 }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IT POLICIES & GOVERNANCE ===== */}
      <section className="founder-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">Governance</span>
            <h2 className="founder-title" style={{ marginTop: '16px', textAlign: 'center' }}>IT Policies & Guidelines</h2>
            <p className="founder-subtitle" style={{ textAlign: 'center', marginBottom: '48px' }}>
              Ensuring a safe, secure, and productive digital environment for all Divinians.
            </p>
          </motion.div>

          <div className="mission-vision" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {IT_POLICIES.map((policy, index) => (
              <motion.div
                key={index}
                className="mission"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: index * 0.15 }}
              >
                <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--primary-green-dark)' }}>
                  {policy.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: 0 }}>
                  {policy.desc}
                </p>
                <Link 
                  to="#" 
                  className="btn btn-outline" 
                  style={{ marginTop: '24px', color: 'var(--primary-green-dark)', borderColor: 'var(--primary-green-dark)' }}
                >
                  Read Full Policy
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}