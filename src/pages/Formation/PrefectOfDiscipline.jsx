import { Link } from 'react-router-dom';
export default function PrefectOfDiscipline() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">Prefect of Discipline</span>
          </div>
          <h1>Prefect of Discipline</h1>
          <p className="tagline">Student Discipline Office</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Discipline</span>
            <h2>Prefect of Discipline</h2>
            <p>Upholding order and discipline in the school community.</p>
          </div>
        </div>
      </section>
    </main>
  );
}