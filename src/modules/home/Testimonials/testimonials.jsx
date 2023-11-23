import React from "react";
import './testimonials.css'
import QuotationDown from '../../../assets/images/testimonial-quotation.svg'
import QuotationUp from '../../../assets/images/testimonial-quotationUp.svg'

export default function Testimonials({ imgSrc, name, para }) {
  return (
    <div className="testimonial-cont">
            <img src={imgSrc} alt="" className="testimonial-img"/>
            <img src={QuotationUp} alt="" className="quotation-up"/>
           
            <h2>{name}</h2>
            <p className="text-center">{para}</p>
            <img src={QuotationDown} alt="" className="quotaion-down"/>
          </div>
  );
}
