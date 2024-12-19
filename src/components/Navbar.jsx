import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid nav-container">
        {/* Left Navigation Items */}
        <div className="nav-section left-section">
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/services">Services</Link>
          <Link className="nav-link" to="/menu">Menu</Link>
        </div>

        {/* Center Logo */}
        <div className="nav-section center-section">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Night Club 128" className="logo" />
          </Link>
        </div>

        {/* Right Navigation Items */}
        <div className="nav-section right-section">
          <Link className="nav-link" to="/gallery">Gallery</Link>
          <Link className="nav-link" to="/locations">Locations</Link>
          <div className="delivery-links">
            <a className="nav-link" href="https://www.swiggy.com" target="_blank" rel="noopener noreferrer">Swiggy</a>
            <a className="nav-link" href="https://www.zomato.com" target="_blank" rel="noopener noreferrer">Zomato</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
