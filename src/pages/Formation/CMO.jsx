import { Link } from 'react-router-dom';
export default function CMO() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">CMO</span>
          </div>
          <h1>CMO</h1>
          <p className="tagline">Campus Ministry Office</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Ministry</span>
            <h2>Campus Ministry Office</h2>
            <p>Nurturing the spiritual life of the campus community.</p>
          </div>
        </div>
      </section>
    </main>
  );
}