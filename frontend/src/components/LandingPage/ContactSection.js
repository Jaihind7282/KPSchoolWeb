import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <div className="school-info-container">
      <h1 className="school-name">KP PUBLIC SCHOOL</h1>
      <hr></hr>
      <p className="school-description">
        Welcome to KP PUBLIC SCHOOL IN JAMUI, where we offer a diverse and
        inclusive learning environment with opportunities for all students to
        excel academically and personally.
      </p>
      <Link to="/registration" className="contact-btn">
        Register Now
      </Link>
    </div>
  );
};

export default ContactSection;
