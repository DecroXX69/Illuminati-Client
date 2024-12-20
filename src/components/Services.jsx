import React, { useState } from 'react';
import { Martini, Mic, Disc, Gift, Users, Star } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const ServiceCard = ({ title, description, icon: Icon, isActive, onClick }) => (
  <div
    className={`service-card ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
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
        {title === "CORPORATE EVENTS" && (
          <div className="additional-info">
            <p>Perfect for:</p>
            <ul>
              <li>Business Meetings & Conferences</li>
              <li>Product Launches</li>
              <li>Team Building Events</li>
              <li>Corporate Parties</li>
            </ul>
          </div>
        )}
        {title === "BRANDED EVENTS" && (
          <div className="additional-info">
            <p>Features include:</p>
            <ul>
              <li>Custom Brand Integration</li>
              <li>Interactive Experiences</li>
              <li>Social Media Integration</li>
              <li>Brand Activation Zones</li>
            </ul>
          </div>
        )}
        {
          title === "BANQUET SERVICES" && (
            <div className="additional-info">
              <p>We offer:</p>
              <ul>
                <li>Customized Menu Planning</li>
                <li>Professional Service Staff</li>
                <li>Elegant Table Settings</li>
                <li>Specialty Cuisine Options</li>
                <li>Flexible Seating Arrangements</li>
              </ul>
            </div>
          )
        }
        {title === "PRIVATE PARTIES" && (
          <div className="additional-info">
            <p>Experience includes:</p>
            <ul>
              <li>Exclusive Venue Access</li>
              <li>Personalized Event Planning</li>
              <li>Custom Entertainment Options</li>
              <li>Premium Bar Service</li>
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
              <li>Cake & Champagne Service</li>
              <li>VIP Area Reservation</li>
            </ul>
          </div>
        )}
        {title === "SKY LOUNGE EXPERIENCE" && (
          <div className="additional-info">
            <p>VIP Benefits:</p>
            <ul>
              <li>Premium Bottle Service</li>
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
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "CORPORATE EVENTS",
      description: "Transform your corporate gatherings into unforgettable experiences with our state-of-the-art venue and professional event management.",
      icon: Martini
    },
    {
      title: "BRANDED EVENTS",
      description: "Create lasting impressions with custom-branded experiences that elevate your brand's presence.",
      icon: Mic
    },
    {
      title: "BANQUET SERVICES",
      description: "Elegant dining arrangements with premium catering services for weddings, celebrations, and corporate functions.",
      icon: Disc
    },
    {
      title: "PRIVATE PARTIES",
      description: "Exclusive party packages with personalized entertainment and premium services.",
      icon: Gift
    },
    {
      title: "BIRTHDAY CELEBRATIONS",
      description: "Make your special day extraordinary with our custom party packages, live DJs, and VIP treatment.",
      icon: Users
    },
    {
      title: "SKY LOUNGE EXPERIENCE",
      description: "Enjoy breathtaking views with premium bottle service and exclusive VIP treatment.",
      icon: Star
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
        <div className="row service-container">
          <div className="col-lg-6 left-services">
            {services.slice(0, 3).map((service, index) => (
              <div key={index} className="service-item">
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
          <div className="col-lg-6 right-services">
            {services.slice(3, 6).map((service, index) => (
              <div key={index + 3} className="service-item">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  isActive={activeIndex === index + 3}
                  onClick={() => handleCardClick(index + 3)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;