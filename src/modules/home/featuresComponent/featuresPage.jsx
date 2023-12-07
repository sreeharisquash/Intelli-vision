import React from "react";
import "./featuresPage.css";

export default function FeaturesPage({ imgSrc, head, para }) {
  return (
    <div className="features-container">
      <div className="d-flex gap-4 ">
        <img src={imgSrc} alt="" className=" before-head" />
        <h2 className="head-before">{head}</h2>
      </div>
      <p className="pt-4">{para}</p>
    </div>
  );
}
