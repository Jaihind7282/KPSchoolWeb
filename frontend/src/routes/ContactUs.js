import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://kpschoolbackend.onrender.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: "", email: "", message: "" });
        navigate("/thank-you");
      } else {
        alert("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      alert("An error occurred");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-details">
        <h3 className="contact-details-heading">Contact Details</h3>
        <img
          src="images\schoolPhoto.jpeg"
          alt="School Identity"
          className="identity-img"
        />
        <p className="contact-details-paragraph">
          Address:
          <br />
          Swami Vivekanand Colony,Sikandra Road,Near-Power House
          <br />
          MAHISOURI, JAMUI 811307
        </p>
        <p className="contact-details-paragraph">Phone: +91 8877668996</p>
        <p className="contact-details-paragraph">
          Email: kppsjamui59@gmail.com
        </p>
      </div>
      <div className="contact-form">
        <h2 className="contact-heading">Contact Us</h2>
        <form onSubmit={handleSubmit} className="responsive-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
