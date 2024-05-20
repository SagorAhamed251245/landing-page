import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesCards = () => {
  let cards = [
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 28.svg",
      text: "Project Based Learning",
      //   margin: "30px",
    },
  ];
  return (
    <div className="services_cards">
      {cards.map((card, index) => (
        <ServicesCard url={card?.url} text={card?.text} i={index} />
      ))}
    </div>
  );
};

export default ServicesCards;
