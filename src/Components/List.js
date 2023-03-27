import React from "react";
import "../Style/Navbar.css";

const List = () => {
  return (
    <>
      <div className="container list_box">
        <ul className="list">
          <li className="lists">
            <div className="list_item">
              <div className="dropdown">
                <div className="dropbtn">Cloud Go To Market</div>
                <div className="dropdown_content">
                  <a href="#">Insurance</a>
                  <a href="#">Banking</a>
                  <a href="#">ERP</a>
                </div>
              </div>
            </div>
            <div className="divs"></div>
          </li>

          <li className="lists">
            <div className="list_item">
              <div className="dropdown">
                <div className="dropbtn">Cloud Framework</div>
                <div className="dropdown_content">
                  <a href="#">Play Book</a>
                  <a href="#">Capability Deck</a>
                  <a href="#">Insurance</a>
                  <a href="#">Banking</a>
                  <a href="#"> ERP</a>
                  <a href="#"> Modification Tests</a>
                </div>
              </div>
            </div>
            <div className="divs"></div>
          </li>

          <li className="lists">
            <div className="list_item">Cloud Framework</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Our Offerings</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Success Stories</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Cloud Governance</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Partnership with Hyperscalers</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Assets & Recognitions</div>
            <div className="divs"></div>
          </li>
          <li className="lists">
            <div className="list_item">Teams & Contacts</div>
            <div className="divs"></div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default List;
