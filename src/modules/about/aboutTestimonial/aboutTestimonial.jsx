import React from "react";
import Darell from "../../../assets/images/darell.svg";
import Dianne from "../../../assets/images/dianna.svg";
import Albert from "../../../assets/images/albert.svg";
import Ralph from "../../../assets/images/ralph.svg";
import Brooklyn from "../../../assets/images/brooklyn.svg";
import Marvin from "../../../assets/images/marvin.svg";
import Reviews from "../../home/reviews/review";
import './aboutTestimonial.css'
import { SwiperSlide ,Swiper} from "swiper/react";



import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import { register } from "swiper/element/bundle";
// Import Swiper React components


register();

const AboutTestimonial = () => {

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
    return(
        <>
        <div className="container contactPage-testimonial">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 mb-5">
              <h1 className="text-center">what our clients say about us</h1>
              <p className="mt-4 text-center mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="mb-5 pb-5">

          
          <Swiper
              // effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={3}
              spaceBetween={60}
              dots={false}
              pagination={false}
              autoplay={true}
              autoplaySpeed={2000}
              // coverflowEffect={{
              //   rotate: 0,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 2.5,
              // }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                499: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },

                992: {
                  slidesPerView: 3,
                },

                1024: {
                  slidesPerView: 1,
                },
                1340: {
                  slidesPerView: 3,
                },
              }}
              // pagination={{ clickable: true }}
              // className="slider-control"
            >
              {reviews.map((items) => (
                <SwiperSlide>
                  <div
                    className="col-lg-12 text-center carousal-item "
                    key={items.id}
                  >
                    <img src={items.image} alt="" />
                    <h3 className="mt-3 mb-3">{items.name}</h3>
                    <h5 className="mb-5">{items.Designation}</h5>
                    <p className="text-center">{items.para}</p>


                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            </div>
          {/* <div className="row">
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
          </div> */}
        </div>
        </>
    )
}
export default AboutTestimonial;