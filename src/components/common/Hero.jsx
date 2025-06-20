import React from 'react';
import "../../styles/components/common/Hero.css";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"/>
      <div className="hero-overlay">
        <div className="hero-content text-center fade-zoom-in">
          <h1>
            Transform Your <span className="highlight">Digital</span> Presence
          </h1>
          <p>
            We create stunning websites, powerful applications, and comprehensive digital solutions 
            that drive results for your business. Partner with Nivix for premium quality and 
            exceptional service.
          </p>
          <a
            href="#contact"
            className="cta-button "
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
