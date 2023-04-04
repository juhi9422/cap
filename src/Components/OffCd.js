import React from "react";
import "../Style/Menu.css"

const OffCd = (props) => {
    return(
        <>
            <div className="cdCard">
                <div className="cdIcon">
                    <img src={props.icon} alt="" />
                </div>
                <div className="cdTitle">
                    <span>
                        {props.text}
                    </span>
                </div>
            </div>
        </>
    )
}

export default OffCd;