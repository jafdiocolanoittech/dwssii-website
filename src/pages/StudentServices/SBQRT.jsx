import { Link } from 'react-router-dom';
export default function SBQRT() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">SBQRT</span>
          </div>
          <h1>SBQRT</h1>
          <p className="tagline">Student Services</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Services</span>
            <h2>SBQRT</h2>
            <p>Providing quality student services and support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}