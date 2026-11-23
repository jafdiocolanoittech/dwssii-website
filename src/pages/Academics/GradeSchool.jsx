import { Link } from 'react-router-dom';
export default function GradeSchool() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/academics">Academics</Link><span className="separator">/</span>
            <span className="current">Grade School</span>
          </div>
          <h1>Grade School</h1>
          <p className="tagline">Building Strong Foundations</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Academics</span>
            <h2>Grade School Department</h2>
            <p>Nurturing young minds in faith and learning.</p>
          </div>
        </div>
      </section>
    </main>
  );
}