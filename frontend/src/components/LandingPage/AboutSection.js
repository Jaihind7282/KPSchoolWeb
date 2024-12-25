import React, { useState } from "react";

const AboutSection = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  const fullText =
    "KP Public School in Jamui are dedicated to fostering academic excellence, creativity, and personal growth by providing students with ample opportunities, access to state-of-the-art facilities, guidance from passionate educators, and personalized support tailored to individual learning needs.";

  const shortText = fullText.slice(0, 130);

  return (
    <section className="about-section">
      <div className="about-container">
        <h1>Welcome To KP Public School</h1>
        <hr />
        <p>
          {showMore
            ? fullText
            : `${shortText}${fullText.length > 130 ? "..." : ""}`}
          {fullText.length > 130 && (
            <button className="see-more-btn" onClick={toggleText}>
              {showMore ? "See Less" : "See More"}
            </button>
          )}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
