import React, { useState, useEffect } from 'react';
import slide1 from "./slider-1.jpg"
import slide2 from "./slider-2.jpg"
import slide3 from "./slider-3.jpg"
const images = [slide1,slide2,slide3
 
  //images.unsplash.com/photo-1591084728795-1149f32d9866?auto=format&fit=crop&q=80"
];

export function BackgroundSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-red-900/80"></div>
        </div>
      ))}
    </div>
  );
}