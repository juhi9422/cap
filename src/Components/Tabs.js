import React, { useState } from "react";
import "../Style/InnerPage.css";
import form from "../Images/form.svg"
const Tab = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container c">
      <div className="Tab-box">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Existing
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            New
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="row">
              <div className="col-4 col1 head">Content</div>
              <div className=" col-4 col1 head">Link</div>
            </div>
            <hr/>
            <div className="row tab_row">
            <div className="col-4 col1">Cloud Testing Master Test Strategy</div>
              <div className="col-4 col1"><a href="https://forms.office.com/e/jWbunUKjdx" target="_blank" className="link_form">Teams Link<span><img src={form}/></span></a></div>
          </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="row tab_row">
            <div className="col-4 col1">Cloud Testing Master Test Strategy</div>
              <div className="col-4 col1 "><a href="https://forms.office.com/e/jWbunUKjdx" target="_blank" className="link_form">Open Link<span><img src={form}/></span></a></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab
