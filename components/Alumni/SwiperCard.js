import React from "react";
import SingleSwiperCard from "./SingleSwiperCard";
import Marquee from "react-fast-marquee";

// Array of logos
const logos = [
  "/images/companiLogo/Group 1171281534.png",
  "/images/companiLogo/Group 1171281535.png",
  "/images/companiLogo/Group 1171281536.png",

  "/images/companiLogo/Group.png",
  "/images/companiLogo/Group 1171281535.png",
  "/images/companiLogo/Group.png",
  "/images/companiLogo/Vector.png",
  "/images/companiLogo/walmart 1.png",
  "/images/companiLogo/Group 1171281536.png",
];

const SwiperCard = () => {
  return (
    <div className="swiper-slide-content container">
      <div className="marquee">
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <SingleSwiperCard key={index} url={logo} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default SwiperCard;
