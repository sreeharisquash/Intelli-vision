import React from "react";
import "./shop.css";
import Header from "../header/header";
import Footer from "../footer/footerComponent";
// import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import Product1 from "../../assets/images/iphoneImg.jpg";
// import Product2 from "../../assets/images/Elegant smartphone composition (no bg).png";
import Products from "../products/Products";
import Rating from "../../assets/images/Frame7.png";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";

const Shop = () => {
  const displayProducts = [
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
    {
      id: "1",
      image: Product1,
      rating: Rating,
      productName: "Iphone 14 pro",
      price: "999",
    },
  ];

  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <div className="shop-section">
      <div className="contact-breadcrumbs">
          <BreadCrumbs/>
          </div>
        <div className="container">
      
          <InputGroup className="mb-3 d-flex justify-content-end">
            <FormControl
              placeholder="Search..."
              aria-label="Search"
              aria-describedby="basic-addon2"
              className="search-button"
            />
            <Button
              variant="outline-secondary"
              id="button-addon2"
             
            >
              Search
            </Button>
          </InputGroup>
          <div className="row">
            {displayProducts.map((items) => (
              <div className="col-lg-4 mb-5" onClick={()=> navigate('/shop-details')}>
                <Products
                  image={items.image}
                  rating={items.rating}
                  productName={items.productName}
                  price={items.price}
                />
              </div>
            ))}
          </div>
          <nav aria-label="...">
            <ul class="pagination justify-content-center mt-4">
              <li class="page-item disabled">
                <a class="page-link" href="#previous">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#1">
                  1
                </a>
              </li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="#2">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#3">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#next">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Shop;
