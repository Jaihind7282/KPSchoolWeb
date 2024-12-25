import React from "react";

const CurriculumOverview = () => {
  return (
    <div className="curriculum-container">
      <h1>Curriculum Overview</h1>
      <div className="grade-section">
        <h2>Early Years (NUR - Grade 2)</h2>
        <p>
          The Early Years curriculum focuses on foundational skills, fostering
          curiosity, social-emotional development, and early literacy. Students
          are introduced to core concepts through hands-on learning and
          play-based activities.
        </p>
      </div>
      <div className="grade-section">
        <h2>Pre-Primary (Grade 3 - 5)</h2>
        <p>
          The Pre-Primary curriculum emphasizes expanding cognitive abilities,
          building problem-solving skills, and developing a deeper understanding
          of language, math, science, and arts. Students are encouraged to work
          independently and collaboratively.
        </p>
      </div>
      <div className="grade-section">
        <h2>Middle School (Grade 6 - 8)</h2>
        <p>
          The Middle School curriculum challenges students to engage critically
          with subjects, enhancing their academic and social skills. The focus
          is on inquiry-based learning, project-based assignments, and preparing
          students for high school by developing a strong academic foundation.
        </p>
      </div>
    </div>
  );
};

export default CurriculumOverview;
