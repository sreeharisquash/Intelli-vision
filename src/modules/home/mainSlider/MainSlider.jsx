// import React from "react";
// import "./MainSlider.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";
// import SwiperComponent from "../../serviceDetail/swiperComponent";
// import MobileLogo from "../../../assets/images/mobileImg.svg";
// import AppleStoreIcon from "../../../assets/images/Apple icon.svg";
// import PlayStoreIcon from "../../../assets/images/Play store Icon.svg";
// import StoreButton from "../downloadButton/download";

// const MainSlider = () => {
//   const data = [
//     {
//       id: "1",
//       head: "Lorem ipsum dolorconsectetur adipiscing elit",
//       para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
//     },
//     {
//       id: "2",
//       head: "Lorem ipsum dolorconsectetur adipiscing elit",
//       para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
//     },
//     {
//       id: "3",
//       head: "Lorem ipsum dolorconsectetur adipiscing elit",
//       para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo tempor",
//     },
//   ];

//   return (
//     <Swiper
//       grabCursor={true}
//       centeredSlides={true}
//       loop={true}
//       slidesPerView={1}
//       dots={false}
//       pagination={false}
//     //   autoplay={true}
//     //   autoplaySpeed={2000}
//       navigation={true}
//     >
//       {data.map((items) => (
//         <SwiperSlide key={items.id}>
//             <div className="row ">
//               <div className="col-lg-7 col-md-12 my-auto mb-5" data-aos="fade-right">
//                 <h1>{items.head}</h1>
//                 <p>{items.para}</p>
//                 <div className="d-flex gap-3">
//                   <StoreButton imgSrc={AppleStoreIcon} storeName="Apple Store" />
//                   <StoreButton imgSrc={PlayStoreIcon} storeName="Play Store" />
//                 </div>
//               </div>
//               <div className="col-lg-5 col-md-12" data-aos="fade-left">
//                 <img src={MobileLogo} alt="" className="img-fluid"/>
//               </div>
//             </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default MainSlider;
