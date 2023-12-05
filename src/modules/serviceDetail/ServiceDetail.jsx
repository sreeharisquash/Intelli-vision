import React from "react";
import "./ServiceDetail.css";
import serviceDetailimg from "../../assets/images/service-details.jpg";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import WhyIsItBest from "../../assets/images/why-is-it-best-service-deta.svg";
import CarouselImg1 from "../../assets/images/woman-with-salad-phone.jpg";
import CarouselImg2 from "../../assets/images/handsome-stylish-bearded-guy-posing-against-white-wall.jpg";
import CarouselImg3 from "../../assets/images/facial-recognition-collage-concept.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DietMaintanance from "./DietMaintanance";

import UsersImg from "../../assets/images/user-solid.svg";
import ClockImg from '../../assets/images/clock-solid.svg'
// import AwardImg from '../../assets/images/award-solid.svg'
import EnrollSectionImg from "../../assets/images/steam-symbol.svg";
import EnrollSection from "./EnrollSection";

const ServiceDetails = () => {
  const whatIsItSection = [
    { id: "1", image: serviceDetailimg },
    { id: "2", image: serviceDetailimg },
    { id: "3", image: serviceDetailimg },
  ];

  const whyisitBest = [
    { id: "1", para: "Makes the body slenderer and the figure more beautiful" },
    { id: "2", para: "Effectively reduces cellulite problems" },
    {
      id: "3",
      para: "Cleanses the body of waste substances and repairs blood and lymphatic circulation",
    },
    {
      id: "4",
      para: "Makes the skin smoother, more elastic, softer and revitalises dry skin",
    },
    { id: "5", para: "Reduces muscular and joint pains" },
  ];

  const carouselData = [
    { id: "1", image: CarouselImg1 },
    { id: "2", image: CarouselImg2 },
    { id: "3", image: CarouselImg3 },
  ];

  const trainingData = [
    {
      id: "1",
      head: "Filling type",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "2",
      head: "Shape",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "3",
      head: "Profile",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
    {
      id: "4",
      head: "Size",
      para: "Saline, Silicone Gel, or Highly Cohesive Silicone “Gummy Bear” Implants. Neither is “best,” but there are some differences in cost, feel, and incision requirements that you need to consider. Your cosmetic surgeon will help you find the right implant type for you.",
    },
  ];

  const dietData = [
    { id: "1", image: UsersImg, number: "7254" , head:'Happy clients'},
    { id: "2", image: UsersImg, number: "1276" , head : 'Awards won'},
    { id: "3", image: ClockImg, number: "32658" , head: '  Hours worked'},
  ];

  const enrollSection = [
    {
      id: "1",
      image: EnrollSectionImg,
      head: "Pilates Intensive",
      para: "Enroll Now",
    },
    {
      id: "2",
      image: EnrollSectionImg,
      head: "Pilates Intensive",
      para: "Enroll Now",
    },
    {
      id: "3",
      image: EnrollSectionImg,
      head: "Pilates Intensive",
      para: "Enroll Now",
    },
    {
        id: "4",
        image: EnrollSectionImg,
        head: "Pilates Intensive",
        para: "Enroll Now",
      },
  ];

  return (
    <>
      <div className="service-details-container">
        <Header />
        <div className="service-detail-breadcrumb">
          <BreadCrumbs />
        </div>
        <div className="container">
          <div className="row">
            {whatIsItSection.map((items) => (
              <div className="col-lg-4">
                <img src={items.image} alt="" />
              </div>
            ))}
          </div>
          <div className="pt-5 pb-5">
            <h1>What is it?</h1>
            <p className="mt-4">
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Duas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expedita
              distinctio.. Duas molestias excepturi sint.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <h1>Why is it best?</h1>
              <p className="mt-4">
                Duas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio.. Duas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga.
              </p>
              <ul className="why-is-it-best">
                {whyisitBest.map((items) => (
                  <li>{items.para}</li>
                ))}
              </ul>
            </div>
            <div className="col-lg-5">
              <img src={WhyIsItBest} alt="" />
            </div>
          </div>
          <div className="picture-gallery pt-5 mt-3">
            <h1>Picture Gallery</h1>
            <Carousel showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
              {carouselData.map((items) => (
                <div key={items.id}>
                  <img src={items.image} alt="" />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="fitness-training pt-5">
            <h1>Fitness Training</h1>
            <ul className="mt-4">
              {trainingData.map((items) => (
                <li key={items.id}>
                  <h4>{items.head}</h4>
                  <p>{items.para}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="diet-maintanance ">
            <h1>Diet Maintenance</h1>
            <p>
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga. molestias
              excepturi sint.
            </p>
            <div className="row pt-5">
              {dietData.map((items) => (
                <div className="col-lg-4 col-md-12 mb-5 d-flex align-items-center flex-column">
                  <DietMaintanance image={items.image} number={items.number} />
                  <h5 className="mt-4">{items.head}</h5>
                </div>
              ))}
            </div>
            <p>
              Duas molestias excepturi sint occaecati cupiditate non provident,
              similique sunt in culpa qui officia deserunt mollitia animi, id
              est laborum et dolorum fuga. Et harum quidem rerum facilis est et
              expedita distinctio.. Duas molestias excepturi sint occaecati
              cupiditate non provident, similique sunt in culpa qui
            </p>
          </div>
          <div>
            <div className="row pb-5">
                {enrollSection.map((items) => (
                    <div className="col-lg-3 col-md-12 mb-5" key={items.id}>
                    <EnrollSection image={items.image} head={items.head} para={items.para}/>
                    </div>
                ))}
             
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ServiceDetails;
