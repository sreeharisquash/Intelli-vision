import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../modules/about/About";
import Blog from "../modules/blog/Blog";


const Home = lazy(() => import("../modules/home/homeModuleContainer/home"));
const Contact = lazy(() => import("../modules/contact/contactPage"));
const Shop = lazy(() => import("../modules/shop/shop"));
const ProductDetails = lazy(() => import("../modules/productDetails/productDetails"));
const BlogDetail = lazy(() => import("../modules/blogDetail/BlogDetail"))


const Router = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{ height: "100vh", width: "100%", backgroundColor: "#fff" }}
        />
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blogdetail" element={<BlogDetail/>}/>
      </Routes>
    </Suspense>
  );
};

export default Router;
