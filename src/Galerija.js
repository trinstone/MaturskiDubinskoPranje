import React, { useState } from 'react';
import stolice1 from './galerija/stolice1.png';
import stolice2 from './galerija/stolice2.png';
import stolice3 from './galerija/stolice3.png'; // Add more images as necessary

const images = [stolice1, stolice2, stolice3]; // Array to hold image paths

const Galerija = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loops back to first image
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Loops back to last image
  };

  return (
    <div className="Galerija-container">
      <h1 className="Galerija-title">Galerija</h1>
      <div className="Galerija-image-container">
        <img src={images[currentIndex]} alt="Gallery" className="Galerija-image" />
      </div>
      <div className="Galerija-button-container">
        <button className="Galerija-prev-button" onClick={prevImage}>&lt;</button>
        <button className="Galerija-next-button" onClick={nextImage}>&gt;</button>
      </div>
    </div>
  );
};

export default Galerija;

