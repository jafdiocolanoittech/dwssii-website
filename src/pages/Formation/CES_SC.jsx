import { Link } from 'react-router-dom';
export default function CES_SC() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">CES-SC</span>
          </div>
          <h1>CES-SC</h1>
          <p className="tagline">Civic Education & Student Council</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Civic Education</span>
            <h2>CES-SC</h2>
            <p>Developing responsible and engaged student leaders.</p>
          </div>
        </div>
      </section>
    </main>
  );
}