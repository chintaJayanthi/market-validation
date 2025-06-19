import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <>
      <section className="hero-section py-5" style={{ backgroundColor: '#F8FDFF' }}>
       
        <div className="container">
          <div className="row align-items-center hero-content">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#0A2540' }}>Market Validation</h1>
              <p className="lead mb-4" style={{ color: '#4A5568' }}>
                Market Validation is the process of presenting a concept for a product to its target market and learning from those prospective buyers whether or not the idea is worth pursuing.
              </p>
              <button className="btn btn-primary hero-button"
                style={{
                  backgroundColor: '#2AC6EA',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem'
                }}>
                Put Us To Work
              </button>
            </div>
            <div className="col-lg-6 hero-image-container">
              <img
                src="/images/hero-image.jpg"
                alt="Market Validation"
                className="img-fluid rounded-3"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
              />
            <div className="floating-card traffic-card">
  <img src="/images/generate-traffic.png" alt="Generate Traffic" className="icon-img" />
  <span className="icon-text">Generate Traffic</span>
</div>

  <div className="floating-card launch-card">
  <img src="/images/launch-icon.jpg" alt="Launch Sales" className="icon-img" />
  <span className="icon-text">Launch Sales</span>
</div>

            </div>
          </div>
        </div>
      </section>
      <div className="email-divider" style={{ display: 'flex', alignItems: 'center', marginTop: '2rem', color: '#3CB4E5' }}>
        <hr className="divider-line" style={{ flex: 0.1, border: 0, height: '1px', backgroundColor: '#3CB4E5' }} />
        <span className="email-text" style={{ margin: '0 1rem', whiteSpace: 'nowrap', fontWeight: 'bold',fontSize:22 }}>
          hello@domain.com
        </span>
        <hr className="divider-line" style={{ flex: 1.2, border: 0, height: '1px', backgroundColor: '#3CB4E5' }} />
      </div>
    </>
  );
};

export default HeroSection;
