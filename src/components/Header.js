import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div className="container">
        {/* <a className="navbar-brand" href="/">
          <img src="/images/logo.png" alt="Logo" height="40" />
        </a> */}

        <div className="logo" style={{ fontSize: '46px', fontWeight: 'normal', color: '#2AC6EA',fontFamily: 'Poppins, sans-serif' }}>
         Logo</div> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#insights">Insights</a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary px-4 py-2" style={{backgroundColor: '#2AC6EA', border: 'none', borderRadius: '8px'}}>
                Put Us To Work
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
