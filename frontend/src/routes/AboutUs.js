import React from "react";
import { Link } from "react-router-dom";

const members = [
  {
    name: "Mr. Kameshwar Mahto",
    position: "Director",
    image: "images/kpschool1.jpeg",
    message: "With KP Public School, Let’s grow together!",
  },
  {
    name: "Mr. Sandeep Kumar",
    position: "Principal",
    image: "images/jpschool2.jpeg",
    message: "Welcome to our school! We strive for excellence and innovation.",
  },
  {
    name: "Mrs. Pinki Kumari",
    position: "Vice Principal",
    image: "images/kpschool3.jpeg",
    message: "I am proud to lead a team of exceptional educators.",
  },
  {
    name: "Mr. Kuldeep Kumar",
    position: "Managing Incharge",
    image: "images/kpschool4.jpeg",
    message: "Our mission is to foster a love of learning in every student.",
  },
  {
    name: "Mr. Dilip Kumar",
    position: "Co-Incharge",
    image: "images/kpschool5.jpeg",
    message: "Here to guide students toward their dreams and aspirations.",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h3>About Our School</h3>
          <hr></hr>
          <p>
            Welcome to KP Public School in Jamui! We are dedicated to providing
            a nurturing and stimulating learning environment where students can
            develop academically, socially, and personally.
          </p>
        </div>

        <div className="team-section">
          <h4>Meet Our Team</h4>
          <div className="team-container">
            {members.map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <p className="message">{member.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="school-info-container">
        <h1 className="school-name">KP PUBLIC SCHOOL</h1>
        <hr></hr>
        <p className="school-description">
          Welcome to KP PUBLIC SCHOOL in Jamui, where we offer a diverse and
          inclusive learning environment with opportunities for all students to
          excel academically and personally.
        </p>
        <Link to="/registration" className="contact-btn">
          Register Now
        </Link>
      </div>
    </>
  );
};

export default AboutUs;
