import React from "react";
import AWS from "../Images/AWS.png";
import microsoft from "../Images/Microsoft.png";
import Tri from "../Images/Tricentis.png";
import IB from "../Images/ibmm.png"
import Google from "../Images/Google.png"

const Small = () => {
  return (
    <>
      <div className="ag-format-container">
    

        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <span>
                <img src={AWS} className="img1" />
                <span className="ag-courses-item_title"> AWS</span>
              </span>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <span>
                <img src={microsoft} className="img2" />
                <span className="ag-courses-item_title"> Microsoft</span>
              </span>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <span>
                <img src={IB} className="img2" />
                <span className="ag-courses-item_title ibm"> IBM</span>
              </span>
            </a>
          </div>
        </div>

        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <span>
                <img src={Google} className="img2 pb-1" />
                <span className="ag-courses-item_title"> Google</span>
              </span>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <span>
                <img src={Tri} className="img2" />
                <span className="ag-courses-item_title"> Tricentis</span>
              </span>
            </a>
          </div>

        
        </div>
      </div>

      
    </>
  );
};
export default Small;
