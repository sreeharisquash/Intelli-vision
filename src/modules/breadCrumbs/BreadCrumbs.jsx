import React from "react";
import './BreadCrumbs.css'
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  // let currentLink = "/";
  let breadcrumbPath = "Home";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      // currentLink += `/${crumb}`;
      breadcrumbPath += ` / ${crumb}`;

      return (
        <span key={crumb}>
          <span className="crumb">
            <h1 className="text-capitalize opacity-75 ">{crumb}</h1>
          </span>
          {index < array.length - 1 && <span> / </span>}
        </span>
      );
    });

  return (
    <div className="bread-crumbs">
      <h1>{crumbs}</h1>
      <h4>{breadcrumbPath}</h4>
    </div>
  );
};

export default BreadCrumbs;
