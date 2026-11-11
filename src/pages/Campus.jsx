import { motion } from 'framer-motion';

export default function Campus() {
  const galleryImages = [
    { src: '/images/campus1.jpg', alt: 'School Building' },
    { src: '/images/campus2.jpg', alt: 'Classroom' },
    { src: '/images/campus3.jpg', alt: 'Laboratory' },
    { src: '/images/campus4.jpg', alt: 'Library' },
    { src: '/images/campus5.jpg', alt: 'Sports Field' },
    { src: '/images/campus6.jpg', alt: 'School Event' }
  ];

  const events = [
    { day: '24', month: 'OCT', title: 'School Cultural Event', description: 'A celebration of student talents and cultural heritage, featuring performances and interactive activities.', time: '1:00 PM - 4:00 PM' },
    { day: '23', month: 'OCT', title: 'Division Wide Earthquake and Tsunami Drill', description: 'A safety preparedness activity conducted under the guidance of DepEd to train students and staff in proper evacuation procedures.', time: '1:00 PM - 4:00 PM' },
    { day: '20', month: 'DEC', title: 'Christmas Party', description: 'School-wide Christmas celebration featuring class presentations, games, and simple gift-giving to promote unity.', time: '8:00 AM - 12:00 PM' }
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
          <h1>Campus Life</h1>
        </motion.div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <h2>Photo Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((image, idx) => (
              <motion.div 
                key={idx}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.img 
                  src={image.src} 
                  alt={image.alt} 
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="events-container">
            {events.map((event, idx) => (
              <motion.div 
                key={idx}
                className="event-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p className="event-time">{event.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}