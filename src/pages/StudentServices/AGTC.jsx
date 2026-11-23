import { Link } from 'react-router-dom';
export default function AGTC() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/student-services">External Affairs</Link><span className="separator">/</span>
            <span className="current">AGTC</span>
          </div>
          <h1>AGTC</h1>
          <p className="tagline">Academic and General Training Center</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Training</span>
            <h2>AGTC</h2>
            <p>Academic and general training programs for students.</p>
          </div>
        </div>
      </section>
    </main>
  );
}