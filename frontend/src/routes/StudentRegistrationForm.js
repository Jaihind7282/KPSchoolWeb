import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    state: "",
    nationality: "",
    age: "",
    phone: "",
    city: "",
    districtName: "",
    policeStation: "",
    grade: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
  });

  const [receipt, setReceipt] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://kpschoolbackend.onrender.com/submit-form",
        formData
      );
      setReceipt(response.data.data);
      setFormData({});
      navigate("/receipt", { state: { receipt: response.data.data } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          {/* First Section */}
          <div className="form-section">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Second Section */}
          <div className="form-section">
            <div className="form-field">
              <input
                type="text"
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Third Section (optional, you can remove if not needed) */}
          <div className="form-section">
            <div className="form-field">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="districtName"
                placeholder="District Name"
                value={formData.districtName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="policeStation"
                placeholder="Police Station"
                value={formData.policeStation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          {/* Optional additional fields or last section */}
          <div className="form-section">
            <div className="form-field">
              <input
                type="text"
                name="grade"
                placeholder="Grade"
                value={formData.grade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="fatherName"
                placeholder="Father's Name"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="text"
                name="motherName"
                placeholder="Mother's Name"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <div className="form-field">
              <input
                type="text"
                name="fatherOccupation"
                placeholder="Father's Occupation"
                value={formData.fatherOccupation}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="Registration-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentRegistrationForm;
