import React from "react";

const VisionMission = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="image-wrapper">
          <img
            src="images\visionPhoto.jpg" // Replace with the school's image URL
            alt="Vision"
            className="image"
          />
        </div>
        <h3 className="title">Vision</h3>
        <p className="description">
          Our vision is to provide a comprehensive education that empowers
          students to excel academically, socially, and emotionally, preparing
          them for a bright future.
        </p>
      </div>

      <div className="card">
        <div className="image-wrapper">
          <img
            src="images\misssionPhoto.png" // Replace with the school's image URL
            alt="Mission"
            className="image"
          />
        </div>
        <h3 className="title">Mission</h3>
        <p className="description">
          Our mission is to foster a dynamic learning environment that nurtures
          curiosity, creativity, and critical thinking, ensuring every student
          achieves their full potential.
        </p>
      </div>
    </div>
  );
};

export default VisionMission;
