import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Officer Image
import hwoOfficerImage from '../../assets/images/shema.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function HWO() {
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

  // Placeholder: using officer photo for services and gallery (replace later with actual activity photos)
  const sidePics = [hwoOfficerImage, hwoOfficerImage, hwoOfficerImage];
  const galleryPics = [hwoOfficerImage, hwoOfficerImage];

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Health and Wellness Office</h1>
            <p className="tagline">Caring for the Health and Well-being of the Wordian Community</p>
          </motion.div>
        </div>
      </section>

      {/* ===== HWO OFFICER (Single Stacked Photo) ===== */}
      <section className="hwo-office-section">
        <div className="hwo-office-grid">
          <motion.div
            className="hwo-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* OFFICER: Shema B. Alimonsurin, RM (Stacked - Bigger Photo) */}
            <div className="hwo-person-row hwo-pic-stacked">
              <div className="hwo-office-img-wrapper hwo-head-img-wrapper">
                <img src={hwoOfficerImage} alt="Shema B. Alimonsurin, RM" className="hwo-office-img" />
              </div>
              <div className="hwo-person-info">
                <h4 className="hwo-person-name">Shema B. Alimonsurin, RM</h4>
                <span className="hwo-person-title">Health & Wellness Officer</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="hwo-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="hwo-office-text">
              The <strong>Health and Wellness Office (HWO) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> is committed to promoting and safeguarding the physical, mental, and emotional well-being of every member of the school community. Guided by the Wordian values of compassion and service, the office ensures that students, faculty, and staff receive timely, quality healthcare within a safe and supportive environment.
            </p>
            <p className="hwo-office-text">
              Under the dedicated leadership of <strong>Ms. Shema B. Alimonsurin, RM</strong>, our Health & Wellness Officer, the office provides essential medical services, health education, and preventive care programs. With her professional nursing expertise and genuine care for the community, she ensures that every student receives the attention and medical support they need to thrive academically and personally.
            </p>
            <p className="hwo-office-text">
              The HWO works hand-in-hand with parents, teachers, and external health partners to create a holistic wellness program that addresses not just physical health, but also mental wellness, nutrition, and healthy lifestyle habits. We believe that a healthy learner is a ready learner — and we are here to support every Wordian in their journey toward overall well-being.
            </p>
            <div className="hwo-office-highlight">
              <p className="hwo-office-highlight-text">
                To our students: your health is our priority. Whether it's a minor concern or a wellness check-up, our doors are always open. To our parents and partners: thank you for trusting us with the care of your children. Together, we nurture a community where health, safety, and compassion go hand in hand.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HWO SERVICES SECTION (Content Left, 3 Pics Right - Aligned) ===== */}
      <section className="hwo-services-section">
        <div className="hwo-services-grid">
          {/* LEFT SIDE: Content */}
          <motion.div
            className="hwo-services-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label">Our Services</span>
            <h2 className="hwo-section-title">Comprehensive Health and Wellness Services</h2>
            <p className="hwo-services-text">
              The Health and Wellness Office offers a wide range of medical and wellness services designed to keep our school community healthy, safe, and ready to learn. From routine check-ups to emergency care, we are here to support every Wordian.
            </p>
            <ul className="hwo-services-list">
              <li><strong>Medical Consultations and Check-ups:</strong> On-site clinical services for students, faculty, and staff, providing primary healthcare and medical advice.</li>
              <li><strong>First Aid and Emergency Care:</strong> Immediate response to minor injuries, accidents, and medical emergencies within the campus.</li>
              <li><strong>Health Screenings:</strong> Regular vision, dental, BMI, and general physical examinations to monitor student health and development.</li>
              <li><strong>Immunization Coordination:</strong> Assistance in managing and monitoring student immunization records in compliance with health standards.</li>
              <li><strong>Medicine Dispensary:</strong> Provision of basic over-the-counter medicines and first-aid supplies for minor ailments and injuries.</li>
              <li><strong>Health Education and Promotion:</strong> Seminars, campaigns, and wellness programs on nutrition, hygiene, mental health, and disease prevention.</li>
              <li><strong>Mental Health Support and Referrals:</strong> Initial counseling and coordination with guidance counselors or external specialists for students needing emotional or psychological support.</li>
              <li><strong>Health Records Management:</strong> Secure and confidential management of student health profiles, medical histories, and wellness reports.</li>
            </ul>
            <div className="hwo-services-highlight">
              <p className="hwo-services-highlight-text">
                At HWO, we believe that health is the foundation of learning. We are committed to providing compassionate, professional, and accessible healthcare services that empower every Wordian to live a balanced and fulfilling life.
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3 Pics Stacked */}
          <motion.div
            className="hwo-services-images"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sidePics.map((img, index) => (
              <motion.div
                key={index}
                className="hwo-service-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`HWO Service ${index + 1}`} className="hwo-service-img" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== HWO GALLERY SECTION (2 Pics, Side by Side) ===== */}
      <section className="hwo-gallery-section">
        <div className="container">
          <div className="hwo-gallery-grid">
            {galleryPics.map((img, index) => (
              <motion.div
                key={index}
                className="hwo-gallery-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`HWO Activity ${index + 1}`} className="hwo-gallery-img" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}