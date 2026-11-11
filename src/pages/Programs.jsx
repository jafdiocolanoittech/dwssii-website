import { motion } from 'framer-motion';

export default function Programs() {
  const basicPrograms = [
    { title: 'Kindergarten', description: 'Our kindergarten program focuses on holistic development through play-based learning, social interaction, and foundational skills in literacy and numeracy.' },
    { title: 'Elementary', description: 'We provide a strong academic foundation with emphasis on critical thinking, creativity, and character development aligned with the K-12 curriculum.' },
    { title: 'Junior High School', description: 'Our junior high program prepares students for higher education with a balanced curriculum that includes academics, values formation, and extracurricular activities.' }
  ];

  const tracks = [
    { code: 'ABM', title: 'Accountancy, Business, and Management', description: 'Prepares students for careers in business, finance, and entrepreneurship with specialized subjects in accounting, economics, and business management.' },
    { code: 'HUMSS', title: 'Humanities and Social Sciences', description: 'Focuses on developing critical thinking and communication skills for careers in education, social sciences, journalism, and public service.' },
    { code: 'STEM', title: 'Science, Technology, Engineering, and Mathematics', description: 'Equips students with advanced knowledge in sciences and mathematics for careers in engineering, health sciences, and technology fields.' },
    { code: 'TVL', title: 'Technical-Vocational-Livelihood', description: 'Provides practical skills and certifications in areas like ICT, home economics, and industrial arts for immediate employment or entrepreneurship.' }
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
          <h1>Our Programs</h1>
        </motion.div>
      </section>

      <section className="programs-content">
        <div className="container">
          <motion.div 
            className="program-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Basic Education</h2>
            <div className="program-details">
              {basicPrograms.map((program, idx) => (
                <motion.div 
                  key={program.title}
                  className="program-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="program-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2>Senior High School Tracks</h2>
            <div className="track-grid">
              {tracks.map((track, idx) => (
                <motion.div 
                  key={track.code}
                  className="track-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="track-icon">{track.code}</div>
                  <h3>{track.title}</h3>
                  <p>{track.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}