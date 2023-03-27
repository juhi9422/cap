import React from "react";
import "../Style/Card.css";

const C = (props) => {
  return (
    <>
      <div className="cards">
        <a href="/cappage">
          <div className="imgC">
            <img className="imgCon" src={props.img} alt="" />
          </div>
          <div className="titleC">
            <span>{props.title}</span>
          </div>
          <div className="desC">
            <span>{props.des}</span>
          </div>
        </a>
      </div>
    </>
  );
};
export default C;
