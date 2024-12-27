import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import './Menu.css';
import dhuur from '../assets/dhuur.jpg';
import food from '../assets/food.jpg';
import juice from '../assets/juice.jpg';
import menu1 from '../assets/menu1.png';
import menu2 from '../assets/menu2.png';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.png';
import menu5 from '../assets/sesamenu.png';
import menu7 from '../assets/menu7.png';
import menu9 from '../assets/menu9.png';
import menu10 from '../assets/menu10.png';

import menu11 from '../assets/menu11.png';
const MenuComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const menuCategories = [
    {
      title: 'FOOD',
      description: 'Our Delicacies',
      cardImage: food, // Main card image
      images: [menu1, menu2, menu3, menu4, menu7, menu9,menu10], // Menu images for modal
      longDescription: 'Experience the finest flavors crafted by our expert chefs. Using only the freshest local ingredients, our dishes blend traditional recipes with modern culinary innovation. Every plate is a masterpiece, designed to take your taste buds on an unforgettable journey.',
    },
    {
      title: 'DRINKS',
      description: 'Lifting your Spirits',
      cardImage: juice, // Main card image
      images: [menu11], // Menu images for modal
      longDescription: 'Discover our expertly crafted mocktails and premium refreshers. Our mixologists blend classic techniques with contemporary flair to create drinks that are both visually stunning and deliciously memorable. Each sip is an adventure in flavor.',
    },
    {
      title: 'SHEESHA',
      description: 'Explore Menu',
      cardImage: dhuur, // Main card image
      images: [menu5], // Menu images for modal
      longDescription: 'Indulge in our premium sheesha selection, featuring exotic flavors and perfect blends. Our expert staff ensures each session is perfectly packed and maintained, providing you with the smoothest experience possible.',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide(prev => 
      prev === menuCategories[selectedCategory].images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => 
      prev === 0 ? menuCategories[selectedCategory].images.length - 1 : prev - 1
    );
  };

  return (
    <div className="menu-container">
      {/* Main Title */}
      <div className="text-center mb-5">
        <h1 className="neon-title">OUR MENU</h1>
        <p className="neon-subtitle">Flavours, Spirits and Mouthwatering Delicacies!!</p>
      </div>

      {/* Menu Categories */}
      <div className="container">
        <div className="row justify-content-center">
          {menuCategories.map((category, index) => (
            <div className="col-md-4 mb-4" key={category.title}>
              <div 
                className="menu-card"
                onClick={() => {
                  setSelectedCategory(index);
                  setCurrentSlide(0); // Reset slide index when opening modal
                }}
              >
                <div className="card-inner">
                  <img
                    src={category.cardImage}
                    alt={category.title}
                    className="card-img"
                  />
                  <div className="card-content">
                    <h3 className="neon-card-title">{category.title}</h3>
                    <p className="neon-card-subtitle">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCategory !== null && (
        <div className="menu-modal">
          <div className="modal-content">
            <button
              className="close-button"
              onClick={() => {
                setSelectedCategory(null);
                setCurrentSlide(0); // Reset slide index when closing
              }}
            >
              <X size={24} />
            </button>
            
            <div className="row">
              <div className="col-md-6">
                <div className="carousel-container">
                  <img
                    src={menuCategories[selectedCategory].images[currentSlide]}
                    alt="Menu"
                    className="carousel-image"
                  />
                  {menuCategories[selectedCategory].images.length > 1 && (
                    <>
                      <button
                        className="carousel-button prev"
                        onClick={handlePrevSlide}
                      >
                        <ChevronLeft size={32} />
                      </button>
                      <button
                        className="carousel-button next"
                        onClick={handleNextSlide}
                      >
                        <ChevronRight size={32} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div className="col-md-6">
                <div className="modal-description">
                  <div className="modal-content-inner">
                    <h2 className="neon-modal-title">
                      {menuCategories[selectedCategory].title}
                    </h2>
                    <hr className="neon-divider" />
                    <p className="modal-text">
                      {menuCategories[selectedCategory].longDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuComponent;