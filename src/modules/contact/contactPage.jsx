import React from "react";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import GoogleMap from "../googleMap/googleMap";
import "./contactPage.css";
import ContactMethods from "./contactMethods/ContactMethods";
import Location from "../../assets/images/blue-loc.svg";
import CommonButton from "../commonButton/commonButton";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

export default function ContactPage() {
  const contactMethods = [
    {
      id: "1",
      image: Location,
      method: "Talk to us",
      medium1: "1224 2234 LAW  ",
      medium2: "1224 2235 225",
    },
    {
      id: "2",
      image: Location,
      method: "Mail us @",
      medium1: "admin@intelli.com",
      medium2: "support@intelli.com",
    },
    {
      id: "3",
      image: Location,
      method: "Our location",
      medium1: "625 Blake Road, Kattaghat",
      medium2: "LA 14536, USA",
    },
  ];
  return (
    <>
      <div>
        <Header />

        <div className="Form-section">
          <div className="contact-breadcrumb">
          <BreadCrumbs/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 jusitfy-content-center">
                <h1 className="text-center">Enquiry Form</h1>
                <h5 className="text-center">Its now easy to contact us</h5>
                <form className="mt-5 pt-5">
                  <div className="d-flex justify-content-center gap-5">
                    <div class="mb-3">
                      <label for="firstName" class="form-label">
                        First Name
                      </label>
                      <input type="email" class="form-control" id="firstName" />
                      {/* <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div> */}
                    </div>
                    <div class="mb-3">
                      <label for="lastName" class="form-label">
                        Last Name
                      </label>
                      <input type="text" class="form-control" id="lastName" />
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-5">
                    <div class="mb-3">
                      <label for="email" class="form-label">
                        E-mail
                      </label>
                      <input type="email" class="form-control" id="email" />
                    </div>
                    <div class="mb-3">
                      <label for="Phone" class="form-label">
                        Phone
                      </label>
                      <input type="text" class="form-control" id="Phone" />
                    </div>
                  </div>
                  <div class="mb-3 mt-5 justify-content-center">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Enter your message
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="10"
                      style={{ maxWidth: "50%" , minWidth: "50%"}}
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-center">
                    <CommonButton
                      fontClr="white"
                      color="#170F58"
                      label="Submit"
                      borderClr="#170F58"
                    />
                  </div>

                  {/* <button
                    type="submit"
                    class="btn btn-primary d-flex mx-auto mt-5 mb-5"
                  >
                    Submit
                  </button> */}
                </form>
              </div>
            </div>
          </div>

          {/* contact us  */}

          <div className="contact-method">
            <div className="container mb-5">
              <div className="row justify-content-center mt-5">
                <h1>Reach us through</h1>
                <h5>Our response time will get you surprised</h5>
                {contactMethods.map((items) => (
                  <div className="col-lg-4">
                    <ContactMethods
                      image={items.image}
                      method={items.method}
                      medium1={items.medium1}
                      medium2={items.medium2}
                    />
                  </div>
                ))}
              </div>
            </div>
            <GoogleMap />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
