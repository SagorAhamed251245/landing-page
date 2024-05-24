import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const OurCourses = () => {
  return (
    <>
      <section className="our_courses ">
        <div className="container our_courses_cards">
          <LastCard />
          <SecCard />
        </div>
        <h4
          className="title"
          style={{ margin: "120px 0", textAlign: "center", color: "Black" }}
        >
          Recommendation for This Course
        </h4>
        <RecommendationForCourse />
      </section>
    </>
  );
};

export default OurCourses;
