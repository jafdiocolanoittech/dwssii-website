import { Link } from 'react-router-dom';
export default function FSA() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/student-services">Student Services</Link><span className="separator">/</span>
            <span className="current">FSA</span>
          </div>
          <h1>FSA</h1>
          <p className="tagline">Food Service Administration</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">FSA</span>
            <h2>Food Service Administration</h2>
            <p>Managing food services and canteen operations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}