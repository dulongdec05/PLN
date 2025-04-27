import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero-image.jpg';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Join the ECO Chain – Transform Waste into Sustainable Value</h1>
          <p className="hero-text">
            Become a partner in the production chain of certified organic fertilizers. 
            Together, let's build transparent agriculture with traceable origins.
          </p>
          <div className="nav-actions">
            <Link to="/join" className="btn btn-gradient">Join Now</Link>
            <Link to="/learn" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>
    </section>
  );
}

export default Hero;
