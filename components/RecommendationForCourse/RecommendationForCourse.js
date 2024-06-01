import React from "react";
import ReviewCard from "../StudentsReviews/ReviewCard";
import SingleCard from "./SingleCard";
import SingleVideo from "./SingleVideo";
import { Swiper, SwiperSlide } from "swiper/react";
import RecommendationVideos from "./RecommendationVideos";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode } from "swiper/modules";
import { SwiperNavButtons } from "../DemandableBootcamp/SwiperNavButtons ";
import BookButton from "../Shared/BookButton";

const RecommendationForCourse = ({
  titleColor,
  primaryBtn,
  LessThenColor,
  btnChildren,
  recommendation,
  recommendationVideos,
}) => {
  return (
    <>
      <h4
        className="title recommendation_cards_title"
        style={{
          color: titleColor ? titleColor : "black",
        }}
      >
        Student Testimonials for This Course
      </h4>
      <section className="recommendation_reviews container">
        <div className="recommendation_cards">
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
            {recommendation?.map((review, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  name={review.name}
                  review={review.review}
                  image={review.image}
                />
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
        <RecommendationVideos recommendationVideos={recommendationVideos} />
        <div
          className="review_btn"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <BookButton
            Children={btnChildren}
            primary={primaryBtn}
            LessThenColor={LessThenColor}
          />
        </div>
      </section>
    </>
  );
};

export default RecommendationForCourse;
