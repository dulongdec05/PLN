import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../images/logo-vector-1.svg';
import logo2 from '../images/logo-vector-2.svg';
import logo3 from '../images/logo-vector-3.svg';
import logo4 from '../images/logo-vector-4.svg';
import logo5 from '../images/logo-vector-5.svg';
import chevronDown from '../images/chevron-down.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <img src={logo1} alt="Logo part 1" />
          <img src={logo2} alt="Logo part 2" />
          <img src={logo3} alt="Logo part 3" />
          <img src={logo4} alt="Logo part 4" />
          <img src={logo5} alt="Logo part 5" />
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home Page</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/products" className="nav-link">Our Products</Link>
          <Link to="/eco-chain" className="nav-link nav-link-dropdown">
            Eco Chain
            <img src={chevronDown} alt="Dropdown" />
          </Link>
        </div>
        <div className="nav-actions">
          <Link to="/join" className="btn btn-outline">Join</Link>
          <Link to="/learn" className="btn btn-gradient">Learn</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
