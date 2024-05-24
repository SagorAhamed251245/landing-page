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
      url: "/images/svg/service_icon/image 29.svg",
      text: "Internship Opportunity",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 75.svg",
      text: "Early Bird Discount",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 567.svg",
      text: "Job Placement Assistant",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 568.svg",
      text: "Affordable Students Loans",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 569.svg",
      text: "Weekly Show n Tell",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 570.svg",
      text: "Hands-On Labs and Experience",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 571.svg",
      text: "Resume Preparation",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 572.svg",
      text: "Complimentary Career Counseling",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 573.svg",
      text: "Weekly Technical Interview",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 574.svg",
      text: "Extra Discount for Upfront payoff",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 31.svg",
      text: "24/7 One-on-One Technical Support",
      //   margin: "30px",
    },
  ];
  return (
    <div className="services_cards">
      {cards.map((card, index) => (
        <ServicesCard key={index} url={card?.url} text={card?.text} i={index} />
      ))}
    </div>
  );
};

export default ServicesCards;
