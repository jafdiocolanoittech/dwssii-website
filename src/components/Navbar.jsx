import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import dwssiiLogo from '../assets/images/dwssii-logo2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { 
      path: '/home', 
      label: 'HOME',
      items: [
        { label: 'Home', path: '/' },
        { label: "Director's Message", path: '/directors-message' },
        { label: 'Institutional Activities', path: '/institutional-activities' },
        { label: 'Liturgical Activities', path: '/liturgical-activities' },
        { label: 'Seminars & Conventions', path: '/seminars-conventions' }, // NEW
        { label: 'Awards & Accreditations', path: '/awards-accreditations' } // NEW
      ]
    },
    { 
      path: '/about', 
      label: 'ABOUT',
      items: [
        { label: 'History', path: '/about/history' },
        { label: 'Victor A. Consunji', path: '/about/sir-vac' },
        { label: 'Vision-Mision-Core Values', path: '/about/vm-cv' },
        { label: 'Goals', path: '/about/goals' },
        { label: 'Logo', path: '/about/logo' },
        { label: 'Organizational Chart', path: '/about/org-chart' },
        { label: 'Hymn', path: '/about/hymn' },
        { label: 'Divinian Pledge', path: '/about/div-pledge' },
        { label: 'SVD Saints', path: '/about/svd-saints' }
      ],
      multiColumn: true
    },
    { 
      path: '/administration', 
      label: 'ADMINISTRATION',
      items: [
        { label: 'School Director', path: '/administration/school-director' },
        { label: "Director's Council", path: '/administration/directors-council' },
        { label: 'Quality Assurance', path: '/administration/quality-assurance' },
        { label: 'Research', path: '/administration/research' },
        { label: 'Finance', path: '/administration/finance' },
        { label: 'Human Resource', path: '/administration/hr' },
        { label: 'Physical Plant / Facilities', path: '/administration/physical-plant' },
        { label: 'Information Technology', path: '/administration/it' },
        { label: 'Security & General Services', path: '/administration/security' }
      ],
      multiColumn: true
    },
    { 
      path: '/academics', 
      label: 'ACADEMICS',
      items: [
        { label: 'Academic Personnel', path: '/academics/academic-personnel' },
        { label: 'PCDC', path: '/academics/pcdc' },
        { label: 'Grade School (GS)', path: '/academics/gs' },
        { label: 'Junior High School (JHS)', path: '/academics/jhs' },
        { label: 'Senior High School (SHS)', path: '/academics/shs' }
      ]
    },
    { 
      path: '/formation', 
      label: 'FORMATION',
      items: [
        { label: 'CMO/SED', path: '/formation/cmo' },
        { label: 'Prefect of Discipline', path: '/formation/p-discipline' },
        { label: 'CES-SC', path: '/formation/ces-sc' }
      ]
    },
    { 
      path: '/student-services', 
      label: 'STUDENT SERVICES',
      items: [
        { label: 'AGTC', path: '/student-services/agtc' },
        { label: 'Registrar', path: '/student-services/registrar' },
        { label: 'Library', path: '/student-services/library' },
        { label: 'HWO/Clinic', path: '/student-services/hwo' },
        { label: 'SAO', path: '/student-services/sao' },
        { label: 'SBQRT', path: '/student-services/sbqrt' },
        { label: 'Sports', path: '/student-services/sports' },
        { label: 'Transportation', path: '/student-services/transportation' }
      ],
      multiColumn: true
    },
    { 
      path: '/external-affairs', 
      label: 'EXTERNAL AFFAIRS',
      items: [
        { label: 'Radio & Publication', path: '/external-affairs/radio-publication' },
        { label: 'Alternative Learning System (ALS)', path: '/external-affairs/als' },
        { label: 'Parent Teacher Association (PTA)', path: '/external-affairs/pta' },
        { label: 'Faculty & Staff Association (FSA)', path: '/external-affairs/fsa' },
        { label: 'Alumni Association (AA)', path: '/external-affairs/alumni-association' }
      ]
    }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => { setIsOpen(false); setMobileDropdown(null); };

  const handleMouseEnter = (label) => {
    if (window.innerWidth >= 768) setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) setActiveDropdown(null);
  };
  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.nav-item')) setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="brand-link" onClick={closeMenu}>
            <img src={dwssiiLogo} alt="DWSSII Official Logo" className="brand-logo" />
            <div className="brand-text-wrapper">
              <span className="brand-text">DIVINE WORD SCHOOL OF SEMIRARA ISLAND INC.</span>
              <span className="brand-text-mobile">DWSSII</span>
            </div>
          </Link>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <li key={link.path} className={`nav-item ${link.items ? 'has-dropdown' : ''}`} onMouseEnter={() => handleMouseEnter(link.label)} onMouseLeave={handleMouseLeave}>
              {link.items ? (
                <>
                  <button 
                    className={`nav-link dropdown-toggle ${location.pathname.startsWith(link.path) || (link.label === 'HOME' && location.pathname === '/') ? 'active' : ''}`} 
                    onClick={() => window.innerWidth < 768 && toggleMobileDropdown(link.label)} 
                    aria-expanded={mobileDropdown === link.label} 
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg className={`dropdown-arrow ${mobileDropdown === link.label ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.ul className={`dropdown-menu ${link.multiColumn ? 'multi-column' : ''}`} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} role="menu">
                        {link.items.map((item, index) => (
                          <li key={index} role="none">
                            <Link to={item.path} className="dropdown-item" onClick={closeMenu} role="menuitem">{item.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {mobileDropdown === link.label && window.innerWidth < 768 && (
                      <motion.ul className="mobile-dropdown-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        {link.items.map((item, index) => (
                          <li key={index}>
                            <Link to={item.path} className="mobile-dropdown-item" onClick={closeMenu}>{item.label}</Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  to={link.path} 
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`} 
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* ===== FACEBOOK ICON LINK ===== */}
        <a 
          href="https://www.facebook.com/profile.php?id=100063836508700" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="nav-facebook"
          aria-label="Visit our Facebook page"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>

        <button className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}