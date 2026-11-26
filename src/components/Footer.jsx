import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          
          {/* Column 1: Identity & Motto */}
          <div className="footer-logo">
            <h3>DWSSII</h3>
            <p className="footer-motto">Vivere Verbum Integritate</p>
            <p className="footer-hashtags">
              
            </p>
          </div>

          {/* Column 2: Streamlined Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Academic Programs</Link></li>
              <li><Link to="/activities">Institutional Activities</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Compact Contact Info */}
          <div className="footer-contact">
            <h4>Get in Touch</h4>
            <p>Semirara Island, Caluya, Antique, Philippines</p>
            <p>
              <a href="mailto:dwssiiittech@gmail.com" className="footer-email">
                dwssiiittech@gmail.com
              </a>
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Divine Word School of Semirara Island, Inc. All Rights Reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}