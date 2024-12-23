import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import './Gallery.css'
import lounge1 from '../assets/lounge1.jpg';
import lounge2 from '../assets/lounge2.jpg';
import lounge7 from '../assets/lounge7.jpg';
import lounge5 from '../assets/lounge5.jpg';
import lounge4 from '../assets/lounge4.jpg';
import lounge3 from '../assets/lounge3.jpg';



const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const galleryImages = [
    { 
      id: 1, 
      height: '500px', 
      src: lounge1,
      category: 'events',
      title: 'Party Night'
    },
    { 
      id: 2, 
      height: '300px', 
      src: lounge2,
      category: 'lounge',
      title: 'Sky View'
    },
    { 
      id: 3, 
      height: '400px', 
      src: lounge3,
      category: 'dining',
      title: 'Fine Dining'
    },
    { 
      id: 4, 
      height: '350px', 
      src: lounge4,
      category: 'events',
      title: 'DJ Night'
    },
    { 
      id: 5, 
      height: '450px', 
      src: lounge5,
      category: 'lounge',
      title: 'VIP Area'
    },
    { 
      id: 6, 
      height: '380px', 
      src: lounge7,
      category: 'dining',
      title: 'Banquet Hall'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  return (
    <div className="gallery-section">
      {/* Loading Screen */}
      <div className={`loading-screen ${loading ? 'active' : ''}`}>
        <div className="loader">
          <Loader2 className="spin-icon" />
          <span className="loading-text">Loading Gallery</span>
        </div>
      </div>

      <div className="container">
        <div className="gallery-header">
          <h2 className="neon-title">Gallery</h2>
          <p className="subtitle">We have the best quests</p>
          
          {/* Category Filter
          <div className="category-filter">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Events</button>
            <button className="filter-btn">Lounge</button>
            <button className="filter-btn">Dining</button>
          </div> */}
        </div>

        <div className="masonry-gallery">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className={`gallery-item ${loading ? 'loading' : 'loaded'}`}
              style={{ 
                height: image.height,
                animationDelay: `${index * 0.2}s`
              }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="gallery-image"
                onLoad={handleImageLoad}
              />
              <div className="image-overlay">
                <div className="neon-border"></div>
                <div className="image-info">
                  <h3 className="image-title">{image.title}</h3>
                  <span className="image-category">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged image view */}
        {selectedImage && (
          <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
            <div className="modal-content">
              <img src={selectedImage.src} alt={selectedImage.title} />
              <div className="modal-info">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <div className="loading-progress" style={{ 
          width: `${(imagesLoaded / galleryImages.length) * 100}%` 
        }}/>
      </div>
    </div>
  );
};

export default Gallery;