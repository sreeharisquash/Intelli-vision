import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LOGO from "../../assets/images/LOGO.svg";
import "./header.css";
import "../../assets/css/main.css";
import { useNavigate } from "react-router-dom";
export default function Header() {

  const navigate = useNavigate();

  return (
    <nav class="navbar navBg navbar-expand-xl">
      <div class="container">
        <div className="nav-contain" onClick={()=> navigate('/')}>
          <img src={LOGO} alt="logo" />
          <span className="ralewayFont">INTELLI VISION</span>
        </div>
        <button
          class="navbar-toggler customBtn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav navBarData ms-auto">
            <li class="nav-item dropdown">
              <a class="nav-link colorForNavFont" href="/">
                Home
              </a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link colorForNavFont" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link colorForNavFont" href="# Features">
                Features
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link colorForNavFont dropdown-toggle"
                href="#pages"
                id="pagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                <a class="dropdown-item" href="/shop">
                  Shop
                </a>
                <a class="dropdown-item" href="/blog">
                  Blog
                </a>
                <a class="dropdown-item" href="/service">
                  Service
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link colorForNavFont" href="#screenshots">
                Screenshots
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link colorForNavFont" href="#process">
                Process
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link colorForNavFont" href="#pricing">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link colorForNavFont" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
