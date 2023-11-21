import React from "react";
import './comments.css'
import CommonButton from "../../commonButton/commonButton";


export default function Comments({ imgSrc , head , para}){
    return (
        <div className="comment-container">
                 <div className="img-section">
            <img src={imgSrc} alt="" className="comment-img" />
            {/* <div className="date">
                <p>hy</p>
            </div> */}
            </div>
            <div className="margin-container">
            <div className="d-flex mt-4 gap-5">
                <p className="heart-bef ">45 Comments</p>
                <p className="share-bef">18 Shares</p>
            </div>
            <h5 className="mt-2">{head}</h5>
            <p className="mt-3">{para}</p>
            <CommonButton
                  fontClr="#FFFFFF"
                  color="#170F58"
                  label="Read More"
                />
            </div>
           
        </div>
    )
}