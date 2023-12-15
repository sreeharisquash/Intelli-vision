import React from "react";
import "./comments.css";
import CommonButton from "../../commonButton/commonButton";

export default function Comments({ imgSrc, head, para, day, month }) {
  return (
    // <div className="comment-container">
    <div class="card">
      <img src={imgSrc} class="card-img-top" alt="..." />
      <div className="day-and-month">
        <h5 className="text-white">{day}</h5>
        <p className="text-white">{month}</p>
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

      {/* <div class="card-body"> */}

      {/* <a href="#hh" class="card-link">
            Card link
          </a> */}
      {/* <a href="#hh" class="card-link">
            Another link
          </a> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div className="img-section">
        <img src={imgSrc} alt="" className="comment-img" />
      </div>
      <div className="margin-container">
        <div className="d-flex mt-4 gap-5">
          <p className="heart-bef ">45 Comments</p>
          <p className="share-bef">18 Shares</p>
        </div>
        <h5 className="mt-2">{head}</h5>
        <p className="mt-3">{para}</p>
        <CommonButton fontClr="#FFFFFF" color="#170F58" label="Read More" />
      </div> */}
    </div>
  );
}
