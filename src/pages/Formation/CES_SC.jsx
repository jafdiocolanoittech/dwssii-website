import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Officer Image
import cesImage from '../../assets/images/ces.jpg';

// CES Activity/Service Images (All 5 paths provided)
import cesPic1 from '../../assets/ces/81308df6-4f0b-41c1-b573-e9b2a995963c.jpeg';
import cesPic2 from '../../assets/ces/52e7f18f-4ac6-43c6-a016-42aae1726b39.jpeg';
import cesPic3 from '../../assets/ces/2731a2ae-c90f-4450-9aa4-23d7f13d26ba.jpeg';
import cesPic4 from '../../assets/ces/5685ef77-f1d7-41c6-8950-4c19890ec5d7.jpeg';
import cesPic5 from '../../assets/ces/30605ca4-4ec5-43ed-b051-7f5910281638.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function CES_SC() {
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

  // Split pics: first 3 beside content, remaining 2 in gallery grid
  const sidePics = [cesPic1, cesPic2, cesPic3];
  const galleryPics = [cesPic4, cesPic5];

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Community Extension Services and Social Concerns</h1>
            <p className="tagline">Empowering Communities Through Service, Partnership, and Social Responsibility</p>
          </motion.div>
        </div>
      </section>

      {/* ===== CES-SC PERSONNEL (Single Stacked Picture) ===== */}
      <section className="ces-office-section">
        <div className="ces-office-grid">
          <motion.div
            className="ces-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* OFFICER: Stacked Layout (Bigger) */}
            <div className="ces-person-row ces-pic-stacked">
              <div className="ces-office-img-wrapper ces-head-img-wrapper">
                <img src={cesImage} alt="Czarina Z. Choco" className="ces-office-img" />
              </div>
              <div className="ces-person-info">
                <h4 className="ces-person-name">Czarina Z. Choco</h4>
                <span className="ces-person-title">Community Extension Officer</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="ces-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="ces-office-text">
              The <strong>Community Extension Services and Social Concerns Office (CES–SC)</strong> of Divine Word School of Semirara Island, Inc. (DWSSII) serves as the institution's primary arm for community engagement, outreach, and social involvement. Guided by the school's Vision-Mission and inspired by the values of service, compassion, and social responsibility, the office develops meaningful programs that strengthen partnerships between the school and the communities it serves.
            </p>
            <p className="ces-office-text">
              Under the supervision of <strong>Fr. Jerome A. Ormita, SVD</strong>, Spiritual Enrichment and Development Officer, the office promotes initiatives that address community needs through educational assistance, environmental stewardship, livelihood support, volunteerism, and other extension services. Through these efforts, CES–SC fosters a culture of active citizenship and encourages members of the academic community to become instruments of positive change.
            </p>
            <p className="ces-office-text">
              The office is led by the Community Extension Services and Social Concerns Coordinator/Officer, who oversees the planning, implementation, monitoring, and evaluation of community extension programs and social concern initiatives. Working closely with students, faculty, staff, parents, community partners, and local stakeholders, the office ensures that all activities remain responsive, inclusive, and sustainable.
            </p>
            <div className="ces-office-highlight">
              <p className="ces-office-highlight-text">
                We believe that education is not only a preparation for personal success but also a commitment to the common good. Through the Community Extension Services and Social Concerns Unit, DWSSII continues to form individuals who are compassionate, socially aware, and dedicated to the service of others while contributing to the holistic development of communities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CES-SC SERVICES SECTION (Content Left, 3 Pics Right) ===== */}
      <section className="ces-services-section">
        <div className="ces-services-grid">
          {/* LEFT SIDE: Content */}
          <motion.div
            className="ces-services-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label">Programs and Services</span>
            <h2 className="ces-section-title">Empowering Communities Through Action</h2>
            
            <div className="ces-program-block">
              <h3 className="ces-program-title">1. Community Partnership and Development Program</h3>
              <p className="ces-program-desc">
                A program that promotes collaboration between the school and partner communities through sustainable and empowerment-focused activities.
              </p>
              <ul className="ces-services-list">
                <li><strong>Tutorial Assistance Program:</strong> Provides academic support and learning opportunities to children and learners in partner communities.</li>
                <li><strong>Computer Literacy Program:</strong> Enhances participants' basic digital skills and computer knowledge to support learning and productivity.</li>
                <li><strong>Livelihood Development Program:</strong> Promotes skills development and income-generating opportunities that contribute to community empowerment and self-sufficiency.</li>
              </ul>
            </div>

            <div className="ces-program-block">
              <h3 className="ces-program-title">2. Social Concerns and Community Engagement Program</h3>
              <p className="ces-program-desc">
                This program covers all outreach, volunteerism, advocacy, charity, environmental, and community response initiatives of the institution. Through various community-based activities and collaborative engagements, it fosters compassion, social awareness, civic responsibility, and a culture of service among members of the school community.
              </p>
              <ul className="ces-services-list">
                <li><strong>Outreach Activities:</strong> Provides assistance and support to underserved individuals, families, and communities through various outreach initiatives.</li>
                <li><strong>Volunteerism Initiatives:</strong> Encourages active participation of students, faculty, staff, and stakeholders in community service activities.</li>
                <li><strong>Relief and Donation Drives:</strong> Facilitates the collection and distribution of assistance during emergencies, calamities, and humanitarian situations.</li>
                <li><strong>Environmental and Advocacy Campaigns:</strong> Promotes environmental stewardship, social awareness, and responsible citizenship through educational and volunteer activities.</li>
                <li><strong>Department- and Organization-Initiated Community Projects:</strong> Supports community engagement programs initiated by academic departments, student organizations, and other school stakeholders in coordination with the Unit.</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE: 3 Pics Stacked */}
          <motion.div
            className="ces-services-images"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {sidePics.map((img, index) => (
              <motion.div
                key={index}
                className="ces-service-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`CES-SC Service ${index + 1}`} className="ces-service-img" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CES-SC GALLERY SECTION (2 Pics Side by Side) ===== */}
      <section className="ces-gallery-section">
        <div className="container">
          <div className="ces-gallery-grid">
            {galleryPics.map((img, index) => (
              <motion.div
                key={index}
                className="ces-gallery-img-wrapper"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={img} alt={`CES-SC Activity ${index + 1}`} className="ces-gallery-img" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}