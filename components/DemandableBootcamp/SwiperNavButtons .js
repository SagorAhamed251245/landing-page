import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <img loading="lazy" src="/images/svg/leftArrow.svg" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <img loading="lazy" src="/images/svg/rightArrow.svg" />
      </button>
    </div>
  );
};
