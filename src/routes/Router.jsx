import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../modules/about/About";
import Blog from "../modules/blog/Blog";
import PageNotFound from "../modules/pageNotFound/PageNotFound";
import ServiceDetails from "../modules/serviceDetail/ServiceDetail";
import UnderConstruction from "../modules/underConstruction/UnderConstruction";


const Home = lazy(() => import("../modules/home/homeModuleContainer/home"));
const Contact = lazy(() => import("../modules/contact/contactPage"));
const Shop = lazy(() => import("../modules/shop/shop"));
const ProductDetails = lazy(() => import("../modules/productDetails/productDetails"));
const BlogDetail = lazy(() => import("../modules/blogDetail/BlogDetail"));
const Services = lazy(() => import ("../modules/service/Service"))


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
        <Route path="/shop-details" element={<ProductDetails/>} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog-details" element={<BlogDetail/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/service-details" element={<ServiceDetails/>}/>
        <Route path="/underconstruction" element={<UnderConstruction/>}/>

        {/* 404 error page if no routes maches  */}

        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </Suspense>
  );
};

export default Router;
