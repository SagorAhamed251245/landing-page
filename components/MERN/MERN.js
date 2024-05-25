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

      <RecommendationForCourse />
    </section>
  );
};

export default MERN;
