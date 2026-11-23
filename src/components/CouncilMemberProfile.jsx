import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function CouncilMemberProfile({ 
  breadcrumbLabel, 
  pageTitle, 
  tagline, 
  fullName, 
  roleTitle, 
  photo, 
  affiliations = [], 
  education = [], 
  yearsOfService, 
  workExperiences = [] 
}) {
  return (
    <main className="subpage">
      {/* Hero Subpage */}
      <section className="hero hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="separator">/</span>
              <Link to="/administration">Administration</Link>
              <span className="separator">/</span>
              <Link to="/administration/council">Director's Council</Link>
              <span className="separator">/</span>
              <span className="current">{breadcrumbLabel}</span>
            </div>
            <h1>{pageTitle}</h1>
            <p className="tagline">{tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="director-section" aria-labelledby="profile-heading">
        <div className="container">
          <motion.header
            className="director-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">Leadership</span>
            <h2 id="profile-heading" className="founder-title" style={{ textAlign: 'center', marginTop: '16px' }}>
              {fullName}
            </h2>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              {roleTitle}
            </p>
          </motion.header>

          <div className="director-layout">
            {/* LEFT: Portrait Image */}
            <motion.div
              className="director-image-col"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="director-image-frame">
                <img
                  src={photo}
                  alt={fullName}
                  className="director-image"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* RIGHT: Profile Details */}
            <motion.div
              className="director-text-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {affiliations.length > 0 && (
                <div className="profile-section">
                  <h3 className="profile-title">Affiliations</h3>
                  <ul className="profile-list">
                    {affiliations.map((aff, index) => (
                      <li key={index}>
                        <strong>{aff.name}</strong>
                        {aff.details && (
                          <ul>
                            {aff.details.map((detail, dIndex) => (
                              <li key={dIndex}>{detail}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {education.length > 0 && (
                <div className="profile-section">
                  <h3 className="profile-title">Educational Attainment</h3>
                  <ul className="profile-list">
                    {education.map((edu, index) => (
                      <li key={index}>
                        <strong>{edu.school}</strong> ({edu.year})
                        <br />{edu.degree}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {yearsOfService && (
                <div className="profile-section">
                  <h3 className="profile-title">Years of Service at DWSSII</h3>
                  <p className="profile-text">{yearsOfService}</p>
                </div>
              )}

              {workExperiences.length > 0 && (
                <div className="profile-section">
                  <h3 className="profile-title">Work Experiences</h3>
                  <ul className="profile-list work-list">
                    {workExperiences.map((exp, index) => (
                      <li key={index}>{exp}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}