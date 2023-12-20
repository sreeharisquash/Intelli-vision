import React from "react";
import "./comments.css";
import CommonButton from "../../commonButton/commonButton";

export default function Comments({ imgSrc, head, para, day, month }) {
  return (
    // <div className="comment-container">
    <div class="card">
      <img src={imgSrc} class="card-img-top" alt="..." />
      <div className="day-and-month">
        <h6 className="text-white" style={{marginTop:"0.5rem"}}>{day}</h6>
        <p className="text-white" style={{marginTop:"-0.7rem"}}>{month}</p>
      </div>
      <div class="card-body">
        <div className="margin-container">
          <div className="d-flex mt-4 gap-5">
            <p className="heart-bef ">45 Comments</p>
            <p className="share-bef">18 Shares</p>
          </div>
          <h5 className="mt-2">{head}</h5>
          <p className="mt-3">{para}</p>
          <CommonButton fontClr="#FFFFFF" color="#170F58" label="Read More" />
        </div>
      </div>
    </div>
  );
}
