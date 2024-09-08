import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">
        <Image
          loading="lazy"
          height={300}
          width={300}
          src="/images/svg/leftArrow.svg"
          alt=" left arrow"
        />
      </button>
      <button onClick={() => swiper.slideNext()} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
        <Image
          loading="lazy"
          height={300}
          width={300}
          src="/images/svg/rightArrow.svg"
          alt=" right arrow"
        />
      </button>
    </div>
  );
};
