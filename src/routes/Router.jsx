import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../modules/about/About";
// import ContactPage from "../modules/contact/contactPage";
// import Home from "../modules/home/homeModuleContainer/home";

const Home = lazy(() => import("../modules/home/homeModuleContainer/home"));
const Contact = lazy(() => import("../modules/contact/contactPage"));

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
      </Routes>
    </Suspense>
  );
};

export default Router;
