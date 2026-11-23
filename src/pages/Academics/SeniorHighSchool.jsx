import { Link } from 'react-router-dom';
export default function SeniorHighSchool() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/academics">Academics</Link><span className="separator">/</span>
            <span className="current">Senior High School</span>
          </div>
          <h1>Senior High School</h1>
          <p className="tagline">Preparing for the Future</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Academics</span>
            <h2>Senior High School Department</h2>
            <p>Preparing students for college and career pathways.</p>
          </div>
        </div>
      </section>
    </main>
  );
}