


import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './gallery.css';

const NeonGallery = () => {
const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

const images = [
{
src: 'https://images.unsplash.com/photo-1585168354690-a57c5f4a1855?fit=crop&w=800&q=80',
title: 'Neon Dance Floor',
description: 'Lose yourself on the illuminated dance floor.',
},
{
src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?fit=crop&w=800&q=80',
title: 'Electric Crowd',
description: 'Feel the energy of the party.',
},
{
src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fit=crop&w=800&q=80',
title: 'Live DJ Performance',
description: 'Vibes that keep you dancing all night.',
},
{
src: 'https://images.unsplash.com/photo-1569881898-1f16a22d9d9a?fit=crop&w=800&q=80',
title: 'Vibrant Neon Lights',
description: 'Feel the energy in the air.',
},
{
src: 'https://images.unsplash.com/photo-1524737462374-6947cfceee6b?fit=crop&w=800&q=80',
title: 'Excited Partygoers',
description: 'Get lost in the celebration.',
},
{
src: 'https://images.unsplash.com/photo-1492092904302-13f3ed1294c0?fit=crop&w=800&q=80',
title: 'Electric Beats',
description: 'Feel the pulse of the music.',
},
{
src: 'https://images.unsplash.com/photo-1552674432-7ac99a2044a4?fit=crop&w=800&q=80',
title: 'Neon Vibes',
description: 'Step into a world of glow and sound.',
},
{
src: 'https://images.unsplash.com/photo-1532442132610-80cc239e27d5?fit=crop&w=800&q=80',
title: 'Night Life',
description: 'The city is alive at night.',
},
];

const handleImageClick = (index) => {
setSelectedImage(images[index]);
setCurrentIndex(index);
setShowModal(true);
};

const handleCloseModal = () => {
setShowModal(false);
setSelectedImage(null);
};

const handlePrevImage = () => {
const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
setCurrentIndex(prevIndex);
setSelectedImage(images[prevIndex]);
};

const handleNextImage = () => {
const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
setCurrentIndex(nextIndex);
setSelectedImage(images[nextIndex]);
};

useEffect(() => {
const handleKeydown = (event) => {
if (showModal) {
if (event.key === 'ArrowLeft') {
handlePrevImage();
} else if (event.key === 'ArrowRight') {
handleNextImage();
} else if (event.key === 'Escape') {
handleCloseModal();
}
}
};

window.addEventListener('keydown', handleKeydown);
return () => {
window.removeEventListener('keydown', handleKeydown);
};
}, [showModal, currentIndex]);

return (
<>
{/* Navbar */}
<nav className="navbar">
<div className="navbar-brand">
<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Eye_of_Providence.svg/1200px-Eye_of_Providence.svg.png"
alt="Illuminati Logo"
className="illuminati-logo"
/>
<h1 className="brand-name">ILLUMINATI</h1>
</div>
</nav>

{/* Page Name */}
<div className="page-name">
<h2>Gallery</h2>
</div>

{/* Gallery */}
<div className="gallery-container">
{images.map((image, index) => (
<div
key={index}
className={`gallery-card card-${index % 4}`}
onClick={() => handleImageClick(index)}
>
<img src={image.src} alt={image.title} />
<div className="card-overlay">
<h3>{image.title}</h3>
<p>{image.description}</p>
</div>
</div>
))}
</div>

{/* Navigation Arrows */}
<div className="navigation-arrows">
<button className="arrow-btn left-arrow" onClick={handlePrevImage}>
<FaArrowLeft />
</button>
<button className="arrow-btn right-arrow" onClick={handleNextImage}>
<FaArrowRight />
</button>
</div>

{/* Modal */}
<Modal show={showModal} onHide={handleCloseModal} centered>
<Modal.Body className="neon-modal">
<Button variant="danger" className="neon-modal-close" onClick={handleCloseModal}>
<FaTimes />
</Button>
{selectedImage && (
<div className="neon-modal-content">
<img src={selectedImage.src} alt={selectedImage.title} />
<h4>{selectedImage.title}</h4>
<p>{selectedImage.description}</p>
</div>
)}
</Modal.Body>
</Modal>
</>
);
};

export default NeonGallery;

