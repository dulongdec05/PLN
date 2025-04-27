import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo-vector-1.svg';
import logo2 from '../images/logo-vector-2.svg';
import logo3 from '../images/logo-vector-3.svg';
import logo4 from '../images/logo-vector-4.svg';
import logo5 from '../images/logo-vector-5.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <img src={logo1} alt="Logo part 1" />
            <img src={logo2} alt="Logo part 2" />
            <img src={logo3} alt="Logo part 3" />
            <img src={logo4} alt="Logo part 4" />
            <img src={logo5} alt="Logo part 5" />
          </div>
          <div className="footer-links">
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/products" className="footer-link">Our Products</Link>
            <Link to="/eco-chain" className="footer-link">Eco Chain</Link>
            <Link to="/support" className="footer-link">Tech Support</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 EcoFertilizer. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy" className="legal-link">Privacy Policy</Link>
            <Link to="/terms" className="legal-link">Terms of Use</Link>
            <Link to="/cookies" className="legal-link">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
