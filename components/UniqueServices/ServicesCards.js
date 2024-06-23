import React from "react";
import ServicesCard from "./ServicesCard";

const ServicesCards = () => {
  const cards = [
    {
      url: "/images/svg/service_icon/image 28.png",
      text: "Project Based Learning",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 29.png",
      text: "Internship Opportunity",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 75.png",
      text: "Early Bird Discount",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 567.png",
      text: "Job Placement Assistant",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 568.png",
      text: "Affordable Students Loans",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 569.png",
      text: "Weekly Show n Tell",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 570.png",
      text: "Hands-On Labs and Experience",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 571.png",
      text: "Resume Preparation",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 572.png",
      text: "Complimentary Career Counseling",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 573.png",
      text: "Weekly Technical Interview",
      //   margin: "30px",
    },
    {
      url: "/images/svg/service_icon/image 574.png",
      text: "Extra Discount for Upfront payoff",
      //   margin: "0px",
    },
    {
      url: "/images/svg/service_icon/image 574.png",
      text: "Extra Discount for Upfront payoff",
      //   margin: "0px",
    },
  ];

  return (
    <div className="services_cards">
      {cards.map((card, index) => (
        <ServicesCard
          classNames="mobile_slider"
          key={index}
          url={card?.url}
          text={card?.text}
          i={index}
        />
      ))}
    </div>
  );
};

export default ServicesCards;
