import React from "react";
import "./testimonials.css";

export default function Testimonials({ imgSrc, name, para }) {
  return (
    <div className="testimonial-cont">
      <img src={imgSrc} alt="" className="testimonial-img" />
      <div className="name-para">
        <h4 className="mt-3">{name}</h4>
        <p className="text-center">{para}</p>
      </div>
    </div>
  );
}
