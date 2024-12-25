import React from "react";
import { Link } from "react-router-dom";

const RulesAndRegulations = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h3>Rules & Regulations</h3>
          <hr></hr>
          <p>
            Students must maintain discipline in classrooms, follow safety rules
            in labs, handle library books carefully, participate in sports, and
            respect the play area for a safe learning environment.
          </p>
        </div>
      </div>
      <div className="rules-container">
        <div className="rules-content">
          <section className="rules-section">
            <h2>1. General Conduct</h2>
            <p>
              All students are expected to behave respectfully and adhere to the
              school's code of conduct. Disruptive behavior, disrespect, or
              harassment will not be tolerated under any circumstances.
            </p>
          </section>
          <section className="rules-section">
            <h2>2. Attendance</h2>
            <p>
              Students are required to attend school regularly. Any absence must
              be communicated to the administration, and students must provide
              valid reasons for missed classes.
            </p>
          </section>
          <section className="rules-section">
            <h2>3. Uniform Policy</h2>
            <p>
              Students must wear the prescribed school uniform during school
              hours and while participating in official school events. The
              uniform must be neat, clean, and properly worn at all times.
            </p>
          </section>
          <section className="rules-section">
            <h2>4. Mobile Phone Usage</h2>
            <p>
              Mobile phones must be turned off and kept out of sight during
              school hours unless permitted by a teacher. Unauthorized usage
              will result in disciplinary action.
            </p>
          </section>
          <section className="rules-section">
            <h2>5. Library Etiquette</h2>
            <p>
              The library must be used in silence to maintain an environment
              conducive to learning. Eating, drinking, and engaging in loud
              conversations are strictly prohibited.
            </p>
          </section>
          <section className="rules-section">
            <h2>6. Examination Integrity</h2>
            <p>
              Cheating or attempting to cheat during examinations will result in
              strict disciplinary measures, including possible expulsion from
              the institution.
            </p>
          </section>
          <section className="rules-section">
            <h2>7. Bullying and Harassment</h2>
            <p>
              Bullying and harassment are strictly prohibited. Every student has
              the right to a safe and supportive learning environment. Any
              incidents must be reported to school authorities immediately.
            </p>
          </section>
          <section className="rules-section">
            <h2>8. Extracurricular Activities</h2>
            <p>
              Students are encouraged to participate in extracurricular
              activities and sports to promote teamwork, creativity, and
              physical health. Participation is voluntary but must not interfere
              with academic responsibilities.
            </p>
          </section>
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

export default RulesAndRegulations;
