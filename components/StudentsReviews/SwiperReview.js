import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";
import { SwiperNavButtons } from "../DemandableBootcamp/SwiperNavButtons";
import ReviewCard from "./ReviewCard";
const SwiperReview = ({ reviews, platform }) => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      // loop={true}
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
      className="mySwiper review_cards  lg_hidden"
    >
      {reviews
        .filter((review) => review.platform === platform)
        .map((review, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              key={index}
              name={review?.name}
              review={review?.review}
              platform={review.platform}
              image={review.image}
            />
          </SwiperSlide>
        ))}

      <SwiperNavButtons />
    </Swiper>
  );
};

export default SwiperReview;
