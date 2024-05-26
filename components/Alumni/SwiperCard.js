import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import SingleSwiperCard from "./SingleSwiperCard";

const logos = [
  "/images/companiLogo/Group 1171281534.png",
  "/images/companiLogo/Group 1171281535.png",

  "/images/companiLogo/Group 1171281536.png",
  "/images/companiLogo/Group.png",
  "/images/companiLogo/Group 1171281535.png",
  "/images/companiLogo/Group.png",

  "/images/companiLogo/Vector.png",
  "/images/companiLogo/walmart 1.png",
];

const SwiperCard = () => {
  return (
    <div className="swiper-container container">
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <SingleSwiperCard url={logo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
