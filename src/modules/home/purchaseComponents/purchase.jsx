import React from "react";
import "./purchase.css";
import Checks from "../checkPointComponent/check";
import CommonButton from "../../commonButton/commonButton";

export default function Purchase({ price }) {
  const checkData = [
    { id: "1", para: "50 Image generations" },
    { id: "1", para: "500 Credits " },
    { id: "1", para: "Monthly 100 Credits Free" },
    { id: "1", para: "Customer Support" },
    { id: "1", para: "50GB Cloud Storage" },
  ];
  return (
    <div>
      <h1 className="text-center ">${price}</h1>
      <div className="price-bg">
        {checkData.map((items) => (
          <Checks data={items.para} />
        ))}
      </div>
      <div className="mt-4">
        <CommonButton fontClr="#FFFFFF" color="#170F58" label="Purchase Now" />
      </div>
    </div>
  );
}
