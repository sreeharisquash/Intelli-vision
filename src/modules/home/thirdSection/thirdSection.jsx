import React from "react";
import "./thirdSection.css";
import SmileEmoji from "../../../assets/images/smilie.svg";
import FeaturesPage from "../featuresComponent/featuresPage";
import Mask from "../../../assets/images/Mask group.svg";
import HeadPhoneImg from "../../../assets/images/headphones.svg";
import ThreeDImg from "../../../assets/images/3D.svg";
import MobCenter from "../../../assets/images/mob-center.svg";
import ASFimg from "../../../assets/images/asf.svg";
import Paint from "../../../assets/images/paint.svg";
// import Productivities from "../productivityConcepts/productivity";
import ProductivityImg from "../../../assets/images/productvity.svg";
import Purchase from "../purchaseComponents/purchase";
import CommonButton from "../../commonButton/commonButton";
// import Checks from "../checkPointComponent/checks";

export default function Section3() {
  const features1 = [
    {
      id: "1",
      Image: SmileEmoji,
      head: "Consectetur adip",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "2",
      Image: Mask,
      head: "Malesuada nuncs",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "3",
      Image: HeadPhoneImg,
      head: "Tempor incididunt ",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
  ];

  const features2 = [
    {
      id: "1",
      Image: ThreeDImg,
      head: "Consectetur adip",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "2",
      Image: ASFimg,
      head: "Malesuada nuncs",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
    {
      id: "3",
      Image: Paint,
      head: "Tempor incididunt ",
      para: "Leo in vitae turpis massa sed. Magna fringilla urna porttitor rhoncus dolor purus. Dictumst quisque sagittis ",
    },
  ];

  const Productivity = [
    {
      id: "1",
      head: "Elementum nibhd",
      para: "In dictum non consectetur a. Adipiscing at in tellus integer feugiat scelerisque eleifend mi in nulla",
    },
    {
      id: "2",
      head: "Ornare aeneansd",
      para: "Volutpat blandit aliquam etiam erat velit scelerisque elementum nisi quis eleifend quam adipiscing vitae ",
    },
    {
      id: "3",
      head: "Massa placeratds",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing mod tempor incididunt inim veniam, nost exercitation ullamco",
    },
  ];

  const PurchaseData = [
    { id: "1", price: "49" },
    { id: "1", price: "49" },
    { id: "1", price: "49" },
  ];

  return (
    <>
      <div className="section9">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <h1 className="text-center">Perspiciatis unde</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row d-flex gap-5 justify-content-end">
            <div className="col-lg-3">
              <div className="row">
                <div className="col">
                  {features1.map((items) => (
                    <FeaturesPage
                      imgSrc={items.Image}
                      head={items.head}
                      para={items.para}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-4 my-auto">
              <img src={MobCenter} alt="" />
            </div>
            <div className="col-lg-3">
              <div className="row">
                <div className="col">
                  {features2.map((items) => (
                    <FeaturesPage
                      imgSrc={items.Image}
                      head={items.head}
                      para={items.para}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section10">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 col-md-12">
              <h1 className="text-center">Perspiciatis unde</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-7 col-md-12">
              <div className="productivity-Bg">
                <div className="productivity">
                  <h2>Elementum nibhd</h2>
                  <p>
                    In dictum non consectetur a. Adipiscing at in tellus integer
                    feugiat scelerisque eleifend mi in nulla
                  </p>
                </div>
                <div style={{ marginTop: "8rem", marginBottom: "6rem" }}>
                  <h2>Ornare aeneansd</h2>
                  <p>
                    Volutpat blandit aliquam etiam erat velit
                    <br /> scelerisque elementum nisi quis eleifend <br /> quam
                    adipiscing vitae
                  </p>
                </div>
                <div className="productivity">
                  <h2>Massa placeratds</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing mod
                    tempor incididunt inim veniam, nost exercitation ullamco
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 d-flex justify-content-center">
              <img src={ProductivityImg} alt="" className="mt-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="section11">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-7">
              <h1 className="text-center">Perspiciatis unde</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="row mt-5">
            {PurchaseData.map((items) => (
              <div className="col-lg-4">
                <Purchase price={items.price} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
