import React from "react";
import StudentRegistrationForm from "./StudentRegistrationForm";

function RegistrationForm() {
  return (
    <>
      <div className="document-container">
        <h1 className="heading">Documents Required for Admission</h1>
        <hr></hr>
        <ul className="document-list">
          <li>
            <strong>1. Student Photograph:</strong> 5 pieces
          </li>
          <li>
            <strong>2. Parent Photograph :</strong> 2 pieces
          </li>
          <li>
            <strong>3. Birth Certificate</strong>
          </li>
          <li>
            <strong>4. Caste Certificate</strong>
          </li>
          <li>
            <strong>5. Residential Certificate</strong>
          </li>
          <li>
            <strong>6. Income Certificate</strong>
          </li>
          <li>
            <strong>7. Aadhaar Card of Student or Parent</strong>
          </li>
          <li>
            <strong>8. Blood Group Report</strong>
          </li>
          <li>
            <strong>9. Transfer Certificate from Previous School</strong>
          </li>
        </ul>
      </div>
      <StudentRegistrationForm />
    </>
  );
}

export default RegistrationForm;
