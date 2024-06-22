import Image from "next/image";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <Image
          height={300}
          width={300}
          loading="lazy"
          src="/images/svg/leftArrow.svg"
          alt=" left arrow"
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <Image
          height={300}
          width={300}
          loading="lazy"
          src="/images/svg/rightArrow.svg"
          alt=" right arrow"
        />
      </button>
    </div>
  );
};
