import React from "react";
import Capgemini_logo from "../Images/Capgemini_logo.svg";
import Logo from "../Images/Logo.png";
import img_man from "../Images/img_man.png";
import "../Style/Navbar.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {" "}
      <nav className="Navbar p-3">
        <div className="row">
          <div className="col logo_section">
            <span>
              <img src={Capgemini_logo} />
              <img className="cap_logo" src={Logo} />
            </span>
          </div>
          <div className="col profile">
            <div className="links_1">
              <a href="/InnerPage">
                <li>Tutorial</li>
              </a>
              <li>Share ideas</li>
              <li>Contact</li>
            </div>
            <div className="profile_section">
              <img src={img_man} className="man_img" />
              <p className="user_name">USER NAME</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="links_1">
              <li>Home</li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Popular Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Cloud Test Strategy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Test Estimation
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Collateral
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Industry
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      DevOps Pipeline
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Infrastructure
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Security Testing
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      SD-WAN
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-it dropdown_item_navem" href="#">
                      Data Testing
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      AI Solutions
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Market Place
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Multi-Cloud Test Lab
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      API/Micro Services Test Framework
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Resilliency Test Framework
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      AWS GW Cots
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Cloud Playbook
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Hyperscale Specific
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item dropdown_item_nav" href="#">
                      Rate the Solution Feedback
                    </a>
                  </li>
                </ul>
              </li>
            </div>
          </div>
          <div className="col search">
            <span>
              <input
                className="Search_field"
                type="search"
                placeholder="Search"
              />
              <button className="btn btn-outline-dark search_button ">
                <FaSearch />
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
