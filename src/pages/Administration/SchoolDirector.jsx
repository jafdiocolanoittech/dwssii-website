import { motion } from 'framer-motion';
import directorImage from '../../assets/images/school-director1.png';
import sdBanner from '../../assets/navbar/sd.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function SchoolDirector() {
  return (
    <main className="subpage">
      {/* Dedicated hero — pure image, no text */}
      <section className="sd-hero">
        <img
          src={sdBanner}
          alt="Office of the School Director banner"
          className="sd-hero__img"
        />
        <div className="sd-hero__overlay" />
      </section>

      {/* ===== DIRECTOR PROFILE SECTION ===== */}
      <section className="director-section" aria-labelledby="director-heading" style={{ paddingTop: '1.5rem' }}>
        <div className="container">
          
          <div className="director-layout" style={{ gap: '2rem' }}>
            {/* LEFT: Portrait Image */}
            <motion.div
              className="director-image-col"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="director-image-frame">
                <img
                  src={directorImage}
                  alt="Fr. Rico Glenn C. Deuna - School Director of DWSSII"
                  className="director-image"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/* RIGHT: Profile Details */}
            <motion.div
              className="director-text-col"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="profile-section" style={{ marginBottom: '1.25rem' }}>
                <h3 className="profile-title" style={{ marginBottom: '0.5rem' }}>Affiliations</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Society of the Divine Word (SVD)</strong>
                    <ul>
                      <li>Date of Ordination: February 9, 2008</li>
                      <li>Years in Priesthood: 18</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Philippine Dental Association (PDA)</strong> — Member since 1991
                  </li>
                </ul>
              </div>

              <div className="profile-section" style={{ marginBottom: '1.25rem' }}>
                <h3 className="profile-title" style={{ marginBottom: '0.5rem' }}>Educational Attainment</h3>
                <ul className="profile-list">
                  <li>
                    <strong>University of the Philippines Manila (UP, Manila)</strong> (2010)
                    <br />Master of Hospital Administration (MHA)
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2008)
                    <br />Master of Arts in Theology, Major in Pastoral Ministry (MAPM)
                  </li>
                  <li>
                    <strong>Manila Central University (MCU)</strong> (1991)
                    <br />Doctor of Dental Medicine (DMD)
                  </li>
                </ul>
              </div>

              <div className="profile-section" style={{ marginBottom: '1.25rem' }}>
                <h3 className="profile-title" style={{ marginBottom: '0.5rem' }}>Published Works / Awards</h3>
                <ul className="profile-list">
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong> (2008)
                    <br />Master of Arts in Theology, Major in Pastoral Ministry — Summa Cum Laude
                  </li>
                  <li>
                    <strong>Divine Word Seminary Tagaytay (DWST)</strong>
                    <br />Ecclesiastical Course — Magna Cum Laude
                  </li>
                </ul>
              </div>

              <div className="profile-section" style={{ marginBottom: '1.25rem' }}>
                <h3 className="profile-title" style={{ marginBottom: '0.5rem' }}>Years of Service at DWSSII</h3>
                <p className="profile-text">
                  4 months (July 1, 2026 – Present)
                </p>
              </div>

              <div className="profile-section" style={{ marginBottom: '0' }}>
                <h3 className="profile-title" style={{ marginBottom: '0.5rem' }}>Work Experiences</h3>
                <ul className="profile-list work-list">
                  <li>CEO at Holy Name University Medical Center in Tagbilaran City, Bohol</li>
                  <li>Vice President for Administration at Divine Word College of Legazpi</li>
                  <li>Administrative Officer / VP Admin at Saint Jude Catholic School</li>
                  <li>Parish Priest at Chair of St. Peter Parish Church, Rizal, Occ. Mindoro</li>
                  <li>Parish Priest at Sto. Niño de Violago Quasi Parish, Quezon City</li>
                  <li>Mission Church Administrator at Rio Tuba, Bataraza, Palawan</li>
                  <li>Parochial Vicar at St. Arnold Janssen Parish Shrine in Cainta, Rizal</li>
                  <li>Parochial Vicar at Sto. Niño Parish Church in Apurawan, Aborlan, Palawan</li>
                  <li>Guest Priest at Sto. Niño Cathedral in Calapan, Mindoro</li>
                  <li>Private Dental Practice for 9 years at Deuna Dental Clinic, Sampaloc, Manila (1991–2000)</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}