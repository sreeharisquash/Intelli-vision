import React from "react";
import "./ContactMethods.css";

const ContactMethods = ({ image, method, medium1, medium2 }) => {
  return (
    <div className="text-center contact-method-container text-white">
      <img src={image} alt="" className="image-cont" />
      <h2>{method}</h2>
      <div className="d-flex align-items-center justify-content-center mt-4 opacity-50">
        <h5>{medium1}</h5>
      </div>
      <div className="d-flex align-items-center justify-content-center opacity-50">
        <h5 className="mb-5">{medium2}</h5>
      </div>
    </div>
  );
};
export default ContactMethods;
