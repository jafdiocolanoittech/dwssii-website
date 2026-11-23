import { Link } from 'react-router-dom';
export default function Transportation() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/student-services">Student Services</Link><span className="separator">/</span>
            <span className="current">Transportation</span>
          </div>
          <h1>Transportation</h1>
          <p className="tagline">School Transport Services</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Transport</span>
            <h2>Transportation Office</h2>
            <p>Managing school transportation services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}