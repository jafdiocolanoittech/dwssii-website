import React, { useRef, useEffect, useState } from 'react';

// Import facility images
import lawntennis from '../../assets/facilities/lawntennis.png';
import oval from '../../assets/facilities/oval.png';
import principalsoffice from '../../assets/facilities/principalsoffice.png';
import rpdo from '../../assets/facilities/rpdo.png';
import sciencelab from '../../assets/facilities/sciencelab.png';
import shsstud from '../../assets/facilities/shsstud.png';
import swimmingpool from '../../assets/facilities/swimmingpool.png';
import admin from '../../assets/facilities/admin.png';
import bbcourt from '../../assets/facilities/bbcourt.png';
import chappel from '../../assets/facilities/chappel.png';
import comlab from '../../assets/facilities/comlab.png';
import fitnessgym from '../../assets/facilities/fitnessgym.png';
import gs from '../../assets/facilities/gs.png';
import hallway from '../../assets/facilities/hallway.png';
import jhs1 from '../../assets/facilities/jhs1.png';

export default function PhysicalPlant() {
  const heroRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null); // Tracks which image is open

  // Scroll-linked hero shrink effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const maxScroll = 350; 
        const progress = Math.min(scrollY / maxScroll, 1);
        heroRef.current.style.setProperty('--p', progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for lightbox (Arrow keys & Escape)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  const facilities = [
    { img: admin, label: "Admin Building" },
    { img: principalsoffice, label: "Principal's Office" },
    { img: rpdo, label: "RPD Office" },
    { img: gs, label: "Grade School Department" },
    { img: jhs1, label: "Junior High School" },
    { img: shsstud, label: "Senior High School" },
    { img: sciencelab, label: "Science Laboratory" },
    { img: comlab, label: "Computer Laboratory" },
    { img: chappel, label: "School Chapel" },
    { img: hallway, label: "School Hallway" },
    { img: oval, label: "School Oval" },
    { img: bbcourt, label: "Basketball Court" },
    { img: lawntennis, label: "Lawn Tennis Court" },
    { img: swimmingpool, label: "Swimming Pool" },
    { img: fitnessgym, label: "Fitness Gym" },
  ];

  return (
    <main className="facilities-page bg-gray-50 font-sans">
      {/* Hero Section */}
      <div ref={heroRef} className="facilities-hero">
        <img src={admin} alt="DWSSII Campus Banner" />
        <div className="absolute inset-0 bg-green-900/30"></div>
      </div>

      {/* Compact Intro Section */}
      <section className="facilities-intro">
        <div className="facilities-intro-card">
          <span className="inline-block px-3 py-1 mb-2 text-xs font-bold tracking-wider text-green-800 uppercase bg-green-100 rounded-full">
           
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-green-900 mb-2">
            Physical Plant Facilities
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-3xl">
            Maintaining our campus facilities and infrastructure to provide a safe, 
            conducive, and excellent learning environment for the DWSSII community.
          </p>
        </div>
      </section>

      {/* Organized, Compact Image Grid */}
      <section className="facilities-grid">
        {facilities.map((facility, index) => (
          <div key={index} className="facility-card">
            <div 
              className="facility-img-wrap" 
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${facility.label}`}
            >
              <img src={facility.img} alt={facility.label} loading="lazy" />
            </div>
            <div className="facility-label">
              {facility.label}
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox / Slideshow Modal */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Close">
              &times;
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage} aria-label="Previous">
              &#10094;
            </button>
            
            <img 
              src={facilities[lightboxIndex].img} 
              alt={facilities[lightboxIndex].label} 
              className="lightbox-image" 
            />
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage} aria-label="Next">
              &#10095;
            </button>
            
            <div className="lightbox-caption">
              {facilities[lightboxIndex].label} 
              <span className="text-gray-400 text-sm ml-2">({lightboxIndex + 1} / {facilities.length})</span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}