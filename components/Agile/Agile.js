import React from "react";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";
import SecCard from "./SecCard";
import SingleVideoCard from "./SingleVideoCard";

const Agile = () => {
  return (
    <section>
      <div className="agile">
        <div className="agile_top">
          <div className="agile_video">
            <SingleVideoCard />
          </div>

          <SecCard />
        </div>
      </div>

      <RecommendationForCourse
        LessThenColor={"white"}
        btnChildren={"Book a meeting"}
        primaryBtn={true}
      />
    </section>
  );
};

export default Agile;
