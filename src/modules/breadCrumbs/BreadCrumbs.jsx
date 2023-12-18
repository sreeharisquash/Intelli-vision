// import React from "react";
// import './BreadCrumbs.css'
// import { useLocation} from "react-router-dom";

// const BreadCrumbs = () => {
//   const location = useLocation();
//   // const navigate = useNavigate()

//   // let currentLink = "/";
//   let breadcrumbPath = "Home";

//   const crumbs = location.pathname
//     .split("/")
//     .filter((crumb) => crumb !== "")
//     .map((crumb, index, array) => {
//       // currentLink += `/${crumb}`;
//       breadcrumbPath += ` / ${crumb}`;

//       return (
//         <span key={crumb}>
//           <span className="crumb">
//             <h1 >{crumb}</h1>
//           </span>
//           {index < array.length - 1 && <span> / </span>}
//         </span>
//       );
//     });

//   return (
//     <div className="bread-crumbs">
//       <h1 className="text-white">{crumbs}</h1>
//       <h4>{breadcrumbPath}</h4>
//     </div>
//   );
// };

// export default BreadCrumbs;



import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbs.css";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();

  let breadcrumbPath = "Home";
  let currentLink = "/";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      currentLink += `${index === 0 ? "" : "/"}${crumb}`;
      breadcrumbPath += ` / ${crumb}`;

      return (
        <span key={crumb}>
          {index < array.length - 1 ? (
            <Link to={currentLink} className="crumb-link">
              {crumb}
            </Link>
          ) : (
            <span className="crumb">{crumb}</span>
          )}
          {index < array.length - 1 && <span> / </span>}
        </span>
      );
    });

  const navigateLinks = breadcrumbPath
    .split(" / ")
    .map((section, index, array) => {
      const path = array.slice(0, index + 1).join(" / ");
      return (
        <span key={index}>
          {index < array.length - 1 && (
            <>
              <Link to='/' className="navigate-link">
                {section}
              </Link>
              <span> / </span>
            </>
          )}
          {index === array.length - 1 && <span>{section}</span>}
        </span>
      );
    });

  return (
    <div className="bread-crumbs">
      <h1 className="text-white">{crumbs}</h1>
      <h4>{navigateLinks}</h4>
    </div>
  );
};

export default BreadCrumbs;
