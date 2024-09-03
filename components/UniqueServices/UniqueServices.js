import React from "react";
import ServicesCards from "./ServicesCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const UniqueServices = () => {
  const slider = [0, 1, 2];
  return (
    <div className="unique_section_services_root">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slider.map((slider, idx) => (
          <SwiperSlide key={idx}>
            <section className="unique_service container">
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <Image
                    loading="lazy"
                    height={20}
                    width={20}
                    alt="star"
                    src="/images/svg/Star.png"
                  />
                  <p className="mi_P">
                    Michigan State Approved Training Provider
                  </p>
                  <Image
                    loading="lazy"
                    height={20}
                    width={20}
                    alt="star"
                    src="/images/svg/Star.png"
                  />
                </div>
                <h4 className="title">What Makes Us Unique</h4>
              </div>
              <ServicesCards />
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UniqueServices;
