import React from "react";
import FirstCard from "./FirstCard";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const OurProgram = () => {
  return (
    <>
      <section className="our_program ">
        <div className="container our_program_cards">
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

export default OurProgram;
