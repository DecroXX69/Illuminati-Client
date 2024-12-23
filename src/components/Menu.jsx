// MenuComponent.jsx
import React, { useState, useEffect } from 'react';
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
const MenuComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const menuCategories = [
    {
      title: 'FOOD',
      description: 'Our Delicacies',
      images: [menu1, menu2],
      longDescription: 'Experience the finest flavors crafted by our expert chefs. Using only the freshest local ingredients, our dishes blend traditional recipes with modern culinary innovation. Every plate is a masterpiece, designed to take your taste buds on an unforgettable journey.',
    },
    {
      title: 'BAR',
      description: 'Lifting your Spirits',
      images: [menu3, menu4],
      longDescription: 'Discover our expertly crafted cocktails and premium spirits. Our mixologists blend classic techniques with contemporary flair to create drinks that are both visually stunning and deliciously memorable. Each sip is an adventure in flavor.',
    },
    {
      title: 'SHEESHA',
      description: 'Explore Menu',
      images: [menu5],
      longDescription: 'Indulge in our premium sheesha selection, featuring exotic flavors and perfect blends. Our expert staff ensures each session is perfectly packed and maintained, providing you with the smoothest experience possible.',
    },
  ];

  useEffect(() => {
    if (selectedCategory !== null) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === menuCategories[selectedCategory].images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [selectedCategory]);

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
                onClick={() => setSelectedCategory(index)}
              >
                <div className="card-inner">
                  <img
                    src={dhuur}
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
              onClick={() => setSelectedCategory(null)}
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
                  <button
                    className="carousel-button prev"
                    onClick={() => setCurrentSlide(prev => 
                      prev === 0 ? menuCategories[selectedCategory].images.length - 1 : prev - 1
                    )}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    className="carousel-button next"
                    onClick={() => setCurrentSlide(prev => 
                      prev === menuCategories[selectedCategory].images.length - 1 ? 0 : prev + 1
                    )}
                  >
                    <ChevronRight size={32} />
                  </button>
                </div>
              </div>

              <div className="col-md-6">
                <div className="modal-description">
                  <h2 className="neon-modal-title">
                    {menuCategories[selectedCategory].title}
                  </h2>
                  <p className="modal-text">
                    {menuCategories[selectedCategory].longDescription}
                  </p>
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