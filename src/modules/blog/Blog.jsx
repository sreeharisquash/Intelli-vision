import React from "react";
import "./Blog.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
import Comments from "../home/comments/comments";
import BlogImg from "../../assets/images/review1.svg";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const Blog = () => {
  const reviews = [
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
    {
      id: "1",
      image: BlogImg,
      head: "Gravida quis blandit",
      para: "Lorem ipsum dolor sit consecteturadipiscing doeiusmod tempor incididunt quisnostrud exercitation ullamco laboris",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="blog-container" onClick={() => navigate("/blog-details")}>
        <div className="blog-breadcrumbs">
          <BreadCrumbs />
        </div>
        <div className="container">
          <div className="row mt-5">
            {reviews.map((items) => (
              <div className="col-lg-4 mb-5 blogs">
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
      <Footer />
    </>
  );
};
export default Blog;
