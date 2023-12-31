import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickCarousel.css'
import PaperBird from "../../../assets/images/pb-before.svg";
import ModernCity from "../../../assets/images/mc-before.svg";
import Alpha from "../../../assets/images/alpha&co-before.svg";

export default function SlickCarousel() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
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
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
    ]
      // centerMode: true,
    //   centerPadding: "15px"
    };
  
    const datas = [
      { id: "1", image: PaperBird, head: "PAPER BIRD" },
      { id: "2", image: ModernCity, head: "MODERN" },
      { id: "3", image: Alpha, head: "ALPHA & CO" },
      { id: "4", image: PaperBird, head: "WOOD FLOOR" },
    
    ];
  
    const loopCount = 5; 
  
    const loopedData = Array(datas.length * loopCount)
      .fill()
      .map((_, index) => datas[index % datas.length]);
  
    return (
      <div className="slick">
        <Slider {...settings}>
          {loopedData.map((items) => (
            <div className="head-image" key={items.id}>
              <img src={items.image} alt="" className="before-images" />
              <h3>{items.head}</h3>
            </div>
          ))}
        </Slider>
      </div>
    );
  }