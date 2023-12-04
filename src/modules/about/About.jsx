import React, { useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import "./About.css";
import ReadMore from "./readmore/ReadMore";
import CEOimg from "../../assets/images/medium-shot-woman-posing-indoors.jpg";
import AboutTestimonial from "./aboutTestimonial/aboutTestimonial";
import WhyChooseUs from "./whyChooseUs/WhyChooseUs";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
const About = () => {
  const choosingData = [
    {
      id: "1",
      subhead: "Experienced",
      mainhead: "Professionals",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon2.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },
    {
      id: "1",
      subhead: "Maximum",
      mainhead: "Querry Solved",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon4.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },

    {
      id: "1",
      subhead: "Quick",
      mainhead: "Turnaround",
      image:
        "	https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon3.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },

    {
      id: "1",
      subhead: "Unimaginable",
      mainhead: "Response time",
      image:
        "https://dtconsultancy.wpengine.com/wp-content/uploads/2017/06/service-color-icon1.png",
      para: "Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.",
    },
  ];

  const ourTeam = [
    { id: "1", position: "CEO", image: CEOimg },
    { id: "2", position: "Managing director", image: CEOimg },
  ];

  const teamLeaders = [
    { id: "1", image: CEOimg },
    { id: "2", image: CEOimg },
    { id: "3", image: CEOimg },
  ];
  const supportTeam = [
    { id: "1", image: CEOimg },
    { id: "2", image: CEOimg },
    { id: "3", image: CEOimg },
  ];

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <Header />
      <div className="about-us mt-5">
        <div className="container pt-5">
        {/* <BreadCrumbs/> */}
          <h1 className="text-center mt-4 ">Reasons for choosing us</h1>
          <p className="mt-4 text-center mb-5">
            Innovate , change and transform
          </p>
          <div
            className="row reason-section justify-content-center"
            style={{ marginTop: "6rem" }}
          >
            {choosingData.map((items) => (
              <div className="col-lg-6 col-md-12">
                <WhyChooseUs
                  image={items.image}
                  subhead={items.subhead}
                  mainhead={items.mainhead}
                  para={items.para}
                />
              </div>
            ))}
          </div>

          {/* Team section  */}

          <div className="team-section">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="text-center">our team</h1>
                <p className="mt-4 text-center mb-5">
                  Together we achieve more
                </p>
              </div>
              {ourTeam.map((items) => (
                <div className="col-lg-6" key={items.id}>
                  <h2 className="text-center mb-5">{items.position}</h2>
                  <div
                    className={`team-image ${isHovered ? "hovered" : ""}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img src={items.image} alt="" />
                    {/* {isHovered && <p className="overlay-text">{items.name}</p>} */}
                  </div>
                </div>
              ))}

              {/* team leaders  */}
              <h2 className="text-center mb-5">Team leaders</h2>
              {teamLeaders.map((items) => (
                <div className="col-lg-4" key={items.id}>
                  <div className="team-image">
                    <img src={items.image} alt="" />
                  </div>
                </div>
              ))}
              <h2 className="text-center mb-5">The support team</h2>
              {supportTeam.map((items) => (
                <div className="col-lg-4" key={items.id}>
                  <div className="team-image">
                    <img src={items.image} alt="" />
                  </div>
                </div>
              ))}
              <AboutTestimonial />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
