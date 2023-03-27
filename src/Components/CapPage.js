import React, { Component } from "react";
import ContentCard from "./ContentCard";
import "../Style/Marketplace.css";

import { FaSearch } from "react-icons/fa";

const CapPage=()=>{
const datamp = [
    {
        
        id : 1,
        img: "img/cloudm10.png",
        title: "Cloud Testing Master Test Strategy",
        des: "This is a longer card with supporting text below as a natural lead-in to additional content."
    }, 
    {
        id : 2,
        img: "Img/cloudm5.png",
        title: "Cloud Infrastructure Testing",
        des: "This is a longer card with supporting text below as a natural lead-in to additional content."
    },
    {
        id:3,
        img: "Img/cloudm8.png",
        title: "Cloud Migration Performance Test Strategy",
        des: "This is a longer card with supporting text with content."
    },
    {
        id:4,
        img: "Img/cloudm9.png",
        title: "Cloud Resiliency",
        des: "This is a longer card with supporting text below as a natural lead-in to additional content."
    }
]


    return (
      <>
        <div className="first_cap">
          <form action="" method="get">
            <h1 className="capheading_cap">Market Place</h1>
            <div className="container con_cap">
              {/* <img src="images/search.png" className="searchimg"></img> */}
              <button className="btn ">
                <FaSearch className="search_button_cap"/>
              </button>
              <input
                type="text"
                placeholder="What are you looking for?"
                role="searchbox"
                className="inputbox_cap"
              ></input>
              <button type="submit" className="button_cap">
                <b>SEARCH</b>
              </button>
            </div>
          </form>
        </div>
        <div className="container">
        <div className="rectangle">
          {datamp.map((elem) => (
            <ContentCard
              key={elem.id}
              img={elem.img}
              title={elem.title}
              des={elem.des}
              path={elem.path}
            />
          ))}
        </div>
        </div>
      </>
    )
          }


export default CapPage
