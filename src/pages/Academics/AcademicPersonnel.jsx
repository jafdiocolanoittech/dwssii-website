import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Correct relative path + escaped apostrophe (same pattern as your working Principal.jsx)
import principalImg from '../../assets/director\'s council/profile/principal2.png';
import asstPrincipalImg from '../../assets/director\'s council/profile/asst2.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
};

/* ================= TEACHER DATA ================= */

const coordinators = [
  { position: "P-CDC COORDINATOR", name: "ADLAWON, SHAELAMIE L., MAED-SPED" },
  { position: "SAC - MAPEH", name: "BALLEZA, LORABEL B., LPT" },
  { position: "SAC - COMPUTER EDUCATION & ROBOTICS", name: "BARONGAN, KAREN S., LPT" },
  { position: "SAC - ENGLISH | FSA - TP REPRESENTATIVE", name: "CREDO, ENOCH RIAN A., LPT" },
  { position: "SAC - C.L.V.E", name: "DIAGBEL, EDCYNTH ROSE R., LPT" },
  { position: "SAC - FILIPINO", name: "FERNANDEZ, RODESTO E., MAED-FIL" },
  { position: "SAC - MATH | FSA - AUDITOR", name: "GUARO, JONALISA S., MAED-MATH" },
  { position: "SAC - ARALING PANLIPUNAN", name: "GUPONG, EMILYN P., MAED-SST" },
  { position: "SAC - SCIENCE", name: "VILLANUEVA, ANAMARIE F., LPT" },
];

const headClassFormators = [
  { position: "SHS HEAD CLASS FORMATOR", name: "BALAO, JOHN ALEXANDER N., LPT" },
  { position: "JHS HEAD CLASS FORMATOR", name: "BARTOLO, JESSA F., LPT" },
  { position: "GRADE SCHOOL HEAD CLASS FORMATOR", name: "VILLARAMA, MARVEE JOY A., LPT" },
];

const preChildCareTeachers = [
  { position: "P-CDC TEACHER / CLASS FORMATOR", name: "CORDERO, LIZ ANN A., LPT" },
  { position: "P-CDC TEACHER / CLASS FORMATOR", name: "ILUSTRE, DYNAWIL B., LPT" },
  { position: "P-CDC TEACHER", name: "MIGUEL, LOSIE G., LPT" },
  { position: "P/CDC TEACHER / CLASS FORMATOR", name: "SALGAN, ARCHIE MAY S., LPT" },
];

const gradeSchoolTeachers = [
  { position: "GS MAKABANSA TEACHER / CLASS FORMATOR", name: "CARDOZA, ROMARIE B., LPT" },
  { position: "GS A.P & READING ENGLISH TEACHER / CLASS FORMATOR", name: "CORESIS, ROGELYN E., LPT" },
  { position: "GS ENGLISH & MATH TEACHER / CLASS FORMATOR", name: "ENCABO, JOVY T., LPT" },
  { position: "GS FILIPINO & SCIENCE ENRICHMENT TEACHER", name: "GERALDO, NELSON A., LPT" },
  { position: "GS ENGLISH TEACHER / CLASS FORMATOR", name: "GERALDO, PRINCESS Q., LPT" },
  { position: "GS SCIENCE & AP TEACHER / CLASS FORMATOR", name: "GONZALES, MARY CHRISTINE B., LPT" },
  { position: "GS MATH TEACHER / CLASS FORMATOR", name: "GREGORIO, SHEENA B., LPT" },
  { position: "GS C.L.V.E TEACHER / CLASS FORMATOR", name: "LAMANILAO, NOVIE GRACE R., LPT" },
  { position: "GS ENGLISH READING / SRA", name: "MADARCOS, BERLITA S." },
  { position: "GS FILIPINO TEACHER", name: "MANALO, JONA E., LPT" },
  { position: "GS SCIENCE & CLVE TEACHER / CLASS FORMATOR", name: "NERI, APRIL JANE E., LPT" },
  { position: "GS HELE TEACHER / TLE LAB. CUSTODIAN", name: "QUIAMBAO, DAISY M., LPT" },
  { position: "GS FILIPINO READING TEACHER / CLASS FORMATOR", name: "REYES, JANEN PIE S., LPT" },
  { position: "GS COMP. ED. & ROBOTICS TEACHER / CLASS FORMATOR", name: "YSUG, APPLE GRACE, LPT" },
];

const chineseLanguageTeachers = [
  { position: "CHINESE TEACHER", name: "LIU, YUXIN / JOSEPHINE" },
  { position: "CHINESE TEACHER", name: "ZHANG, XUEJIAO / ASTERIA" },
];

const juniorHighSchoolTeachers = [
  { position: "JHS - CLVE | FSA - PRESIDENT", name: "ALLEN, JOY S., MAGC" },
  { position: "JHS TLE TEACHER / CLASS FORMATOR", name: "BETONIO, GEMALYN A., LPT" },
  { position: "JHS MATH TEACHER", name: "CUENCA, YVONNE V., LPT" },
  { position: "JHS TLE / COMPUTER ED TEACHER / CLASS FORMATOR", name: "DAGOS, NICA JEAN E., LPT" },
  { position: "JHS T.L.E TEACHER / CLASS FORMATOR", name: "DAPUCANTA, JESSA D., LPT" },
  { position: "JHS FILIPINO TEACHER / CLASS FORMATOR", name: "DOLATRE, MICHELLE H., LPT" },
  { position: "JHS A.P TEACHER / CLASS FORMATOR", name: "MADARCOS, IME L., LPT" },
  { position: "JHS FILIPINO TEACHER / CLASS FORMATOR", name: "MAGBANUA, SYRINE I., LPT" },
  { position: "JHS MATHEMATICS TEACHER", name: "GARCIA, JUSTINE MARIE J., LPT" },
  { position: "JHS ENGLISH TEACHER / CLASS FORMATOR", name: "LANDICHO, TERESA S., LPT" },
  { position: "JHS SCIENCE TEACHER / CLASS FORMATOR", name: "MELITON, ARLENE MAE G., LPT" },
  { position: "JHS ENGLISH TEACHER / CLASS FORMATOR", name: "NAZARENO, ROVEJEN A., LPT" },
  { position: "JHS AP TEACHER / CLASS FORMATOR", name: "SALINAS, MA. THERESA STEPAHANE S., LPT" },
  { position: "GS ENGLISH READING TEACHER", name: "SANCHEZ, EMYLYN E., LPT" },
  { position: "JHS MAPEH TEACHER", name: "TAN, MARIA LOURDES G., LPT" },
  { position: "JHS - SCIENCE TEACHER / CLASS FORMATOR", name: "VASQUEZ, HAIDEE C., LPT" },
  { position: "JHS - C.L.V.E TEACHER / CLASS FORMATOR", name: "VICTOR, JEANICCA D., LPT" },
];

const seniorHighSchoolTeachers = [
  { position: "SHS MATH TEACHER / CLASS FORMATOR", name: "ABANCIO, EMMA SHEILA LYN A., LPT" },
  { position: "SHS FILIPINO TEACHER / CLASS FORMATOR", name: "CAÑA, MAILA C., MAED-FIL" },
  { position: "SHS AP TEACHER", name: "DAPUCANTA, AMGELYN M., LPT" },
  { position: "TECH PROF PROGRAM COORDINATOR", name: "DIONELA, MELANIE A., LPT" },
  { position: "SHS MATH TEACHER / CLASS FORMATOR", name: "DIVINAGRACIA, JOHN CRISTOPHER P., LPT" },
  { position: "SHS MAPEH TEACHER / CLASS FORMATOR", name: "GOZAR, ANNA MAE S." },
  { position: "SHS MAPEH TEACHER / CLASS FORMATOR", name: "GRAGASIN, ARC ADRIAN C." },
  { position: "SHS FILIPINO TEACHER / CLASS FORMATOR", name: "LEONAR, MARIVIC C., LPT" },
  { position: "SHS SCIENCE TEACHER / CLASS FORMATOR", name: "PANAGSAGAN, DANICA T., LPT" },
  { position: "ACADEMIC PROGRAM COORDINATOR", name: "PASCUAL, JOYCE Y., LPT" },
  { position: "SHS SCIENCE TEACHER / CLASS FORMATOR", name: "YSUG, GAEA ATHENA A., LPT" },
];

/* ================= SUB-COMPONENTS ================= */

function Leader({ img, name, role, to }) {
  return (
    <motion.div
      className="ap-leader"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Rectangle photo, no border/radius — click goes to credentials page */}
      <Link to={to} className="ap-leader-photo" title={`View credentials of ${name}`}>
        <img src={img} alt={`${name} - ${role} of DWSSII`} decoding="async" />
      </Link>
      <h2 className="ap-leader-name">{name}</h2>
      <p className="ap-leader-role">{role}</p>
      <Link to={to} className="ap-leader-link">View Credentials →</Link>
    </motion.div>
  );
}

function TeacherBlock({ title, rows }) {
  return (
    <motion.div
      className="ap-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="ap-block-title">{title}</h3>
      <ul className="ap-teacher-list">
        {rows.map((r, i) => (
          <li key={i} className="ap-teacher">
            <span className="ap-teacher-pos">{r.position}</span>
            <span className="ap-teacher-name">{r.name}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

/* ================= MAIN PAGE ================= */

export default function AcademicPersonnel() {
  const heroRef = useRef(null);

  // Scroll-linked shrink: writes a 0 -> 1 progress value (--p) straight to the
  // hero's CSS. No React state, no re-renders, no class toggling, so no flicker.
    useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    const update = () => {
      // Standard, most reliable scroll detection across ALL devices (Desktop & Mobile)
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      
      // Fallback to 80 (desktop) or 60 (mobile, per your CSS media query)
      const shrink = parseFloat(getComputedStyle(hero).getPropertyValue('--hero-shrink')) || 80;
      const safeShrink = shrink > 0 ? shrink : 80;
      
      const p = Math.min(Math.max(scrollY / safeShrink, 0), 1);
      hero.style.setProperty('--p', p.toFixed(3));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Initial call
    update();

    // Standard listeners (passive: true is best for mobile performance)
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <main className="subpage">
      {/* ===== HERO (shrinks on scroll, no breadcrumb) ===== */}
      <section ref={heroRef} className="hero-subpage">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1>Academic Personnel</h1>
            <p className="tagline">
              Meet our dedicated faculty and academic staff at Divine Word School of Semirara Island, Inc.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== TWO-COLUMN LAYOUT: PRINCIPAL | ASSISTANT PRINCIPAL ===== */}
      <section className="ap-section">
        <div className="container">
          <div className="ap-columns">

            {/* ---------- LEFT: PRINCIPAL ---------- */}
            <div className="ap-col">
              <Leader
                img={principalImg}
                name="Grace A. Arguelles"
                role="Basic Education Principal"
                to="/administration/principal"
              />

              <TeacherBlock title="Coordinators" rows={coordinators} />
              <TeacherBlock title="Head Class Formators" rows={headClassFormators} />
              <TeacherBlock title="Pre-Child Care and Development Center Teachers" rows={preChildCareTeachers} />
              <TeacherBlock title="Grade School Teachers" rows={gradeSchoolTeachers} />
              <TeacherBlock title="Chinese Language Teachers" rows={chineseLanguageTeachers} />
              <TeacherBlock title="Junior High School Teachers" rows={juniorHighSchoolTeachers} />
            </div>

            {/* ---------- RIGHT: ASSISTANT PRINCIPAL ---------- */}
            <div className="ap-col">
              <Leader
                img={asstPrincipalImg}
                name="Joy P. Sanico"
                role="Assistant Principal - Senior High School"
                to="/administration/asst-principal"
              />

              <TeacherBlock title="Senior High School Teachers" rows={seniorHighSchoolTeachers} />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}