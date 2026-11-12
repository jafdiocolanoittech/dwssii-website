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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo and School Name */}
        <div className="nav-logo">
          <Link to="/" className="brand-link" onClick={closeMenu}>
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
        </div>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}