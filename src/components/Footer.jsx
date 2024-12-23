// import React from 'react';
// import { Facebook, Twitter, Instagram } from 'lucide-react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer py-4"> {/* Reduced padding for height reduction */}
//       <div className="container">
//         <div className="row align-items-center mb-2">
//           {/* Left Column - Logo and Social Icons */}
//           <div className="col-12 col-md-8 text-left">
//             <div className="footer-brand mb-2">
//               <img
//                 src={require('../assets/illuminati_logo.png')}
//                 alt="Illuminati Logo"
//                 className="footer-logo"
//               />
//             </div>

//             {/* Social Media Icons - Horizontally aligned */}
//             <div className="social-icons mb-1">
//               <a href="#" className="social-icon mx-3">
//                 <Twitter size={14} />
//               </a>
//               <a href="#" className="social-icon mx-3">
//                 <Facebook size={14} />
//               </a>
//               <a href="#" className="social-icon mx-3">
//                 <Instagram size={14} />
//               </a>
//             </div>
//           </div>

//           {/* Right Column - Copyright */}
//           <div className="col-12 col-md-4 text-right">
//             <div className="copyright">
//               <p className="mb-0">TecMetaVerse © 2024. All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="logo">
            <svg viewBox="0 0 400 300" className="logo-svg">
              {/* Rays */}
              <g stroke="currentColor" strokeWidth="2">
                <path d="M200 100 L200 60" />
                <path d="M160 70 L140 40" />
                <path d="M240 70 L260 40" />
                <path d="M130 90 L100 70" />
                <path d="M270 90 L300 70" />
                <path d="M120 120 L80 110" />
                <path d="M280 120 L320 110" />
                {/* Dashed rays */}
                <path strokeDasharray="4,4" d="M150 80 L120 50" />
                <path strokeDasharray="4,4" d="M250 80 L280 50" />
                <path strokeDasharray="4,4" d="M180 65 L170 35" />
                <path strokeDasharray="4,4" d="M220 65 L230 35" />
              </g>

              {/* Eye outline */}
              <path
                d="M100 140 Q200 80 300 140 Q200 200 100 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              {/* Crystals */}
              <g fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M180 120 L200 160 L220 120 M175 125 L200 170 L225 125" />
                <path d="M190 130 L200 150 L210 130" />
                {/* Small stars */}
                <path d="M160 130 L163 133 M160 133 L163 130" />
                <path d="M240 130 L243 133 M240 133 L243 130" />
                <path d="M200 110 L203 113 M200 113 L203 110" />
              </g>

              {/* Text */}
              <text
                x="200"
                y="240"
                textAnchor="middle"
                className="logo-text"
                fill="currentColor"
              >
                ILLUMINATI
              </text>
              <text
                x="200"
                y="270"
                textAnchor="middle"
                fill="currentColor"
                className="logo-subtext"
              >
                CAFE. SKY LOUNGE
              </text>
            </svg>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/illuminati_lounge/" target='blank' className="social-icon">
              <Instagram className="icon" />
            </a>
            <a href="#" className="social-icon">
              <Twitter className="icon" />
            </a>
            <a href="#" className="social-icon">
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
            <p className="copyright-text">© 2024. Illuminati Sky Lounge. All Rights Reserved</p>
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