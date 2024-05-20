import React from "react";
import SingleCard from "./SingleCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons ";
// import { SwiperNavButtons } from "./SwiperNavButtons";

const DemandableBootcampCard = () => {
  let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="swiper_parents">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[FreeMode]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {cards.map((logo, index) => (
            <SwiperSlide key={index}>
              <SingleCard />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
        {/* <SwiperNavButtons /> */}
      </div>
    </div>
  );
};

export default DemandableBootcampCard;
