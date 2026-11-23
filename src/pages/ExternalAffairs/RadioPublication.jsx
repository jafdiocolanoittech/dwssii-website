import { Link } from 'react-router-dom';
export default function RadioPublication() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/external-affairs">External Affairs</Link><span className="separator">/</span>
            <span className="current">Radio & Publication</span>
          </div>
          <h1>Radio & Publication</h1>
          <p className="tagline">Campus Media</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Media</span>
            <h2>Radio & Publication</h2>
            <p>School publications and campus radio services.</p>
          </div>
        </div>
      </section>
    </main>
  );
}