import React from "react";
import "../Style/Asset.css";
import Blog from "../Images/blog.svg"
import Arrow from "../Images/Arrow.svg"
import Link from "../Images/linkk.svg"
import Labs from "../Images/lab.svg"
import Event from "../Images/Event.svg"
import Training from "../Images/Training.svg"


const Asset=()=>{
    return(
        <>
        <div className="container d-flex">
            <div className="asset"><div className="animation_bg"></div><div className="d-flex"><div><img className="img_asset" src={Blog}/></div>
            <div className="co"><div className="content_asset">Blogs</div><img className="img_arrow" src={Arrow}/></div></div></div>

            <div className="asset"><div className="animation_bg"></div><div className="d-flex"><div><img className="img_asset" src={Link}/></div>
            <div className="co"><div className="content_asset">Links</div><img className="img_arrow" src={Arrow}/></div></div></div>

            <div className="asset"><div className="animation_bg"></div><div className="d-flex"><div><img className="img_asset" src={Labs}/></div>
            <div className="co"><div className="content_asset">Labs</div><img className="img_arrow" src={Arrow}/></div></div></div>
             
            <div className="asset"><div className="animation_bg"></div><div className="d-flex"><div><img className="img_asset" src={Event}/></div>
            <div className="co"><div className="content_asset">Events</div><img className="img_arrow" src={Arrow}/></div></div></div>
            
            <div className="asset"><div className="animation_bg"></div><div className="d-flex"><div><img className="img_asset" src={Training}/></div>
            <div className="co"><div className="content_asset">Trainings</div><img className="img_arrow" src={Arrow}/></div></div></div>
           
           
           

           


        </div>

        
        
        </>
    )
}

export default Asset