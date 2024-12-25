import React from "react";

const FacilityCard = ({ title, description, image }) => {
  return (
    <div className="facility-card">
      <img src={image} alt={title} className="facility-image" />
      <div className="facility-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
