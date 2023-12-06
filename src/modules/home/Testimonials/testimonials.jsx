import React from "react";
import "./testimonials.css";

export default function Testimonials({ imgSrc, name, para }) {
  return (
    <div className="testimonial-cont">
      <img src={imgSrc} alt="" className="testimonial-img" />
      <div className="name-para">
        <h4 className="mt-2">{name}</h4>
      <p className="text-center mt-4">{para}</p>
      </div>
      
    </div>
  );
}
