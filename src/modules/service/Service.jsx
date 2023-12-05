import React from "react";
import "./Service.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import CommonButton from "../commonButton/commonButton";
import CloudImg from "../../assets/images/cloud-img.jpg";
import Courses from "./courses/Courses";

const Service = () => {
  const courseDatas = [
    {
      id: "1",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "2",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "3",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "4",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "5",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "6",
      image: CloudImg,
      head: "CLOUD STORAGE",
      para: "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];
  return (
    <>
      <div className="services-container">
        <Header />
        <div className="service-breadcrumb">
        <BreadCrumbs />
        </div>
        
        <div className="container pt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <h1>All these Services for you</h1>
              <h5>JUST PICK WHAT YOU NEED TO LEARN</h5>
            </div>
                <div className="row mb-5">
            {courseDatas.map((items) => (
                <div className="col-lg-4 mt-5 text-center">
                <Courses image={items.image} head={items.head} para={items.para}/>
                </div>
            ))}
            
          </div>
          </div>
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-lg-7 ">
              <h1>Lorem ipsum dolor</h1>
              <h5>FOR FREE. HOW TO LEARN</h5>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius commodi velit debitis delectus perspiciatis
                molestias dolorem dolorum nobis iure laboriosam harum
                voluptatibus in, ipsa corrupti sit odio suscipit quo?
              </p>
            </div>
          </div>
        </div>
        <div className="left-right-contents">
          <div className="row" style={{ maxWidth: "100%" }}>
            <div className="col-lg-6 text-center">
              <h2>Want to know what is best for you</h2>
              <a href="#view-catogories">View categories</a>
            </div>
            <div className="col-lg-6 text-center">
              <h2>Take a look at popular collection</h2>
              <a href="#view-catogories">View collections</a>
            </div>
          </div>
        </div>
        <div className="container pt-5">
          <div className="start-journey">
            <h1>Start a Journey. Enroll Now</h1>
            <h5 className="mb-5">LEARN SOMETHING WHEREVER YOU ARE</h5>
            <CommonButton
              label="Join us now"
              borderClr="#170F58"
              color="#170F58"
              fontClr="white"
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Service;
