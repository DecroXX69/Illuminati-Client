import React, { useState } from 'react';
import { Martini, Mic, Disc, Gift, Users, Star } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css';

const ServiceCard = ({ title, description, icon: Icon, isActive, onClick }) => (
  <div
    className={`service-card d-flex align-items-start ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <div className="icon-container flex-shrink-0 me-4">
      <Icon />
    </div>
    <div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description mb-0">{description}</p>
    </div>
    {isActive && (
      <div className="expanded-content">
        <p className="text-light mt-3">
          This is additional information about <strong>{title}</strong>. It expands when the card is clicked!
        </p>
      </div>
    )}
  </div>
);

const ServicesGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: "CORPORATE EVENTS",
      description: "Creative corporate events from concept to production.",
      icon: Martini
    },
    {
      title: "BRANDED EVENTS",
      description: "Create unmatched opportunities to interact with customers.",
      icon: Mic
    },
    {
      title: "COMMERCIAL SHOOTS",
      description: "Production services for commercials and branded media.",
      icon: Disc
    },
    {
      title: "HEN PARTIES",
      description: "Unforgettable hen party memories with special packages.",
      icon: Gift
    },
    {
      title: "BIRTHDAY PARTIES",
      description: "Celebrate birthdays with live DJs and exclusive services.",
      icon: Users
    },
    {
      title: "VIP SERVICE",
      description: "Tailored VIP packages for a premium experience.",
      icon: Star
    }
  ];

  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="service-section">
      <div className="container">
        <h1 className="main-title text-center display-4 fw-bold mb-5">
          Our Services
        </h1>
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6 col-md-12 mb-4">
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
    </div>
  );
};

export default ServicesGrid;
