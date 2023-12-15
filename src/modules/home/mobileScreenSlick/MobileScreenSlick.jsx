import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MobileScreenSlick.css";
import Screen1 from "../../../assets/images/screen1.svg";
import Screen2 from "../../../assets/images/screen2.svg";
import Screen3 from "../../../assets/images/screen3.svg";
import Screen4 from "../../../assets/images/screen4.svg";

const MobileScreenSlick = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Calculate the middle slide index
    const middleSlideIndex = Math.floor(datas.length / 2) + (datas.length % 2 === 0 ? 0 : 1);
    setCurrentSlide(middleSlideIndex);
  });   
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    initialSlide: currentSlide,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 0,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const datas = [
    { id: "1", image: Screen1 },
    { id: "2", image: Screen2 },
    { id: "3", image: Screen3 },
    { id: "4", image: Screen4 },
    { id: "5", image: Screen1 },
  ];

  const loopCount = 5;

  return (
    <>
      <div className="mobile-screen-slick">
        <Slider {...settings}>
          {datas.map((items, index) => (
            <div
              key={items.id}
              className={`head-image ${
                index === currentSlide ? "slick-current" : ""
              }`}
            >
              <img src={items.image} alt="" className="before-images" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MobileScreenSlick;
