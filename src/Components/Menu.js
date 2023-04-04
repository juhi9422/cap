  import React from "react";
  import "../Style/Menu.css";
  import OffCd from "./OffCd";

  const Menu = () => {
    const items = [
      {
        id: 1,
        img: "./Img/hld.jpg",
        title: "Multi cloud Infra test lab",
      },
      {
        id: 2,
        img: "./Img/hld.jpg",
        title: "Performance simplified",
      },
      {
        id: 3,
        img: "./Img/hld.jpg",
        title: "Data testing framework",
      },
      {
        id: 4,
        img: "./Img/hld.jpg",
        title: "API testing framework",
      },
      {
        id: 5,
        img: "./Img/hld.jpg",
        title: "Resilliency Test Framework",
      },
      {
        id: 6,
        img: "./Img/hld.jpg",
        title: "AWS GW CAP Market place",
      },
      {
        id: 7,
        img: "./Img/hld.jpg",
        title: "SD wave testing",
      },
      {
        id: 8,
        img: "./Img/hld.jpg",
        title: "M/F",
      },
      {
        id: 9,
        img: "./Img/hld.jpg",
        title: "DevOps",
      },
      {
        id: 10,
        img: "./Img/hld.jpg",
        title: "FinOps",
      },
      {
        id: 11,
        img: "./Img/hld.jpg",
        title: "Security",
      },
      {
        id: 12,
        img: "./Img/hld.jpg",
        title: "Sustainable IT",
      },
    ];

    return (
      <>
          <div className="offCard">
            <OffCd icon={items[0].img} text={items[0].title}/>
            <OffCd icon={items[1].img} text={items[1].title}/>
            <OffCd icon={items[2].img} text={items[2].title}/>
            <OffCd icon={items[3].img} text={items[3].title}/>
            
          </div>
          <div className="offCard">
          <OffCd icon={items[4].img} text={items[4].title}/>
            <OffCd icon={items[5].img} text={items[5].title}/>
            <OffCd icon={items[6].img} text={items[6].title}/>
            <OffCd icon={items[7].img} text={items[7].title}/>
          
          </div>
          <div className="offCard">
          <OffCd icon={items[8].img} text={items[8].title}/>
            <OffCd icon={items[9].img} text={items[9].title}/>
            <OffCd icon={items[10].img} text={items[10].title}/>
            <OffCd icon={items[11].img} text={items[11].title}/>
          </div>
      </>
    );
  };
  export default Menu;
