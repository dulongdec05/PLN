import React, { useState } from 'react';
import heroImage from '../images/hero-image.jpg';

function CTA() {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted with name:', name);
  };

  return (
    <section className="cta">
      <div className="container cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Join the ECO Chain Today</h2>
          <p className="hero-text">Fill out the form below to become a part of our sustainable farming community.</p>
          <form className="cta-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="cta-input" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="btn btn-gradient">Join Now</button>
          </form>
          <p style={{ fontSize: '12px' }}>By clicking Join Now, you agree to our Terms and Conditions.</p>
        </div>
        <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </div>
    </section>
  );
}

export default CTA;
