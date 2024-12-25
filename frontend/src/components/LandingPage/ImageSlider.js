import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "images/slider1.jpeg",
    "images/schoolPhoto.jpeg",
    "images/slider2.jpeg",
    "images/slider3.jpeg",
    "images/gallery7.jpeg",
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(goToNext, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="kppublicschoolinjamui-slider-container">
      <button className="prev" onClick={goToPrev}>
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="next" onClick={goToNext}>
        <i class="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
};

export default ImageSlider;
