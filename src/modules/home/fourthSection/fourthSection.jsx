import React from "react";
import "./fourthSection.css";
import Review1 from "../../../assets/images/review1.svg";
import Review2 from "../../../assets/images/review2.svg";
import Review3 from "../../../assets/images/review3.svg";
import Comments from "../comments/comments";
import CommonButton from "../../commonButton/commonButton";
import EmailLogo from "../../../assets/images/emailLogo.svg";
import LocationLogo from "../../../assets/images/locationLogo.svg";
import LOGO from "../../../assets/images/LOGO.svg";
import FB from "../../../assets/images/fb.svg";
import Twit from "../../../assets/images/twitr.svg";
import Linkdin from "../../../assets/images/linkdin.svg";
import Utub from "../../../assets/images/utub.svg";
// import Footer from "../footerComponents/footerComponent";

export default function Section4() {
  const reviews = [
    {
      id: "1",
      image: Review1,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: Review2,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: Review3,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
  ];

  // const footerCompany = [
  //   { id: "1", head: "Company", para: "Home" },
  //   { id: "1", head: "Company", para: "Home" },
  //   { id: "1", head: "Company", para: "Home" },
  //   { id: "1", head: "Company", para: "Home" },
  // ];
  return (
    <>
      <div className="section12">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <h1 className="text-center mt-5">Aliquam sem </h1>
              <p className="mt-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris{" "}
              </p>
            </div>
          </div>
          <div className="row mt-5">
            {reviews.map((items) => (
              <div className="col-lg-4">
                <Comments
                  imgSrc={items.image}
                  head={items.head}
                  para={items.para}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section13">
        <div className="container mb-5">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-container">
                <h3>Ready to get started?</h3>
                <form>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control mt-4"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control mt-4"
                      id="exampleInputPassword1"
                      placeholder="E-mail"
                    />
                  </div>
                  <div class="form-check"></div>
                  <div class="form-group">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="9"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <CommonButton
                    fontClr="#FFFFFF"
                    color="#170F58"
                    label="Get started now"
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <h1>Elit pellentesque lacus habitant morbi</h1>
              <p className="mt-2">
                Lorem ipsum dolor sit consectetur dolor sit amet, dolor
                consectetur adipiscing sed doeiusmodut labore enim ad minim
                dolor veniam nostrud exercitation dolor sit, consectetur
                adipiscing dolor adipiscing doeiusmod enim tempor incididunt ut
                labore minim veniam, nostrud{" "}
              </p>
              <CommonButton
                fontClr="#FFFFFF"
                color="#170F58"
                label="Get Started Now"
              />
              <div className="lining"></div>
              <div className="mt-2">
                <div className="row ">
                  <div className="col">
                  <div className="d-flex aliign-center gap-4">
                    <img src={EmailLogo} alt="" />
                    <div>
                      <h3 className="mt-4">Company Location</h3>
                      <p>4140 Parker Rd. Allentown, New Mexico 31134</p>
                    </div>
                  </div>
                </div>
                </div>
                {/* <div className="row">
                  <div className="col-lg-6 col-md-12">
                    <div className="d-flex aliign-center gap-4">
                      <img src={LocationLogo} alt="" />
                      <div>
                        <h3 className="mt-4">Email</h3>
                        <p>alma.lawson@example.com</p>
                      </div>
                    </div>
                  </div> */}
                  {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <img src={LOGO} alt="" />
              <span className="ralewayFont">INTELLI VISION</span>
              <div className="unordered-list">
                <ul className="mt-5">
                  <li className="number">845-522-8279</li>
                  <li className="mail-add">company@example.com</li>
                  <li className="per-loc">
                    254 Route 17k suite 201 Newburgh,NY 12550
                  </li>
                </ul>
              </div>

              <div className="d-flex gap-3 mt-5">
                <img src={FB} alt="" />
                <img src={Twit} alt="" />
                <img src={Linkdin} alt="" />
                <img src={Utub} alt="" />
              </div>
            </div>
            <div className="col-lg-2 col-md-12 d-flex  listing">
              <ul>
                <h3>Company</h3>
                <li>Home</li>
                <li>About</li>
                <li>News</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 d-flex  ">
              <ul>
                <h3>Useful links</h3>
                <li>Lorem ipsum </li>
                <li>commodo</li>
                <li>Lorem ipsum </li>
                <li>commodo</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 d-flex">
              <ul>
                <h3>Top Destination</h3>
                <li>Lorem ipsum </li>
                <li>commodo</li>
                <li>Lorem ipsum </li>
                <li>commodo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-end">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 col-md-12">
              <p className="text-center">
                © Copyright TRAVELING All Rights Reserved 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
