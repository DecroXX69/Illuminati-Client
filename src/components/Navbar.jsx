import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import secondLogo from '../assets/logo3.png'; // You'll need to import your second logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Determine which section is currently in view
      const sections = ['about', 'services', 'menu', 'gallery', 'maps'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-fluid nav-container">
        {/* Left Logo Section */}
        <div className="nav-section left-section">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Night Club 128" className="logo main-logo" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>

        {/* Center Navigation Section */}
        <div className={`nav-section center-section ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <a
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </a>
            <a
              className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}
              onClick={() => scrollToSection('services')}
            >
              Services
            </a>
            <a
              className={`nav-link ${activeSection === 'menu' ? 'active' : ''}`}
              onClick={() => scrollToSection('menu')}
            >
              Menu
            </a>
            <a
              className={`nav-link ${activeSection === 'gallery' ? 'active' : ''}`}
              onClick={() => scrollToSection('gallery')}
            >
              Gallery
            </a>
            <a
              className={`nav-link ${activeSection === 'maps' ? 'active' : ''}`}
              onClick={() => scrollToSection('maps')}
            >
              Locations
            </a>
          </div>
        </div>

        {/* Right Logo Section */}
        <div className="nav-section right-section">
          <Link className="navbar-brand" to="/">
            <img src={secondLogo} alt="Second Logo" className="logo second-logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
