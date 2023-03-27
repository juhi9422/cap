import React from "react";

function ContentCard(props){
    return(
    <>
    <div className="container .con_cap">
    <div className = "cardmarketplace_cap">
    <img className="imagemp_cap" src={props.img} alt="image" draggable = "false" ></img>
    <div className="cardmbody_cap">
    <h2 className="cardh2_cap">{props.title}</h2>
    <p className="marketp_cap">{props.des}</p>
    <hr className="hr_cap"/>
    <a href="/innerpage" className="link_cap">Check it out</a>
    </div>        
    </div>
    </div>
    </>
    )
    }
    export default ContentCard