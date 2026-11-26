import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Personnel Images
import financeHeadImage from '../../assets/images/financeofficer.jpg';
import financeGroupImage from '../../assets/images/finance.png';

/* ---------- EDIT YOUR FINANCE DETAILS HERE ---------- */

const SERVICES = [
  { title: 'Assessment of Fees', desc: 'Computation of tuition and other school fees upon enrollment.' },
  { title: 'Payment and Collection', desc: 'Receiving of payments and issuance of official receipts.' },
  { title: 'Statement of Account', desc: 'Information on balances, payments made, and upcoming dues.' },
  { title: 'Scholarships and Discounts', desc: 'Processing of approved scholarships, discounts, and assistance programs.' },
  { title: 'Financial Clearance', desc: 'Verification of accounts for examinations, records, and year-end clearance.' },
  { title: 'Billing Inquiries', desc: 'Assistance with questions or concerns about fees and payments.' }
];

const PAYMENT_GUIDELINES = [
  'Request your assessment form or statement of account from the Finance Office.',
  'Check the student name, grade or program, fees, discounts, and balance.',
  'Pay only through payment options approved by the school.',
  'Secure your official receipt and keep it for future verification.'
];

const REMINDERS = [
  'Do not send payments to personal accounts.',
  'Confirm payment details with the Finance Office before paying.',
  'Bring a valid school ID when asking about your account.',
  'Settle or verify your account before requesting financial clearance.'
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function Finance() {
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
            <h1>Finance Office</h1>
            <p className="tagline">Faithful Stewardship in Service of the School Community</p>
          </motion.div>
        </div>
      </section>

      {/* ===== FINANCE PERSONNEL (Each Photo With Its Own Content) ===== */}
      <section className="fin-office-section">
        {/* Finance Officer */}
        <div className="fin-office-grid">
          <div className="fin-office-images-col">
            <div className="fin-person-row fin-pic-stacked">
              <div className="fin-office-img-wrapper fin-head-img-wrapper">
                <img src={financeHeadImage} alt="Paoline S. Salinas, Finance Officer" className="fin-office-img" />
              </div>
              <div className="fin-person-info">
                <h4 className="fin-person-name">Paoline S. Salinas</h4>
                <span className="fin-person-title">School Accounting Officer</span>
              </div>
            </div>
          </div>

          <div className="fin-office-content-col">
            <p className="fin-office-text">
              The <strong>Finance Office of Divine Word School of Semirara Island, Inc. (DWSSII)</strong> manages the financial transactions of the school with honesty, accuracy, and accountability. It supports the school's mission by ensuring that resources are properly recorded, safeguarded, and used.
            </p>
            <p className="fin-office-text">
              Under the leadership of our <strong>School Accounting Officer, Paoline S. Salinas</strong>, the office assists students, parents, and employees with fee assessments, payments, account records, and other finance-related concerns.
            </p>
            <p className="fin-office-text">
              The Finance Officer oversees the daily financial operations of the school, including the monitoring of collections and disbursements, the proper documentation of transactions, and the safekeeping of financial records. Careful review of these records helps ensure that every amount received and spent is accounted for.
            </p>
            <p className="fin-office-text">
              The role also includes assisting in budget preparation and monitoring, so that school resources are directed to instruction, student services, facilities, and other institutional priorities. Financial reports are prepared to guide the school administration in planning and sound decision-making.
            </p>
            <p className="fin-office-text">
              In coordination with the other offices of the school, the Finance Officer upholds approved financial policies and internal controls, supports audit requirements, and promotes transparency in the management of funds.
            </p>
            <div className="fin-office-highlight">
              <p className="fin-office-highlight-text">
                To our students and families: thank you for your trust and cooperation. Your timely settlement of accounts helps us sustain quality Divine Word education.
              </p>
            </div>
          </div>
        </div>

        {/* Finance Office Team */}
        <div className="fin-office-grid fin-team-row">
          <div className="fin-office-images-col">
            <div className="fin-person-row fin-pic-stacked">
              <div className="fin-office-img-wrapper fin-combined-img-wrapper">
                <img src={financeGroupImage} alt="DWSSII Finance Office Team" className="fin-office-img" />
              </div>
              <div className="fin-person-info fin-combined-info">
                <div className="fin-staff-member">
                  <h4 className="fin-person-name">Finance Office Team</h4>
                  <span className="fin-person-title">DWSSII</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fin-office-content-col">
            <p className="fin-office-text">
              The <strong>Finance Office Team</strong> works together to provide orderly, accurate, and courteous service to the DWSSII community. Each transaction is handled with care, from the assessment of fees to the recording of payments.
            </p>
            <p className="fin-office-text">
              The team helps maintain updated student accounts, prepares statements of account, issues official receipts, and responds to billing inquiries from students and parents.
            </p>
            <p className="fin-office-text">
              Guided by the values of integrity and stewardship, the team protects the confidentiality of financial records and communicates account concerns clearly and respectfully.
            </p>
            <p className="fin-office-text">
              Through responsible financial service, the team helps the school carry out its mission of forming learners in the Divine Word tradition.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="fin-section fin-tinted">
        <div className="fin-wrap fin-block">
          <h2 className="fin-title">Finance Services</h2>
          <dl className="fin-services">
            {SERVICES.map((service) => (
              <div key={service.title}>
                <dt>{service.title}</dt>
                <dd>{service.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===== PAYMENT GUIDELINES AND REMINDERS ===== */}
      <section className="fin-section">
        <div className="fin-wrap">
          <div className="fin-block">
            <h2 className="fin-title">Payment Guidelines</h2>
            <ol className="fin-list">
              {PAYMENT_GUIDELINES.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </div>
          <div className="fin-block">
            <h2 className="fin-title">Important Reminders</h2>
            <ul className="fin-list">
              {REMINDERS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}