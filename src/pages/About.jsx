import { motion } from 'framer-motion';

export default function About() {
  const coreValues = [
    {
      title: 'Christ-Centered',
      description: 'Rooting all our actions, teachings, and community life in the love and teachings of Jesus Christ.'
    },
    {
      title: 'Harmony with Nature',
      description: 'Stewarding God\'s creation by promoting environmental awareness and sustainable practices.'
    },
    {
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and strong ethical principles in all endeavors.'
    },
    {
      title: 'Mission-Hearted',
      description: 'Embracing the Divine Word mission to serve, especially the poor and marginalized.'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in academics, character, and service.'
    },
    {
      title: 'Servant Leadership',
      description: 'Leading by example with humility, dedication, and a genuine concern for the welfare of others.'
    }
  ];

  return (
    <>
      <section className="hero-subpage">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>About DWSSII</h1>
        </motion.div>
      </section>

      <section className="about-content">
        <div className="container">
          <motion.div 
            className="history-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our History</h2>
            <p>Divine Word School of Semirara Island Inc. was established with a vision to provide quality Catholic education to the children of Semirara Island and surrounding communities. Founded by the Society of the Divine Word (SVD), the school has grown from humble beginnings to become a center of academic excellence and character formation in the region.</p>
            <p>Over the years, DWSSII has remained committed to its founding principles while adapting to the changing educational landscape, preserving our core values and traditions.</p>
          </motion.div>

          <motion.div 
            className="history-section"
            style={{ textAlign: 'center', marginTop: '40px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>School Leadership</h2>
            <motion.div 
              className="value-card" 
              style={{ maxWidth: '600px', margin: '20px auto' }}
              whileHover={{ y: -5 }}
            >
              <h3 style={{ color: 'var(--primary-green)' }}>Fr. Rico Glenn Deuna, SVD</h3>
              <p style={{ fontWeight: 600, color: 'var(--secondary-green)' }}>School Director</p>
              <p>Guiding DWSSII with a commitment to faith, academic excellence, and the holistic development of every learner under the Society of the Divine Word.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mission-vision"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mission"
              whileHover={{ y: -5 }}
            >
              <h2>Mission</h2>
              <p>To provide a transformative, Christ-centered education that empowers learners to become competent, compassionate, and responsible individuals dedicated to the service of God and society.</p>
            </motion.div>
            <motion.div 
              className="vision"
              whileHover={{ y: -5 }}
            >
              <h2>Vision</h2>
              <p>A leading Catholic educational institution in Semirara Island, recognized for academic excellence, strong moral values, and the holistic formation of future leaders.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="core-values"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 style={{ textAlign: 'center' }}>Our Core Values: C.H.I.M.E.S.</h2>
            <div className="values-grid">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={value.title}
                  className="value-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}