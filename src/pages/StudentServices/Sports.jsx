import { Link } from 'react-router-dom';
export default function Sports() {
  return (
    <main className="subpage">
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span className="separator">/</span>
            <Link to="/formation">Formation</Link><span className="separator">/</span>
            <span className="current">Sports</span>
          </div>
          <h1>Sports Office</h1>
          <p className="tagline">Athletics and Physical Education</p>
        </div>
      </section>
      <section className="intro">
        <div className="container">
          <div className="intro-text">
            <span className="section-label">Sports</span>
            <h2>Sports Office</h2>
            <p>Promoting physical fitness and athletic excellence.</p>
          </div>
        </div>
      </section>
    </main>
  );
}