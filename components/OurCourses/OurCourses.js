import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";

const OurCourses = () => {
  return (
    <>
      <section className="our_courses">
        <div className="container our_courses_cards">
          <LastCard />
          <SecCard />
        </div>

        <RecommendationForCourse />
      </section>
    </>
  );
};

export default OurCourses;
