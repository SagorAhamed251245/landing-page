import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const FrontEnd = () => {
  return (
    <>
      <section className="front_end ">
        <div className="container front_end_cards">
          <FirstCard />
          <SecCard />
          <LastCard />
        </div>

        <RecommendationForCourse
          titleColor={"white"}
          LessThenColor={"#5831f0"}
          btnChildren={"Book a meeting"}
          primaryBtn={false}
        />
      </section>
    </>
  );
};

export default FrontEnd;
