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
  let bootCamps = [
    {
      course: "Flex: MERN Full-Stack Software Engineer",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481726898-MERN-Full-Stack",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 13999,
      price: 0,
    },
    {
      course: "",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481098318-Software-Qualit",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 0,
      price: 0,
    },
    {
      course: "",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1698481420303-AWS-Thumbnail.j",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 0,
      price: 0,
    },
    {
      course: "",
      image:
        "https://ts4uportal-all-files-upload.nyc3.digitaloceanspaces.com/program-image/1666179067143-Agile-PO.jpg",
      timeLength: "",
      averageRating: 0,
      totalRatings: 0,
      offerPrice: 0,
      price: 0,
    },
  ];

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
          {bootCamps.map((bootCamp, index) => (
            <SwiperSlide key={index}>
              <SingleCard bootCamp={bootCamp} />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </div>
  );
};

export default DemandableBootcampCard;
