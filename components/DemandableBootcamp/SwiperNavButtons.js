import Image from "next/image";

import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
      <button onClick={() => swiper.slidePrev()}>
        <Image
          loading="lazy"
          height={300}
          width={300}
          src="/images/svg/leftArrow.svg"
          alt=" left arrow"
        />
      </button>
      <button onClick={() => swiper.slideNext()}>
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
