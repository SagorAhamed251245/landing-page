import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import SingleSwiperCard from "./SingleSwiperCard";

const logos = [
  "/images/companiLogo/Group 1171281534.png",
  "/images/companiLogo/Group 1171281535.png",
  "/images/companiLogo/Group 1171281536.png",
  "/images/companiLogo/Group 1171283258.png",
  "/images/companiLogo/Group.png",
  "/images/companiLogo/Vector-1.png",
  "/images/companiLogo/Vector.png",
  "/images/companiLogo/walmart 1.png",
];

const SwiperCard = () => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[FreeMode]}
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
