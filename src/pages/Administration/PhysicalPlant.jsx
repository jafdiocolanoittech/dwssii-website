import { Link } from 'react-router-dom';
export default function PhysicalPlant() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/administration">Administration</Link><span className="separator">/</span>
            <span className="current">Physical Plant</span>
          </div>
          <h1>Physical Plant</h1>
          <p className="tagline">Facilities Management</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Facilities</span>
            <h2>Physical Plant Office</h2>
            <p>Maintaining our campus facilities and infrastructure.</p>
          </div>
        </div>
      </section>
    </main>
  );
}