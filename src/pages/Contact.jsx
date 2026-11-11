import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <section className="hero-subpage">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Contact Us</h1>
        </motion.div>
      </section>

      <section className="contact-content">
        <div className="container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get in Touch</h2>
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ y: -5 }}
              >
                <h3>Address</h3>
                <p>Semirara Island, Caluya, Antique, Philippines</p>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ y: -5 }}
              >
                <h3>Email</h3>
                <p>dwssiiittech@gmail.com</p>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ y: -5 }}
              >
                <h3>Phone</h3>
                <p>0999-999-9999</p>
              </motion.div>
              <motion.div 
                className="contact-item"
                whileHover={{ y: -5 }}
              >
                <h3>Office Hours</h3>
                <p>Monday-Friday: 7:15 AM - 4:15 PM</p>
                <p>Saturday: 8:00 AM - 12:00 PM</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://www.google.com/maps?q=Divine+Word+School+of+Semirara+Island+Inc.,Semirara+Island,Philippines&output=embed" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="DWSSII Location"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
}