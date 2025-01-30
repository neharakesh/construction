import React, { useState, useEffect } from 'react';
import cr1 from '../../public/images/cr1.png'
import cr2 from '../../public/images/cr2.png'
import cr3 from '../../public/images/cr3.png'
import cr4 from '../../public/images/cr4.png'

const Carousel = () => {
  const slides = [cr1,cr2,cr3,cr4
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  // Functions to manually control slides
  const nextSlide = () => setCurrentIndex((currentIndex + 1) % slides.length);
  const prevSlide = () =>
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);

  return (
    <div className="carousel w-full mt-5 mx-auto rounded-lg shadow-lg overflow-hidden relative">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-item w-full ${
            index === currentIndex ? 'block' : 'hidden'
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full" />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 btn btn-circle z-10"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 btn btn-circle z-10"
      >
        ❯
      </button>

      {/* Indicators (Dots) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

