import React from "react";
import './download.css'

            


export default function downloadButton({onclick ,  imgSrc , altText , storeName}){
    return(
            <button className="download-button">
            <img src={imgSrc} alt={altText} className="store-image"/>
            <div>
              <h6>Download on</h6>
              <h4>{storeName}</h4>
            </div>
            </button>
    )
}