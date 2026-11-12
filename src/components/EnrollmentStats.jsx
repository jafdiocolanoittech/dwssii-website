import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Smooth count-up hook with eased animation
const useCountUp = (end, duration = 2200, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration, start]);

  return [count, ref];
};

// Clean line-style SVG icons (corporate feel, no emojis)
const Icons = {
  students: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  ),
  teachers: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  staff: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  ),
  programs: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  ),
  years: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  graduates: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="7"/>
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
    </svg>
  ),
};

const StatCard = ({ number, icon, targetValue, label, description }) => {
  const [count, ref] = useCountUp(targetValue, 2200);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="corp-stat-card"
    >
      <div className="corp-stat-number">{String(number).padStart(2, '0')}</div>
      <div className="corp-stat-icon">{icon}</div>
      <div className="corp-stat-value">{count.toLocaleString()}</div>
      <div className="corp-stat-label">{label}</div>
      <div className="corp-stat-description">{description}</div>
    </motion.div>
  );
};

const EnrollmentStats = () => {
  const enrollmentData = [
    { level: "Toddler", count: 25 },
    { level: "Nursery", count: 24 },
    { level: "Kindergarten", count: 24 },
    { level: "Grade School", count: 273 },
    { level: "Junior High School", count: 488 },
    { level: "Senior High School", count: 377 },
    { level: "Alternative Learning System (ALS)", count: 0 },
  ];

  const totalEnrollment = 1211;

  const stats = [
    { icon: Icons.students, targetValue: 1211, label: "Total Students", description: "Enrolled for A.Y. 2026–2027" },
    { icon: Icons.teachers, targetValue: 56, label: "Teaching Personnel", description: "Dedicated educators and mentors" },
    { icon: Icons.staff, targetValue: 80, label: "Non-Teaching Personnel", description: "Supporting staff and administration" },
    { icon: Icons.programs, targetValue: 15, label: "Academic Programs", description: "From Toddler to Senior High School" },
    { icon: Icons.years, targetValue: 23, label: "Years of Service", description: "Serving Semirara Island since 2003" },
    { icon: Icons.graduates, targetValue: 5000, label: "Total Graduates", description: "Alumni making a difference worldwide" },
  ];

  return (
    <section className="corp-enrollment-section">
      <div className="container">
        {/* Part 1: Student Population */}
        <div className="corp-section-block">
          <div className="corp-section-header">
            <div className="corp-section-eyebrow">Enrollment Data</div>
            <h2 className="corp-section-title">Student Population</h2>
            <p className="corp-section-subtitle">Academic Year 2026–2027</p>
          </div>

          <div className="corp-table-wrapper">
            <table className="corp-table">
              <thead>
                <tr>
                  <th>Department / Level</th>
                  <th className="text-right">Enrolled</th>
                </tr>
              </thead>
              <tbody>
                {enrollmentData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.level}</td>
                    <td className="text-right">
                      {item.count > 0 ? item.count.toLocaleString() : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="corp-table-total">
                  <td>Total Enrollment</td>
                  <td className="text-right">{totalEnrollment.toLocaleString()}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Part 2: Institutional Statistics */}
        <div className="corp-section-block">
          <div className="corp-section-header">
            <div className="corp-section-eyebrow">Institutional Profile</div>
            <h2 className="corp-section-title">DWSSII by the Numbers</h2>
            <p className="corp-section-subtitle">
              A testament to our commitment to Divinian excellence
            </p>
          </div>

          <div className="corp-stats-grid">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                number={index + 1}
                icon={stat.icon}
                targetValue={stat.targetValue}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentStats;