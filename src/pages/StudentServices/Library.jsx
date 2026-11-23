import { Link } from 'react-router-dom';
export default function Library() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/student-services">Student Services</Link><span className="separator">/</span>
            <span className="current">Library</span>
          </div>
          <h1>Library</h1>
          <p className="tagline">Learning Resources Center</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Library</span>
            <h2>DWSSII Library</h2>
            <p>Access to learning resources and research materials.</p>
          </div>
        </div>
      </section>
    </main>
  );
}