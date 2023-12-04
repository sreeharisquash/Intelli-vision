import React from "react";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "/";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink = +`/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <h4 className="text-capitalize">{crumb}</h4>
        </div>
      );
    });
  return <div className="bread-crumbs">{crumbs}</div>;
};

export default BreadCrumbs;
