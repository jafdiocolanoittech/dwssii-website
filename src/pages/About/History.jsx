import { motion } from 'framer-motion';

// NOTE: renamed file to history.png (no spaces / parentheses)
import historyBanner from '../../assets/navbar/history.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const TIMELINE = [
  { year: '2003', title: 'The Beginning', content: 'DWSSII was established as a parish school under the guidance of the SVD missionaries, serving the educational needs of Semirara Island.', highlight: false },
  { year: '2005', title: 'Independence', content: 'The school gained independent operation, expanding its academic programs and facilities to accommodate a growing student population.', highlight: true },
  { year: '2008', title: 'High School Department', content: 'The Junior High School department was formally opened, completing the basic education cycle.', highlight: false },
  { year: '2011', title: 'Accreditation', content: 'DWSSII received formal accreditation, affirming its commitment to quality Catholic education.', highlight: false },
  { year: '2014', title: 'Senior High School', content: 'In response to the K-12 curriculum, the Senior High School department was launched with STEM and TVL tracks.', highlight: false },
  { year: '2016', title: 'Facilities Expansion', content: 'New classrooms, laboratories, and campus facilities were constructed to support the growing student body.', highlight: false },
  { year: '2018', title: 'Digital Transformation', content: 'The school integrated modern technology into its curriculum, preparing students for the digital age.', highlight: false },
  { year: '2023', title: '20 Years of Service', content: 'DWSSII celebrated two decades of forming young minds and hearts in the Divinian tradition.', highlight: false },
];

export default function History() {
  return (
    <main className="subpage">
      {/* Dedicated hero — pure image, fixed size, no shrink effect */}
      <section className="history-hero">
        <img
          src={historyBanner}
          alt="Divine Word School of Semirara, Inc. campus banner"
          className="history-hero__img"
        />
        <div className="history-hero__overlay" />
      </section>

      {/* ===== SCHOOL HISTORY TIMELINE ===== */}
      <section className="school-history-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span
              className="section-label-badge"
              style={{ display: 'block', width: 'fit-content', margin: '0 auto 16px' }}
            >
              Our Journey
            </span>
            <p className="founder-subtitle" style={{ textAlign: 'center' }}>
              Two decades of Divinian excellence on Semirara Island
            </p>
          </motion.div>

          <div className="history-timeline">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
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
                  <p style={{ marginBottom: 0 }}>{item.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}