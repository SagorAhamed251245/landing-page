import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import SecCard from "./SecCard";
import SingleVideoCard from "./SingleVideoCard";

const Agile = () => {
  return (
    <section>
      <div className="agile">
        <div className="agile_top">
          <SingleVideoCard />
          <SecCard />
        </div>
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

export default Agile;
