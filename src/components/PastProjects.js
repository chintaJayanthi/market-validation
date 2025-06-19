import React from 'react';

const PastProjects = () => {
  const projects = [
    {
      image: '/images/project1.png',
      title: 'The One',
      description: ' The One where we did a research during pandemic and delivered updated systems for a new client'
    },
    {
      image: '/images/project2.png',
      title: 'The Two',
      description: 'The One where we did a research during pandemic and delivered updated systems for a new client'
    },
    {
      image: '/images/project3.png',
      title: 'The Three',
      description: 'The One where we did a research during pandemic and delivered updated systems for a new client'
    }
  ];

  return (
    <section className="past-projects py-5" style={{ backgroundColor: '#0A2540' }}>
      <div className="container">
        <h2 className="display-5 fw-bold text-white text-center mb-4">
          Past Market Validation Projects
        </h2>
        <p text-white className="lead text-center mb-5" style={{ color: '#A0AEC0' }}>
          Entrepreneurs and entrepreneurs choose Clear Function when they need experts to help them find product market fit.
        </p>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0" 
                style={{ 
                  backgroundColor: '#fff',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}>
               
                <div className="card-body p-4">
                  {/* <h5 className="card-title fw-bold mb-3" style={{ color: '#0A2540' }}>
                    {project.title}
                  </h5> */}
                  <p className="card-text" style={{ color: '#4A5568' }}>
                    {project.description}
                  </p>

                   <img 
                  src={project.image} 
                  alt={project.title} 
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
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
      </div>
    </section>
  );
};

export default PastProjects;
