import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';
import logoImage from '../assets/tk1.png'; // Importing the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="logo">
            <img src={logoImage} alt="Illuminati Logo" className="logo-image" />
            <div className="logo-text-container">
              <p className="logo-text">ILLUMINATI</p>
              <p className="logo-subtext">CAFE. SKY LOUNGE. BANQUET</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/illuminati_lounge/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram className="icon" />
            </a>
            
            <a href="https://www.facebook.com/share/1DB1D2S2HP/?mibextid=wwXIfr" className="social-icon">
              <Facebook className="icon" />
            </a>
            <a href="#" className="social-icon">
              <Youtube className="icon" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright">
          <div className="text-center">
            <p className="copyright-text">&copy; 2024. Illuminati Sky Lounge. All Rights Reserved</p>
            <p className="footer-links">
              Designed & Developed by{' '}
              <a href="https://tecmetaverse.com/about-us/" className="link">Team TecMetaVerse</a> | IT Partner :{' '}
              <a href="https://tecmetaverse.com/" className="link">TecMetaVerse Solutions</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
