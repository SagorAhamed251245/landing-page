import React from "react";
import SuccessfulCard from "./SuccessfulCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../DemandableBootcamp/SwiperNavButtons ";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import LessThen from "../SVG/LessThen";

const SuccessfulStudents = () => {
  const videos = [
    {
      url: "https://player.vimeo.com/video/912119611?h=b532cd2a39&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "1",
    },
    {
      url: "https://player.vimeo.com/video/937433585?h=284acf760c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "2",
    },
    {
      url: "https://player.vimeo.com/video/896437202?h=4e0d9b2cac&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "3",
    },
    {
      url: "https://player.vimeo.com/video/950746584?h=720b9ac60f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "4",
    },
    {
      url: "https://player.vimeo.com/video/937441425?h=e06de5eb90&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "5",
    },
    {
      url: "https://player.vimeo.com/video/937442605?h=1e91db9d11&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
    {
      url: "https://player.vimeo.com/video/896441719?h=01d3d83751&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
    {
      url: "https://player.vimeo.com/video/950788484?h=85fab4515c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
    {
      url: "https://player.vimeo.com/video/896450085?h=8b02893af2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
      id: "6",
    },
  ];
  return (
    <section className="successful-students container">
      <div className="next-career next-career1">
        <h1 style={{ marginBottom: "20px" }} className="title">
          Successful Students
        </h1>
        <p>
          Successful students exhibit several key characteristics that
          contribute to their achievements.
        </p>
      </div>
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
        className="mySwiper"
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <SuccessfulCard id={video.id} url={video.url} />
          </SwiperSlide>
        ))}
        <SwiperNavButtons />
      </Swiper>
      <Link
        target="_blank"
        className="linkBtn center_btn"
        href={"https://calendly.com/ts4u"}
      >
        <button className="book_a_meeting_btn">
          Book a meeting
          <span>
            <LessThen color={"white"} />
          </span>
        </button>
      </Link>
    </section>
  );
};

export default SuccessfulStudents;
