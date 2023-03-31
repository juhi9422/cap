import React, { useRef } from "react";
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
import HyperScaler from "./HyperScaler";
import Recognition from "./Recognition";


const Home = () => {

  const off = useRef(null);
  const ss = useRef(null);
  const asset = useRef(null);
  const team = useRef(null);
  const hs = useRef(null);
  const rec = useRef(null);

  const offClick=()=>{
    off.current?.scrollIntoView({behaviour: 'smooth'})
  };
  const assetClick=()=>{
    asset.current?.scrollIntoView({behaviour: 'smooth'})
  };
  const ssClick=()=>{
    ss.current?.scrollIntoView({behaviour: 'smooth'})
  };
  const teamClick=()=>{
    team.current?.scrollIntoView({behaviour: 'smooth'})
  };
  const hsClick=()=>{
    hs.current?.scrollIntoView({behaviour: 'smooth'})
  };

  const recClick=()=>{
    rec.current?.scrollIntoView({behaviour: 'smooth'})
  };


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
    
    <div className="container list_box">
        <ul className="list">
        <li className="lists">
            <div className="list_item">Cloud Go To Market</div>
            <div className="divs"></div>
          </li>

          <li className="lists">
            <div className="list_item">
              <div className="dropdown">
                <div className="dropbtn">Cloud Framework</div>
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
{/* 
          <li className="lists">
            <div className="list_item">Cloud Framework</div>
            <div className="divs"></div>
          </li> */}
          <li className="lists">
            <div className="list_item" onClick={offClick}>Our Offerings</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item" onClick={ssClick}>Success Stories</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item" onClick={recClick}>Capgemini Recognitions</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item" onClick={hsClick}>Partnership with Hyperscalers</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item" onClick={assetClick}>Assets</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item" onClick={teamClick} >Teams & Contacts</div>
            <div className="divs"></div>
          </li>
        </ul>
      </div>
    </div>
    

      

      <div>
        <div className="container heading">POPULAR CATEGORIES</div>
      </div>

      <div className="container">
        <Cards />
      </div>

      {/* Offering section */}
      <div>
        <div className="container heading" ref={off}>OUR OFFERINGS & SOLUTIONS</div>
        <div className="container">
          <Menu />
        </div>
      </div>

      <div>
        <div className="container heading" ref={ss}>SUCCESS STORIES </div>
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
        <div className="container heading" ref={asset}>ASSET</div>
        <Asset />
      </div>

<div>
<div className="container heading" ref={hs}>OUR PARTNERSHIP WITH HYPERSCALERS</div>

<HyperScaler/>
  
</div>

<div>
<div className="container heading" ref={rec}>Capgemini Recognitions</div>

<Recognition/>
  
</div>


      <div>
        <div className="container heading" ref={team}>OUR TEAM</div>
        <Team />
      </div>

     
    </>
  );
};
export default Home;
