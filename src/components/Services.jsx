import React, { useState } from 'react';
import { Martini, Disc, Gift, Users, Star, UtensilsCrossed } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ title, description, icon: Icon, isActive, onClick }) => (
  <div className={`service-card ${isActive ? 'active' : ''}`} onClick={onClick}>
    <div className="service-content">
      <div className="icon-wrapper">
        <div className="icon-container">
          <Icon className="service-icon" />
        </div>
        <div className="neon-ring"></div>
      </div>
      <div className="text-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
    {isActive && (
      <div className="expanded-content">
        {/* Banquet Section Content */}
        {title === "CATERING PACKAGE" && (
          <div className="additional-info">
            <p>Package includes:</p>
            <ul>
              <li>Customized Menu Planning</li>
              <li>Professional Service Staff</li>
              <li>Live Food Stations</li>
              <li>Specialty Cuisine Options</li>
              <li>Dedicated Event Manager</li>
            </ul>
          </div>
        )}
        {title === "BANQUET PACKAGE" && (
          <div className="additional-info">
            <p>Features include:</p>
            <ul>
              <li>Elegant Venue Setup</li>
              <li>Professional Lighting</li>
              <li>Sound System</li>
              <li>Table Arrangements</li>
              <li>Decoration Services</li>
            </ul>
          </div>
        )}
        {title === "CORPORATE EVENTS" && (
          <div className="additional-info">
            <p>Perfect for:</p>
            <ul>
              <li>Business Meetings & Conferences</li>
              <li>Product Launches</li>
              <li>Team Building Events</li>
              <li>Corporate Gatherings</li>
            </ul>
          </div>
        )}
        {title === "PRIVATE PARTIES" && (
          <div className="additional-info">
            <p>Experience includes:</p>
            <ul>
              <li>Exclusive Venue Access</li>
              <li>Personalized Event Planning</li>
              <li>Custom Entertainment Options</li>
              <li>Premium Refreshments</li>
              <li>Dedicated Event Coordinator</li>
            </ul>
          </div>
        )}
        {title === "BIRTHDAY CELEBRATIONS" && (
          <div className="additional-info">
            <p>Package includes:</p>
            <ul>
              <li>Professional DJ Services</li>
              <li>Customized Birthday Packages</li>
              <li>Themed Decoration Options</li>
              <li>Special Birthday Menu</li>
              <li>VIP Area Reservation</li>
            </ul>
          </div>
        )}
        {title === "SKY LOUNGE EXPERIENCE" && (
          <div className="additional-info">
            <p>VIP Benefits:</p>
            <ul>
              <li>Premium Service</li>
              <li>Panoramic City Views</li>
              <li>Priority Reservations</li>
              <li>Personal VIP Host</li>
              <li>Exclusive Menu Selection</li>
            </ul>
          </div>
        )}
      </div>
    )}
  </div>
);

const ServicesGrid = () => {
  const [activeSection, setActiveSection] = useState('cafe');
  const [activeIndex, setActiveIndex] = useState(null);

  const banquetServices = [
    {
      title: "CATERING PACKAGE",
      description: "Professional catering services with customized menus and expert staff for all your special occasions.",
      icon: UtensilsCrossed
    },
    {
      title: "BANQUET PACKAGE",
      description: "Elegant banquet hall setup with professional arrangements for weddings, corporate events, and celebrations.",
      icon: Disc
    }
  ];

  const cafeServices = [
    {
      title: "CORPORATE EVENTS",
      description: "Transform your corporate gatherings into unforgettable experiences with our state-of-the-art venue.",
      icon: Users
    },
    {
      title: "PRIVATE PARTIES",
      description: "Exclusive party packages with personalized entertainment and premium services.",
      icon: Gift
    },
    {
      title: "BIRTHDAY CELEBRATIONS",
      description: "Make your special day extraordinary with our custom party packages and VIP treatment.",
      icon: Star
    },
    {
      title: "SKY LOUNGE EXPERIENCE",
      description: "Enjoy breathtaking views with premium service and exclusive VIP treatment.",
      icon: Martini
    }
  ];

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="service-section">
      <div className="container">
        <div className="section-header">
          <h1 className="main-title text-center">Our Services</h1>
          <div className="neon-underline"></div>
        </div>
        
        {/* Service Toggle Buttons */}
        <div className="row justify-content-center mb-5">
          <div className="col-md-4 text-center">
            <div className="service-toggle">
              <button 
                className={`toggle-btn ${activeSection === 'banquet' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('banquet');
                  setActiveIndex(null);
                }}
              >
                Banquet
              </button>
              <button 
                className={`toggle-btn ${activeSection === 'cafe' ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection('cafe');
                  setActiveIndex(null);
                }}
              >
                Cafe
              </button>
            </div>
          </div>
        </div>

        {/* Services Display */}
        <div className="row service-container">
          {activeSection === 'banquet' ? (
            // Banquet Services Layout
            <div className="col-12">
              <div className="row justify-content-center">
                {banquetServices.map((service, index) => (
                  <div key={index} className="col-lg-6 mb-4">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      isActive={activeIndex === index}
                      onClick={() => handleCardClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Cafe Services Layout
            <div className="col-12">
              <div className="row">
                {cafeServices.map((service, index) => (
                  <div key={index} className="col-lg-6 mb-4">
                    <ServiceCard
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      isActive={activeIndex === index}
                      onClick={() => handleCardClick(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;