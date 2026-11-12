import { motion } from 'framer-motion';
import directorImage from '../assets/images/school-director.jpg';
import arnoldImage from '../assets/images/Arnold_Janssen.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function About() {
  return (
    <>
      {/* Hero Subpage */}
      <section className="hero-subpage">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h1>About DWSSII</h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginTop: '16px' }}>
            Witness to the Word — A Legacy of Divinian Education
          </p>
        </motion.div>
      </section>

      {/* ===== 1. SCHOOL DIRECTOR (FIRST & ENLARGED) ===== */}
      <section className="director-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">School Leadership</span>
            <h2 className="director-section-title">The School Director</h2>
            <p className="director-section-subtitle">
              Guiding our institution with vision and dedication
            </p>
            <br />
          </motion.div>

          <motion.div
            className="director-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="director-info">
              <div className="director-photo">
                <img src={directorImage} alt="Fr. Rico Glenn Deuna, SVD" className="director-image" />
              </div>
              <div className="director-details">
                <h3>Fr. Rico Glenn Deuna, SVD</h3>
                <div className="director-title">School Director</div>
                <p>
                  As the School Director of Divine Word School of Semirara Island Inc., 
                  Fr. Rico Glenn Deuna, SVD leads the institution with a deep commitment 
                  to the Society of the Divine Word's mission of evangelization through education. 
                  Under his guidance, DWSSII continues to uphold its tradition of academic excellence, 
                  spiritual formation, and service to the Semirara Island community.
                </p>
                <p>
                  His leadership emphasizes the holistic development of every Divinian student, 
                  ensuring that the school remains a beacon of quality Catholic education in the region.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 2. FOUNDER ===== */}
      <section className="founder-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge">Our Heritage</span>
            <h2 className="founder-title">St. Arnold Janssen, SVD</h2>
            <p className="founder-subtitle">Founder of the Society of the Divine Word (1837–1909)</p>
          </motion.div>

          <div className="founder-layout">
            <motion.div
              className="founder-portrait"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="portrait-frame">
                <img src={arnoldImage} alt="St. Arnold Janssen" className="portrait-image" />
              </div>
            </motion.div>

            <motion.div
              className="founder-bio"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p>
                <strong>St. Arnold Janssen</strong> was born on <span className="highlight-date">November 5, 1837</span>, 
                in Goch, Germany. A visionary educator and missionary, he dedicated his life to spreading the Gospel 
                through the work of evangelization and education.
              </p>

              <div className="founder-quote">
                <p>"The harvest is great, but the laborers are few."</p>
              </div>

              <p>
                In <span className="highlight-date">1875</span>, during a time of political and religious turmoil in Germany, 
                Fr. Janssen founded the <strong>Society of the Divine Word (SVD)</strong> — a missionary congregation 
                committed to serving the Church wherever the need was greatest.
              </p>

              <p>
                His mission reached the Philippines in <span className="highlight-date">1889</span>, when the first SVD 
                missionaries arrived to establish schools and parishes across the archipelago. This legacy of faith and 
                education eventually led to the founding of Divine Word schools throughout the country, including DWSSII.
              </p>

              <p>
                St. Arnold Janssen was canonized by Pope Pius XII in <span className="highlight-date">1909</span>, 
                and his feast day is celebrated every <strong>January 19</strong>. His spirit lives on in every 
                Divinian student, teacher, and alumnus.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="founder-milestones"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="milestone">
              <span className="milestone-year">1837</span>
              <span className="milestone-label">Born in Goch, Germany</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1862</span>
              <span className="milestone-label">Ordained as Priest</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1875</span>
              <span className="milestone-label">Founded the SVD</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1889</span>
              <span className="milestone-label">SVD arrives in PH</span>
            </div>
            <div className="milestone">
              <span className="milestone-year">1909</span>
              <span className="milestone-label">Canonized as Saint</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== 3. SCHOOL HISTORY TIMELINE ===== */}
      <section className="school-history-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-label-badge" style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}>Our Journey</span>
            <h2 className="founder-title">School History</h2>
            <p className="founder-subtitle">Two decades of Divinian excellence on Semirara Island</p>
          </motion.div>

          <div className="history-timeline">
            {[
              { year: '2003', title: 'The Beginning', content: 'DWSSII was established as a parish school under the guidance of the SVD missionaries, serving the educational needs of Semirara Island.', highlight: false },
              { year: '2005', title: 'Independence', content: 'The school gained independent operation, expanding its academic programs and facilities to accommodate a growing student population.', highlight: true },
              { year: '2008', title: 'High School Department', content: 'The Junior High School department was formally opened, completing the basic education cycle.', highlight: false },
              { year: '2011', title: 'Accreditation', content: 'DWSSII received formal accreditation, affirming its commitment to quality Catholic education.', highlight: false },
              { year: '2014', title: 'Senior High School', content: 'In response to the K-12 curriculum, the Senior High School department was launched with STEM and TVL tracks.', highlight: false },
              { year: '2016', title: 'Facilities Expansion', content: 'New classrooms, laboratories, and campus facilities were constructed to support the growing student body.', highlight: false },
              { year: '2018', title: 'Digital Transformation', content: 'The school integrated modern technology into its curriculum, preparing students for the digital age.', highlight: false },
              { year: '2023', title: '20 Years of Service', content: 'DWSSII celebrated two decades of forming young minds and hearts in the Divinian tradition.', highlight: false },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${item.highlight ? 'highlight' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="timeline-marker">
                  <span className="timeline-year">{item.year}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. MISSION, VISION, VALUES ===== */}
      <section className="about-content">
        <div className="container">
          <div className="mission-vision">
            <motion.div
              className="mission"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>Our Mission</h2>
              <p>
                To provide quality Catholic education that forms competent, compassionate, 
                and committed Christians who are empowered to serve God, the Church, and society, 
                especially the poor and marginalized.
              </p>
            </motion.div>

            <motion.div
              className="vision"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2>Our Vision</h2>
              <p>
                A premier Catholic educational institution in Semirara Island, forming Divinian 
                learners who are competent, compassionate, and committed Christians, witnesses 
                to the Word in service to God and humanity.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="core-values"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>CHIMES Core Values</h2>
            <div className="values-grid">
              {[
                { letter: 'C', title: 'Christ-Centeredness', desc: 'Rooted in faith, guided by the teachings of Christ and the SVD tradition.' },
                { letter: 'H', title: 'Holistic Development', desc: 'Nurturing the intellectual, spiritual, moral, and social dimensions of every learner.' },
                { letter: 'I', title: 'Integrity', desc: 'Upholding truth, honesty, and moral uprightness in all endeavors.' },
                { letter: 'M', title: 'Mission-Oriented', desc: 'Committed to the SVD mission of evangelization through education and service.' },
                { letter: 'E', title: 'Excellence', desc: 'Striving for the highest standards in academics, character, and service.' },
                { letter: 'S', title: 'Service', desc: 'Dedicated to serving God, the Church, and the community, especially the marginalized.' },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="value-letter">{value.letter}</div>
                  <h3>{value.title}</h3>
                  <p>{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}