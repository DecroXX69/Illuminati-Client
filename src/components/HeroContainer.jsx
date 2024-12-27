import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Wine } from 'lucide-react';
import './HeroContainer.css';
import lounge1 from '../assets/lounge1.jpg';
import lounge2 from '../assets/lounge2.jpg';
import lounge7 from '../assets/lounge7.jpg';
import lounge5 from '../assets/lounge5.jpg';
import hero8 from '../assets/hero8.MOV';
import hero9 from '../assets/hero9.MOV';
import hero10 from '../assets/hero10.MOV';

const HeroContainer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const heroContent = [
    {
      type: 'image',
      source: lounge1,
      title: 'Elevate Your Nights',
      description: 'Experience luxury dining at the city\'s finest sky lounge',
      buttonText: 'Our Services',
      buttonLink: '#services'
    },
    {
      type: 'image',
      source: lounge7,
      title: 'Celebrate in Style',
      description: 'Perfect venue for your grand celebrations',
      buttonText: 'Explore The Vibes',
      buttonLink: '#gallery'
    },
    {
      type: 'image',
      source: lounge2,
      title: 'Culinary Excellence',
      description: 'Savor the finest cuisines with a panoramic view',
      buttonText: 'View Menu',
      buttonLink: '#menu'
    },
    {
      type: 'image',
      source: lounge5,
      title: 'Urban Oasis',
      description: 'Your premium rooftop destination',
      buttonText: 'Explore',
      buttonLink: '#about'
    },
    {
      type: 'video',
      source: hero8,
      title: 'Elevate Your Nights',
      description: 'Experience luxury dining at the city\'s finest sky lounge',
      buttonText: 'Our Services',
      buttonLink: '#services'
    },
    {

      type: 'video',
      source: hero9,
      title: 'Celebrate in Style',
      description: 'Perfect venue for your grand celebrations',
      buttonText: 'Explore The Vibes',
      buttonLink: '#gallery'
    },
    {
      type: 'video',
      source: hero10,
      title: 'Culinary Excellence',
      description: 'Savor the finest cuisines with a panoramic view',
      buttonText: 'View Menu',
      buttonLink: '#menu'
    }
  ];

  const handleNavigation = (direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prevIndex => {
      if (direction === 'next') {
        return prevIndex === heroContent.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? heroContent.length - 1 : prevIndex - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        handleNavigation('next');
      }
    }, 6000);

    return () => clearInterval(timer);
  }, [isAnimating]);

  const AnimatedText = ({ text, className }) => {
    return (
      <div className={className}>
        {text.split(' ').map((word, index) => (
          <span key={index} className="word">
            {word.split('').map((char, charIndex) => (
              <span
                key={charIndex}
                className="char"
                style={{
                  animationDelay: `${index * 0.1 + charIndex * 0.05}s`
                }}
              >
                {char}
              </span>
            ))}
            <span className="space">&nbsp;</span>
          </span>
        ))}
      </div>
    );
  };

  const MediaContent = ({ content, isActive }) => {
    if (content.type === 'video') {
      return (
        <video
          src={content.source}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return (
      <img
        src={content.source}
        alt={content.title}
        className="hero-image"
      />
    );
  };

  return (
    <div className="hero-container">
      {heroContent.map((content, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <div className="hero-image-wrapper">
            <MediaContent 
              content={content} 
              isActive={index === currentIndex} 
            />
            <div className="hero-overlay"></div>
          </div>
          <div className={`content-overlay ${index === currentIndex ? 'active' : ''}`}>
            <AnimatedText 
              text={content.title}
              className="hero-title"
            />
            <AnimatedText 
              text={content.description}
              className="hero-description"
            />
            <a 
              href={content.buttonLink}
              className="hero-button"
            >
              <span className="button-text">{content.buttonText}</span>
              <Wine className="button-icon" />
            </a>
          </div>
        </div>
      ))}
      
      <button 
        className="nav-button nav-button-left"
        onClick={() => handleNavigation('prev')}
        aria-label="Previous slide"
      >
        <ChevronLeft className="nav-icon" />
      </button>
      <button 
        className="nav-button nav-button-right"
        onClick={() => handleNavigation('next')}
        aria-label="Next slide"
      >
        <ChevronRight className="nav-icon" />
      </button>
    </div>
  );
};

export default HeroContainer;