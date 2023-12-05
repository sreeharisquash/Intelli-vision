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
            <h4 className="text-capitalize">{crumb}</h4>
          </span>
          {index < array.length - 1 && <span> / </span>}
        </span>
      );
    });

  return (
    <div className="bread-crumbs">
      <h2>{crumbs}</h2>
      <h4>{breadcrumbPath}</h4>
    </div>
  );
};

export default BreadCrumbs;
