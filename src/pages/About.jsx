import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import arnoldJanssen from '../assets/images/Arnold_Janssen.jpg';

export default function About() {
  return (
    <>
      {/* Hero Subpage */}
      <section className="hero-subpage">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>About DWSSII</h1>
          <p className="tagline">Rooted in Faith. Inspired by Tradition. Building the Future.</p>
        </motion.div>
      </section>

      {/* ✨ NEW: Our Founder - St. Arnold Janssen */}
      <section className="founder-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Founder</span>
            <h2 className="founder-title">St. Arnold Janssen, SVD</h2>
            <p className="founder-subtitle">1837 – 1909 • Founder of the Society of the Divine Word</p>
          </motion.div>

          <div className="founder-layout">
            {/* St. Arnold Janssen Portrait */}
            <motion.div 
                className="founder-portrait"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="portrait-frame">
                <img 
                    src={arnoldJanssen} 
                    alt="Saint Arnold Janssen, SVD - Founder of the Society of the Divine Word" 
                    className="portrait-image" 
                />
                </div>
                <div className="portrait-dates">
                <span>NOV 15</span>
                <span>1837</span>
                </div>
            </motion.div>

            {/* Biography */}
            <motion.div 
              className="founder-bio"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p>
                It all started in <strong>Goch, Germany</strong> on <strong className="highlight-date">November 15, 1837</strong>, 
                when an intrepid young boy dreamt of bigger things. It was in Goch where he took the first step 
                that spun other gigantic steps that catapulted him into his eventual canonization. This boy turned 
                out to be <strong>Saint Arnold Janssen</strong>.
              </p>

              <p>
                On <strong className="highlight-date">August 16, 1862</strong>, at the age of 24, Saint Arnold Janssen received 
                the Sacrament of Ordination to the Priesthood. His grueling years of studying theology, philosophy, 
                languages, mathematics, and several fields of science inspired him to carry on an educational 
                apostolate with passion and conviction.
              </p>

              <p>
                Having purchased an old, dilapidated building at <strong>Steyl, Holland</strong> in 1875, Father Arnold 
                immediately refurbished the place. It was here that the vision of a Mission House for training 
                missionaries came to life. On <strong className="highlight-date">September 8, 1875</strong>, he founded the 
                <strong> Society of the Divine Word (SVD)</strong>.
              </p>

              <div className="founder-quote">
                <p>"From decrepit taverns, Saint Michael's Mission House grew and evolved. From a single edifice 
                came an enormous building complex. From a small group of missionaries sprung large numbers of 
                applicants who shared Saint Arnold's dreams and aspirations."</p>
              </div>

              <p>
                Driven and relentless to pursue his mission, Saint Arnold founded the 
                <strong> Congregation of the Missionary Sisters of the Holy Spirit (SSPS)</strong> on 
                <strong className="highlight-date"> December 8, 1889</strong> with Sr. Ma. Helena Stollenwerk as its co-founder. 
                Later, on <strong className="highlight-date">December 8, 1896</strong>, the 
                <strong> Missionary Sisters of the Servants of Perpetual Adoration (SSPSAP)</strong> was born.
              </p>

              <p>
                Father Arnold Janssen died peacefully on <strong className="highlight-date">January 15, 1909</strong>. 
                His beatification on <strong>October 19, 1975</strong> and his canonization on 
                <strong className="highlight-date"> October 5, 2003</strong> proved that he deserved and partook of 
                God's limitless blessings and love.
              </p>
            </motion.div>
          </div>

          {/* Founder Milestones */}
          <div className="founder-milestones">
            <div className="milestone">
              <span className="milestone-year">1837</span>
              <span className="milestone-label">Born in Goch, Germany</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1875</span>
              <span className="milestone-label">Founded the SVD</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1889</span>
              <span className="milestone-label">Founded the SSPS</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1909</span>
              <span className="milestone-label">Died in Steyl</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">2003</span>
              <span className="milestone-label">Canonized a Saint</span>
            </div>
          </div>
        </div>
      </section>

      {/* ✨ NEW: History of DWSSII */}
      <section className="school-history-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Our Journey</span>
            <h2 className="history-main-title">History of Divine Word School of Semirara Island, Inc.</h2>
            <p className="history-intro">
              From a vision of quality education on the Island of Semirara to an independent Divinian institution — 
              a story of faith, collaboration, and growth.
            </p>
          </motion.div>

          <div className="history-timeline">
            {/* Timeline Item 1 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2003</span>
              </div>
              <div className="timeline-content">
                <h3>The Beginning</h3>
                <p>
                  Driven by the desire to put up good and quality education on the Island of Semirara, 
                  <strong> Mr. Victor A. Consunji</strong> sent two representatives — 
                  <strong> Engr. Juniper A. Barroquillo</strong> (Administrative Division Manager) and 
                  <strong> Mr. Jose Norella, Jr.</strong> (Community Development Officer of Semirara Mining Corporation) — 
                  to request <strong>Divine Word College of San Jose (DWCSJ)</strong> to operate a school in Semirara Island.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">MAY 2003</span>
              </div>
              <div className="timeline-content">
                <h3>The Favorable Report</h3>
                <p>
                  <strong>Fr. Eleuterio S. Lacaron, SVD</strong> organized the DWCSJ team composed of 
                  <strong> Fr. Roger Enaje, SVD</strong> (Administrative & Finance Officer), 
                  <strong> Dr. Nancy Macabata</strong>, <strong>Dr. Luis Gante, Jr.</strong>, and 
                  <strong> Ms. Florenda Francisco</strong>. After conducting a survey, the team returned with a favorable report.
                </p>
                <p>
                  On <strong>May 5, 2003</strong>, the DWCSJ Board of Trustees approved the opening of the 
                  <em> Divine Word College of San Jose (Mindoro) Elementary School Department, Semirara Campus</em>, 
                  starting SY 2003–2004.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 3 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">JUNE 2003</span>
              </div>
              <div className="timeline-content">
                <h3>Classes Begin</h3>
                <p>
                  Classes started on <strong>June 16, 2003</strong> with:
                </p>
                <ul className="timeline-list">
                  <li><strong>67</strong> enrollees in Kindergarten</li>
                  <li><strong>229</strong> enrollees in Grade School</li>
                  <li><strong>296</strong> total pupils from K to Grade 6</li>
                </ul>
                <p>
                  <strong>Mr. Joe O. Paz</strong>, former full-time faculty of DWCSJ Elementary Department, 
                  was appointed teacher-in-charge, together with 10 newly hired teachers.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 4 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2004</span>
              </div>
              <div className="timeline-content">
                <h3>High School Opens</h3>
                <p>
                  In SY 2004–2005, the <strong>High School Department</strong> was opened. 
                  <strong> Ms. Marilyn A. Alvarado</strong> served as TIC of the eight high school teachers, 
                  with <strong>Ms. Glorieta Mendoza</strong> as the school principal.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 5 - Highlighted */}
            <motion.div 
              className="timeline-item highlight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2005</span>
              </div>
              <div className="timeline-content">
                <h3>Independence & New Identity</h3>
                <p>
                  The school became <strong>independent</strong> and ceased to be a campus of DWCSJ. 
                  It was officially renamed:
                </p>
                <p className="school-name-reveal">
                  Divine Word School of Semirara Island, Inc. (DWSSII)
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 6 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2014</span>
              </div>
              <div className="timeline-content">
                <h3>CEAP Membership</h3>
                <p>
                  The school became a member of the 
                  <strong> Catholic Educational Association of the Philippines (CEAP)</strong>, 
                  affirming its commitment to quality Catholic education.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 7 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2016</span>
              </div>
              <div className="timeline-content">
                <h3>Senior High School</h3>
                <p>
                  Granted permission by the <strong>Department of Education (DepEd)</strong> to operate 
                  the <strong>Senior High School</strong> with tracks: <strong>ABM, HUMSS, STEM, and TVL</strong>.
                </p>
              </div>
            </motion.div>

            {/* Timeline Item 8 */}
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-marker">
                <span className="timeline-year">2018</span>
              </div>
              <div className="timeline-content">
                <h3>TVL Partnership</h3>
                <p>
                  To provide SHS TVL Specializations for training workshop requirements, the school 
                  collaborated with <strong>Semirara Training Center, Inc. (STCI)</strong>, strengthening 
                  its technical-vocational programs.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="about-content">
        <div className="container">
          <div className="mission-vision">
            <motion.div 
              className="mission"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>To provide quality Catholic education rooted in the Divinian charism, forming competent, 
              virtuous, and mission-oriented individuals committed to serving God, Church, and community.</p>
            </motion.div>

            <motion.div 
              className="vision"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>A premier Divinian educational institution in the Island of Semirara, forming Christ-centered 
              leaders equipped with excellence, integrity, and servant leadership for a changing world.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CHIMES Core Values */}
      <section className="intro">
        <div className="container">
          <div className="core-values">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              CHIMES Core Values
            </motion.h2>

            <div className="values-grid">
              {[
                { letter: 'C', title: 'Christ-Centered', desc: 'Rooted in faith and the teachings of Christ in all endeavors.' },
                { letter: 'H', title: 'Harmony with Nature', desc: 'Stewards of creation, living in balance with the environment.' },
                { letter: 'I', title: 'Integrity', desc: 'Upholding truth, honesty, and moral uprightness in all actions.' },
                { letter: 'M', title: 'Mission-Hearted', desc: 'Committed to the divine mission of evangelization and service.' },
                { letter: 'E', title: 'Excellence', desc: 'Pursuing the highest standards in academics, character, and service.' },
                { letter: 'S', title: 'Servant Leadership', desc: 'Leading with humility, compassion, and a heart for others.' }
              ].map((value, idx) => (
                <motion.div 
                  key={idx} 
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="value-letter">{value.letter}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* School Director */}
      <section className="about-content">
        <div className="container">
          <motion.div 
            className="director-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>School Director</h2>
            <div className="director-info">
              <div className="director-photo">
                <div className="director-placeholder">
                  <span>FR</span>
                </div>
              </div>
              <div className="director-details">
                <h3>Fr. Rico Glenn Deuna, SVD</h3>
                <p className="director-title">School Director</p>
                <p>Leading DWSSII with the Divinian spirit of faith, service, and excellence — guiding the school community 
                in its mission to form competent and virtuous learners rooted in the Word of God.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}