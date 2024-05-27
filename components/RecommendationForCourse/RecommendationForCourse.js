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
}) => {
  const recommendation = [
    {
      name: "Ibrahim Opu",
      review:
        "I am very happy to start my journey with TS4U to be a Software Quality Automation Engineer without a non-IT background student. Mr.Shiblu Ahmed is very dedicated and committed to making his student successful. his course outline, Teaching system, and real-life experience are amazing. I am confident, My IT career dream will be fulfilled Because I am a part of the TS4U community.",
      image: "",
    },
    {
      name: "Madiha Atif Awais",
      review:
        "I joined TS4U with my friend's recommendation. As a non IT background I can share that TS4U has been accelerating my IT skills day by day with easy to understand workshops and 24/7 help.Their dedication toward their students, Sir shiblu’s hard work, his commitment toward all his students is incredible. They have a great team of mentors and they provide hands on knowledge that is up...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image: "",
    },
    {
      name: "Veranika Halouchyts",
      review:
        "I am so glad that I joined the SQA Automation Bootcamp. The team was incredibly supportive right from the start, checking in on me regularly to provide guidance and help whenever I needed it. The course content was presented in an easy-to-understand format, which made it quicker for me to grasp the concepts. It is impressive how the schedule was thoughtfully organized...",
      image: "",
    },
  ];

  return (
    <>
      <h4
        className="title"
        style={{
          margin: "90px 0  30px 0",
          textAlign: "center",
          color: titleColor ? titleColor : "black",
        }}
      >
        Recommendation for This Course
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
            {recommendation.map((review, index) => (
              <SwiperSlide key={index}>
                <SingleCard name={review.name} review={review.review} />
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </div>
        <RecommendationVideos />
        <div
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
