import React, { useState, useEffect } from 'react';
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';
import lounge1 from '../assets/lounge1.jpg';
import lounge2 from '../assets/lounge2.jpg';
import lounge7 from '../assets/lounge7.jpg';
import lounge5 from '../assets/lounge5.jpg';
import lounge4 from '../assets/lounge4.jpg';
import lounge3 from '../assets/lounge3.jpg';
import cafevid1 from "../assets/cafevid14.mp4";
import cafevid2 from "../assets/Cafevid.mp4";
import cafe1 from '../assets/cafe1.jpg';
import cafe2 from '../assets/cafe2.jpg';
import cafe3 from '../assets/cafe3.jpg';
import cafe4 from '../assets/cafe4.jpg';
import cafe5 from '../assets/cafe5.jpg';
import cafe6 from '../assets/cafe6.jpg';
import cafe7 from '../assets/cafe7.jpg';
import cafe8 from '../assets/cafe8.jpg';
import cafe9 from '../assets/cafe9.jpg';



const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);
  const ITEMS_PER_PAGE = 6;

  const galleryItems = [
    { 
      id: 1, 
      height: '300px', 
      src: lounge1,
      category: 'lounge',
      title: 'Party Night',
      type: 'image'
    },
    { 
      id: 2, 
      height: '300px', 
      src: lounge2,
      category: 'lounge',
      title: 'Sky View',
      type: 'image'
    },
    { 
      id: 3, 
      height: '300px', 
      src: lounge3,
      category: 'dining',
      title: 'Fine Dining',
      type: 'image'
    },
    { 
      id: 4, 
      height: '300px', 
      src: lounge4, // Replace with your video URL
      category: 'experiences',
      title: 'DJ Night',
      type: 'image'
      
    },
    { 
      id: 5, 
      height: '300px', 
      src: lounge5,
      category: 'lounge',
      title: 'VIP Area',
      type: 'image'
    },
    { 
      id: 6, 
      height: '300px', 
      src: lounge7,
      category: 'dining',
      title: 'Banquet Hall',
      type: 'image'
    },

    {
      id: 7,
      height: '300px',
      src: cafevid1,
      category: 'experiences',
      title: 'Party Night',
      type: 'video'
    },

    {
      id: 8,
      height: '300px',
      src: cafe2,
      category: 'dining',
      title: 'Fine Dining',
      type: 'image'
    },
    {
      id: 9,
      height: '300px',
      src: cafe3,
      category: 'lounge',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 10,
      height: '300px',
      src: cafe4,
      category: 'dining',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 11,
      height: '300px',
      src: cafe5,
      category: 'lounge',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 12,
      height: '300px',
      src: cafe6,
      category: 'dining',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 13,
      height: '300px',
      src: cafe7,
      category: 'dining',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 14,
      height: '300px',
      src: cafe8,
        category: 'experiences',
        title: 'Fine Dining',
        type: 'image'
    },

    {
      id: 15,
      height: '300px',
      src: cafe9,
      category: 'experiences',
      title: 'Fine Dining',
      type: 'image'
    }, 

    {
      id: 16,
      height: '300px',
      src: cafe1,
      category: 'experiences',
      title: 'Fine Dining',
      type: 'image'
    },

    {
      id: 17,
      height: '300px',
      src: cafevid2,
      category: 'experiences',
      title: 'Fine Dining',
      type: 'video'
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

  const handleCategoryClick = (category) => {
    setActiveCategory(category.toLowerCase());
    setCurrentPage(0);
    pauseAllVideos();
    setPlayingVideo(null);
  };

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll('.gallery-video');
    videos.forEach(video => video.pause());
  };
  
  // Handle video playback
  const handleVideoClick = (itemId, e) => {
    e.stopPropagation();
    const videoElement = document.getElementById(`video-${itemId}`);
    
    if (!videoElement) return;

    if (playingVideo === itemId) {
      if (videoElement.paused) {
        pauseAllVideos();
        videoElement.play();
      } else {
        videoElement.pause();
      }
    } else {
      pauseAllVideos();
      videoElement.play();
      setPlayingVideo(itemId);
    }
  };


  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  
  const currentItems = filteredItems.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
    setPlayingVideo(null); // Stop video when changing page
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
    pauseAllVideos();
    setPlayingVideo(null);
  };

  const renderMediaItem = (item) => {
    if (item.type === 'video') {
      return (
        <div className="video-container">
          <video
            id={`video-${item.id}`}
            className="gallery-video"
            playsInline
            onClick={(e) => handleVideoClick(item.id, e)}
            onEnded={() => setPlayingVideo(null)}
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div 
            className={`video-overlay ${playingVideo === item.id ? 'playing' : ''}`}
            onClick={(e) => handleVideoClick(item.id, e)}
          >
            <div className="play-pause-button">
              {playingVideo === item.id ? '❚❚' : '▶'}
            </div>
          </div>
        </div>
      );
    }
    return (
      <img 
        src={item.src} 
        alt={item.title}
        className="gallery-image"
        onLoad={handleImageLoad}
      />
    );
  };

  return (
    <div className="gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2 className="neon-title">Gallery</h2>
          <p className="subtitle">We have the best quests</p>
          
          <div className="category-filter">
            {['All', 'Experiences', 'Lounge', 'Dining'].map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="gallery-navigation">
            <button 
              className="nav-button prev"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className="nav-button next"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}

        <div className="masonry-gallery">
          {currentItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`gallery-item ${loading ? 'loading' : 'loaded'}`}
              style={{ 
                height: item.height,
                animationDelay: `${index * 0.2}s`
              }}
              onClick={() => item.type === 'image' ? setSelectedImage(item) : null}
            >
              {renderMediaItem(item)}
              <div className="image-overlay">
                <div className="neon-border"></div>
                <div className="image-info">
                  <h3 className="image-title">{item.title}</h3>
                  <span className="image-category">{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && selectedImage.type === 'image' && (
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

        <div className="loading-progress" style={{ 
          width: `${(imagesLoaded / currentItems.length) * 100}%` 
        }}/>
      </div>
    </div>
  );
};

export default Gallery;