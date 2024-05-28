import React from "react";
import SecCard from "./SecCard";
import LastCard from "./LastCard";
import RecommendationForCourse from "../RecommendationForCourse/RecommendationForCourse";

const MERN = () => {
  return (
    <>
      <h4 className="title" style={{ margin: "100px 0", textAlign: "center" }}>
        Our Program
      </h4>
      <div style={{ backgroundColor: "#efebfe", padding: "0 0 120px 0" }}>
        <section className="mern_stack ">
          <div className="container mern_stack_cards">
            {/* <FirstCard /> */}
            <SecCard />
            <LastCard />
          </div>
        </section>
        <RecommendationForCourse
          primaryBtn={true}
          btnChildren={"Book a call"}
          LessThenColor={"white"}
        />
      </div>
    </>
  );
};

export default MERN;
