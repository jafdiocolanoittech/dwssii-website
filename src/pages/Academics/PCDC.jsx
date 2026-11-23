import { Link } from 'react-router-dom';
export default function PCDC() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/academics">Academics</Link><span className="separator">/</span>
            <span className="current">PCDC</span>
          </div>
          <h1>PCDC</h1>
          <p className="tagline">Pastoral and Christian Development Center</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Formation</span>
            <h2>PCDC</h2>
            <p>Pastoral and Christian formation for all Divinians.</p>
          </div>
        </div>
      </section>
    </main>
  );
}