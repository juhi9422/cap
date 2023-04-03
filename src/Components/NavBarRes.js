import React, { useState } from "react";
import Capgemini_logo from "../Images/Capgemini_logo.svg";
import Capgemini_logo_mb from "../Images/capgLogo.png";
import Logo from "../Images/CapNLogo.svg";
import img_man from "../Images/img_man.png";
import "../Style/NavBarRes.css";
import { FaSearch } from "react-icons/fa";
import { BiUserCircle } from "react-icons/bi";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const NavBarRes = () => {
  const [ham, setHam] = useState(false);

  const handle = () => {
    setHam(!ham);
    console.log(ham);
  };

  return (
    <>
      <div className="navBar">
        <div className="topRow">
          <div className="bLogo">
            <div className="cgLogo desktop">
              <img src={Capgemini_logo} alt="" />
            </div>
            <div className="cgLogoM mobile">
              <img src={Capgemini_logo_mb} alt="" />
            </div>
            <div className="capLogo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="topitems desktop">
            <ul>
              <li>
                <a href="">Tutorial</a>
              </li>
              <li>
                <a href="">Share ideas</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>

            <div>
              <a className="userSec" href="">
                <span className="usLogo">
                  <BiUserCircle />
                </span>
                <span>User Name</span>
              </a>
            </div>
          </div>
          <div className="hamBg mobile" onClick={handle}>
            {ham ? <RxCross1 /> : <RxHamburgerMenu />}
          </div>
        </div>
        <div className={ham ? "menu-link mobile-menu-link" : "menu-link"}>
          <div className="MnavItems">
            <ul>
              <li>
                <a href="">Tutorial</a>
              </li>
              <li>
                <a href="">Share ideas</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <div>
              <div className="bottomItems">
                <div >
                  <div>
                    <div className="links_1">
                      <li>
                        <a href="/">Home</a>
                      </li>
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
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Cloud Test Strategy
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Test Estimation
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Collateral
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Industry
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              DevOps Pipeline
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Infrastructure
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Security Testing
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              SD-WAN
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Data Testing
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
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
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Multi-Cloud Test Lab
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              API/Micro Services Test Framework
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Resilliency Test Framework
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              AWS GW Cots
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Cloud Playbook
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Hyperscale Specific
                            </a>
                          </li>

                          <li>
                            <a
                              className="dropdown-item dropdown_item_nav"
                              href="#"
                            >
                              Rate the Solution Feedback
                            </a>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                  <div className="search">
                    <div className="search">
                      <form className="d-flex" role="search">
                        <input
                          className="form-control me-2"
                          type="search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                        <button
                          className="btn btn-outline-success btn-sm"
                          type="submit"
                        >
                          Search
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a className="userSec" href="">
                  <span className="usLogo">
                    <BiUserCircle />
                  </span>
                  <span>User Name</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomRow desktop">
          <div className="bottomItems">
            <div className="row container-fluid">
              <div className="col">
                <div className="links_1">
                  <li>
                    <a href="/">Home</a>
                  </li>
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
                        <a className="dropdown-item dropdown_item_nav" href="#">
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
                <div className="search">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success btn-sm"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default NavBarRes;
