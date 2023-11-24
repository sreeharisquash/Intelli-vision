import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PaperBird from "../../../assets/images/pb-before.svg";
import ModernCity from "../../../assets/images/mc-before.svg";
import Alpha from "../../../assets/images/alpha&co-before.svg";

export default function SlickCarousel() {
    const settings = {
    //   dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
          breakpoint:768, // Adjust this breakpoint as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
    ]
    //   centerMode: true,
    //   centerPadding: "15px"
    };
  
    const datas = [
      { id: "1", image: PaperBird, head: "PAPER BIRD" },
      { id: "2", image: ModernCity, head: "MODERN" },
      { id: "3", image: Alpha, head: "ALPHA & CO" },
      { id: "4", image: Alpha, head: "WOOD FLOOR" },
    
    ];
  
    const loopCount = 5; 
  
    const loopedData = Array(datas.length * loopCount)
      .fill()
      .map((_, index) => datas[index % datas.length]);
  
    return (
      <div className="slick">
        <Slider {...settings}>
          {loopedData.map((items) => (
            <div className="d-flex" key={items.id}>
              <img src={items.image} alt="" className="before-images" />
              <h2>{items.head}</h2>
            </div>
          ))}
        </Slider>
      </div>
    );
  }