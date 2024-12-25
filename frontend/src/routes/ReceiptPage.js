import React from "react";
import { useLocation } from "react-router-dom";

const ReceiptPage = () => {
  const location = useLocation();
  const { receipt } = location.state || {};

  if (!receipt) {
    return <div>No receipt found</div>;
  }

  return (
    <div className="receipt-container">
      <h2>KP PUBLIC SCHOOL</h2>
      <h5>
        Swami Vivekanand Colony,Sikandra Road,Near-Power House MAHISOURI, JAMUI
        811307
      </h5>
      <h3>Receipt</h3>
      <div className="receipt-content">
        <div className="receipt-section">
          <div className="receipt-item">
            <strong>Name:</strong> {receipt.name}
          </div>
          <div className="receipt-item">
            <strong>Father Name:</strong> {receipt.fatherName}
          </div>
          <div className="receipt-item">
            <strong>Age:</strong> {receipt.age}
          </div>
        </div>

        <div className="receipt-section">
          <div className="receipt-item">
            <strong>Nationality:</strong> {receipt.nationality}
          </div>
          <div className="receipt-item">
            <strong>State:</strong> {receipt.state}
          </div>
          <div className="receipt-item">
            <strong>District:</strong> {receipt.districtName}
          </div>
        </div>

        <div className="receipt-section">
          <div className="receipt-item">
            <strong>Email:</strong> {receipt.email}
          </div>
          <div className="receipt-item">
            <strong>Phone:</strong> {receipt.phone}
          </div>
          <div className="receipt-item">
            <strong>City:</strong> {receipt.city}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
