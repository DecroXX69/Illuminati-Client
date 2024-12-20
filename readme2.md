jsx

import React, { useState } from "react";
import "./MenuCard.css";
import foodmenu from '../assets/sheeshacover.jpeg';
import foodmenu2 from '../assets/rinkcover.jpg';
import foodmenu3 from '../assets/foodmenu3.png';
import foodmenu4 from '../assets/foodmenu4.png';
import foodmenu5 from '../assets/foodmenu5.png';
import foodmenu6 from '../assets/foodmenu6.png';
import drinkmenu from '../assets/drinkmenu.png';
import foodcover from '../assets/foodcover.jpg';

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const categories = [
    {
      id: "food",
      title: "Food",
      image: foodcover,
      menu: [
        { 
          name: "Hara Bhara Salad", 
          price: "₹125", 
          ingredients: "Lettuce, Spinach, Dressing", 
          images: [foodmenu, foodmenu2, foodmenu3, foodmenu4] 
        },
        { 
          name: "Paneer Tikka", 
          price: "₹225", 
          ingredients: "Paneer, Spices, Yogurt", 
          images: [foodmenu5, foodmenu6, foodmenu2, foodmenu4] 
        },
        { 
          name: "Butter Chicken", 
          price: "₹375", 
          ingredients: "Chicken, Butter, Cream", 
          images: [foodmenu, foodmenu3, foodmenu5, foodmenu6] 
        },
      ],
    },
    {
      id: "drinks",
      title: "Drinks",
      image: foodmenu2,
      menu: [
        { 
          name: "Mojito", 
          price: "₹150", 
          ingredients: "Mint, Lime, Soda", 
          images: [foodmenu2, foodmenu3, foodmenu4, foodmenu5] 
        },
        { 
          name: "Cosmopolitan", 
          price: "₹250", 
          ingredients: "Vodka, Cranberry, Lime", 
          images: [foodmenu6, foodmenu3, foodmenu5, foodmenu4] 
        },
        { 
          name: "Old Fashioned", 
          price: "₹300", 
          ingredients: "Whiskey, Sugar, Bitters", 
          images: [foodmenu, foodmenu5, foodmenu4, foodmenu2] 
        },
      ],
    },
    {
      id: "sheesha",
      title: "Sheesha",
      image: foodmenu,
      menu: [
        { 
          name: "Blue Mist", 
          price: "₹500", 
          ingredients: "Mint, Blueberry, Tobacco", 
          images: [foodmenu3, foodmenu5, foodmenu4, foodmenu6] 
        },
        { 
          name: "Double Apple", 
          price: "₹600", 
          ingredients: "Apple, Aniseed, Tobacco", 
          images: [foodmenu, foodmenu2, foodmenu5, foodmenu6] 
        },
        { 
          name: "Grape Mint", 
          price: "₹550", 
          ingredients: "Grape, Mint, Tobacco", 
          images: [foodmenu4, foodmenu6, foodmenu2, foodmenu3] 
        },
      ],
    },
  ];

  const handleCategoryClick = (category) => setSelectedCategory(category);

  const closeModal = () => setSelectedCategory(null);

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % selectedCategory.menu[0].images.length);
  };

  const handlePreviousImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + selectedCategory.menu[0].images.length) % selectedCategory.menu[0].images.length);
  };

  return (
    <div className="menu-page">
      {/* Header */}
      <div className="header">
        <h1>Welcome to Illuminati Lounge</h1>
        <p>Explore our exquisite menu, crafted to elevate your senses.</p>
      </div>

      {/* Menu Cards */}
      <div className="card-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className="menu-card"
            onClick={() => handleCategoryClick(category)}
          >
            <img src={category.image} alt={category.title} className="card-image" />
            <h3 className="card-title">{category.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCategory && (
        <div className="menu-modal">
          <div className="modal-content">
            <h2>{selectedCategory.title} Menu</h2>
            <div className="menu-items">
              {selectedCategory.menu.map((item, index) => (
                <div key={index} className="menu-item">
                  <h4>{item.name}</h4>
                  <p className="price">{item.price}</p>
                  <p className="ingredients">{item.ingredients}</p>
                </div>
              ))}
            </div>
            <div className="image-slider">
              <button className="arrow-left" onClick={handlePreviousImage}>
                &#8592;
              </button>
              <img src={selectedCategory.menu[0].images[imageIndex]} alt="Menu Item" className="slider-image" />
              <button className="arrow-right" onClick={handleNextImage}>
                &#8594;
              </button>
            </div>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;







css


/* General Styles */
body {
  font-family: Arial, sans-serif;
  background: #1a1a1a;
  color: #fff;
  margin: 0;
  padding: 0;
}

.menu-page {
  text-align: center;
  padding: 2rem;
}

/* Header Styles */
.header h1 {
  font-size: 3rem;
  color: #ff00ff;
  text-shadow: 0 0 20px rgba(255, 0, 255, 0.8);
}

.header p {
  font-size: 1.5rem;
  color: #ff77ff;
  margin-top: 1rem;
}

/* Card Container */
.card-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

/* Menu Card */
.menu-card {
  width: 350px;
  height: 450px;
  background: #282828;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(255, 0, 255, 0.4);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
}

.menu-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.7);
}

.card-image {
  width: 100%;
  height: 70%;
  object-fit: cover;
}

.card-title {
  font-size: 2rem;
  margin-top: 1rem;
  color: #ff00ff;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.6);
}

/* Modal */
.menu-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 0, 255, 0.7);
  max-width: 800px;
  width: 90%;
}

.modal-content h2 {
  font-size: 2.5rem;
  color: #ff00ff;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.6);
}

.menu-items {
  margin-top: 1.5rem;
}

.menu-item {
  margin-bottom: 1rem;
  border-bottom: 1px solid #ff00ff;
  padding-bottom: 0.5rem;
}

.menu-item h4 {
  font-size: 1.5rem;
  color: #fff;
}

.menu-item .price {
  color: #ff77ff;
  font-size: 1.2rem;
  margin-top: 0.2rem;
}

.menu-item .ingredients {
  color: #ff99ff;
  font-size: 1rem;
}

/* Image Slider */
.image-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  position: relative;
}

.slider-image {
  width: 80%;
  max-width: 500px;
  height: auto;
}

.arrow-left, .arrow-right {
  position: absolute;
  top: 50%;
  font-size: 2rem;
  color: #ff00ff;
  background: none;
  border: none;
  cursor: pointer;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
}

.arrow-left {
  left: 10px;
}

.arrow-right {
  right: 10px;
}

.arrow-left:hover, .arrow-right:hover {
  opacity: 0.7;
}

/* Close Button */
.close-button {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  background: #ff00ff;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.close-button:hover {
  background: #e600e6;
}
