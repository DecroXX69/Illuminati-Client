import React from 'react';
import './gallery.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const LoungeGallery = () => {
  const images = [
    {
      title: 'Card 1',
      description: 'Description for card 1',
    },
    {
      title: 'Card 2',
      description: 'Description for card 2',
    },
    {
      title: 'Card 3',
      description: 'Description for card 3',
    },
    {
      title: 'Card 4',
      description: 'Description for card 4',
    },
    {
      title: 'Card 5',
      description: 'Description for card 5',
    },
    {
      title: 'Card 6',
      description: 'Description for card 6',
    },
  ];

  return (
    <div>
      {/* Page Title and Slogan */}
      <div className="page-name">
        <h2 className="page-title">LOUNGE GALLERY</h2>
        <p className="slogan">Explore the best lounge experiences with us!</p>
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <div className="card-overlay">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="navigation-arrows">
        <button className="arrow-btn">
          <FaArrowLeft />
        </button>
        <button className="arrow-btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default LoungeGallery;
