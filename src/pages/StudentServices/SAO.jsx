import { Link } from 'react-router-dom';
export default function SAO() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">SAO</span>
          </div>
          <h1>SAO</h1>
          <p className="tagline">Student Affairs Office</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Student Affairs</span>
            <h2>Student Affairs Office</h2>
            <p>Supporting student development and welfare.</p>
          </div>
        </div>
      </section>
    </main>
  );
}