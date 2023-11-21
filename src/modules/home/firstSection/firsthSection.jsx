import React, { useState } from "react";

import Header from '../../header/header'
import "./firsthSection.css";
import MobileLogo from "../../../assets/images/mobileImg.svg";
import AppleStoreIcon from "../../../assets/images/Apple icon.svg";
import PlayStoreIcon from "../../../assets/images/Play store Icon.svg";
import StoreButton from "../downloadButton/download";
import Services from "../servicesComponent/services";
import Desktop from "../../../assets/images/desktop.svg";
import Profile from "../../../assets/images/profile.svg";
import Shield from "../../../assets/images/shield.svg";
// import Students from "../../../assets/images/students.svg";
import PlayButton from "../../../assets/images/playButton.svg";
import CommonButton from "../../commonButton/commonButton";
import VideoPopup from "../videoPopup/videoPopup";
import AppleStore from '../../../assets/images/AppleStore.svg'
import PlayStore from '../../../assets/images/playStore.svg'
import Windows from '../../../assets/images/windows.svg'
import StoreComponent from "../storeComponent/storeComponent";

export default function Section1() {
  const [isVideoPopupOn, setisVideoPopupOn] = useState(false);

  const openVideoPopup = () => {
    setisVideoPopupOn(true);
  };

  const closeVideoPopup = () => {
    setisVideoPopupOn(false);
  };

  const store = [
    {
      id: "1",
      image: AppleStore ,
      head: "App Store",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
    {
      id: "2",
      image: PlayStore ,
      head: "Play Store",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
    {
      id: "3",
      image: Windows ,
      head: "Windows",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing labore Ut enim minim veniam,quis nostrud exercitation",
    },
  ];

  const serviceData = [
    {id : '1' , head: "Tempor incididunt ", para : "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ", image:Desktop },
    {id : '2' , head: "Tempor incididunt ", para : "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ", image:Profile },
    {id : '3' , head: "Tempor incididunt ", para : "Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt inim veniam, nostrud exercitation ullamco ", image:Shield },

  ]
  return (
    <>
      {/* section one  */}
      <div className="section1">
       <Header/>
        <div className="container py-5">
          <div className="row mt-5 mb-5">
            <div className="col-lg-6 col-md-12 my-auto mb-5">
              <h1>Lorem ipsum dolor consectetur adipiscing elit</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo tempor
              </p>
              <div className="d-flex gap-3">
                <StoreButton imgSrc={AppleStoreIcon} storeName="Apple Store" />
                <StoreButton imgSrc={PlayStoreIcon} storeName="Play Store" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <img src={MobileLogo} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* section two  */}

      <div className="container section2 ">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="text-center">
              Lorem ipsum dolor consectetur adipiscing elit
            </h1>
            <p className="mt-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              tempor
            </p>
          </div>
        </div>
        <div className="row ">
          {serviceData.map((items)=> (
            <div className="col-lg-4">
              <Services para={items.para} head={items.head} imgSrc={items.image}/>
            </div>
          ))}

          {/* <Services
            head="Tempor incididunt "
            para="Lorem ipsum dolor sit amet, consectetur 
          adipiscing eiusmod tempor incididunt inim 
          veniam, nostrud exercitation ullamco "
            imgSrc={Desktop}
          /> */}
          {/* <Services
            head="Tempor incididunt "
            para="Lorem ipsum dolor sit amet, consectetur 
          adipiscing eiusmod tempor incididunt inim 
          veniam, nostrud exercitation ullamco "
            imgSrc={Profile}
          />
          <Services
            head="Tempor incididunt "
            para="Lorem ipsum dolor sit amet, consectetur 
          adipiscing eiusmod tempor incididunt inim 
          veniam, nostrud exercitation ullamco "
            imgSrc={Shield}
          /> */}
        </div>
      </div>
      <div className="section3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <h1>Lorem ipsum dolor sit conse adipiscing </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor ut labore Ut enim ad minim veniam, quis nostrud
                exercitation ullamco dolor sit amet, consectetur adipiscing
                eiusmod tempor veniam, nostrud exercitation ullamco{" "}
              </p>
              <div className="d-flex gap-5">
                <ul className="mt-5">
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                  <li className="selection">Tellus condimentum</li>
                  <li className="selection">eget condimentum </li>
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                </ul>
                <ul className="mt-5">
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                  <li className="selection">Tellus condimentum</li>
                  <li className="selection">eget condimentum </li>
                  <li className="selection">Maecenas tempus</li>
                  <li className="selection">Amet adipiscing </li>
                </ul>
              </div>
              <div className="d-flex gap-4">
                <CommonButton
                  fontClr="#FFFFFF"
                  color="#170F58"
                  label="Get started now"
                />
                <CommonButton
                  fontClr="#170F58"
                  borderClr="2px solid #170F58"
                  label="Learn More"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="background-img">
                <div className="PlayButton" onClick={openVideoPopup}>
                  <img src={PlayButton} alt="playButton" />
                </div>
                <VideoPopup isOpen={isVideoPopupOn} onClose={closeVideoPopup} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className="col-lg-8">
              <h1 className="text-center mt-5">Lorem ipsum dolor </h1>
              <p className="mt-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris{" "}
              </p>
            </div>
          </div>
          <div className="row stores d-flex justify-content-center">
            {store.map((items) => {
              return (
                <div className="col-lg-4 text-center">
                  <StoreComponent
                    imgSrc={items.image}
                    head={items.head}
                    para={items.para}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
