import React from "react";
import LOGO from "../../assets/images/LOGO.svg";
import FB from "../../assets/images/fb.svg";
import Twit from "../../assets/images/twitr.svg";
import Linkdin from "../../assets/images/linkdin.svg";
import Utub from "../../assets/images/utub.svg"
import './footerComponent.css'

export default function Footer({ head, para }) {
  const footerContactData = [
    {
      id: "1",
      number: "845-522-8279",
      mail: "company@example.com",
      location: "254 Route 17k suite 201 Newburgh,NY 12550",
    },
  ];

  const usefullLinks = [
    { id: "1", link: "Home" },
    { id: "1", link: "About" },
    { id: "1", link: "News" },
    { id: "1", link: "Contact" },
  ];

  const companyNames = [
    { id: "1", name: "Lorem ipsum" },
    { id: "1", name: "commodo" },
    { id: "1", name: "Lorem ipsum" },
    { id: "1", name: "commodo" },
  ];

  const topDestinations = [
    { id: "1", location: "Lorem ipsum" },
    { id: "1", location: "commodo" },
    { id: "1", location: "Lorem ipsum" },
    { id: "1", location: "commodo" },
  ];

  return (
    <>
      <h2>{head}</h2>
      <div className="footer-section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-3 col-md-12 mb-5">
              <img src={LOGO} alt="" />
              <span className="ralewayFont">INTELLI VISION</span>
              {footerContactData.map((items) => (
                <div className="unordered-list">
                  <ul className="mt-5">
                    <li className="number">{items.number} </li>
                    <li className="mail-add">{items.mail}</li>
                    <li className="per-loc">{items.location}</li>
                  </ul>
                </div>
              ))}
              <div className="d-flex gap-3 mt-5">
                <img src={FB} alt="" />
                <img src={Twit} alt="" />
                <img src={Linkdin} alt="" />
                <img src={Utub} alt="" />
              </div>
            </div>

            {/* Useful Links */}

            <div className="col-lg-3 col-md-12 mb-5">
              <h3>Useful Links</h3>
              {usefullLinks.map((items) => (
                <div key={items.id} className="d-flex">
                  <li>{items.link}</li>
                </div>
              ))}
            </div>

            {/* Company  */}

            <div className="col-lg-3 col-md-12 mb-5">
              <h3>Company</h3>
              {companyNames.map((items) => (
                <div className="d-flex" key={items.id}>
                  <li>{items.name}</li>
                </div>
              ))}
            </div>

            {/* Top Destinations  */}

            <div className="col-lg-3 col-md-12">
              <h3>Top Destinations</h3>
              {topDestinations.map((items) => (
                <div className="d-flex" key={items.id}>
                  <li>{items.location}</li>
                </div>
              ))}
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
