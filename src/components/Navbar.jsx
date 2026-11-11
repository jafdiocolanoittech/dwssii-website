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
        {/* ✨ Logo FIRST, then DWSSII text */}
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.04 }}
        >
          <Link to="/" className="brand-link">
            <img 
              src={dwssiiLogo} 
              alt="DWSSII Official Logo" 
              className="brand-logo" 
            />
            <span className="brand-text">DWSSII</span>
          </Link>
        </motion.div>

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

        <motion.div 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
      </div>
    </motion.nav>
  );
}