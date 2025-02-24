import React, { useState } from 'react';
import '../styles/Carousel.css';

function Carousel ({images}) {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice de la imagen actual

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel-container">
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="carousel-images">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
