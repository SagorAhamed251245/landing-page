import React from "react";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const MERN = () => {
  return (
    <section className="mern_stack ">
      <div className="container mern_stack_cards">
        {/* <FirstCard /> */}
        <SecCard />
        <LastCard />
      </div>
      <h4
        className="title"
        style={{ margin: "120px 0", textAlign: "center", color: "black" }}
      >
        Recommendation for This Course
      </h4>
      <RecommendationForCourse />
    </section>
  );
};

export default MERN;
