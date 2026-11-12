import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import dwssiiLogo from '../assets/images/dwssii-logo2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/campus', label: 'Campus Life' },
    { path: '/activities', label: 'Activities' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        {/* Logo - Shortened on mobile */}
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.02 }}
        >
          <Link to="/" className="brand-link">
            <img 
              src={dwssiiLogo} 
              alt="DWSSII Official Logo" 
              className="brand-logo" 
            />
            <div className="brand-text-wrapper">
              <span className="brand-text">DIVINE WORD SCHOOL OF SEMIRARA ISLAND INC.</span>
              <span className="brand-text-mobile">DWSSII</span>
            </div>
          </Link>
        </motion.div>

        {/* Hamburger Button - MOVED BEFORE nav-menu */}
        <motion.div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}