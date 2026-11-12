import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import schoolFront from '../assets/images/school-front.png';
import EnrollmentStats from '../components/EnrollmentStats';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 101, 42, 0.45), rgba(0, 54, 24, 0.35)), url(${schoolFront})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Divine Word School of Semirara Island Inc.</h1>
          <p className="tagline">Witness to the Word</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/about" className="btn">Learn More</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="intro">
        <div className="container">
          <motion.div 
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Welcome to DWSSII</h2>
            <p>
              Divine Word School of Semirara Island Inc. is committed to providing quality Catholic education that nurtures the holistic development of our students. Located in the beautiful Semirara Island, we offer a conducive learning environment that fosters academic excellence, character formation, and spiritual growth guided by the Society of the Divine Word (SVD).
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enrollment Stats Section */}
      <EnrollmentStats />
      
    </>
  );
}