import React from "react";
import { Link } from "react-router-dom";

const images = [
  {
    id: 1,
    src: "images/gallery1.jpeg",
    alt: "Gallery Image 1",
  },
  {
    id: 2,
    src: "images/gallery2.jpeg",
    alt: "Gallery Image 2",
  },
  {
    id: 3,
    src: "images/gallery3.jpeg",
    alt: "Gallery Image 3",
  },
  {
    id: 4,
    src: "images/gallery4.jpeg",
    alt: "Gallery Image 4",
  },
  {
    id: 5,
    src: "images/gallery5.jpeg",
    alt: "Gallery Image 5",
  },
  {
    id: 6,
    src: "images/gallery6.jpeg",
    alt: "Gallery Image 6",
  },
  {
    id: 7,
    src: "images/gallery7.jpeg",
    alt: "Gallery Image 7",
  },
  {
    id: 8,
    src: "images/slider1.jpeg",
    alt: "Gallery Image 8",
  },
];

const Gallery = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h3>Our Gallery</h3>
          <hr></hr>
          <p>
            kp public school in jamui, school gallery showcases student artwork,
            projects, and achievements, fostering creativity and pride. It
            serves as an inspiring space for students to express themselves and
            celebrate their talents.
          </p>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-grid">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="school-info-container">
        <h1 className="school-name">KP PUBLIC SCHOOL</h1>
        <hr></hr>
        <p className="school-description">
          Welcome to KP PUBLIC SCHOOL, where we offer a diverse and inclusive
          learning environment with opportunities for all students to excel
          academically and personally.
        </p>
        <Link to="/registration" className="contact-btn">
          Register Now
        </Link>
      </div>
    </>
  );
};

export default Gallery;
