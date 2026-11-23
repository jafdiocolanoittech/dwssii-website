import { Link } from 'react-router-dom';
export default function Registrar() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/student-services">Student Services</Link><span className="separator">/</span>
            <span className="current">Registrar</span>
          </div>
          <h1>Registrar's Office</h1>
          <p className="tagline">Records and Enrollment</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Registrar</span>
            <h2>Registrar's Office</h2>
            <p>Managing student records and enrollment services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}