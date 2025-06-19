import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import StrategicMarketing from './components/StrategicMarketing';
import ContactForm from './components/ContactForm';
import PastProjects from './components/PastProjects';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <StrategicMarketing />
      <ContactForm />
      <PastProjects />
      
    </div>
  );
}

export default App;
