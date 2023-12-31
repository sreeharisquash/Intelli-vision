import React from "react";
import "./secondSection.css";

// import PaperBird from "../../../assets/images/pb-before.svg";
// import ModernCity from "../../../assets/images/mc-before.svg";
// import Alpha from "../../../assets/images/alpha&co-before.svg";
// import Screen1 from "../../../assets/images/screen1.svg";
// import Screen2 from "../../../assets/images/screen2.svg";
// import Screen3 from "../../../assets/images/screen3.svg";
// import Screen4 from "../../../assets/images/screen4.svg";
// import MainScreen from "../../../assets/images/mainScreen.svg";
import Darell from "../../../assets/images/darell.svg";
import Dianne from "../../../assets/images/dianna.svg";
import Albert from "../../../assets/images/albert.svg";
import Ralph from "../../../assets/images/ralph.svg";
import Brooklyn from "../../../assets/images/brooklyn.svg";
import Marvin from "../../../assets/images/marvin.svg";
import Reviews from "../reviews/review";
import Testimonials from "../Testimonials/testimonials";
import DoubtsLogo from "../../../assets/images/doubtsLogo.svg";
import DropdownItemTags from "../dropdowns/dropdown";
import ActiveIcon from "../../../assets/images/active-dropdown.svg";
import InactiveIcon from "../../../assets/images/inactive-dropdown.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import {Autoplay} from 'swiper/modules'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickCarousel from "../slick-slider/slickCarousel";
// import ScreenSlicker from "../mobScreensSwiper/mobScreensSwiper";
import { register } from "swiper/element/bundle";
import MobileScreenSlick from "../mobileScreenSlick/MobileScreenSlick";
// Import Swiper React components

register();

export default function Section2() {
  // const datas = [
  //   { id: "1", image: PaperBird, head: "PAPER BIRD" },
  //   { id: "2", image: ModernCity, head: "MODERN" },
  //   { id: "3", image: Alpha, head: "ALPHA & CO" },
  //   { id: "4", image: Alpha, head: "WOOD FLOOR" },
  // ];

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
      name: "Niklaus mikaelson",
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

  // const mobScreens = [
  //   { id: "1", image: Screen1 },
  //   { id: "2", image: Screen2 },
  //   { id: "3", image: MainScreen },
  //   { id: "4", image: Screen3 },
  //   { id: "5", image: Screen4 },
  // ];

  const dropDowns = [
    {
      id: "1",
      dropdownTitle: "Reprehenderit voluptate",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "1",
      dropdownTitle: "Looking back on the last five years of your career?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "1",
      dropdownTitle: "Walk me through your career in 3 minutes?",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque. Quisque non tellus orci ac auctor augue mauris augue neque. Quisque sagittis purus sit amet volutpat consequat. Nulla facilisi nullam vehicula ipsum.Tortor condimentum lacinia quis vel eros donec. Pharetra sit amet aliquam id diam.Quis ipsum suspendisse ultrices gravida.",
    },
    {
      id: "1",
      dropdownTitle: "What’s the most important thing?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris",
    },
  ];

  return (
    <>
      <div className="section5">
        <div className="container pt-5">
          <div className="row justify-content-center pt-5 mt-5">
            <div className="col-lg-6 pt-5" data-aos="fade-down">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
            <div>
              <MobileScreenSlick />
            </div>
          </div>
        </div>
      </div>

      <div className="section6 ">
        <div className="container">
          <div className="mx-auo">
            <SlickCarousel />
          </div>
        </div>
      </div>
      <div className="section7">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 mb-5" data-aos="fade-down">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row">
            {reviews.map((items) => {
              return (
                <div className="col-lg-4 mb-5" data-aos="fade-up">
                  <Reviews
                    imgSrc={items.image}
                    name={items.name}
                    designation={items.Designation}
                    para={items.para}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-testimonials">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 " data-aos="fade-down">
              <h1 className="text-center">Testimonials</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod ut labore Ut enim ad minim veniam, quis nostrud
              </p>
            </div>
          </div>
        </div>
        <div className="testimonial-container">
          <div
            className=" d-flex justify-content-center"
            style={{ maxWidth: "100%" }}
          >
            <Swiper
              // effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              centeredSlidesBounds={true}
              loop={true}
              slidesPerView={3}
              dots={false}
              pagination={false}
              autoplay={true}
              autoplaySpeed={2000}
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 2.5,
              // }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                499: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },

                992: {
                  slidesPerView: 1,
                },

                1024: {
                  slidesPerView: 1,
                },
                1340: {
                  slidesPerView: 3,
                },
              }}
              // pagination={{ clickable: true }}
              // className="slider-control"
            >
              {reviews.map((items) => (
                <SwiperSlide>
                  <div
                    className=" text-center carousal-item d-flex justify-content-center"
                    key={items.id}
                  >
                    <Testimonials
                      key={items.name}
                      imgSrc={items.image}
                      name={items.name}
                      para={items.para}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="section8">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7" data-aos="fade-down">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row pt-5">
            <div
              className="col-lg-5 col-md-12 mb-5 d-flex justify-content-center"
              data-aos="fade-right"
            >
              <img src={DoubtsLogo} alt="doubts" />
            </div>
            <div
              className="col-lg-7 col-md-12 d-flex flex-column my-auto"
              data-aos="fade-left"
            >
              {dropDowns.map((items) => (
                <div className="row">
                  <div className="col">
                    <DropdownItemTags
                      dropdownTitle={items.dropdownTitle}
                      activeIcon={ActiveIcon}
                      inactiveIcon={InactiveIcon}
                      para={items.para}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
