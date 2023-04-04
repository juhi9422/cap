import React, { useRef } from "react";
import "../Style/HomeRes.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import Chatbot from "./ChatBot";
import bg from "../Images/cloud_bg.jpg";
import Cards from "./Cards";
import Small from "./Small";
import Asset from "./Assest";
import Menu from "./Menu";
import Team from "./Team";
import "../Style/Team.css";
import Sstory from "./Sstory";
import List from "./List";
import HyperScaler from "./HyperScaler";
import Recognition from "./Recognition";

const HomeRes = () => {
  const off = useRef(null);
  const ss = useRef(null);
  const asset = useRef(null);
  const team = useRef(null);
  const hs = useRef(null);
  const rec = useRef(null);

  const offClick = () => {
    off.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const assetClick = () => {
    asset.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const ssClick = () => {
    ss.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const teamClick = () => {
    team.current?.scrollIntoView({ behaviour: "smooth" });
  };
  const hsClick = () => {
    hs.current?.scrollIntoView({ behaviour: "smooth" });
  };

  const recClick = () => {
    rec.current?.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <>
      <div className="cover">
        <h1>Cloud Assurance Platform</h1>
        <p>
          A framework of proven methodologies, procedures and testing solutions
          to help strategize, estimate and test your cloud adoption initiatives.
        </p>
      </div>
      <div className="cDef">
        <div className="defCard cd1">
          <h2>What does it Offers?</h2>
          <p>
            A framework of proven methodologies, procedures and testing
            solutions to help strategize, estimate and test your cloud adoption
            initiatives.
          </p>
        </div>
        <div className="defCard cd2">
          <h2>Key wins</h2>
          <p>
            Offers end-to-end Cloud Testing Services across hyperscalers,
            supporting different migration patterns and cloud native
            testing-as-a-service capabilities.
          </p>
        </div>
        <div className="defCard cd1">
          <h2>Events</h2>
          <p>Upcoming events in the Cloud Testing arena</p>
        </div>
      </div>

      <div className="listItem">
        <div className="containerRes list_boxRes">
          <ul className="listRes">
            <li className="listsRes">
              <div className="list_item">
                Cloud Go <br /> To Market
              </div>
              <div className="divs"></div>
            </li>

            <li className="listsRes">
              <div className="list_item">
                <div className="dropdown">
                  <div className="dropbtn">
                    Cloud <br /> Framework <IoIosArrowDropdownCircle />{" "}
                  </div>
                  <div className="dropdown_content">
                    <a href="#">Insurance</a>
                    <a href="#">Banking</a>
                    <a href="#"> ERP</a>
                    <a href="#">Play Book</a>
                    <a href="#">Capability Deck</a>
                    <a href="#"> Modification Tests</a>
                  </div>
                </div>
              </div>
              <div className="divs"></div>
            </li>

            <li className="listsRes">
              <div className="list_item" onClick={offClick}>
                Our <br /> Offerings
              </div>
              <div className="divs"></div>
            </li>
            <li className="listsRes">
              <div className="list_item" onClick={ssClick}>
                Success <br /> Stories
              </div>
              <div className="divs"></div>
            </li>
            <li className="listsRes">
              <div className="list_item" onClick={recClick}>
                Capgemini <br /> Recognitions
              </div>
              <div className="divs"></div>
            </li>
            <li className="listsRes">
              <div className="list_item" onClick={hsClick}>
                Partnership <br /> with Hyperscalers
              </div>
              <div className="divs"></div>
            </li>
            <li className="listsRes">
              <div className="list_item" onClick={assetClick}>
                Assets
              </div>
              <div className="divs"></div>
            </li>
            <li className="listsRes">
              <div className="list_item" onClick={teamClick}>
                Teams & <br /> Contacts
              </div>
              <div className="divs"></div>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="container headingRes">POPULAR CATEGORIES</div>
      </div>

      <div>
        <Cards />
      </div>

      <div>
        <div className="container headingRes" ref={off}>OUR OFFERINGS & SOLUTIONS</div>
      </div>

      <div>
        <Menu/>
      </div>

      <div className="container headingRes" ref={ss}>
          SUCCESS STORIES{" "}
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 col-md-6 d-flex justify-content-center">
              <Sstory />
            </div>
            <div className="col-12 col-lg-3 col-md-6 d-flex justify-content-center">
              <Sstory />
            </div>
            <div className="col-12 col-lg-3 col-md-6 d-flex justify-content-center">
              <Sstory />
            </div>
            <div className="col-12 col-lg-3 col-md-6 d-flex justify-content-center">
              <Sstory />
            </div>
          </div>
        </div>

        <div>
        <div className="container headingRes">PARTNERSHIP & ALLIANCES</div>

        <Small />
      </div>
      <div>
        <div className="container headingRes" ref={asset}>
          ASSET
        </div>
        <Asset />
      </div>

      <div>
        <div className="container headingRes" ref={hs}>
          OUR PARTNERSHIP WITH  HYPERSCALERS
        </div>

        <HyperScaler />
      </div>

      <div>
        <div className="container headingRes" ref={rec}>
          Capgemini Recognitions
        </div>

        <Recognition />
      </div>

      <div>
        <div className="container headingRes" ref={team}>
          OUR TEAM
        </div>
        <Team />
      </div>
    </>
  );
};
export default HomeRes;
