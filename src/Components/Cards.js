import React from "react";
import C from "./C";
import "../Style/Card.css";

const Cards=()=>{
    const data  = [
      
        {
            id : 2,
            img: "./Img/cloudlb.jpg",
            title: "Market Place",
            des: "Platform for businesses to connect with a network of qualified cloud testing experts and access various solutions and accelerators built on Cloud Testing."
        },
        {
            id:3,
            img: "./Img/collateral.jpg",
            title: "Experience Labs",
            des: "Equipped with the latest technology and solutions, allowing us to simulate real-world scenarios and test your applications in a variety of cloud environments "
        },
        {
            id:4,
            img: "./Img/hld.jpg",
            title: "AI enabled HLD/LLD Generation",
            des: "Cloud hosting services within the industry facilitates multiple types of information sharing, including email services."
        },
        {
            id:5,
            img: "./Img/cloud.png",
            title: "Cloud Test Stratergy Generation",
            des: "AI based solution to build a cloud testing strategy based on customer requirements"
        }
    
    ]
    
    return(
        <>
        <div className="card_div">
            
        {data.map((item,index)=>{return(
            <C title={item.title} des={item.des} img={item.img} />
)
        })}
        </div>
        </>

    )
}
export default Cards
