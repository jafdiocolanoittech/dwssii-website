import { Link } from 'react-router-dom';
export default function Security() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/administration">Administration</Link><span className="separator">/</span>
            <span className="current">Security</span>
          </div>
          <h1>Security Office</h1>
          <p className="tagline">Campus Safety</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Security</span>
            <h2>Security Office</h2>
            <p>Ensuring the safety and security of our campus.</p>
          </div>
        </div>
      </section>
    </main>
  );
}