import React from "react";
import { Link } from "react-router-dom";
import FacilityCard from "./FacilityCard";

const facilities = [
  {
    title: "Classroom",
    description:
      "Equipped with modern teaching tools like projectors and smartboards.",
    image: "images/schoolPhoto.jpeg",
  },
  {
    title: "Computer Class",
    description:
      "A place for exploring, studying, and accessing computer knowledge.",
    image: "images/gallery4.jpeg",
  },
  {
    title: "Sports Facilities",
    description: "Gym, playground, and courts for various sports.",
    image: "images/slider1.jpeg",
  },
  {
    title: "Laboratories",
    description: "Science and computer labs with modern equipment.",
    image: "images/Laboratories.jpg",
  },
  {
    title: "Cafeteria",
    description: "A place for healthy meals and snacks.",
    image: "images/Cafeteria.jpg",
  },
  {
    title: "Auditorium",
    description: "For events, performances, and school gatherings.",
    image: "images/auditorium.jpg",
  },
  {
    title: "Medical Room",
    description: "Equipped with first aid and medical support.",
    image: "images/hospital.jpg",
  },
  {
    title: "Art & Music Rooms",
    description: "Rooms for creative arts and music classes.",
    image: "images/Art & Music Rooms.jpg",
  },
];

const FacilityList = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h3>Facilities</h3>
          <hr></hr>
          <p>
            KP Public School in jamui offers modern facilities including
            spacious classrooms, science and computer labs, a library, sports
            amenities, and a dedicated play area, fostering holistic student
            development.
          </p>
        </div>
      </div>
      <div className="facility-list">
        {facilities.map((facility, index) => (
          <FacilityCard
            key={index}
            title={facility.title}
            description={facility.description}
            image={facility.image}
          />
        ))}
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

export default FacilityList;
