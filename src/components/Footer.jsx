import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>DWSSII</h3>
            <p>Excellence with Values</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/campus">Campus Life</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Semirara Island, Caluya, Antique, Philippines</p>
            <p>Email: dwssiiittech@gmail.com</p>
            <p>Phone: 0999-999-9999</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Divine Word School of Semirara Island Inc. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}