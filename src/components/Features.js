import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../images/icon-1.svg';
import icon2 from '../images/icon-2.svg';
import icon3 from '../images/icon-3.svg';
import feature1 from '../images/feature-1.jpg';
import feature2 from '../images/feature-2.jpg';
import feature3 from '../images/feature-3.jpg';
import chevronRight from '../images/chevron-right.svg';
import chevronRight2 from '../images/chevron-right-2.svg';
import chevronRight3 from '../images/chevron-right-3.svg';

function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Unlock Sustainable Value: Join the ECO Chain Today!</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={icon1} alt="Feature icon" className="feature-icon" />
            <div className="feature-image" style={{ backgroundImage: `url(${feature1})` }}></div>
            <h3 className="feature-title">Empowering Farmers with Transparent and Efficient Practices</h3>
            <p>Our commitment ensures stable outputs through transparent sourcing of agricultural waste.</p>
            <Link to="/join" className="btn btn-outline btn-with-icon">
              Join
              <img src={chevronRight} alt="Arrow right" />
            </Link>
          </div>
          <div className="feature-card">
            <img src={icon2} alt="Feature icon" className="feature-icon" />
            <div className="feature-image" style={{ backgroundImage: `url(${feature2})` }}></div>
            <h3 className="feature-title">Technical Support: Tailored Advice for Every Crop Type</h3>
            <p>Receive expert guidance to optimize your farming techniques and yield.</p>
            <Link to="/learn" className="btn btn-outline btn-with-icon">
              Learn
              <img src={chevronRight2} alt="Arrow right" />
            </Link>
          </div>
          <div className="feature-card">
            <img src={icon3} alt="Feature icon" className="feature-icon" />
            <div className="feature-image" style={{ backgroundImage: `url(${feature3})` }}></div>
            <h3 className="feature-title">Transparent Processes: Trace Your Crop Data with Ease</h3>
            <p>Easily access and verify the origin of your agricultural products.</p>
            <Link to="/discover" className="btn btn-outline btn-with-icon">
              Discover
              <img src={chevronRight3} alt="Arrow right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

