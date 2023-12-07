import React, { useState } from "react";
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
import ClockImg from "../../assets/images/clock-solid.svg";
// import AwardImg from '../../assets/images/award-solid.svg'
import EnrollSectionImg from "../../assets/images/steam-symbol.svg";
import EnrollSection from "./EnrollSection";
import Darell from "../../assets/images/darell.svg";
import Dianne from "../../assets/images/dianna.svg";
import Albert from "../../assets/images/albert.svg";
import Ralph from "../../assets/images/ralph.svg";
import Brooklyn from "../../assets/images/brooklyn.svg";
import fbLogo from "../../assets/images/fb-mini.svg";
import twitterLogo from "../../assets/images/twit-mini.svg";
import linkdinLogo from "../../assets/images/linkdin-mini.svg";
import TrainingAmenitiesImg from "../../assets/images/training-amenities.jpg";
import Marvin from "../../assets/images/marvin.svg";
import SearchIcon from "../../assets/images/magnifying-glass-solid (1).svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import {Autoplay} from 'swiper/modules'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import { register } from "swiper/element/bundle";
import SwiperComponent from "./swiperComponent";
import FindComponent from "./FindComponent";
import SubNavBar from "./subNavbar";
import { tab } from "@testing-library/user-event/dist/tab";

register();

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

  const reviews = [
    {
      id: "1",
      image: Darell,
      name: "Darrell Steward",
      Designation: "Web Designer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "2",
      image: Dianne,
      name: "Dianne Russell",
      Designation: "App Developer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "3",
      image: Albert,
      name: "Albert Flores",
      Designation: "Marketing Coordinator",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "4",
      image: Ralph,
      name: "Ralph Edwards",
      Designation: "Web Designer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "5",
      image: Brooklyn,
      name: "Brooklyn Simmons",
      Designation: "App Developer",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
    {
      id: "6",
      image: Marvin,
      name: "Marvin McKinney",
      Designation: "Marketing Coordinator",
      para: "Lorem ipsum dolor sit consectetur dolor sit amet, consectetur adipiscing elit, sed doeiusmodut labore enim ad minim veniam, quis nostrud exercitationdolor sit amet, consectetur adipiscing adipiscing doeiusmod tempor incididunt ut labore minim veniam, quis nostrud exercitation.",
    },
  ];

  const dietData = [
    { id: "1", image: UsersImg, number: "7254", head: "Happy clients" },
    { id: "2", image: UsersImg, number: "1276", head: "Awards won" },
    { id: "3", image: ClockImg, number: "32658", head: "  Hours worked" },
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

  const trainingAmenities = [
    {
      id: "1",
      image: TrainingAmenitiesImg,
      name: "Klaus mikaelson",
      designation: "Developer",
      logos: [fbLogo, twitterLogo, linkdinLogo],
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      image: TrainingAmenitiesImg,
      name: "Elijah mikaelson",
      designation: "Tester",
      logos: [fbLogo, twitterLogo, linkdinLogo],
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const findData = [
    {
      id: "1",
      image: SearchIcon,
      head: "Find",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
    {
      id: "2",
      image: SearchIcon,
      head: "Find",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
    {
      id: "3",
      image: SearchIcon,
      head: "Find",
      para: "Quisque volutpat mattis eros nullam malesuada",
    },
  ];

  const [activeTab, setActiveTab] = useState("whatIsIt");

  const handleTabClick = (tab) => {
    const element = document.getElementById(tab);
    // setActiveTab(tab);
    console.log(tab)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="service-details-container">
        <Header />
        <div className="service-detail-breadcrumb">
          <BreadCrumbs />
        </div>
        <SubNavBar activeTab={activeTab} onTabClick={handleTabClick} />
        <div className="container">
          <div className="row">
            {whatIsItSection.map((items) => (
              <div className="col-lg-4 mb-5">
                <img src={items.image} alt="" />
              </div>
            ))}
          </div>
          <div className="pt-5 pb-5" id="whatIsIt">
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
            <div className="col-lg-7" id="whyIsBest">
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
          <div className="picture-gallery pt-5 mt-3" id="pictureGallery">
            <h1>Picture Gallery</h1>
            <Carousel
              showIndicators={false}
              showStatus={false}
              autoPlay={true}
              infiniteLoop={true}
            >
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
          <div className="diet-maintanance" id="dietMaintenance">
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
                  <EnrollSection
                    image={items.image}
                    head={items.head}
                    para={items.para}
                  />
                </div>
              ))}
              <p className="mt-4">
                Duas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio.. Duas molestias excepturi
                sint occaecati cupiditate non provident, similique sunt in culpa
                qui
              </p>
            </div>
            <div className="training-amenities">
              <h1>Training Amenities</h1>
              <div className="row pt-5 pb-5">
                {trainingAmenities.map((items) => (
                  <div className="col-lg-6 pb-5 " key={items.id}>
                    <div className="image-underline">
                      <img
                        src={items.image}
                        alt=""
                        className="training-eminity-img"
                      />
                      <div className="items-container">
                        <h3>{items.name}</h3>
                        <p>{items.designation}</p>
                        <div className="logos">
                          <div className="d-flex gap-4">
                            {items.logos.map((data) => (
                              <img src={data} alt="" className="logos-con" />
                            ))}
                          </div>
                        </div>
                        <p className="mt-3">{items.para}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <p>
                  Duas molestias excepturi sint occaecati cupiditate non
                  provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga. Et harum
                  quidem rerum facilis est et expedita distinctio.. Duas
                  molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui officia deserunt mollitia animi,
                  id est laborum et dolorum fuga. molestias excepturi sint.
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-5">
            {findData.map((items) => (
              <div className="col-lg-4 pb-5">
                <FindComponent
                  image={items.image}
                  head={items.head}
                  para={items.para}
                />
              </div>
            ))}
          </div>
          <div>
            <h1 className="text-center mb-5" id="clientsWords">
              Client's words
            </h1>
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={1}
              dots={false}
              pagination={false}
              autoplay={true}
              autoplaySpeed={2000}
              navigation={true}
            >
              {reviews.map((items) => (
                <SwiperSlide>
                  <div
                    className="col-lg-12 text-center carousal-item"
                    key={items.id}
                  >
                    <SwiperComponent
                      image={items.image}
                      name={items.name}
                      para={items.para}
                      designation={items.Designation}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default ServiceDetails;
