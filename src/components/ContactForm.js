import React from 'react';

const ContactForm = () => {
  return (
    <section className="contact-form py-5" style={{ backgroundColor: '#F8FDFF' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4" style={{ color: '#0A2540' }}>Free Consultation</h2>
            <p className="lead mb-4" style={{ color: '#4A5568' }}>
              Lorem ipsum ihhhs simply dummy text of the printing and typesetting industry
            </p>
            <form>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Full Name"
                  style={{ borderRadius: '8px', padding: '12px 16px' }}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control form-control-lg" 
                  placeholder="Email"
                  style={{ borderRadius: '8px', padding: '12px 16px' }}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Company Name"
                  style={{ borderRadius: '8px', padding: '12px 16px' }}
                />
              </div>
              <div className="mb-3">
                <textarea 
                  className="form-control form-control-lg" 
                  rows="4" 
                  placeholder="Message"
                  style={{ borderRadius: '8px', padding: '12px 16px' }}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary px-4 py-3"
                style={{
                  backgroundColor: '#2AC6EA',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem'
                }}>
                Put Us To Work
              </button>
            </form>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="mt-5">
              <h3 className="h4 mb-4" style={{ color: '#0A2540' }}>Don't like Filling up forms?</h3>
              <div className="mb-4">
                <h4 className="h6 mb-2" style={{ color: '#0A2540' }}>Contact number</h4>
                <p className="mb-1">Enquiry: (800)-123-1234</p>
                <p>Appointment: +1 623 123 5000</p>
              </div>
              <div className="mb-4">
                <h4 className="h6 mb-2" style={{ color: '#0A2540' }}>Email address</h4>
                <p className="mb-1">Sales@brandexpansions.com</p>
                <p>Info@brandexpansions.com</p>
              </div>
              <div>
                <h4 className="h6 mb-2" style={{ color: '#0A2540' }}>Location</h4>
                <p>250 West Street<br />Germantown, TN 38138</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
