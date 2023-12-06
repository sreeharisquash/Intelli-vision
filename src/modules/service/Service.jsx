import React from "react";
import "./Service.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import CommonButton from "../commonButton/commonButton";
import CloudImg from "../../assets/images/cloud-img.jpg";
import Courses from "./courses/Courses";
import TrainingPackages from "./trainingPackages";
import HeadImage from "../../assets/images/handsome-stylish-bearded-guy-posing-against-white-wall.jpg";
import EnrollSecion from "./EnrollSection";
import FacebookImg from "../../assets/images/enroll-fb.svg";
import TwitterImg from "../../assets/images/enroll-twit.svg";
import GithubImg from "../../assets/images/enroll-github.svg";
import LinkdinImg from "../../assets/images/enorll-linkdin.svg";

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

  const tpHeadData = [
    {
      id: "1",
      head: "mobile usage",
      image: HeadImage,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
    {
      id: "2",
      head: "mobile usage",
      image: HeadImage,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
    {
      id: "3",
      head: "mobile usage",
      image: HeadImage,
      subp1: "basic requirements",
      subp2: "additional requirements",
      subp3: "Normal needs",
      price: "90",
    },
  ];

  const enrollData = [
    { id: "1", image: FacebookImg },
    { id: "2", image: TwitterImg },
    { id: "3", image: LinkdinImg },
    { id: "4", image: GithubImg },
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
                  <Courses
                    image={items.image}
                    head={items.head}
                    para={items.para}
                  />
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
            <div className="col-lg-6 text-center mb-5">
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
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-7 ">
              <h1>Lorem ipsum dolor</h1>
              <h5>FOR FREE. HOW TO LEARN</h5>
              <p className="mt-4 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius commodi velit debitis delectus perspiciatis
                molestias dolorem dolorum nobis iure laboriosam harum
                voluptatibus in, ipsa corrupti sit odio suscipit quo?
              </p>
            </div>
          </div>
          <div className="row mb-5">
            {tpHeadData.map((items) => (
              <div className="col-lg-4" key={items.id}>
                <TrainingPackages
                  head={items.head}
                  image={items.image}
                  subpara1={items.subp1}
                  subpara2={items.subp2}
                  subpara3={items.subp3}
                  price={items.price}
                />
              </div>
            ))}
          </div>
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
          <div className="row d-flex justify-content-center ">
            <div className="col-lg-6">
            <h1>Direct links</h1>
            <h5 className="mb-5">become a part by enrolling</h5>
            </div>
          </div>
          <div className="row mb-5">
            {enrollData.map((items) => (
              <div className="col-lg-3 d-flex justify-content-center">
                <EnrollSecion logo={items.image}/>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Service;
