import { Link } from 'react-router-dom';
export default function Finance() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/administration">Administration</Link><span className="separator">/</span>
            <span className="current">Finance</span>
          </div>
          <h1>Finance Office</h1>
          <p className="tagline">Financial Services</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Finance</span>
            <h2>Finance Office</h2>
            <p>Managing the financial resources of DWSSII.</p>
          </div>
        </div>
      </section>
    </main>
  );
}