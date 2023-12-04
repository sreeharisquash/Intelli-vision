import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LOGO from "../../assets/images/LOGO.svg";
import "./header.css";
import "../../assets/css/main.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import
  url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
</style>;
export default function Header() {
  return (
    <nav class="navbar navBg navbar-expand-xl">
      <div class="container">
        <div className="nav-contain">
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
            <a class="nav-link colorForNavFont dropdown-toggle" href="#pages" id="pagesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div class="dropdown-menu" aria-labelledby="pagesDropdown">
                <a class="dropdown-item" href="/shop">
                  Shop
                </a>
                <a class="dropdown-item" href="/blog">Blog</a>
    {/* <a class="dropdown-item" href="#">Dropdown Item 3</a> */}
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
