import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutSection = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    position: 'relative'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  };

  const neonTextStyle = {
    color: '#bf00ff',
    fontFamily: "'Dancing Script', cursive",
    textShadow: '0 0 10px #bf00ff, 0 0 20px #bf00ff, 0 0 30px #bf00ff',
    fontSize: '2.5rem'
  };

  const headingStyle = {
    color: 'white',
    letterSpacing: '3px',
    fontWeight: 'bold',
    fontSize: '3.5rem'
  };

  const paragraphStyle = {
    color: '#ffffff',
    fontSize: '1.2rem',
    lineHeight: '1.8',
    maxWidth: '800px',
    margin: '0 auto'
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
          <div className="text-center">
            <h2 style={neonTextStyle}>No.1 Sky Lounge</h2>
            <h1 className="my-4" style={headingStyle}>ABOUT THE SKY LOUNGE</h1>
            <p className="mb-5" style={paragraphStyle}>
              Welcome to Illuminati Sky Lounge, where luxury meets the stars. Perched high above the city lights, 
              our newly opened venue offers an unparalleled blend of sophistication and modern elegance. 
              With state-of-the-art facilities for hosting grand banquets and exclusive events, we pride ourselves 
              on delivering exceptional culinary experiences and craft cocktails that elevate your senses. 
              Our neon-themed ambiance creates the perfect backdrop for unforgettable nights, whether you're 
              celebrating a special occasion or seeking a premium nightlife experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;