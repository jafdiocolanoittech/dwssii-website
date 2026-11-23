import { Link } from 'react-router-dom';

export default function AA() {
  return (
    <main className="subpage">
      {/* Page Header */}
      <section className="hero hero-subpage">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">/</span>
            <Link to="/student-services">Student Services</Link>
            <span className="separator">/</span>
            <span className="current">AA</span>
          </div>
          <h1>AA Office</h1>
          <p className="tagline">Student Services Department</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <span className="section-label">About AA</span>
              <h2>AA Office</h2>
              <p>
                The AA Office at Divine Word School of Semirara Island, Inc. is dedicated 
                to supporting students through various programs and services that enhance 
                their educational experience.
              </p>
              <p>
                This office works closely with students, parents, and faculty to ensure 
                that every Divinian receives the guidance and assistance needed to succeed 
                academically, socially, and spiritually.
              </p>
              <Link to="/student-services" className="btn btn-primary" style={{ marginTop: '16px' }}>
                Back to Student Services
              </Link>
            </div>
            <div className="intro-image">
              <div style={{ 
                background: 'var(--light-green)', 
                height: '450px', 
                borderRadius: 'var(--radius-lg)', 
                display: 'grid', 
                placeItems: 'center', 
                color: 'var(--primary-green)', 
                fontSize: '1.25rem', 
                fontWeight: 600,
                border: '1px solid var(--border-light)'
              }}>
                AA Office Image
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="intro" style={{ background: 'var(--bg-neutral)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label-badge">Our Services</span>
            <h2 style={{ marginTop: '16px' }}>What We Offer</h2>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-letter">S</div>
              <h3>Support Programs</h3>
              <p>Providing comprehensive support services to students in need.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">G</div>
              <h3>Guidance</h3>
              <p>Offering guidance and counseling for academic and personal growth.</p>
            </div>
            <div className="value-card">
              <div className="value-letter">A</div>
              <h3>Assistance</h3>
              <p>Assisting students with various concerns and requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Student Services */}
      <section className="intro">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="section-label-badge">Student Services</span>
            <h2 style={{ marginTop: '16px' }}>Explore Other Services</h2>
          </div>

          <div className="events-container">
            <Link to="/student-services/registrar" className="related-link">
              <div className="event-card">
                <div className="event-date">
                  <div className="day">REG</div>
                  <div className="month">Office</div>
                </div>
                <div className="event-details">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Registrar</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                    Records and enrollment services
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/student-services/library" className="related-link">
              <div className="event-card">
                <div className="event-date">
                  <div className="day">LIB</div>
                  <div className="month">Office</div>
                </div>
                <div className="event-details">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Library</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                    Learning resources and research
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/student-services/fsa" className="related-link">
              <div className="event-card">
                <div className="event-date">
                  <div className="day">FSA</div>
                  <div className="month">Office</div>
                </div>
                <div className="event-details">
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>FSA</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', margin: 0 }}>
                    Student affairs and activities
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}