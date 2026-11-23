import { Link } from 'react-router-dom';
export default function HWO() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">HWO</span>
          </div>
          <h1>Health and Wellness Office</h1>
          <p className="tagline">Student Health Services</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Health</span>
            <h2>Health and Wellness Office</h2>
            <p>Promoting the health and well-being of students.</p>
          </div>
        </div>
      </section>
    </main>
  );
}   