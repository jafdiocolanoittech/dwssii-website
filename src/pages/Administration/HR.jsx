import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Personnel Images
import hrOfficerImage from '../../assets/images/hro.jpg';
import hrStaffImage from '../../assets/images/hr1.jpeg';

/* ---------- EDIT YOUR HRD CONTENT HERE ---------- */

const FUNCTIONS = [
  { title: 'Recruitment and Selection', desc: 'Identifying staffing needs, announcing vacancies, screening applications, and coordinating interviews and teaching demonstrations to select qualified personnel.' },
  { title: 'Onboarding and Orientation', desc: "Introducing new employees to the school's vision and mission, policies, work expectations, and the Divine Word community." },
  { title: 'Training and Development', desc: 'Organizing and supporting seminars, workshops, and in-service training that strengthen professional competence and personal growth.' },
  { title: 'Performance Management', desc: 'Coordinating performance evaluations, giving constructive feedback, and helping employees set goals for continuous improvement.' },
  { title: 'Timekeeping and Attendance', desc: 'Monitoring daily time records, attendance, tardiness, absences, and leave applications, and preparing accurate reports for payroll and administrative reference.' },
  { title: 'Compensation and Benefits', desc: 'Assisting with concerns on leave, benefits, and mandatory government contributions in coordination with the Finance Office.' },
  { title: 'Employee Relations and Welfare', desc: 'Promoting open communication, addressing workplace concerns fairly, and supporting the well-being of faculty and staff.' },
  { title: 'Records Management', desc: 'Maintaining accurate, updated, and confidential employee files and employment documents.' },
  { title: 'Policy and Compliance', desc: 'Helping implement school personnel policies and applicable labor, education, and data privacy requirements.' }
];

const HIRING_STEPS = [
  { title: 'Application', desc: 'Applicants submit their application letter and supporting documents to the HRDO.' },
  { title: 'Screening', desc: 'Qualifications, credentials, and experience are reviewed against the requirements of the position.' },
  { title: 'Interview and Assessment', desc: 'Shortlisted applicants are interviewed. Teaching applicants may be asked to give a demonstration lesson.' },
  { title: 'Selection and Job Offer', desc: 'The selected applicant is informed and the terms of employment are discussed.' },
  { title: 'Onboarding', desc: 'The new employee completes the requirements and attends orientation before or upon assuming duties.' }
];

const REQUIREMENTS = [
  'Application letter addressed to the school administration',
  'Updated resume or curriculum vitae',
  'Transcript of records and diploma',
  'Professional license, if required for the position',
  'Certificates of training and previous employment, if any',
  'Other documents that may be requested by the HRDO'
];

const COMMITMENTS = [
  { title: 'Fairness', desc: 'We apply policies consistently and treat every applicant and employee with respect.' },
  { title: 'Confidentiality', desc: 'We protect personal information in line with the Data Privacy Act of 2012.' },
  { title: 'Growth', desc: 'We encourage lifelong learning and the continuing formation of our personnel.' },
  { title: 'Community', desc: 'We nurture a collaborative workplace rooted in the Divine Word mission.' }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function HRD() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;
    const update = () => {
      const shrink = parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 180;
      const p = Math.min(Math.max(window.scrollY / shrink, 0), 1);
      hero.style.setProperty('--p', p.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <main className="subpage">
      {/* Hero Subpage (No Breadcrumb) */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Human Resource and Development Office</h1>
            <p className="tagline">Empowering People in Service of the Mission</p>
          </motion.div>
        </div>
      </section>

      {/* ===== HRD PERSONNEL (ZIGZAG) ===== */}
      <section className="hr-office-section">
        <div className="hr-office-grid">
          <motion.div
            className="hr-office-images-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Person 1: HRD Officer (Left) */}
            <div className="hr-person-row hr-pic-left">
              <div className="hr-office-img-wrapper">
                <img src={hrOfficerImage} alt="Ronald C. Ledda - Human Resources and Development Officer" className="hr-office-img" />
              </div>
              <div className="hr-person-info">
                <h4 className="hr-person-name">Ronald C. Ledda</h4>
                <span className="hr-person-title">Human Resources &amp; Development Officer</span>
              </div>
            </div>

            {/* Person 2: HRD Staff (Right) */}
            <div className="hr-person-row hr-pic-right">
              <div className="hr-office-img-wrapper">
                <img src={hrStaffImage} alt="Ann Marjorie P. Caminade - Human Resources and Development Staff" className="hr-office-img" />
              </div>
              <div className="hr-person-info">
                <h4 className="hr-person-name">Ann Marjorie P. Caminade</h4>
                <span className="hr-person-title">Human Resources &amp; Development Staff</span>
                <span className="hr-person-title">Talent Acquisition &amp; Employee Relations</span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Content */}
          <motion.div
            className="hr-office-content-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="hr-office-text">
              The <strong>Human Resource and Development Office (HRDO) of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> plays a vital role in advancing the institution’s vision, mission, and goals by recognizing its people as key partners in its educational and missionary endeavors.
            </p>
            <p className="hr-office-text">
              Guided by the school’s philosophy as a <strong>“Center of Learning and New Discovery in the Pursuit of Truth and Wisdom,”</strong> and inspired by the charism of Saint Arnold Janssen and the guidance of the Holy Spirit, the HRDO embraces Strategic Human Resource Management (SHRM) to promote organizational excellence, employee development, and mission fulfillment.
            </p>
            <p className="hr-office-text">
              Anchored in the core values of <strong>CHIMES</strong>—Christ-centeredness, Harmony with Nature, Integrity, Mission-Heartedness, Excellence, and Servant Leadership—the Office is committed to fostering a competent, values-driven, and mission-oriented workforce through effective recruitment, professional development, performance management, compensation, and employee relations.
            </p>
            <p className="hr-office-text">
              Through its policies, programs, and services, the HRDO promotes professionalism, accountability, fairness, and continuous growth, nurturing personnel who are intellectually, professionally, morally, and spiritually prepared to serve.
            </p>
            <div className="hr-office-highlight">
              <p className="hr-office-highlight-text">
                Ultimately, the HRDO strives to build a dynamic and engaged academic community where every employee contributes meaningfully to quality education, community development, environmental stewardship, and the formation of servant leaders dedicated to building a just, humane, and sustainable society.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HR FUNCTIONS ===== */}
      <section className="hr-section hr-tinted">
        <div className="hr-wrap">
          <header className="hr-header">
            <h2 className="hr-title">What the HRDO Does</h2>
            <p>Core functions that support our faculty and staff throughout their service.</p>
          </header>
          <dl className="hr-functions">
            {FUNCTIONS.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== CAREERS ===== */}
      <section className="hr-section">
        <div className="hr-wrap hr-careers">
          <div>
            <h2 className="hr-title">Recruitment and Hiring Process</h2>
            <p className="hr-lead">
              DWSSII welcomes qualified individuals who wish to share in its mission of Christian education. The general hiring process is outlined below.
            </p>
            <ol className="hr-steps">
              {HIRING_STEPS.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ol>
          </div>
          <aside className="hr-requirements">
            <h2 className="hr-title">Application Requirements</h2>
            <p className="hr-lead">Applicants are generally asked to prepare the following:</p>
            <ul>
              {REQUIREMENTS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </aside>
        </div>
      </section>

      {/* ===== DEVELOPMENT AND COMMITMENT ===== */}
      <section className="hr-section hr-tinted">
        <div className="hr-wrap">
          <header className="hr-header">
            <h2 className="hr-title">Our Commitment to Our People</h2>
            <p>
              Professional growth and a caring workplace go together. Through training, formation activities, and open dialogue, the HRDO helps every member of the community serve with competence and purpose.
            </p>
          </header>
          <div className="hr-commitments">
            {COMMITMENTS.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}