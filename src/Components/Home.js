import React from "react";
import "../Style/Navbar.css";
import Chatbot from "./Chatbot";
import bg from "../Images/cloud_bg.jpg";
import Cards from "./Cards";
import Small from "./Small";
import Asset from "./Assest";
import Menu from "./Menu";
import Team from "./Team";
import "../Style/Team.css";
import Sstory from "./Sstory";
import List from "./List";

const Home = () => {
  return (
    <>
      <div>
        <div className="text">
          <h1>Cloud Assurance Platform</h1>
          <p>
            A framework of proven methodologies, procedures and testing
            solutions to help strategize, estimate and test your cloud adoption
            initiatives.
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <div className="row container-fluid intro_text ">
            <div className="col intro_card1">
              <h2>What does it Offers?</h2>
              <p>
              A framework of proven methodologies, procedures and testing solutions to help strategize, estimate and test your cloud adoption initiatives.
              </p>
            </div>
            <div className="col intro_card2">
              <h2>Key wins</h2>
              <p>
              Offers end-to-end Cloud Testing Services across hyperscalers, supporting different migration patterns and cloud native testing-as-a-service capabilities.
              </p>
            </div>
            <div className="col intro_card1">
              <h2>Events</h2>
              <p>
              Upcoming events in the Cloud Testing arena
              </p>
            </div>
          </div>
        </div>
        <div className="bg_img">
          <img className="backgroung_img" src={bg} />
        </div>
      </div>

      {/* List */}

    <div>
    <List/>
    </div>
    

      

      <div>
        <div className="container heading">POPULAR CATEGORIES</div>
      </div>

      <div className="container">
        <Cards />
      </div>

      {/* Offering section */}
      <div>
        <div className="container heading">OUR OFFERINGS & SOLUTIONS</div>
        <div className="container">
          <Menu />
        </div>
      </div>

      <div>
        <div className="container heading">SUCCESS STORIES </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
            <div className="col">
              <Sstory />
            </div>
            
          </div>
        </div>
      </div>

      <div>
        <div className="container heading">PARTNERSHIP & ALLIANCES</div>

        <Small />
      </div>

      <div>
        <div className="container heading">ASSET</div>
        <Asset />
      </div>

      <div>
        <div className="container heading">OUR TEAM</div>
        <Team />
      </div>

     
    </>
  );
};
export default Home;
