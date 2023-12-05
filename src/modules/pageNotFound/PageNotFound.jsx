import React from "react";
import PageNotFoundimg from "../../assets/images/page-not-found.svg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div >
        <Header/>
      <img src={PageNotFoundimg} alt="" className="page-not-found"/>
      <Footer/>
    </div>
  );
};
export default PageNotFound;
