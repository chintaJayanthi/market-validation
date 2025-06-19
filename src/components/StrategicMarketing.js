import React from 'react';

const StrategicMarketing = () => {
  return (
    <section className="strategic-marketing py-5" style={{ backgroundColor: '#0A2540' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold text-white mb-4">
              Strategic Marketing with Clear Function
            </h2>
            <p className="text-white mb-4">
              You have a great idea for a whole new business, a new product line, or even just a new day. We help you verify the need to that idea and get a path to profitability. Our team of experts in growth, strategy, and analysis ensure that you will get the best chance of success for your new idea.
            </p>
            <button 
              className="btn btn-primary px-4 py-3" 
              style={{
                backgroundColor: '#2AC6EA',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem'
              }}>
              Put Us To Work
            </button>
          </div>
          <div className="col-lg-6">
            <img 
              src="/images/strategy.png" 
              alt="Strategic Marketing" 
              className="img-fluid rounded-3"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicMarketing;
