import { Link } from 'react-router-dom';
export default function HR() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/administration">Administration</Link><span className="separator">/</span>
            <span className="current">Human Resources</span>
          </div>
          <h1>Human Resources</h1>
          <p className="tagline">HR Department</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">HR</span>
            <h2>Human Resources Office</h2>
            <p>Supporting our faculty and staff.</p>
          </div>
        </div>
      </section>
    </main>
  );
}