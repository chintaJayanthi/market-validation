import React from 'react';

const Services = () => {
  const services = [
    {
      icon: '/images/target.png',
      title: 'Identifying Target Audiences',
      description: 'Simply dummy text of the printing and typesetting industry dummy has been the industry standard'
    },
    {
      icon: '/images/conversion.png',
      title: 'Generating Conversions',
      description: 'Simply dummy text of the printing and typesetting industry'
    },
    {
      icon: '/images/features.png',
      title: 'Optimizing Product Features',
      description: 'Simply dummy text of the printing and typesetting industry'
    },
    {
      icon: '/images/insight.png',
      title: 'Analyzing Profitability',
      description: 'Simply dummy text of the printing and typesetting industry'
    }
  ];

  return (
    <section className="services-section py-5" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold" style={{ color: '#0A2540' }}>We Can Help With</h2>
          <p className="lead" style={{ color: '#4A5568' }}>
            Before sinking tons of money into product development, find out what matters most to your audience. Learn the ins and outs of their preferences and color your product to meet those needs.
          </p>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 p-4" 
                style={{ 
                  backgroundColor: index === 0 ? '#0A2540' : '#fff',
                  borderRadius: '16px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                <div className="card-body">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="mb-4" 
                    style={{ width: '50px', height: '50px' }}
                  />
                  <h5 className="card-title fw-bold mb-3" 
                    style={{ 
                      color: index === 0 ? '#fff' : '#0A2540'
                    }}>
                    {service.title}
                  </h5>
                  <p className="card-text" 
                    style={{ 
                      color: index === 0 ? '#fff' : '#4A5568'
                    }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
