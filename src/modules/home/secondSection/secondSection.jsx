import React from "react";
import "./secondSection.css";
import PaperBird from "../../../assets/images/pb-before.svg";
import ModernCity from "../../../assets/images/mc-before.svg";
import Alpha from "../../../assets/images/alpha&co-before.svg";
import Screen1 from "../../../assets/images/screen1.svg";
import Screen2 from "../../../assets/images/screen2.svg";
import Screen3 from "../../../assets/images/screen3.svg";
import Screen4 from "../../../assets/images/screen4.svg";
import MainScreen from "../../../assets/images/mainScreen.svg";
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

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Section2() {
  const datas = [
    { id: "1", image: PaperBird, head: "PAPER BIRD" },
    { id: "2", image: ModernCity, head: "MODERN" },
    { id: "3", image: Alpha, head: "ALPHA & CO" },
    { id: "4", image: Alpha, head: "WOOD FLOOR" },
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

  const mobScreens = [
    {id: '1' , image: Screen1 },
    {id: '2' , image: Screen2 },
    {id: '3' , image: MainScreen },
    {id: '4' , image: Screen3 },
    {id: '5' , image: Screen4 },
  ]

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
      dropdownTitle:
        "What’s the most important thing you’ve learned from a peer?",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris",
    },
  ];

  return (
    <>
      <div className="section5">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">

          <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false}>
              {mobScreens.map((items) => (
                <div className="col-lg-3 d-flex gap-2" key={items.id}>
                  <img src={items.image} alt="" />
                  {/* <h2>{items.head}</h2> */}
                </div>
              ))}
            </Carousel>

            {/* <div
              className="col-lg-2"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img src={Screen1} alt="" />
            </div>
            <div
              className="col-lg-2"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img src={Screen2} alt="" />
            </div>
            <div className="col-lg-3">
              <img src={MainScreen} alt="" />
            </div>
            <div
              className="col-lg-2"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img src={Screen3} alt="" />
            </div>
            <div
              className="col-lg-2"
              style={{ marginTop: "auto", marginBottom: "auto" }}
            >
              <img src={Screen4} alt="" />
            </div> */}
          </div>
        </div>
      </div>

      <div className="section6 ">
        <div className="container d-flex">
          <div className="row justify-content-center">
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true} showThumbs={false}>
              {datas.map((items) => (
                <div className="col-lg-3 d-flex gap-2" key={items.name}>
                  <img src={items.image} alt="" className="before-images" />
                  <h2>{items.head}</h2>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="section7">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 mb-5">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row">
            {reviews.map((items) => {
              return (
                <div className="col-lg-4 mb-5">
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
          <div className="row d-flex justify-content-center">
            <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
              {reviews.map((items) => (
                <div className="col-lg-6 text-center">
                  <Testimonials
                    key={items.name}
                    imgSrc={items.image}
                    name={items.name}
                    para={items.para}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        {/* </div>
        </div> */}
      </div>
      <div className="section8">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <h1 className="text-center">Dolor Lorem ipsum</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row pt-5" style={{gap:'6rem'}}>
            <div className="col-lg-4 col-md-12">
              <img src={DoubtsLogo} alt="doubts" />
            </div>
            <div className="col-lg-7 col-md-12">
            {dropDowns.map((items) => (
                <DropdownItemTags
                  dropdownTitle={items.dropdownTitle}
                  para={items.para}
                />
              ))}
            </div>
            
              {/* <div className="main-container">
                    <div className="head-container">
                        <h4>Reprehenderit voluptate</h4>
                    </div>
                </div> */}
            </div>
            </div>
          </div>
    </>
  );
}
