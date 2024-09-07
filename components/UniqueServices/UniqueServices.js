import React, { useEffect } from "react";
import ServicesCards from "./ServicesCards";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

const UniqueServices = () => {
  const slider = [0, 1, 2];
  useEffect(() => {
    AOS.init();
  }, []);
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
                  <p className="mi_P" data-aos="fade-up" data-aos-duration="1000">
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
                <h4 className="title" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">What Makes Us Unique</h4>
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
